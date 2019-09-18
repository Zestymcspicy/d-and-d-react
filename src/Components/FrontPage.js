import React, {useState, useEffect, useContext} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import GroupOrCharCard from './GroupOrCharCard.js';
import CharacterContext from '../CharacterContext.js';
import GroupContext from '../GroupContext.js';
// import apiHelper from '../apiHelper.js';




export default function FrontPage() {
  // const characterContext = useContext(CharacterContext);
  const groupContext = useContext(GroupContext);
  // const [groups, setGroups] = useState([{img:"/images/axeDouble.png", name:"test", summary: "here are some facts"}])




  return(
  <div>
    <Jumbotron>
      <h1>Welcome to the TTRPG Social Network</h1>
      <p>What is this place all about?</p>
      <p>It's a place to bring the characters you play to life</p>
      <p>It's a place to share info about your campaigns in a fun way</p>
      <p>It's a place to poke around and see what others are doing in their gaming lives</p>
    </Jumbotron>
  {groupContext.groups.map((x,index) => <GroupOrCharCard type="/GroupPage/" setTo={() => groupContext.setCurrentGroup(x)} key={index} groupOrChar={x}/>) }
  </div>
)

}
