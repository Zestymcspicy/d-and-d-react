import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function GroupCard(props) {
  const imageSource = props.group.img
  return(
    <Card style={{width: '18rem'}} className="mx-auto mb-2">
      <Card.Img variant="top" src={imageSource}/>
      <Card.Body>
        <Card.Title>{props.group.name}</Card.Title>
        <Card.Text>
          {props.group.summary}
        </Card.Text>
        <Button onClick={()=>console.log("hello")} variant="primary">Enter</Button>
      </Card.Body>
    </Card>
  )
}
