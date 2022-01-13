import React, { useContext, useMemo } from "react";
import Table from "../components/Table";
import { AddressesContext } from "../contexts/addresses.context";
import ModalContainer from "../components/FormModal";

interface Props {}

const Home = (props: Props) => {
  const { addressesList } = useContext(AddressesContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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
  return (
    <>
      <ModalContainer closeModal={closeModal} modalIsOpen={modalIsOpen} />

      <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    Fitshipper
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    className="bg-indigo-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={openModal}
                  >
                    Create
                  </button>
                </div>
              </div>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <Table
                  columns={columns}
                  data={addressesList}
                  openModal={openModal}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
