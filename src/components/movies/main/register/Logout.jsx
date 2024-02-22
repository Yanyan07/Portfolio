import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout(props) {
  const [currentUser,setCurrentUser] = useState(props.data.currentUser)
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser && currentUser.username) {
      setTimeout(() => {
        props.onLogout();
        navigate('/');
      }, 1000)
    }
  })

  return (
    <div className="sign-in">
      <h1>
        { 
          currentUser && currentUser.username && 
          currentUser.username.charAt(0).toUpperCase() + currentUser.username.substring(1)
        } 
        &nbsp;&nbsp;Logout!
      </h1>
    </div>
  )
}
