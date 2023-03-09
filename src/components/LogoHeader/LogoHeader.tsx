import React from 'react';
import Logo from '../../assets/images/molino.png';

const LogoHeader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <img src={Logo} alt="Logo" style={{ width: '2rem' }} />
        <h1
          style={{
            color: '#1b7d98',
            fontSize: '2rem',
            textAlign: 'start',
            textTransform: 'uppercase',
            fontFamily: 'Tilt Warp',
            margin: '10px 0',
          }}
        >
          Molisoft
        </h1>
      </div>
    </div>
  );
};

export default LogoHeader;
