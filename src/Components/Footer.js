import React from "react";

function Footer() {
  return (
    
    <div>

<section className="contact section-padding pt-0" id="contact">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-md-6 col-12">
            <form action="" method="get" className="contact-form webform"  role="form">
                
                <div className="form-group d-flex flex-column-reverse">
                    <input type="text" className="form-control"  id="cf-name" placeholder="Your Name"/>

                    <label for="cf-name" className="webform-label">Full Name</label>
                </div>

                <div className="form-group d-flex flex-column-reverse">
                    <input type="email" className="form-control"  id="cf-email" placeholder="Your Email"/>

                    <label for="cf-email" className="webform-label">Your Email</label>
                </div>

                <div className="form-group d-flex flex-column-reverse">
                    <textarea className="form-control" rows="5"  id="cf-message" placeholder="Your Message"></textarea>

                    <label for="cf-message" className="webform-label">Message</label>
                </div>

                <button  type="submit" className="form-control" id="submit-button" >Send</button>

                

            </form>
          </div>
          

            <div className="mx-auto col-lg-4 col-md-6 col-12">
                <h3 className="my-4 pt-4 pt-lg-0">Say hello</h3>

             

                <p>
                    <a href="mailto:hamzaicp54@gmail.com">
                        hamzaicp54@gmail.com
                    <i className="fas fa-arrow-right custom-icon"></i>
                    </a>
                </p>

                <ul className="social-links mt-2">
                    <li><a href="" rel="noopener" class="fab fa-facebook"></a></li>
                   
                    <li><a href="https://www.linkedin.com/in/mhamza-sqa" rel="noopener" className="fab fa-linkedin" target="_blank"></a></li>
                   
                </ul>
                
              <p className="copyright-text mt-5 pt-3">Copyright &copy; 2023 M.Hamza Resume Page</p>
                
                <p>Design by Muhammad Hamza </p>
            </div>

        </div>
      </div>
    </section>
   


    </div>


  );
}


export default Footer;