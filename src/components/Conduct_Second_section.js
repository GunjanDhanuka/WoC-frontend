import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Card() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <>
      <section className="second-section">
        <h1 className="heading2">Registration</h1>
        <div className="row">
          <div
            className="card-cover col-lg-4 col-md-6 col-sm-12"
            data-aos="fade-right" data-aos-once="true"
          >
            <div className="h-100 card to-apply-card">
              <div className="card-header">
                <h4>Project</h4>
              </div>
              <div className="card-body">
               <div className="Inside-card-div"><p className="card-text">
                  All OS organizations, Project maintainers are welcome
                  to mentor budding open-source enthusiasts from all different
                  backgrounds. Find students and professionals that share your
                  vision.
                </p></div> 
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="btn btn-primary btn-apply" type="button">
                    <a href="/">Register</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" card-cover col-lg-4 col-md-6" data-aos="fade-up" data-aos-once="true">
            <div className="h-100 card to-apply-card">
              <div className="card-header">
                <h4>Participant</h4>
              </div>
              <div className="card-body">
               <div className="Inside-card-div"> <p className="card-text">
                  Whether you’re a newbie or a seasoned professional, we have a
                  space for everyone. Apply now to become a part of something
                  exciting!
                </p></div>
                <div className="d-grid gap-2 col-6 mx-auto register-button">
                  <button className="btn btn-primary btn-apply" type="button">
                    <a href="/">Register</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card-cover col-lg-4 col-md-12 col-sm-12"
            data-aos="fade-left" data-aos-once="true"
          >
            <div className="h-100 card to-apply-card">
              <div className="card-header">
                <h4>Mentor</h4>
              </div>
              <div className="card-body">
             <div className="Inside-card-div">  <p className="card-text">
                  Are you an expert in one (or more) of the projects? Then as a mentor, you will
                  guide one team with your insights and experience all through
                  their hackathon journey.
                </p></div> 
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="btn btn-primary btn-apply" type="button">
                    <a href="/">Register</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Card;
