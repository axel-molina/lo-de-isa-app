import React, { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import Header from '../../components/NavBar';
// Components
import TotalBalance from '../../components/TotalBalance';
import useUserDataHook from '../../hooks/useUserDataHook';
import ListMenu from './components/ListMenu';

const index = () => {

  return (
    <div>
      <Header />
      <TotalBalance />
        <ListMenu />
    </div>
  )
}

export default index