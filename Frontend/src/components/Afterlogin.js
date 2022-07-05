import React from 'react';
import {Link} from 'react-router-dom';
import {Navigate} from 'react-router-dom'
const Afterlog =()=>{
    let usertp = sessionStorage.getItem('User Type')
    if(usertp === null){
     return(<Navigate to ="/loginpage" />)
    }
    else{
        return (<>
              <h1>This is user After Login</h1></>)
    }
}
export default Afterlog;