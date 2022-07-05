import React,{useState} from 'react'
import emailjs from 'emailjs-com';
const Result =()=>{
    return(
        <>
        <p>Your message has been successfully sent. The team will contact you soon.<br/> Stay tune.</p>
        </>
    )
}  
function Contactus(props){
 
const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tbztzkf', 'template_bvx2f64', e.target, 'vxufnNdVd6VDA3473')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };
  return (
    <div>
      <section className="d-flex justify-content-center mt-3 " style={{color:'black'}}>
<form className= "w-50 shadow-lg px-5 bg-light" action="" onSubmit={sendEmail} style={{borderTopLeftRadius:'20px',borderBottomRightRadius:'20px'}} >

    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row"  >
        <div className="col-md-9 mb-md-0 mb-2">
            <div id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div className="row">

                
                    <div className="row-md-10 ">
                        <div className="md-form mb-2">
                             <label htmlFor="name" className="">Your name</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                           
                        </div>
                    </div>
                    <div className="row-md-10 ">
                        <div className="md-form mb-2">
                             <label htmlFor="contact-number" className="">contact number</label>
                            <input type="number" id="name" name="name" className="form-control"/>
                           
                        </div>
                    </div>
                    <div className="row-md-10">
                        <div className="md-form mb-2">
                              <label htmlFor="email" className="">Your email</label>
                            <input type="email" id="email" name="email" className="form-control"/>
                          
                        </div>
                    </div>
                   

                </div>
                
                <div className="row">
                    <div className="row-md-10">
                        <div className="md-form mb-2">
                            <label htmlFor="subject" className="">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            
                        </div>
                    </div>
                </div>
             

            
                <div className="row">

                    <div className="row-md-10">

                        <div className="md-form">
                              <label htmlFor="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                          
                        </div>

                    </div>
                </div>
              

            </div>

            <div className="d-grid gap-2 d-md-block  my-3">
     <button type="submit" className="btn btn-lg btn-primary w-100">Sign in</button>
</div> 
            <div className="status">
               {result ? <Result/> : null}
            </div>
        </div>
    </div>

</form>
</section>
    </div>
  )
}

export default Contactus
