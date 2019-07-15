import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function TopNav(props) {

  const loggedIn = props.user?"":"disabled"

  return(

      <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="mr-auto">
        <img
          src="/images/20sided.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="axe icon"
          />
          { ' TTRPG Social'}
      </Navbar.Brand>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item className={loggedIn}>Your Characters</NavDropdown.Item>
        <NavDropdown.Item className={loggedIn}>All Characters</NavDropdown.Item>
        <NavDropdown.Item className={loggedIn}>Your Campaigns</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link variant="dark">SignIn</Nav.Link>
      </Navbar>

  )
}

export default TopNav
