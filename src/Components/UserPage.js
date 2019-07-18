import React from 'react';
import UserTop from './UserTop.js';
import UserProfile from './UserProfile.js';
import UserGroupAdmin from './UserGroupAdmin.js';
import UserGroups from './UserGroups.js';
import UserCharacters from './UserCharacters.js';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

class UserPage extends React.Component {

    constructor(props){
      super(props)
      this.state = {

      }
    }
    render(){
      return(
        <div>
          <Container>
            <UserTop/>
          </Container>
          <Switch>
            <Route path="/UserCharacters/" component={UserCharacters}/>
            <Route path="/UserGroupAdmin/" component={UserGroupAdmin}/>
            <Route path="/UserGroups/" component={UserGroups}/>
            <Route path="/UserPage/" component={UserProfile}/>
          </Switch>
        </div>
      )
    }
}
export default UserPage;
