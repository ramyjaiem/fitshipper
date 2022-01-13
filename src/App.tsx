import "./App.css";
import AddressesProvider from "./contexts/addresses.context";
import Home from "./pages/Home";

function App() {
  return (
    <AddressesProvider>
      <Home />
    </AddressesProvider>
  );
}

export default App;
