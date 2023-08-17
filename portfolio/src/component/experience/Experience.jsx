import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>

                <small className="text-light">Expereince</small>
              </div>
            </artilce>
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </artilce>
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </artilce>
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </artilce>
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Basic</small>
              </div>{" "}
            </artilce>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="expereince__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediata</small>
              </div>
            </artilce>
           
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>{" "}
            </artilce>
            
            
          </div>



          
        </div>
        <div className="expereince__languages">
          <h3>Coding Language</h3>
          <div className="experience__content">
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>C</h4>
                <small className="text-light">Experience</small>
              </div>
            </artilce>
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Experience</small>
              </div>
            </artilce>
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>{" "}
            </artilce>
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Basic</small>
              </div>{" "}
            </artilce>
            
          </div>
          </div>
          <div className="expereince__database">
          <h3>Database</h3>
          <div className="experience__content">
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediata</small>
              </div>
            </artilce>
            <artilce className="experience__details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </artilce>
            
          </div>
          </div>
      </div>
    </section>
  );
};

export default Experience;
