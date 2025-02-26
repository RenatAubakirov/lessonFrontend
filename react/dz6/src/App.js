import './App.css';
import { Typography } from '@mui/material';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <Typography variant='h1'>Каталог товаров</Typography>
      <Outlet />
    </div>
  );
}

export default App;