import React from "react";
function Card(){
  return(
<>
<h1 style={{textAlign:"center"}}>WHY TO CHOOSE US</h1>
<div className="row row-cols-1 row-cols-md-4 g-7">
  <div className="col">
    <div className="card h-100 " >
    <img src="./cardicons/cardpic1.jpeg" className="card-img-top" alt="..." style={{backgroundColor:"blue"}}/>
      <div className="card-body">
        <h5 className="card-title"> SKILLED ENGINEERS</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="./cardicons/cardpic2.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">ELITE PRODUCTS</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="./cardicons/cardpic3.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">STYLISH WRAPPING</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="./cardicons/cardpic4.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">MACHINE CARWASH</h5>
      </div>
    </div>
  </div>
</div>

 
</>
  );
}
export default Card;