import { Spin } from 'antd';
import React from 'react';

const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Spin />
    </div>
  );
};

export default Spinner;
