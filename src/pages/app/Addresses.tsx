import React, { useContext, useMemo } from "react";
import Table from "../../components/Table";
import { AddressesContext } from "../../contexts/addresses.context";
import ModalContainer from "../../components/FormModal";
import DefaultLayout from "../../containers/layouts/DefaultLayout";
import PageContainer from "../../containers/PageContainer";
import Input from "../../components/Input";

interface Props {}

const Addresses = (props: Props) => {
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
    <DefaultLayout>
      <>
        <ModalContainer closeModal={closeModal} modalIsOpen={modalIsOpen} />

        <PageContainer title="Addresses">
          <section className="antialiased bg-gray-100 text-gray-600 h-full px-4">
            <div className="flex flex-col  h-full ">
              <Input name="search" placeholder="Search" className="mb-5 w-72" />
              <div className="w-full bg-white border-2 rounded-md border-gray-200">
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
        </PageContainer>
      </>
    </DefaultLayout>
  );
};

export default Addresses;
