import "./App.css";
import AddressesProvider from "./contexts/addresses.context";
import Addresses from "./pages/app/addresses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./pages/app/Settings";
import Dashboard from "./pages/app/Dashboard";
import AuthProvider from "./contexts/auth.context";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/auth/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import DefaultLayout from "./containers/layouts/DefaultLayout";
import CreateAddress from "./pages/app/addresses/CreateAddress";
import Register from "./pages/auth/Register";
import EditAddress from "./pages/app/addresses/EditAddress";
import ResetPassword from "./pages/auth/ResetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./pages/Error";

function App() {
  const [user, loading] = useAuthState(auth);
  return !loading ? (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <AuthProvider>
          <AddressesProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/*" element={<ErrorPage />} />
              <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<ProtectedRoute />}>
                  <Route path="/home" element={<Dashboard />} />
                  <Route path="/addresses" element={<Addresses />} />
                  <Route path="/addresses/create" element={<CreateAddress />} />
                  <Route path="/addresses/edit/:id" element={<EditAddress />} />
                  <Route path="/settings" element={<Settings />} />
                </Route>
              </Route>
            </Routes>
          </AddressesProvider>
        </AuthProvider>
      </Router>
    </>
  ) : (
    <></>
  );
}

export default App;
