import ItemListContainer from "./ItemListContainer";

const ItemList = (edad, setEdad, products, setProducts) => {
  <div>
    <h1>Aca van a ir los Items</h1>
    <h2> {edad} </h2>
    <button onClick={() => setEdad(edad + 1)}>Incrementar Edad</button>
    <button onClick={() => setProducts}></button>
  </div>;

  return <ItemListContainer />;
};
export default ItemList;
