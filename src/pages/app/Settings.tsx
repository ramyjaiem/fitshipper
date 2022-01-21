import { useContext } from "react";
import Button from "../../components/Button";
import PageContainer from "../../containers/PageContainer";
import { AuthContext } from "../../contexts/auth.context";

const Settings = () => {
  const { logout } = useContext(AuthContext);
  return (
    <PageContainer title="Settings">
      <Button
        className="bg-red-700  my-5 w-32"
        label="Log Out"
        onClick={() => logout()}
      />
    </PageContainer>
  );
};

export default Settings;
