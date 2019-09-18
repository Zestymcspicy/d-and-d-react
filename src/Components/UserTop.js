import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

export default function UserTop(props) {


  return(
    <ButtonGroup>
      <Button
        onClick={props.setMain("UserCharacters")}
        variant="secondary"
        className="m-2">
        Your Characters
      </Button>
      <Button
        onClick={props.setMain("UserGroups")}
        variant="secondary"
        className="m-2" >
        Your Groups
      </Button>
      <Button
        variant="secondary"
        className="m-2">
        Your Admin Groups
      </Button>
    </ButtonGroup>
  )
}
