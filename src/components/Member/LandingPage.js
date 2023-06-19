import React from 'react'
// 

function LandingPage() {
  return (
            <div class="main_header_area">
                <div class="container">
                    <div class="mainmenu">
                        <div id="nav">
                            <nav class="navbar navbar-default">
                                <div class="navbar-header">
                                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                  </button>
                                  <div class="site_logo fix">
                                      <a id="brand" class="clearfix navbar-brand border-right-whitesmoke" href="index.html">
                                        {/* <img src="img/site-logo.png" alt="Trips"> */}

                                        </a>
                                      <div class="header_login floatleft">
                                          <ul>
                                              <li><a href="index.html#">Login</a></li>
                                              <li><a href="booking.html">Register</a></li>
                                          </ul>
                                      </div>
                                  </div>
                                </div>
                                <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                                  <ul class="nav navbar-nav">
                                    <li role="presentation" class="dropdown">
                                        <a id="drop-one" href="index.html#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
                                          Home
                                        </a>
                                        <ul id="menu1" class="dropdown-menu" role="menu">
                                          <li role="presentation"><a role="menuitem" tabindex="-1" href="index-two.html">Home Page two</a></li>
                                        </ul>
                                    </li>        
                                    <li><a href="accomodation.html">Accomodation</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li role="presentation" class="dropdown">
                                        <a id="drop2" href="index.html#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
                                          Features
                                        </a>
                                        <ul id="menu2" class="dropdown-menu" role="menu">
                                          <li role="presentation"><a role="menuitem" tabindex="-1" href="about-us.html">About US</a></li>
                                          <li role="presentation"><a role="menuitem" tabindex="-1" href="booking.html">Booking</a></li>
                                          <li role="presentation"><a role="menuitem" tabindex="-1" href="room-details.html">Room Details</a></li>
                                          <li role="presentation"><a role="menuitem" tabindex="-1" href="staff.html">Our Staff</a></li>
                                          <li role="presentation"><a role="menuitem" tabindex="-1" href="404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">News</a></li>
                                    <li><a href="contact-us.html">Contacts</a></li>
                                  </ul>
                                  <div class="emergency_number">
                                      {/* <a href="tel:1234567890"><img src="img/call-icon.png" alt="">123 456 7890</a> */}
                                  </div>
                                  </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
  )
}

  export default LandingPage