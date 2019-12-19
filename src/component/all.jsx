import React  from 'react';

import { NavLink } from "react-router-dom";
const All = () => {
    return ( 
        <div class="App1">
             <section id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light">
      {/* <a class="navbar-brand" href="#"><img src="/go.PNG"/></a> */}
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#banner">
              HOME
          </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">
              SERVICES
          </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about-us">
              ABOUT US
          </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#our-team">
              TESTIMONIALS
          </a>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/contact">
              CONTACT</NavLink>
          
          </li>
        </ul>
      </div>
    </nav>
            </section>

            <section id="banner">
          <div className="text-md-left">
            <div className="row">
              <div className="col-md-5">
                {/* <h1 className="balaji">Balaji ShipCargo</h1> */}
                <img className="t" src="/652k.PNG" />
                <div class="wrapper">
                  <div class="counter col_fourth">
                    <i class="fa fa-code fa-2x"></i>
                    <h2
                      class="timer count-title count-number"
                      data-to="300"
                      data-speed="1500"
                    ></h2>
                    <p class="count-text ">SomeText GoesHere</p>
                  </div>

                  <div class="counter col_fourth">
                    <i class="fa fa-coffee fa-2x"></i>
                    <h2
                      class="timer count-title count-number"
                      data-to="1700"
                      data-speed="1500"
                    ></h2>
                    <p class="count-text ">SomeText GoesHere</p>
                  </div>

                  <div class="counter col_fourth">
                    <i class="fa fa-lightbulb-o fa-2x"></i>
                    <h2
                      class="timer count-title count-number"
                      data-to="11900"
                      data-speed="1500"
                    ></h2>
                    <p class="count-text ">SomeText GoesHere</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <img className="car" src="/cargo1.JPEG" />
              </div>
            </div>
          </div>

          <img src="/wave3.PNG" class="bottom-img animated" />
        </section>
        <section id="about-us">
          <div className="container">
            <h1 className="title1 text-center wow fadeInUp" data-wow-duration="3s">ABOUT US</h1>
            <div className="row wow fadeInUp" data-wow-duration="3s">
              <div className="col-md-6 about-us">
                <p className="text-md-left">
                  Balaji Ship Cargo LLP is one of the Kanpur based India’s largest
                  end to end logistics service provider. Balaji Group was
                established in the year 2004.<br></br>
                </p>{" "}
                <p className="text-md-left">
                  We have expanded our horizons over the time, and have
                  successfully established a worldwide network of reliable
                  associates and partners at international borders, to provide
                trusted and reliable logistic service all<br></br> over the
                world.<br></br>
                </p>
                <p className="text-md-left">
                  Balaji Ship Cargo LLP is built by and for supply chain experts
                  to bring faster, more meaningful improvements to our customer’s
                  businesses. We are one of the leading solution providers in the
                  field of Freight Transportation, Refrigerated Truck
                  Transportation for, Refrigerated Truck Transportation for Fruits
                  and meat, Refrigerated Truck Transportation and Warehousing
                Services.<br></br>
                </p>
                <p className="text-md-left">
                  Our business operations are led by Mr. Vinod Kumar Mehrotra, who
                  has extensive experience in this industry sector. His dedicated
                  business approach as well as the dedicated service backup of
                  experienced industry professionals ensures prompt delivery of
                goods in safe conditions as per<br></br>the defined time
                  guidelines. The support provided by a range of specialized
                  trailers,trucks as well as LCV’s also ensure safe handling of
                  project transportation and ODC consignment.
              </p>
              </div>
              <div className="col-md-6">
                <img src="/292.JPG" className="ir" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" class="wow fadeInUp" data-wow-duration="3s">
          <div className="text-center">
            <h1 className="title1 wow fadeInUp" data-wow-duration="3s">OUR SERVICES</h1>
          </div>

          <div className="shift rcorners1">
            <div className="row wow fadeInUp" data-wow-duration="3s">
              <div className="col-md-4">
                <div class="container1">
                  <img src="FCL.PNG"  alt="Avatar" class="image"/>
                  <div class="overlay1">
                    <img src="FCLT.PNG"  alt="Avatar" class="image" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="container1 isl">
                  <img src="airr.PNG" alt="Avatar" class="image"/>
                  <div class="overlay1">
                    <img src="AIRT.PNG" alt="Avatar" class="image"/>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="container1 isl1">
                  <img src="EXWORKS.PNG" alt="Avatar" class="image" />
                  <div class="overlay1">
                    <img src="EXWORKST.PNG" alt="Avatar" class="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shift">
            <div className="row t1">
              <div className="col-md-4">
                <div class="container1">
                  <img src="CUSTOM.PNG" alt="Avatar" class="image" />
                  <div class="overlay1">
                    <img src="BROKERAGET.PNG" alt="Avatar" class="image" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="container1 isl">
                  <img src="transportation.PNG" alt="Avatar" class="image" />
                  <div class="overlay1">
                    <img src="TRANSPORTATIONT.PNG" alt="Avatar" class="image" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="container1 isl1">
                  <img src="LCLI.PNG" alt="Avatar" class="image" />
                  <div class="overlay1">
                    <img src="LCLT.PNG" alt="Avatar" class="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        
        </section>
        <section id="testimonials" class="wow fadeInUp" data-wow-duration="3s">
          <div className="container do">
            <h1 className="title text-center">QUALITIES</h1>
            <div className="row">
              <div className="col-md-4 testimonials">
                <h2 class="text-md-left">
                  <u>LEADERSHIP</u>
                </h2>
                <p className="text-md-left h">
                  Mr. Vinod Mehrotra is the founder and CEO of Balaji Group of
                  Companies. He is a qualified company Secretary (Fellow Company
                  Secretary) having experience of around 22 years in the field of
                International logistics.<br></br>
                </p>
                <p class="text-md-left h">
                  He is successfully running custom clearance, freight forwarding,
                  transportation business as well as running an Inland Container
                  Depot.
              </p>
              </div>
             
              <div className="col-md-4 testimonials">
                <h2 class="text-md-left ">
                  <u>STRENGTH</u>
                </h2>
                <p className="text-md-left h">
                  1.Dedicated and well informed team of experts
              </p>
                <p className="text-md-left h">
                  2.Reliable Network at International Ports
              </p>
                <p className="text-md-left h">3.Extensive Trucking Coverage</p>
                <p className="text-md-left h">4.Centralized Pricing</p>
                <p className="text-md-left h">5.100 % Customer Satisfaction</p>
              </div>
              <div className="col-md-4 testimonials">
                <h2 class="text-md-left ">
                  <u>STRENGTH</u>
                </h2>
                <p className="text-md-left h">
                  1.Dedicated and well informed team of experts
              </p>
                <p className="text-md-left h">
                  2.Reliable Network at International Ports
              </p>
                <p className="text-md-left h">3.Extensive Trucking Coverage</p>
                <p className="text-md-left h">4.Centralized Pricing</p>
                <p className="text-md-left h">5.100 % Customer Satisfaction</p>
                </div>
            </div>
            
             
            
          </div>
        </section>

        <section id="our-team" class="wow fadeInUp" data-wow-duration="3s">
          <div className="container go">
            <h1 className="title1 text-center ooo">OUR TEAM</h1>
            </div>
        </section>
        <div className="wow fadeInUp" data-wow-duration="3s">
          <section href="S" className="fixedHeight2 ">
      
          <div id="card">
              <div class="row">
                <div class=" col-md-4">
                  <div class="card mobcard">
                    <div class="card-body">
                      <img
                        src="/hh5.PNG"
                        alt=""
                        class="imgr rounded-circle w-50 mb-3"
                      />
                      <h3 class="kk">Mr.Vinod kumar Mehrotra</h3>
                      <h5>CEO</h5>
                      <p>Tel :+91 9140269673,+91 9919802793</p>
                      <p>Email : vinod@balajishipcargo.com</p>
                      <div class="d-flex flex-row justify-content-center">
                        <div class="p-4">
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </div>
                        <div class="p-4">
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </div>
                        <div class="p-4">
                          <a href="#">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="remove">
                  <div class="card mobcard">
                    <div class="card-body">
                      <img
                        src="/hh4.PNG"
                        alt=""
                        class="imgr rounded-circle w-50 mb-3"
                        
                      />
                      <h3 class="kk">Ms.Arshi Rizvi</h3>
                      <h5>Sales Imports</h5>
                      <p>Tel : +91 6390420102</p>
                      <p>Email : export@balajishipcargo.com</p>
                      <div class="d-flex flex-row justify-content-center">
                        <div class="p-4">
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </div>
                        <div class="p-4">
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </div>
                        <div class="p-4">
                          <a href="#">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                <div className="col-md-4">
                  <div class="remove1">
                  <div class="card mobcard">
                    <div class="card-body">
                      <img
                        src="/hh6.PNG"
                        alt=""
                        class="imgr rounded-circle w-50 mb-3"
                      />
                      <h3 class="kk">Ms.Ranu Bhattacharya</h3>
                      <h5>Sales Export</h5>
                      <p>Tel: +91 6390420105</p>
                      <p>Email : import@balajishipcargo.com</p>
                      <div class=

                        "d-flex flex-row justify-content-center">
                        <div class="p-4">
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </div>
                        <div class="p-4">
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </div>
                        <div class="p-4">
                          <a href="#">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
</div>
        </section>
        <section href="S" className="fixedHeight "></section>
        </div>
        <div className="container do">
          <h1 className="title1 text-center">OUR CLIENTS</h1>
        </div>
        <section id="clients">
          <div className="container">
            <div class="row mbaa-4">
              <div class="col-sm-2">
                <img class="img_size" src="/jho.JFIF" />
              </div>
              <div class="col-sm-3">
                <img class="img_size" src="/aditya.JFIF" />
              </div>
              <div class="col-sm-2">
                <img class="img_size" src="/obete.JFIF" />
              </div>
              <div class="col-sm-3">
                <img class="img_size" src="/kanpur.JFIF" />
              </div>
              <div class="col-sm-2">
                <img class="img_size" src="/mohani1.JFIF" />
              </div>
            </div>
            <div class="row mbaa-4">
              <div class="col-sm-3">
                <img class="img_size" src="/mla.JFIF" />
              </div>
              <div class="col-sm-3">
                <img class="img_size" src="/ras.png" />
              </div>
              <div class="col-sm-3">
                <img class="img_size" src="/fair1.JFIF" />
              </div>

              <div class="col-sm-3">
                <img class="img_size" src="/fortune.png" />
              </div>
            </div>
          </div>
        </section>
        
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
         
        
     ;

 
export default All;