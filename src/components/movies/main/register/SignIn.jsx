import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

export default function SignIn(props) {
  const [users,setUsers] = useState(props.data.users)
  const [userInput,setUserInput] = useState({
    username: "",
    password: ""
  })
  const [isErrorUser,setIsErrorUser] = useState(false);
  const navigate = useNavigate();

  const getInfo = (e,userinfo)=>{
    userInput[userinfo] = e.target.value;
    setUserInput(userInput);
  }
  const handleClick = ()=>{
    let isSignin = false;
    users.forEach(u => {
      if(u.username===userInput.username && u.password===userInput.password) {
        setIsErrorUser(false);
        props.onSignIn(u);
        isSignin = true;
        navigate("/");
      }
    });
    if(!isSignin) {
      setIsErrorUser(true);
    }
  }
  const handleSignUp = ()=>{
    navigate("/signup");
  }

  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      {
        isErrorUser && 
        <div>
          <button>Sorry, we can't find an account with this username and password. Please try again or create a new account.</button>
        </div>
      }
      <div>
        <input placeholder="Username: oscar" type="text" onChange={(e)=>getInfo(e,"username")} autoComplete="off" />
      </div>
      <div>
        <input placeholder="Password: 456" onChange={(e)=>getInfo(e,"password")} autoComplete="off" />
      </div>
      <button className="pin" onClick={handleClick}>Sign In</button>
      <div className="sign-register">New to Clover App? <span onClick={handleSignUp}>Sign up now.</span></div>
    </div>
  )
}
