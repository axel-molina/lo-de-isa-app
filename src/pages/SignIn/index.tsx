import React from 'react';
import FormSignIn from './components/FormSignIn';
import LogoHeader from '../../components/LogoHeader/LogoHeader';


const index = () => {

  return (
    <div style={{ marginTop: "6%"}}>
        <LogoHeader />
        <FormSignIn />
    </div>
  );
};

export default index;
