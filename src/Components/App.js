import React, {useState} from 'react';
import TopNav from './TopNav.js';
import FrontPage from './FrontPage.js';
import GroupPage from './GroupPage.js';
import UserPage from './UserPage.js';
import { BrowserRouter as Switch, Redirect, Route, Link } from 'react-router-dom';
import { GroupProvider } from '../GroupContext.js';
import { UserProvider } from '../UserContext.js';


function App() {

  const [currentGroup, setCurrentGroup] = useState(null);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("FrontPage");

  return (
    <div className="App">
      <GroupProvider value={{
          currentGroup: currentGroup,
          setCurrentGroup: group => setCurrentGroup(group)
        }}>
    <UserProvider value={{
      user: user,
      setUser: user => setUser(user)
    }}>
      <TopNav
        user={user}
      />
      <Switch>
        <Route exact path="/" component={FrontPage}/>
        <Route path="/GroupPage/" component={GroupPage}/>
        <Route path="/UserPage/" component={UserPage}/>
      </Switch>
      </UserProvider>
    </GroupProvider>
    </div>
  );
}

export default App;
