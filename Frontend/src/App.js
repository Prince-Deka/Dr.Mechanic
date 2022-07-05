// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navigation';
import RegistrationForm from './components/RegistrationForm';
import Home from './components/Homepage';
import Login from './components/Loginpage';
import Contactus from './components/contactus';
import Afterlog from './components/Afterlogin';
import Carousel from './components/Carousel';
import Mapandcontact from './components/Mapandcontact';
import Footer from './components/Footer';
import Card from './components/Card';
import Cart from './components/Cart';
import AdminLogin from './components/AdminLogin';
import AboutUspage from './components/AboutUspage';
function App() {
const [mode,setMode]=useState('primary');
 const Toggle=()=>{
if(mode=='primary'){
  document.body.style.backgroundColor='#00004d';
  document.body.Color='white';
  
  setMode('dark');
}
else{
  document.body.style.backgroundColor='white';
  document.body.Color='black';
  setMode('primary');
}
}
 

  return (
  
    <div className="app">
      
<BrowserRouter>
<Navbar title="Dr.Mechanic" Main="Home" Contact="Contact Us" ab="About"
Mode={mode} ToogleMOde={Toggle}/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contactus/>}/>
  <Route path="/loginpage" element={ <Login email="Email" password="Password"/>}/>
  <Route path="/registrationPage" element={<RegistrationForm/>}/>
  <Route path="/afterlogin" element={<Afterlog/>}/>
  <Route path="/adminlog" element={<AdminLogin/>}/>
  <Route path="/adcart" element={<Cart/>}/>
  <Route path="/about" element={<AboutUspage/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
