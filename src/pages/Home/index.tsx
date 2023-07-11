/* import { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks'; */
import Header from '../../components/NavBar';
// Components
import TotalBalance from '../../components/TotalBalance';
import ListMenu from './components/ListMenu';
// import Spinner from '../../components/Spinner/Spinner';

const index = () => {
  // const userData = useAppSelector((state) => state.userData);
  // const email = localStorage.getItem('email');


  return (
    <div>
      <Header />
      {<TotalBalance />}
      <ListMenu />
    </div>
  );
};

export default index;
