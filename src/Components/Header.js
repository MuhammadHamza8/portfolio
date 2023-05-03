import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";






function Header() {


    const mystyle = {
        backgroundImage:'url(assets/images/SQAENIGINEER.jpg)', 
      };


  return (
    
<div>

    <nav className="navbar navbar-expand-lg">
        <div className="container">

            <a className="navbar-brand" href="">
                M.Hamza 
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a href="#intro" className="nav-link smoothScroll">Introduction</a>
                    </li>

                    <li className="nav-item">
                        <a href="#about" className="nav-link smoothScroll">About Me</a>
                    </li>

                    <li className="nav-item">
                        <a href="#testimonials" className="nav-link smoothScroll">Reviews</a>
                    </li>

                    <li className="nav-item">
                        <a href="#contact" className="nav-link smoothScroll">Contact</a>
                    </li>
                </ul>

                <div className="mt-lg-0 mt-3 mb-4 mb-lg-0">
                    <a href="assets/images/Hamza.pdf" className="custom-btn btn" download>Download CV</a>
                </div>
            </div>

        </div>
    </nav>
 

   
    <section style={mystyle} className="hero d-flex flex-column justify-content-center align-items-center" id="intro">

         <div className="container">
            <div className="row">
                

                  <div className="mx-auto col-lg-5 col-md-5 col-10">
                      <img  src="assets/images/hamzacv.jpg" className="img-fluid rounded-circle p-5"  alt="hamza-portfolio"/>
                  </div>

                   <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                        <div className="hero-text">

                            <h1 className="hero-title">👋 M.Hamza</h1>

                            <a href="mailto:hamzaicp54@gmail.com" className="email-link">
                               hamzaicp54@gmail.com
                            </a>
                          
                        </div>
                    </div>

            </div>
        </div>
    </section>


    <section className="about section-padding" id="about">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-md-6 col-12">
                    <h3 className="mb-4">Software QA Engineer && Website Developer</h3>

                    <p>Results-driven software quality assurance professional with experience in testing and ensuring the delivery of high-quality software products. Skilled in identifying and resolving defects, implementing testing processes, and collaborating with cross-functional teams to achieve project goals. Proven track record of improving product reliability and customer satisfaction through extensive testing and quality assurance methodologies. Strong problem-solving and analytical skills, with a focus on attention to detail. Proficient in industry-standard testing tools and software development best practices.</p>
                    <hr></hr>

                    <h3 className="mb-4">Experiences!!</h3>
                    <hr></hr>
                    <h6 className="mb-4">Nov 2022- Present</h6>
                    <hr></hr>
                    <h6 className="mb-4">Cloud Mesh Solutions · Full-time</h6>
                    <hr></hr>
                    <h6 className="mb-4">Software Quality Assurance Engineer</h6>
                    <hr></hr>

                    <p>This company hired me for the role of Software Quality Assurance. In this job, my part is to maintain the quality of products. The company products are an eCommerce website and Mobile Application. I applied various methodologies of testing Like manual and Automation Testing and wrote documentation of the products like concise test scenarios, concise test cases, and use cases. Along with this I also made the requirement document for the products.</p>
                    <hr></hr>
                   
                 
                    <hr></hr>
                    <h6 className="mb-4">April-2022 || Sep-2022</h6>
                    <hr></hr>
                    <h6 className="mb-4">QuellxCode Pvt Ltd · Full-time Islamabad</h6>
                    <hr></hr>
                    <h6 className="mb-4">Software Quality Assurance Engineer</h6>
                    <hr></hr>

                    <p>This company hired me for the role of Software Quality Assurance. In this job, my part was to maintain the quality of products. Actually, I was testing the mobile Application and web Application of the company. I use various testing techniques like unit testing, integration testing, system testing, smoke testing, performance testing, and API testing. By applying these techniques I made the software bugs-free. </p>

                   
                </div>

                <div className="col-lg-5 mx-auto col-md-6 col-12">
                    <img   src="assets/images/true-agency.jpg" className="about-image img-fluid  " alt="hamza"/>
                   
                    <div>
                    <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                        <li><strong>Education:</strong> BS Software Engineering </li>

                        <li><strong>University </strong> Islamia College University </li>

                        <li><strong>Phone:</strong>+923039854053 </li>
                        <li><strong>Address:</strong>Pakistan Town Phase 2  Islamabad </li>
                    </ul>
                    <h3 className="mb-4 p-4" >My Experties</h3>
                    <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                        <h4>Testing Skills</h4>
                        <li> Automation Testing  with Cypress, Selenium </li>
                        <li>Performance Testing with Jmeter </li>
                        <li> API Testing with Postman </li>
                        <li> Mobile testing(Android & IOS) Testing </li>
                        <li> Website Testing</li>  
                    </ul>

                    
                    <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                        <h4>My Web Dev Skills </h4>
                        <li> HTML5 </li>
                        <li>Css3</li>
                        <li> Javascript </li>
                        <li> Reactjs </li>
                        <li>Nodejs, PhP</li>  
                        <li>Expressjs</li>
                        <li>Python</li>  
                        <li>Mongodb, SQL </li>
                        <li>Git And GitHub</li>
                        <li>Bitbuket</li>
                        <li>Wordpress , Laravel </li>
                    </ul>



                  </div>
                </div>
             
             </div>

             <div >
             <img src="assets/images/sqa.jpg" className="about-image img-fluid" alt="hamza cv "/>
             </div>
             

             <h2 className="text-center p-5 " >My Best Testing Projects</h2>


            <div className="row about-third ">
            	<div className="col-lg-4 col-md-4 col-12">
                <a href="https://karin-reinigung.ch/" target="_blank" ><h3>Karin-reinigung</h3></a>

                <div >
             <img src="assets/images/Karin.png" className="about-image img-fluid" id="imgid" alt="hamza cv "/>
             </div>

                <p> This project is related to a German business Company. It is a website. On this website, the user contact to the company for Cleaning  their home, office and apartment materials from one place to another</p>
                </div>



                <div className="col-lg-4 col-md-4 col-12">
                <a href="https://smileumzug.ch/" target="_blank"><h3>Smileumzug</h3></a>

                <div >
             <img src="assets/images/Smile.png" className="about-image img-fluid" alt="hamza cv "/>
             </div>

                <p>This project is related to a German business Company. It is a website. On this website, the user contact to the company for moving their home, office and apartment materials from one place to another </p>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                <a href="https://kaufes.ch/" target="_blank"><h3>Kaufes</h3></a>

                <div >
             <img src="assets/images/Kaufes.png" className="about-image img-fluid" alt="hamza cv "/>
             </div>

                
                <p>This project is related to a German business company. In which a user can do online selling and purchasing of products. Where a company and an individual can make their profiles and post their Ads and sells and purchases their products </p>
                </div>
            </div>
        </div>
    </section>

</div>
  );
}

export default Header;