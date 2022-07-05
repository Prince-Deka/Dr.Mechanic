import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
const Login = ()=>{
  const[userEmail,SetEmail]= useState("");
  const[userPassword,SetPassword]= useState("");
  const [msg, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit=(evt)=>{
     evt.preventDefault();
     //creating Json Object;
     const checkLog = {
      Email : userEmail,
      Password : userPassword
     } 
     axios.post('http://localhost:4000/cuslog/logincheck',checkLog)
     .then(res=>{
     sessionStorage.setItem("User Type",'User')
     sessionStorage.setItem("User Name",res.data[0].Name)
     sessionStorage.setItem("Userdetails", JSON.stringify(res.data[0]))
     navigate('/')
     })
     .catch(err=>{
      setMessage('INVALID UID OR PASSWORD')
     })
     SetEmail('');
     SetPassword('');
  }
  const adminpage=()=>{
    navigate('/adminlog')
  }
    return(
      <div style={{display: 'inline'}}>
        <section className="d-flex justify-content-center" style={{marginTop:"10%"}}>
     <form className="my-4 w-25  shadow-lg px-5" onSubmit={handleSubmit} >
      <b style={{color:'red'}}>{msg}</b>
  <div className="form-outline mb-4 mt-2">
     <label className="form-label" htmlFor="form2Example1">Email address</label>
    <input type="email" className="form-control" value={userEmail}
    onChange={e=>SetEmail(e.target.value)}/>
  </div>

  <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example2">Password</label>
    <input type="password" className="form-control" value={userPassword}
     onChange={e=>SetPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-outline-primary btn-lg mb-5 my-3"style={{width:'100%'}}>Sign in</button>
      
      <button type="button" class="btn btn-outline-primary btn-lg mb-5 my-3" style={{width:'100%'}} onClick={adminpage}>Admin Sign in</button>

  <div className="text-center">
    <p>Not a member? <Link to="/registrationPage">Register</Link></p>
  </div>
  
</form>
</section>

</div>
    )
}
export default Login;