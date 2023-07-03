import ItemList from "./ItemList";
import { useState } from "react";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [edad, setEdad] = useState([20]);

  return (
    <ItemList
      edad={edad}
      setEdad={setEdad}
      products={products}
      setProducts={setProducts}
    />
  );
};

export default ItemListContainer;
