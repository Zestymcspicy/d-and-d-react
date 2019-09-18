import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignInModal from './SignInModal';
import UserContext from '../UserContext.js'
import CharacterContext from '../CharacterContext.js';
import GroupContext from '../GroupContext.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function TopNav() {
  const characterContext = useContext(CharacterContext);
  const groupContext = useContext(GroupContext);
  const userContext = useContext(UserContext);
  const loggedIn = userContext.user?"":"disabled"
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    // if((groupContext.groups===undefined || groupContext.groups.length<=1)
    //   ||(characterContext.allCharacters===undefined || characterContext.allCharacters.length<=1)){
      getGroupsAndCharacters(signal);
    // }
    // if(characterContext.allCharacters===undefined || characterContext.allCharacters.length<=1){
    //   getAllCharacters(signal);
    // }
    return function cleanup() {
      abortController.abort()
    }
  }, [characterContext, groupContext])

  function getGroupsAndCharacters(signal) {
    if(groupContext.groups===undefined || groupContext.groups.length<1) {

    // const abortController = new AbortController();
    // const signal = abortController.signal

    // (function getGroups() {
      fetch('http://localhost:5000/groups/get_all', {signal: signal})
      .then(res => res.json())
      .then(data => groupContext.setGroups(data.body))
      .catch(err => console.log(err))


    // return function cleanup() {
      // abortController.abort()
    // }
  }
  //
  // function getAllCharacters(signal) {
  if(characterContext.allCharacters===undefined || characterContext.allCharacters.length<=1){
    fetch('http://localhost:5000/characters/get', {signal: signal})
    .then(res => res.json())
    .then(data => {
      console.log(data.body)
      characterContext.setAllCharacters(data.body);
    })
    .catch(err => console.log(err))
  }
  }



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
        <NavDropdown.Item as="div">
          <Link to="/">Front Page</Link>
        </NavDropdown.Item>
        <NavDropdown.Item as="div" className={loggedIn}>
          <Link to="/UserPage/">Your Page</Link>
        </NavDropdown.Item>
        <NavDropdown.Item as="div" className={loggedIn}>
          <Link to="/allCharacters/">All Characters</Link>
        </NavDropdown.Item>
      </NavDropdown>
      <SignInModal/>
      </Navbar>

  )
}
