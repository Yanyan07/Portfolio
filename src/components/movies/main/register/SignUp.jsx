import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const [users,setUsers] = useState(props.data.users);
  const [user,setUser] = useState({
    username: "",
    password: "",
    email: "",
    role: ""
  })
  const navigate = useNavigate();
  
  const getInfo = (e,userinfo)=>{
    user[userinfo] = e.target.value;
    setUser(user);
  }
  const handleSignUp = ()=>{
    let isSignin = false;
    users.forEach(u => {
      if(u.username===user.username) {
        isSignin = true;
      }
    })
    if(isSignin) {
      navigate('/signup');
    }else {
      props.onSignup(user);
      navigate('/signin');
    }
  }

  return (
    <div className="sign-in">
      <h1>Sign Up</h1>
      <div>
        <input type="text" placeholder="Username" onChange={(e)=>getInfo(e,"username")} />
      </div>
      <div>
        <input type="password" placeholder="Password" onChange={(e)=>getInfo(e,"password")} />
      </div>
      <div>
        <input type="text" placeholder="Email" onChange={(e)=>getInfo(e,"email")} />
      </div>
      <div>
        <input type="text" placeholder="Role(user or admin)" onChange={(e)=>getInfo(e,"role")} />
      </div>
      <button className="pin" onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}
 