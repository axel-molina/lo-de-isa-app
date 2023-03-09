import { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import Header from '../../components/NavBar';
// Components
import TotalBalance from '../../components/TotalBalance';
import useUserDataHook from '../../hooks/useUserDataHook';
import ListMenu from './components/ListMenu';
import Spinner from '../../components/Spinner/Spinner';

const index = () => {
  const userData = useAppSelector((state) => state.userData);
  const email = localStorage.getItem('email');
  const { getUserData, isLoading } = useUserDataHook();

  useEffect(() => {
    if (userData.email === '' && email !== null) {
      getUserData(email);
    }
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? <Spinner /> : <TotalBalance />}
      <ListMenu />
    </div>
  );
};

export default index;
