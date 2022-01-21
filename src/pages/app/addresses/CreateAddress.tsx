import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import ModalContainer from "../../../components/FormModal";
import PageContainer from "../../../containers/PageContainer";

interface Props {}

const CreateAddress = (props: Props) => {
  const navigate = useNavigate();
  return (
    <PageContainer
      title="Create Address"
      action={<Button label="Remove" onClick={() => navigate(-1)} />}
    >
      <ModalContainer />
    </PageContainer>
  );
};

export default CreateAddress;
