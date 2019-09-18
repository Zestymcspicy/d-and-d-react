import  React, { useContext } from 'react';
import Image from 'react-bootstrap/Image'
import  UserContext  from '../UserContext.js'

export default function UserProfile() {

  const userContext = useContext(UserContext);
  let user, userImage
  if(userContext.user){
    user = userContext.user
    //fix the set user icon function
    userImage = `/${user.icon}`
  }

  return(
    <div>
    {userContext.user==null?
      <h1 className="ml-2">You are not logged in</h1>
      :
    <div>
    <h1 className="ml-2">{userContext.user.displayName}</h1>
      <Image src={userImage}/>
    </div>
  }
  </div>
  )
}
