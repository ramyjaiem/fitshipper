import React, { useContext, useMemo, useState } from "react";
import Table from "../../../components/Table";
import { AddressesContext } from "../../../contexts/addresses.context";
import PageContainer from "../../../containers/PageContainer";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {
  AiFillEdit,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlinePlusCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../../../containers/ModalContainer";
import Modal from "react-modal";

const Addresses = () => {
  const { addressesList, total, search, setSearch, deleteAddress } =
    useContext(AddressesContext);
  const navigate = useNavigate();
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name" as const,
      },
      {
        Header: "Address 1",
        accessor: "address1" as const,
      },
      {
        Header: "Address 2",
        accessor: "address2" as const,
      },
      {
        Header: "City",
        accessor: "city" as const,
      },

      {
        Header: "State",
        accessor: "state" as const,
      },
      {
        Header: "Zip",
        accessor: "zip" as const,
      },
    ],
    []
  );
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const openModal = (id: string) => {
    setSelectedAddress(id);
    setIsOpen(true);
  };

  function closeModal() {
    setSelectedAddress(null);
    setIsOpen(false);
  }
  return (
    <PageContainer
      title="Addresses"
      action={
        <Button
          label="Create"
          className="bg-green-600"
          onClick={() => navigate("/addresses/create")}
          icon={<AiOutlinePlusCircle size={24} />}
        />
      }
    >
      <>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="h-auto flex justify-center items-center"
        >
          <ModalContainer
            icon={<AiOutlineWarning className="text-red-800" size={48} />}
            title="Delete address"
            action={
              <div className="flex gap-4">
                <Button
                  label="Cancel"
                  className="bg-gray-100 text-slate-800 hover:text-gray-100"
                  onClick={closeModal}
                />
                <Button
                  label="Delete"
                  className="bg-red-800"
                  onClick={() => {
                    deleteAddress(selectedAddress).then(closeModal);
                  }}
                />
              </div>
            }
          >
            Are you sure you want to delete this address ?
          </ModalContainer>
        </Modal>
        <section className="antialiased bg-gray-100 text-gray-600 h-full mt-5">
          <div className="flex flex-col  h-full ">
            <div className="flex flex-row w-auto items-center gap-3">
              <Input
                name="search"
                placeholder="Search"
                className="mb-5 w-72"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
              />
              {total !== null && (
                <h5 className="font-semibold">{total} total</h5>
              )}
            </div>
            <div className="w-full bg-white border-2 rounded-md border-gray-200">
              <div className="overflow-x-auto">
                <Table
                  columns={columns}
                  data={addressesList}
                  action={(id: string) => (
                    <>
                      <td className="p-2 whitespace-nowrap">
                        <button
                          className="text-slate-500 hover:text-slate-800"
                          onClick={() => {
                            navigate(`/addresses/edit/${id}`);
                          }}
                        >
                          <AiOutlineEdit size={24} />
                        </button>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <button
                          className="text-red-500 hover:text-red-800"
                          onClick={() => openModal(id)}
                        >
                          <AiOutlineDelete size={24} />
                        </button>
                      </td>
                    </>
                  )}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    </PageContainer>
  );
};

export default Addresses;
