import React, { createContext, ReactChild, useEffect, useState } from "react";
import {
  deleteAddressService,
  getAddressesService,
  saveAddressService,
} from "../api/services";
import { Address } from "../utils/modules";

interface Props {
  children: ReactChild;
}

interface AddressesContextProps {
  addressesList: Address[];
  setAddressesList: Function;
  activeAddress: Address | null;
  setActiveAddress: Function;
  deleteAddress: Function;
  saveAddress: Function;
}
export const AddressesContext = createContext<AddressesContextProps>({
  addressesList: [],
  setAddressesList: (addresses: Address[]) => console.log(addresses),
  activeAddress: null,
  setActiveAddress: (address: Address) => console.log(address),
  deleteAddress: (address: Address) => console.log(address),
  saveAddress: (address: Address) => console.log(address),
});
const AddressesProvider = ({ children }: Props) => {
  const [addressesList, setAddressesList] = useState<Address[]>([]);
  const [activeAddress, setActiveAddress] = useState<Address | null>(null);

  // delete selected address by id
  const deleteAddress = async (id: string) => {
    deleteAddressService(id).then(getAddresses);
  };

  // get all addresses
  const getAddresses = async () => {
    getAddressesService().then(setAddressesList);
  };

  const saveAddress = async (data: Address) => {
    saveAddressService(data).then(setAddressesList);
  };
  // get addresses on mount
  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <AddressesContext.Provider
      value={{
        addressesList,
        setAddressesList,
        activeAddress,
        setActiveAddress,
        deleteAddress,
        saveAddress,
      }}
    >
      {children}
    </AddressesContext.Provider>
  );
};

export default AddressesProvider;
