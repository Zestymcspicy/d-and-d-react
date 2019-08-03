import React, {useState} from 'react';
import TopNav from './TopNav.js';
import FrontPage from './FrontPage.js';
import GroupPage from './GroupPage.js';
import UserPage from './UserPage.js';
import AllCharacters from './AllCharacters.js';
import { BrowserRouter as Switch, Redirect, Route, Link } from 'react-router-dom';
import { GroupProvider } from '../GroupContext.js';
import { UserProvider } from '../UserContext.js';
import { CharacterProvider } from '../CharacterContext.js';


function App() {

  const [currentGroup, setCurrentGroup] = useState(null);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("FrontPage");
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState({});

  return (
    <div className="App">
    <CharacterProvider value={{
      allCharacters: allCharacters,
      setAllCharacters: allCharacters => setAllCharacters(allCharacters),
      currentCharacter: currentCharacter,
      setCurrentCharacter: character => setCurrentCharacter(character)
    }}>
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
        <Route path="/AllCharacters/" component={AllCharacters}/>
      </Switch>
      </UserProvider>
    </GroupProvider>
    </CharacterProvider>
    </div>
  );
}

export default App;
