import React, { useContext, useMemo, useState } from "react";
import Table from "../../../components/Table";
import { AddressesContext } from "../../../contexts/addresses.context";
import ModalContainer from "../../../components/FormModal";
import DefaultLayout from "../../../containers/layouts/DefaultLayout";
import PageContainer from "../../../containers/PageContainer";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface Props {}

const Addresses = (props: Props) => {
  const { addressesList, total, search, setSearch } =
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
  return (
    <PageContainer
      title="Addresses"
      action={
        <Button
          label="Create"
          onClick={() => navigate("/addresses/create")}
          icon={<AiOutlinePlusCircle size={24} />}
        />
      }
    >
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
            {total !== null && <h5 className="font-semibold">{total} total</h5>}
          </div>
          <div className="w-full bg-white border-2 rounded-md border-gray-200">
            <div className="overflow-x-auto">
              <Table
                columns={columns}
                data={addressesList}
                openModal={() => console.log("open")}
              />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Addresses;
