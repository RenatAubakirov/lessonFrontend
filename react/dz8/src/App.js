import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Subscribe from './components/subscribe/Subscribe';
import Spinner from './components/common/Spinner'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './store/reducers/productsSlice';

function App() {
  const status = useSelector((state) => state.products.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Header />
      {status === 'resolved'
        ? <Outlet />
        : <Spinner />
      }
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;