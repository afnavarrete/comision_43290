const Home = ({ nombre, userName, setUserName, sumar, contador }) => {
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>Hola {nombre} </h1>
      <h2>{userName} </h2>
      <button onClick={() => setUserName("carmen")}>Cambiar de Nombre</button>

      <h2> {contador} </h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};

export default Home;
