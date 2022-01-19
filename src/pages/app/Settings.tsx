import React from "react";
import Button from "../../components/Button";
import DefaultLayout from "../../containers/layouts/DefaultLayout";
import PageContainer from "../../containers/PageContainer";

interface Props {}

const Settings = (props: Props) => {
  return (
    <DefaultLayout>
      <PageContainer title="Settings">
        <Button className="bg-red" label="Log Out" />
      </PageContainer>
    </DefaultLayout>
  );
};

export default Settings;
