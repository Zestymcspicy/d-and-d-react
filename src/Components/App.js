import React, {useState, useEffect} from 'react';
import TopNav from './TopNav.js';
import FrontPage from './FrontPage.js';
import GroupPage from './GroupPage.js';
import UserPage from './UserPage.js';
import CharacterPage from './CharacterPage.js';
import AllCharacters from './AllCharacters.js';
import { BrowserRouter as Switch, Redirect, Route, Link } from 'react-router-dom';
import { GroupProvider } from '../GroupContext.js';
import { UserProvider } from '../UserContext.js';
import { CharacterProvider } from '../CharacterContext.js';


function App() {

  const [currentGroup, setCurrentGroup] = useState(null);
  const [user, setUser] = useState(null);
  // const [groups, setGroups] = useState([{img:"/images/axeDouble.png", name:"test", summary: "here are some facts"}])
  const [groups, setGroups] = useState([]);
  // const [page, setPage] = useState("FrontPage");
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);

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
          groups: groups,
          setCurrentGroup: group => setCurrentGroup(group),
          setGroups: groups => setGroups(groups)
        }}>
    <UserProvider value={{
      user: user,
      setUser: user => setUser(user)
    }}>
      <TopNav/>
        <Route exact path="/" component={FrontPage}/>
        <Route path="/CharacterPage/" component={CharacterPage}/>
        <Route path="/GroupPage" component={GroupPage}/>
        <Route path="/UserPage" component={UserPage}/>
        <Route path="/AllCharacters" component={AllCharacters}/>
      </UserProvider>
    </GroupProvider>
    </CharacterProvider>
    </div>
  );
}

export default App;
