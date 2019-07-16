import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';



export default function SignInForm(props) {


  return(

  <Form>
  <Form.Group controlId="formDisplayName">
    <Form.Label>Display Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Display Name" />
  </Form.Group>
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    {props.newUser?
    <div>
    <Form.Group controlId="formPasswordMatch">
      <Form.Label>Password Match</Form.Label>
      <Form.Control type="password" placeholder="Password Match" />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    </div>:
    null
    }
    <Form.Group controlId="AllGoodCheckbox">
      <Form.Check type="checkbox" label="All Good?" />
    </Form.Group>
  </Form>
  )
}
