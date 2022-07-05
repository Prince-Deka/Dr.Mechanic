import React from "react";
function Carousel()
{
    return(
      <div>
      
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" data-bs-interval="4000">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..."style={{marginBottom:"-20%"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h2 style={{WebkitTextStroke:"1px yellow", textWeight:"900"}}>
            WE CARE FOR YOUR CAR AS MUCH AS YOU DO
        </h2>
      <button type="button" className="btn btn-primary">Sign Up today</button>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..."style={{marginBottom:"-20%"}}/>
      <div className="carousel-caption d-none d-md-block">
      <h2 style={{WebkitTextStroke:"1px yellow", textWeight:"900"}}>
            WE CARE FOR YOUR CAR AS MUCH AS YOU DO
        </h2>
        <button type="button" className="btn btn-primary">Sign Up today</button>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..."style={{marginBottom:"-20%"}}/>
      <div className="carousel-caption d-none d-md-block">
      <h2 style={{WebkitTextStroke:"1px yellow", textWeight:"900"}}>
            WE CARE FOR YOUR CAR AS MUCH AS YOU DO
        </h2>
        <button type="button" className="btn btn-primary">Sign Up today</button>
       
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
</div>
    );
}
export default Carousel;