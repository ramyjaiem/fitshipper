import { Outlet } from "react-router";
import NavBar from "../../components/nav";
import SideBar from "../../components/sidebar";
const DefaultLayout = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <SideBar />

      <main className="main flex flex-col flex-grow ml-64 transition-all duration-150 ease-in">
        <NavBar />
        <Outlet />
        <footer className="footer px-4 py-6">
          <div className="footer-content">
            <p className="text-sm text-gray-600 text-center">
              © Fitshipper 2022. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default DefaultLayout;
