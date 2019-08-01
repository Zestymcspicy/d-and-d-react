import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignInModal from './SignInModal';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function TopNav(props) {

  const loggedIn = props.user?"":"disabled"

  return(

      <Navbar className="mb-3" bg="dark" variant="dark">
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
          <NavDropdown.Item href="/">Front Page</NavDropdown.Item>
          <NavDropdown.Item href="/UserPage/" className={loggedIn}>Your Page</NavDropdown.Item>
        <NavDropdown.Item href="/allCharacters" className={loggedIn}>All Characters</NavDropdown.Item>
        <NavDropdown.Item className={loggedIn}>Your Campaigns</NavDropdown.Item>
      </NavDropdown>
      <SignInModal/>
      </Navbar>

  )
}
