import React, {useState, useContext, ReactDOM} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import UserContext from '../UserContext.js'
import apiHelper from '../apiHelper.js'

export default function SignInModal() {
  const userContext = useContext(UserContext)
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');
  const [email, setEmail] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const toggleNewUser = () => newUser?setNewUser(false):setNewUser(true);

  const handleChangeDisplayName = event => setDisplayName(event.target.value);

  const handleChangePassword = event => setPassword(event.target.value);

  const handlePasswordMatchChange = event => setPasswordMatch(event.target.value);

  const handleEmailChange = event => setEmail(event.target.value);

  const handleSubmit = async() => {
    if(!newUser) {
      try{
      const user = await apiHelper.userSignIn(displayName, password)
      userContext.setUser(user)
      setShow(false);
    } catch(err) {
      console.log(err)
    }
  } else {
    try{
      const user = await apiHelper.addUser(displayName, password, passwordMatch, email)
      userContext.setUser(user)
      setShow(false)
    } catch(err) {
      console.log(err)
    }
  }
  }

  // const signOut = userContext.setUser(null)

  return (
    <>
    {userContext.user?
      <React.Fragment>
      <Navbar.Text bg="dark" variant="light">
      {userContext.user.displayName}
      </Navbar.Text>
      <Nav.Link bg="dark" variant="dark">
      {'  Sign Out'}
      </Nav.Link>
      </React.Fragment>
      :
      <Nav.Link onClick={handleShow}>
        SignIn
      </Nav.Link>
    }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        {newUser?
          <Modal.Title>
          Sign Up
          </Modal.Title>:
          <Modal.Title>
          Sign In
          </Modal.Title>}
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="formDisplayName">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            onChange={e => handleChangeDisplayName(e)}
            value={displayName}
            type="text"
            placeholder="Enter Display Name" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            onChange={e => handleChangePassword(e)}
            value={password}
            type="password"
            placeholder="Password" />
          </Form.Group>
          {newUser?
          <div>
          <Form.Group controlId="formPasswordMatch">
            <Form.Label>Password Match</Form.Label>
            <Form.Control
            onChange={e => handlePasswordMatchChange(e)}
            value={passwordMatch}
            type="password"
            placeholder="Password Match" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            onChange={e => handleEmailChange(e)}
            value={email}
            type="email"
            placeholder="Enter email" />
          </Form.Group>
          </div>:
          null
          }
          <Form.Group controlId="AllGoodCheckbox">
            <Form.Check type="checkbox" label="All Good?" />
          </Form.Group>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="primary" onClick={toggleNewUser}>
            {newUser?<div>Returning User?</div>:<div>New User?</div>}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
