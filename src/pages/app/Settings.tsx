import React, { useContext } from "react";
import Button from "../../components/Button";
import DefaultLayout from "../../containers/layouts/DefaultLayout";
import PageContainer from "../../containers/PageContainer";
import { AuthContext } from "../../contexts/auth.context";

interface Props {}

const Settings = (props: Props) => {
  const { logout } = useContext(AuthContext);
  return (
    <DefaultLayout>
      <PageContainer title="Settings">
        <div className="w-52 ">
          <Button
            className="bg-red-700 w-16 h-auto"
            label="Log Out"
            onClick={() => logout()}
          />
        </div>
      </PageContainer>
    </DefaultLayout>
  );
};

export default Settings;
