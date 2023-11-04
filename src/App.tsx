import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import CoffeeList from './pages/coffeeList';
import Coffee from './pages/coffee';
import NavBar from './components/nav-bar';
import NotFound from './pages/not-found';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/coffee/:coffee' element={ <Coffee /> } />
        <Route path='/coffeeList' element={ <CoffeeList /> } />
        <Route path='/not-found' element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App
