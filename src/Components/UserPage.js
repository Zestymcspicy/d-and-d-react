import React, { useContext, useState } from 'react';
import UserTop from './UserTop.js';
import UserProfile from './UserProfile.js';
import UserContext from '../UserContext.js';
import UserGroupAdmin from './UserGroupAdmin.js';
import UserGroups from './UserGroups.js';
import UserCharacters from './UserCharacters.js';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

// <Route path="/UserCharacters/" component={UserCharacters}/>
// <Route path="/UserPage/" component={UserProfile}/>
// <Route path="/UserGroupAdmin/" component={UserGroupAdmin}/>
// <Route path="/UserGroups/" component={UserGroups}/>
// onClick={setInnerLocation(UserGroupAdmin)}
// onClick={setInnerLocation(UserCharacters)}
// onClick={setInnerLocation(UserGroups)}



export default function UserPage(){

  // const userContext = useContext(UserContext)
  const [innerLocation, setInnerLocation] = useState(UserProfile);

  const setToUserCharacters = () => {
    setInnerLocation(UserCharacters);
  };

  const setToUserGroups = () => {
    setInnerLocation(UserGroups);
  };

  const setToUserGroupAdmin = () => {
    setInnerLocation(UserGroupAdmin);
  };


  return(
    <div>
      <Container>
        <ButtonGroup>
          <Button
            onClick={setToUserCharacters}
            variant="secondary"
            className="m-2">
            Your Characters
          </Button>
          <Button
            onClick={setToUserGroups}
            variant="secondary"
            className="m-2" >
            Your Groups
          </Button>
          <Button
            onClick={setToUserGroupAdmin}
            variant="secondary"
            className="m-2">
            Your Admin Groups
          </Button>
        </ButtonGroup>
      </Container>
      {innerLocation}
    </div>
  )
}
