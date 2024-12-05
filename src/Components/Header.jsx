import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-info">
    <Container>
      <Navbar.Brand className='text-white fw-bold fs-5'>
      <i class="fa-solid fa-music"></i> &nbsp;
        Media Player
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
);
}


  


export default Header