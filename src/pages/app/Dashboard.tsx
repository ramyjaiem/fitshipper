import React, { useContext } from "react";
import DefaultLayout from "../../containers/layouts/DefaultLayout";
import PageContainer from "../../containers/PageContainer";
import { AuthContext } from "../../contexts/auth.context";

interface Props {}

const Dashboard = (props: Props) => {
  const { user } = useContext(AuthContext);
  return <PageContainer title={`Welcome, ${user?.email}!`}></PageContainer>;
};

export default Dashboard;
