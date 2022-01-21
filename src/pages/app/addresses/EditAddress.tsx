import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import ModalContainer from "../../../components/FormModal";
import PageContainer from "../../../containers/PageContainer";
import { AddressesContext } from "../../../contexts/addresses.context";

interface Props {}

const EditAddress = (props: Props) => {
  const { fetchActiveAddress, setActiveAddress } = useContext(AddressesContext);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      fetchActiveAddress(id);
    }
    return () => setActiveAddress(null);
  }, [id]);
  return (
    <PageContainer
      title="Create Address"
      action={<Button label="Remove" onClick={() => navigate(-1)} />}
    >
      <ModalContainer />
    </PageContainer>
  );
};

export default EditAddress;
