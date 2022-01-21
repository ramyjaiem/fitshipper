import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import AddressForm from "../../../components/forms/AddressForm";
import PageContainer from "../../../containers/PageContainer";
import { AddressesContext } from "../../../contexts/addresses.context";

const EditAddress = () => {
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
      title="Edit Address"
      action={<Button label="Back" onClick={() => navigate(-1)} />}
    >
      <AddressForm />
    </PageContainer>
  );
};

export default EditAddress;
