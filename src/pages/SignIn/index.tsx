import React, { useEffect } from 'react';
import FormSignIn from './components/FormSignIn';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import { useAppDispatch } from '../../app/hooks';
import { showDrawer } from '../../features/drawer/drawerSlice';

const index = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(showDrawer(false));
  }, []);

  return (
    <div style={{ marginTop: '6%' }}>
      <LogoHeader />
      <FormSignIn />
    </div>
  );
};

export default index;
