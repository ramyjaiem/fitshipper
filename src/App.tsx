import "./App.css";
import AddressesProvider from "./contexts/addresses.context";
import Addresses from "./pages/app/Addresses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./pages/app/Settings";
import Dashboard from "./pages/app/Dashboard";
import AuthProvider from "./contexts/auth.context";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <AddressesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/addresses" element={<Addresses />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </AddressesProvider>
    </AuthProvider>
  );
}

export default App;
