import React, {useState} from 'react';
import TopNav from './TopNav.js';
import FrontPage from './FrontPage.js';
import { BrowserRouter as Switch, Redirect, Route, Link } from 'react-router-dom';
import GroupPage from './GroupPage.js';
import { GroupProvider } from './GroupContext.js';



function App() {

  const [currentGroup, setCurrentGroup] = useState(null);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("FrontPage");
  // const groupContext = currentGroup
  return (
    <div className="App">
      <TopNav
        user={user}
        />
      <Switch>
        <GroupProvider value={{
            currentGroup: currentGroup,
            setCurrentGroup: group => setCurrentGroup(group)
          }}>
        <Route exact path="/" component={FrontPage}/>
        <Route path="/GroupPage" component={GroupPage}/>
        </GroupProvider>
      </Switch>
    </div>
  );
}

export default App;
