import React from "react";
import { Component } from "react";
import {Link }from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
class Cart extends Component{
    render(){
        return(
            <div>
            <div class="container-fluid bg">
            <nav class="custom-navbar navbar navbar navbg navbar-expand-md navbar-dark" arial-label="Furni navigation bar">

<div class="container navbg">
  <a class="navbar-brand" href="index.html">Furni<span>.</span></a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsFurni">
    <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li><a class="nav-link" href="shop.html">Shop</a></li>
      <li><a class="nav-link" href="about.html">About us</a></li>
      <li><a class="nav-link" href="services.html">Services</a></li>
      <li><a class="nav-link" href="blog.html">Blog</a></li>
      <li><a class="nav-link" href="contact.html">Contact us</a></li>
    </ul>

    <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
      <li><a class="nav-link" href="#"><img src="images/user.svg"/></a></li>
      <li><a class="nav-link" href="cart.html"><img src="images/cart.svg"/></a></li>
    </ul>
  </div>
</div>
  
  </nav>
  


              

              <div class="hero">
                <div class="container">
                  <div class="row justify-content-between">
                    <div class="col-lg-5">
                      <div class="intro-excerpt">
                        <h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
                        <p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        <p><a href="" class="btn btn-secondary me-2 round-2">Shop Now</a><a href="#" class="btn btn-white-outline">Explore</a></p>
                      </div>
                    </div>
                    <div class="col-lg-7">
                      <div class="hero-img-wrap">
                        <img src="./Images/couch (1).png" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>


          <div/>
            
            {/* main */}
            <section>
            <div className="product-section2 bodybg">
              <div className="container">
                <div className="row">



                <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a class="product-item" href="cart.html">
                      <img src="images/product-1.png" class="img-fluid product-thumbnail" />
                      <h3 className="product.head pro">Nordic Chair</h3>
                      <strong class="product-price">$50.00</strong>

                      <span class="icon-cross">
                        <img src="images/cross.svg" class="img-fluid" />
                      </span>
                    </a>
                  </div>



                  <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a class="product-item" href="cart.html">
                      <img src="images/product-1.png" class="img-fluid product-thumbnail" />
                      <h3 className="product.head">Nordic Chair</h3>
                      <strong class="product-price">$50.00</strong>

                      <span class="icon-cross">
                        <img src="images/cross.svg" class="img-fluid" />
                      </span>
                    </a>
                  </div>

                  <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a class="product-item" href="cart.html">
                      <img src="images/product-2.png" class="img-fluid product-thumbnail" />
                      <h3 class="product-title">Kruzo Aero Chair</h3>
                      <strong class="product-price">$78.00</strong>

                      <span class="icon-cross">
                        <img src="images/cross.svg" class="img-fluid" />
                      </span>
                    </a>
                  </div>

                  <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a class="product-item" href="cart.html">
                      <img src="images/product-3.png" class="img-fluid product-thumbnail" />
                      <h3 class="product-title">Ergonomic Chair</h3>
                      <strong class="product-price">$43.00</strong>

                      <span class="icon-cross">
                        <img src="./Images/cross.svg" class="img-fluid" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="product-section2 bodybg">
              <div className="container">
                <div className="row">



                <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a class="product-item" href="cart.html">
                      <img src="images/product-1.png" class="img-fluid product-thumbnail" />
                      <h3 className="product.head">Nordic Chair</h3>
                      <strong class="product-price">$50.00</strong>

                      <span class="icon-cross">
                        <img src="images/cross.svg" class="img-fluid" />
                      </span>
                    </a>
                  </div>



                  <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a class="product-item" href="cart.html">
                      <img src="images/product-1.png" class="img-fluid product-thumbnail" />
                      <h3 className="product.head">Nordic Chair</h3>
                      <strong class="product-price">$50.00</strong>

                      <span class="icon-cross">
                        <img src="images/cross.svg" class="img-fluid" />
                      </span>
                    </a>
                  </div>

                  <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a class="product-item" href="cart.html">
                      <img src="images/product-2.png" class="img-fluid product-thumbnail" />
                      <h3 class="product-title">Kruzo Aero Chair</h3>
                      <strong class="product-price">$78.00</strong>

                      <span class="icon-cross">
                        <img src="images/cross.svg" class="img-fluid" />
                      </span>
                    </a>
                  </div>

                  <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <a class="product-item" href="cart.html">
                      <img src="images/product-3.png" class="img-fluid product-thumbnail" />
                      <h3 class="product-title">Ergonomic Chair</h3>
                      <strong class="product-price">$43.00</strong>

                      <span class="icon-cross">
                        <img src="./Images/cross.svg" class="img-fluid" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>




            
{/* 
footer */}
<footer class="footer-section coo">
			<div class="container relative">

				<div class="sofa-img">
					<img src="images/sofa.png" alt="Image" class="img-fluid"/>
				</div>

				<div class="row">
					<div class="col-lg-8">
						<div class="subscription-form">
							<h3 class="d-flex align-items-center"><span class="me-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg></span><span>Subscribe to Newsletter</span></h3>

							<form action="#" class="row g-3">
								<div class="col-auto">
									<input type="text" class="form-control" placeholder="Enter your name"/>
								</div>
								<div class="col-auto">
									<input type="email" class="form-control" placeholder="Enter your email"/>
								</div>
								<div class="col-auto">
									<button class="btn btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg>
									</button>
								</div>
							</form>

						</div>
					</div>
				</div>

				<div class="row g-5 mb-5">
					<div class="col-lg-4">
						<div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo">Furni<span>.</span></a></div>
						<p class="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

						<ul class="list-unstyled custom-social">
							<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg></a></li>
							<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg></a></li>
							<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg></a></li>
							<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg></a></li>
						</ul>
					</div>

					<div class="col-lg-8">
						<div class="row links-wrap">
							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">About us</a></li>
									<li><a href="#">Services</a></li>
									<li><a href="#">Blog</a></li>
									<li><a href="#">Contact us</a></li>
								</ul>
							</div>

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">Support</a></li>
									<li><a href="#">Knowledge base</a></li>
									<li><a href="#">Live chat</a></li>
								</ul>
							</div>

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">Jobs</a></li>
									<li><a href="#">Our team</a></li>
									<li><a href="#">Leadership</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>
							</div>

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">Nordic Chair</a></li>
									<li><a href="#">Kruzo Aero</a></li>
									<li><a href="#">Ergonomic Chair</a></li>
								</ul>
							</div>
						</div>
					</div>

				</div>

				<div class="border-top copyright">
					<div class="row pt-4">
						<div class="col-lg-6">
							<p class="mb-2 text-center text-lg-start">Copyright ©<script>document.write(new Date().getFullYear());</script>2023. All Rights Reserved. — Designed with love by <a href="#">Afsal</a> Distributed By <a hreff="#">Afsal Coorp</a>  
            </p>
						</div>

						<div class="col-lg-6 text-center text-lg-end">
							<ul class="list-unstyled d-inline-flex ms-auto">
								<li class="me-4"><a href="#">Terms &amp; Conditions</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</footer>









            </div>


        


        )
  }
    }

export default Cart;