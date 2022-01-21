import { createContext, ReactChild, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  deleteAddressService,
  getAddressesService,
  saveAddressService,
  updateAddressService,
  getActiveAddressService,
} from "../api/services";
import { TOASTER_SETTINGS } from "../utils/constants";
import { Address } from "../utils/modules";

interface Props {
  children: ReactChild;
}

interface AddressesContextProps {
  addressesList: Address[];
  setAddressesList: Function;
  activeAddress: Address | null;
  total: number | null;
  fetchActiveAddress: Function;
  setActiveAddress: Function;
  deleteAddress: Function;
  saveAddress: Function;
  updateAdrress: Function;
  search: string;
  setSearch: Function;
}
export const AddressesContext = createContext<AddressesContextProps>({
  addressesList: [],
  setAddressesList: (addresses: Address[]) => console.log(addresses),
  activeAddress: null,
  fetchActiveAddress: (id: string) => console.log(id),
  deleteAddress: (address: Address) => console.log(address),
  saveAddress: (address: Address) => console.log(address),
  setActiveAddress: (address: Address) => console.log(address),
  updateAdrress: (address: Address) => console.log(address),
  total: null,
  search: "",
  setSearch: (search: string) => console.log(search),
});
const AddressesProvider = ({ children }: Props) => {
  const [addressesList, setAddressesList] = useState<Address[]>([]);
  const [activeAddress, setActiveAddress] = useState<Address | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  // delete selected address by id
  const deleteAddress = async (id: string) => {
    return deleteAddressService(id)
      .then(() => {
        getAddresses("");
        toast.success("Address deleted successfully !", TOASTER_SETTINGS);
      })
      .catch(() =>
        toast.error(
          "We are having trouble deleting your address",
          TOASTER_SETTINGS
        )
      );
  };

  // get all addresses
  const getAddresses = async (search: string) => {
    getAddressesService(search).then((result) => {
      setAddressesList(result);
      setTotal(result?.length);
    });
  };

  // save an address
  const saveAddress = async (data: Address) => {
    saveAddressService(data)
      .then(getAddresses)
      .then(() => {
        navigate("/addresses");
        getAddresses("");
        toast.success("Address saved successfully !", TOASTER_SETTINGS);
      });
  };

  //edit an address
  const updateAdrress = async (data: Address) => {
    if (data.id) {
      updateAddressService(data, data.id).then(() => {
        navigate("/addresses");
        getAddresses("");
        toast.success("Address updated successfully !", TOASTER_SETTINGS);
      });
    }
  };

  // get addresses on mount
  useEffect(() => {
    getAddresses(search);
  }, [search]);

  const fetchActiveAddress = (id: string) => {
    getActiveAddressService(id)
      .then(setActiveAddress)
      .catch(() =>
        toast.error(
          "We are having trouble retrieving your address",
          TOASTER_SETTINGS
        )
      );
  };
  return (
    <AddressesContext.Provider
      value={{
        addressesList,
        setAddressesList,
        activeAddress,
        fetchActiveAddress,
        setActiveAddress,
        deleteAddress,
        saveAddress,
        updateAdrress,
        total,
        search,
        setSearch,
      }}
    >
      {children}
    </AddressesContext.Provider>
  );
};

export default AddressesProvider;
