import React  from 'react';
import Navbar from './navbar';

const Contact = () => {
    return (
        <div class="app1">
            <Navbar />
            <div class="row">
                <div class="col-md-5">
            <div class="contact-title">
                <h1 class="text-md-left font-weight-bold bolde">Drop us a line</h1>
                </div>
                </div>
                </div>
            <div class="row">
            <div class="col-md-5">  
            <div class="login-box">
            
                <div class="textbox">
                  
                 <input type="text" placeholder="Full Name" name=""></input>
                        </div>
                       
                           
                    
                <div class="textbox">
                    
                <input type="email" placeholder="Email Address" name="">
                            </input>
                        
               </div>
                <div class="textbox">
                <input type="text" placeholder="Company" name="">
                </input>
                 </div>
                <div class="textbox">
                    <input type="text" placeholder="Message" name="">
                    
                </input>
                </div>
                <button type="button" class="btn btn-warning ol rcorners1">Submit</button>

                    </div>
                    
        
            </div>
                    <div class="col-md-5">
                    
                                     
                        <img  class="at1" src="/bala.JPG" />
                       
                </div>
            </div>
            <section id="footer">
          <div className="container text-md-left">
            <div className="row">
              <div className="col-md-4 footer-box">
                <p>
                  <b>HEAD OFFICE</b>
                </p>
                <p>
                  <i class="fa fa-home"></i>5th Floor Ratan Zone Coca Cola
                  Crossing ,118/55 208012, Kaushalpuri, Darshan Purwa, Kanpur,
                  Uttar Pradesh, 208012.
              </p>
                <p>
                  <i class="fa fa-envelope"></i>info@balajishipcargo.com
              </p>
                <p>
                  <i class="fa fa-phone"></i> + 01 234 567 88
              </p>
                <p>
                  <i class="fa fa-print"></i> + 01 234 567 89
              </p>
              </div>
              <div className="col-md-4 footer-box">
                <p>
                  <b>DELHI/NCR OFFICE</b>
                </p>
                <p>
                  <i class="fa fa-home mr-3"></i>5/63, Vaishali, Ghaziabad, Uttar
                  Pradesh, 201010.
              </p>
                <p>
                  <i class="fa fa-envelope mr-3"></i>exim@balajishipcargo.com
              </p>
                <p>
                  <i class="fa fa-phone mr-3"></i>+91 9935102793
              </p>
                <p>
                  <i class="fa fa-print mr-3"></i>+ 01 234 567 89
              </p>
              </div>
              <div className="col-md-4 footer-box">
                {/* <img src="/footer.PNG" /><br></br> */}

                <a class="fb-ic">
                  <i class="fa fa-facebook"> </i>
                </a>
                <a class="tw-ic">
                  <i class="fa fa-twitter"> </i>
                </a>
                <a class="gplus-ic">
                  <i class="fa fa-google-plus"> </i>
                </a>

                <a class="ins-ic">
                  <i class="fa fa-instagram"> </i>
                </a>

                <p>© copyright Kugelblitz Technology</p>
              </div>
            </div>
          </div>
        </section>
            </div>
            
            
        
            
    );
}
 
export default Contact;