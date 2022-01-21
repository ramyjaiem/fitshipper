import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import AddressForm from "../../../components/forms/AddressForm";
import PageContainer from "../../../containers/PageContainer";

interface Props {}

const CreateAddress = (props: Props) => {
  const navigate = useNavigate();
  return (
    <PageContainer
      title="Create Address"
      action={<Button label="Back" onClick={() => navigate("/addresses")} />}
    >
      <AddressForm />
    </PageContainer>
  );
};

export default CreateAddress;
