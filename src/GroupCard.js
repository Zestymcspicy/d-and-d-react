import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function GroupCard(props) {
  const imageSource = props.group.img
  return(
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={imageSource}/>
      <Card.Body>
        <Card.Title>{props.group.name}</Card.Title>
        <Card.Text>
          {props.group.summary}
        </Card.Text>
        <Button variant="primary">Go Somewhere</Button>
      </Card.Body>
    </Card>
  )
}
