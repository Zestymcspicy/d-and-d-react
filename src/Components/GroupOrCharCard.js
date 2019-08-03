import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function GroupOrCharCard(props) {

  const styles = {
    cardImage : {
      maxHeight: "295px",
      width: "auto",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
  const imageSource = props.groupOrChar.img || props.groupOrChar.icon;
  return(
    <Card style={{width: '18rem'}} className="mx-auto mb-2">
      <Card.Img style={styles.cardImage} variant="top" src={imageSource}/>
      <Card.Body>
        <Card.Title>{props.groupOrChar.name}</Card.Title>
        <Card.Text>
          {props.groupOrChar.summary}
        </Card.Text>
        <Link to={props.type}>
        <Button onClick={()=> props.setTo} variant="primary">{props.groupOrChar.name}</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}


export default GroupOrCharCard;
