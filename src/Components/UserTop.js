import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function UserTop() {

  return(
    <ButtonGroup>
      <Button className="m-2">Your Characters</Button>
      <Button className="m-2" >Your Groups</Button>
      <Button className="m-2">Your Admin Groups</Button>
    </ButtonGroup>
  )
}
