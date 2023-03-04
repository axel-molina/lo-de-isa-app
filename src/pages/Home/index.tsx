import React from 'react';
import Header from '../../components/Header';
// Components
import TotalBalance from '../../components/TotalBalance';
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