import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <h1>404: Page Not Found</h1>
      <Link to="/">Voltar para a página principal</Link>
    </>
  );
}

export default NotFound;