import Home from "./components/pages/home/Home";
import Navbar from "./components/layout/navbar/Navbar";
import HomeContainer from "./components/pages/home/HomeContainer";
import ItemListContainer from "./components/itemList/ItemListContainer";
import { useState } from "react";
import MaterialUI from "./components/mui/MaterialUI";
function App() {
  const [nombre, setNombre] = useState("Oscar");

  const saludo = "Hola como estas? espero que muy bien";
  return (
    <div>
      <MaterialUI />
    </div>
  );
}

export default App;
