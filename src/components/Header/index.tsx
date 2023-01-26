import React from 'react'
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <Container sx={{
        textAlign: 'center',
    }}>
        <h1>
          <Link to="/">Lo de Isa App</Link>
        </h1>
    </Container>
  )
}

export default index