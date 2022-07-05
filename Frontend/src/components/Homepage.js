import React,{useState} from 'react'
import Carousel from './Carousel';
import Mapandcontact from './Mapandcontact';
import Footer from './Footer';
import Card from './Card';
// import Cart from './Cart';


const Home=(props)=>{
    
    return(
      <div>
          <Carousel/>
          <br/>
          <Card/>
          <br/>
         
          {/* <Cart/> */}
          <Mapandcontact/>
          <Footer/>         
      </div>
    )
}
export default Home;