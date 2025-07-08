// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick(): void {
    navigate("/coffeeList");
  }

  return (
    <>
      <h1>Coffeeteria</h1>
      {/* Componente link */}
      {/* <Link to="/coffeeList">
        <button>Conheça nossos produtos</button>
      </Link> */}
      <button onClick={handleClick}>Conheça nossos produtos</button>
    </>
  );
}

export default Home;
