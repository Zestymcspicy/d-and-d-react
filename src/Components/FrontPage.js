import React, {useState, useEffect} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import GroupCard from './GroupCard.js';



export default function FrontPage() {

  const [groups, setGroups] = useState([{img:"/images/axeDouble.png", name:"test", summary: "here are some facts"}])

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal

    // (function getGroups() {
      fetch('http://localhost:5000/groups/get_all', {signal: signal})
      .then(res => res.json())
      .then(data => setGroups(data.body))
      .catch(err => console.log(err))

    return function cleanup() {
      abortController.abort()
    }
  }, [])


  return(
  <div>
    <Jumbotron>
      <h1>Welcome to the TTRPG Social Network</h1>
      <p>What is this place all about?</p>
      <p>It's a place to bring the characters you play to life</p>
      <p>It's a place to share info about your campaigns in a fun way</p>
      <p>It's a place to poke around and see what others are doing in their gaming lives</p>
    </Jumbotron>
  {groups.map((x,index) => <GroupCard key={index} group={x}/>) }
  </div>
)

}
