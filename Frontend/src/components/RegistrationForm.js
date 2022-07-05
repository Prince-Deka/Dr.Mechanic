import React ,{useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
function RegistrationForm(props) {
  const[userName,setName] = useState("");
  const[userEmail,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[confirmPassword,setConfirmPassword] = useState("");
  const[mobile,setMobile] = useState("");
  const [msg, setMessage] = useState("");
  const handleSubmit =(evt)=>{
    evt.preventDefault();
    //Creating JSON OBJECT;
    const customerInfo = { 
      Name:userName,
      Email:userEmail,
      Phone:mobile,
      Password:password,
    }
    axios.post('http://localhost:4000/cus/register',customerInfo)
    .then(res =>{
      console.log(res.data)
      setMessage('REGISTRATION SUCCESSFUL')
    });
    setName('');
    setEmail(''); 
    setPassword('');
    setMobile('');
    setConfirmPassword('');
  }
  return (
   <>
    <div className="container w-50 h-30 mt-3 shadow">
    <h4 style={{ color: "brown" }}>{msg}</h4>
      <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-link btn-floating mx-3">
                    <i className="fa-brands fa-google"></i> 
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-3">
                    <i className="fa-brands fa-apple"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fa-brands fa-facebook"></i>
                    </button>
                    </div>
              <form className ="mx-4" onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="Name">Your Name</label>
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder="Your Name" value={userName}
                 onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className="form-outline mb-4">
                             <label className="form-label" htmlFor="Email">Your Email</label>
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder="Your Email" 
                  value={userEmail} onChange={(e)=>setEmail(e.target.value)}  />
                </div>
               
                <div className="form-outline mb-4">
                             <label className="form-label" htmlFor="Phone">Phone Number*</label>
                  <input type="tel" id="form3Example3cg" className="form-control form-control-lg" placeholder="Phone Number" 
                  value={mobile} onChange={(e)=>setMobile(e.target.value)}  />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Password">Password</label>
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder="Password" value={password}
                  onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="form-outline mb-4">
                       <label className="form-label" htmlFor="ConfirmPassword">Repeat your password</label>
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg" placeholder="Repeat your password" value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>

                <div className="form-check d-flex justify-content-center mb-3">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn btn-outline-primary btn-block btn-lg gradient-custom-4 text-body w-25">Register</button>
                </div>

                <p className="text-center text-muted mb-3">Have already an account? <Link to="/loginpage"
                    className="fw-bold text-body"><u>Login here</u></Link></p>
                   
              </form>
            </div>  
            </>
  )
}

export default RegistrationForm
