import React from "react";
import Header from  './Header';
import Footer from  './Footer';

function Home() {
  return (
    
<div>
     <Header/>



    
     <section className="testimonials section-padding" id="testimonials">
          <div className="container">
               <div className="row">

                    <div className="col-12">
                        <h3 className="mb-5 text-center">What People say</h3>

                        <div className="owl-carousel owl-theme" id="testimonials-carousel">
                            <div className="item">
                                <div className="testimonials-thumb d-flex">
                                    <div className="testimonials-image">
                                        <img src="assets/images/testimonials/L.png" class="img-fluid" alt="testimonials image"/>
                                    </div>

                                    <div className="testimonials-info">
                                        <p>“The quality and services at the highest level.”</p>

                                        <h6 className="mb-0">Lyn Cris</h6>
                                        <span>Project Manager </span>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonials-thumb d-flex">
                                    <div className="testimonials-image">
                                        <img src="assets/images/testimonials/A.png" class="img-fluid" alt="testimonials image"/>
                                    </div>

                                    <div className="testimonials-info">
                                        <p>“ very comfortable to speak and very informative”.</p>

                                        <h6 className="mb-0">Aliyana</h6>
                                        <span>Marketing Consultant</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonials-thumb d-flex">
                                    <div className="testimonials-image">
                                        <img src="assets/images/testimonials/C.png" class="img-fluid" alt="testimonials image"/>
                                    </div>

                                    <div className="testimonials-info">
                                        <p>“A Hamza was creator perfectly and on a timely fashion. Thank you”</p>

                                        <h6 className="mb-0">Criss taylor </h6>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonials-thumb d-flex">
                                    <div className="testimonials-image">
                                        <img src="assets/images/testimonials/W.png" class="img-fluid" alt="testimonials image"/>
                                    </div>

                                    <div className="testimonials-info">
                                        <p>“Hamza is  very helpfull and convenient, will refer to friends”</p>

                                        <h6 className="mb-0">Wilson</h6>
                                        <span>Web Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

               </div>
          </div>
     </section>


  
     <section className="faq section-padding">
        
        <div className="container">
            
            <div className="row">

                <div className="col-lg-12 col-12">

                    <h3 className="mb-5">Frequently Asked Questions</h3>

                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Why we choose you as  a SQA Tester?
                            </button>
                          </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="card-body">
                            <p></p>

                            <p>As a tester, you should choose me because:

I have a strong background in software testing and quality assurance, and have experience working with a variety of testing tools and methodologies.
I am detail-oriented and have a keen eye for identifying and reporting bugs and issues.
I have excellent communication skills and am able to work closely with developers and other stakeholders to ensure that all requirements are met.</p>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why we choose you  as a Web Developer ?
                            </button>
                          </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                          <div className="card-body">
                            <p>As a web developer, you should choose me because:

I have a strong background in web development, with expertise in a variety of programming languages and web technologies.
I am able to build responsive and user-friendly websites that are optimized for speed and performance.
I have experience working with both front-end and back-end development, and am able to integrate different systems and technologies as needed.</p>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            When you stop testing as a Tester ?
                            </button>
                          </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                          <div className="card-body">
                            <p>As a tester, testing should be stopped when one or more of the following conditions are met:

Test cases have been executed: When all the planned test cases have been executed, and the results are satisfactory, testing can be stopped.

Acceptable level of risk: When the level of risk associated with the remaining defects is considered acceptable by the stakeholders, testing can be stopped. The acceptable level of risk should be determined by the project team, and it should be based on the impact and severity of the defects.

Deadline: When the project deadline is reached, and the software needs to be released, testing can be stopped. However, it's important to ensure that the software has been tested sufficiently before it's released.

Budget constraints: When the testing budget has been exhausted, testing may need to be stopped. However, it's important to prioritize testing efforts based on the risks associated with the remaining defects.</p>
                          </div>
                        </div>
                      </div>

                    <div className="card">
                        <div className="card-header" id="headingFour">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Which Tool are you use for automation testing and why  ?
                            </button>
                          </h2>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                          <div className="card-body">
                            <p>I use Cypress tool for automation. Because Cypress is known for its speed and reliability. 
                              It uses a unique architecture that enables faster test execution times and more accurate results, making it ideal for agile and fast-paced development environments.
                              Cypress is open source, which means that it is free to use, and the community can contribute to its development, improving its features and functionalities.</p>
                          </div>
                        </div>
                    </div>

                

                    <span className="faq-info-text">Please send us a message if you have anything to say. Send an email message to <strong>contact (at) hamzaicp54@gmail.com </strong></span>

                </div>

           	 </div>
        	</div>
        </div>
    </section>

     <Footer/>


  </div>


  );
}

export default Home;