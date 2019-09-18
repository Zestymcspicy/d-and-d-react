import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';


export default function UserGroupAdmin() {

  let newGroupBoolean=false;

  const newGroupFormToggle = () => {
    newGroupBoolean?newGroupBoolean=false:newGroupBoolean=true;
  };

  return(
    <div>
      {newGroupBoolean?
      <Button
        className="ml-3"
        onClick={() => newGroupFormToggle()}
        >
        Cancel New Group
      </Button>
      :
      <Button
        className="ml-3"
        onClick={() => newGroupFormToggle()}
        >
      Create New Group
    </Button>
    }
    </div>
  )
}
