import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate,Link } from 'react-router-dom';



function Header() {

  
  return <>
  <Navbar bg="light" variant="light" className='h-25'>
    <Container>
     
      <Nav  className="me-auto ">
        <Link to='/'  className='text-decoration-none mx-2'>Home</Link>
        <Link to='/cointlist'  className='text-decoration-none'>CointList</Link>
       
        
        
      </Nav>
    </Container>
  </Navbar>
</>;
}

export default Header;
