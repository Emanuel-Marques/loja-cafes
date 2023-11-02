import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import CoffeeList from './pages/coffeeList';
import NavBar from './components/nav-bar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/coffeeList' element={ <CoffeeList /> } />
      </Routes>
    </>
  );
}

export default App
