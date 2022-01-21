import React, { useContext } from "react";
import Button from "../../components/Button";
import DefaultLayout from "../../containers/layouts/DefaultLayout";
import PageContainer from "../../containers/PageContainer";
import { AuthContext } from "../../contexts/auth.context";

interface Props {}

const Settings = (props: Props) => {
  const { logout } = useContext(AuthContext);
  return (
    <PageContainer title="Settings">
      <Button
        className="bg-red-700  my-5 w-40"
        label="Log Out"
        onClick={() => logout()}
      />
    </PageContainer>
  );
};

export default Settings;
