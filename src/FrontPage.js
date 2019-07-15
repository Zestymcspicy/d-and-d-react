import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import GroupCard from './GroupCard.js';



export default function FrontPage(props) {
  return(
  <div>
    <Jumbotron>
      <h1>Welcome to the TTRPG Social Network</h1>
      <p>What is this place all about?</p>
      <p>It's a place to bring the characters you play to life</p>
      <p>It's a place to share info about your campaigns in a fun way</p>
      <p>It's a place to poke around and see what others are doing in their gaming lives</p>
    </Jumbotron>
  {props.groups.map((x,index) => <GroupCard key={index} group={x}/>) }
  </div>
)
}
