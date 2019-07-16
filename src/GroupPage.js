import React, { useContext } from 'react';
import GroupContext from './GroupContext.js';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';


export default function GroupPage() {

  const groupContext = useContext(GroupContext)
  console.log(groupContext)
  return groupContext.currentGroup?
  (
    <Jumbotron>
      <Container className="d-flex">
        <Image alt="this group" fluid src={groupContext.currentGroup.img}/>
        <h1>{groupContext.currentGroup.name}</h1>
        <span>{groupContext.currentGroup.summary}</span>
      </Container>
    </Jumbotron>
  ):
  (
    <div>
      <p>You somehow have not selected a group...</p>

    </div>
  )
}
