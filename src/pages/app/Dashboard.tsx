import { useContext } from "react";
import PageContainer from "../../containers/PageContainer";
import { AuthContext } from "../../contexts/auth.context";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return <PageContainer title={`Welcome, ${user?.email}!`}></PageContainer>;
};

export default Dashboard;
