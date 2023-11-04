import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import CoffeeList from './pages/coffeeList';
import Coffee from './pages/coffee';
import NotFound from './pages/not-found';
import Layout from './components/layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='/coffee/:coffee' element={ <Coffee /> } />
          <Route path='/coffeeList' element={ <CoffeeList /> } />
        </Route>
        <Route path='/*' element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App
