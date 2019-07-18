import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GroupContext from '../GroupContext.js';

function GroupCard(props) {

  const groupContext = useContext(GroupContext)
  const imageSource = props.group.img
  return(
    <Card style={{width: '18rem'}} className="mx-auto mb-2">
      <Card.Img variant="top" src={imageSource}/>
      <Card.Body>
        <Card.Title>{props.group.name}</Card.Title>
        <Card.Text>
          {props.group.summary}
        </Card.Text>
        <Link to="/GroupPage/">
        <Button onClick={()=> groupContext.setCurrentGroup(props.group)}variant="primary">Enter {props.group.name}</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}


export default GroupCard;
