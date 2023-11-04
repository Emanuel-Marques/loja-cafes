import { Link } from "react-router-dom";
import { coffeeList } from "../../data";
function CoffeeList() {
  return (
    <>
      <h1>CoffeeList page</h1>
      <ul>
        {
          coffeeList.map((coffee) => (
            <li key={ coffee.slug }>
              <Link to={ `/coffee/${coffee.slug} ` } > { coffee.title } </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}
  
export default CoffeeList;