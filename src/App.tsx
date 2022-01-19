import "./App.css";
import AddressesProvider from "./contexts/addresses.context";
import Addresses from "./pages/app/Addresses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./pages/app/Settings";

function App() {
  return (
    <AddressesProvider>
      <Router>
        <Routes>
          <Route path="addresses" element={<Addresses />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Router>
    </AddressesProvider>
  );
}

export default App;
