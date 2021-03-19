import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import "./meetWithUs.css";

const MeetWithUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h3>Meet Our Team</h3>
          <p className="mt-4">
            Our team is your team. When your mission is to be better, faster and
            smarter, you need the best people driving your vision forward. You
            need people who can create innovative digital solution align with
            business goals, who can infuse their creativity into groundbreaking
            campaigns, and who can analyze data to optimize every tactic along
            the way. Get to know your team below.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://i.ibb.co/NYWr5W0/undraw-our-solution-htvp.png"
            alt="Meet our team"
            class="d-block w-100"
          ></img>
        </div>
      </div>
      {/* our team members */}
      <div className="mt-5">
        <h5 class="section-title h1 text-center">OUR TEAM</h5>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="image-flip">
              <div className="mainflip flip-0">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img
                          class=" img-fluid"
                          src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.0-9/32681717_1131717966970523_4912316622292647936_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=4mvneQ7A4OkAX_5OI70&_nc_ht=scontent.fjsr8-1.fna&oh=0942e6804735dede385508b2f1ab576f&oe=607966CF"
                          alt="card"
                        />
                      </p>
                      <h4 class="card-title">Sagor Mahtab</h4>
                      <p class="card-text">
                      Full Stack Web Application Developer
                      </p>
                      <a
                        href="##"
                        
                      >
                       <FontAwesomeIcon icon={faPlus} size="1x"/>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">Sagor Mahtab</h4>
                      <p class="card-text">
                      Full Stack Web Application Developer....Preferable language is JavaScript with React as a Front-end library and in Backend using NodeJs with MongoDB as Database with One Year experience.
                      </p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="https://www.facebook.com/sagor.mahtab"
                          >
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="##"
                          >
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="mailto: contact@tickets4travel.com"
                          >
                            <FontAwesomeIcon icon={faMailBulk} size="2x"/>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/sagor-mahtab/"
                          >
                           <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* another team */}
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img
                          class=" img-fluid"
                          src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.0-9/128856758_3677915762268907_1018032586578408110_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=zrjqUSgbVKIAX_RgWss&_nc_ht=scontent.fjsr8-1.fna&oh=afb15864d8e3cbc84730f48b80cd6dc2&oe=6078E4E2"
                          alt="card"
                        />
                      </p>
                      <h4 class="card-title">Md. Samsel Arifin Chowdhury</h4>
                      <p class="card-text">
                       Networking & Cyber Security Specialist.
                      </p>
                      <a
                        href="##"
                       
                      >
                        <FontAwesomeIcon icon={faPlus} size="1x"/>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">Md. Samsel Arifin Chowdhury</h4>
                      <p class="card-text">
                      Networking & Cyber Security Specialist.
                      </p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="https://www.facebook.com/MdSamselArifin"
                          >
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="##"
                          >
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="mailto: contact@tickets4travel.com"
                          >
                            <FontAwesomeIcon icon={faMailBulk}/>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/mdsamsel/"
                          >
                             <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* another team member */}
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img
                          class=" img-fluid"
                          src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.0-9/86350483_174735213953970_1880088445963993088_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=7KbDNNMaDLYAX9PqrU2&_nc_ht=scontent.fjsr8-1.fna&oh=efb4f51b0c5adda6d7b2727573b3e1cd&oe=6078ADBD"
                          alt="card"
                        />
                      </p>
                      <h4 class="card-title">Arif hossain</h4>
                      <p class="card-text">
                        Front end Web Application Developer
                      </p>
                      <a
                        href="##"
                       
                      >
                        <FontAwesomeIcon icon={faPlus} size="1x"/>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">Arif Hossain</h4>
                      <p class="card-text">
                      Front end Web Application Developer....Expert in HTML5, CSS modules, Preferable language is JavaScript with React as a Front-end library also have Knowledge in Redux & Intermediate knowledge in NodeJs with 6 months of experience.
                      </p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="https://www.facebook.com/profile.php?id=100042524781447"
                          >
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="##"
                          >
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="mailto: arifhossain42136@gmail.com"
                          >
                            <FontAwesomeIcon icon={faMailBulk} size="2x"/>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/arif-hossain-bb0a88179/"
                          >
                            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="image-flip">
              <div className="mainflip flip-0">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img
                          class=" img-fluid"
                          src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.0-9/71512595_2452752384969421_5491570464843104256_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Hvpav-v1qTsAX_1PpyZ&_nc_ht=scontent.fjsr8-1.fna&oh=125b19b1f6cb448e1e6d1cc15eb6b610&oe=607B8321"
                          alt="card"
                        />
                      </p>
                      <h4 class="card-title">Ismail Hossain</h4>
                      <p class="card-text">
                      Graphics Designer
                      </p>
                      <a
                        href="##"
                        
                      >
                       <FontAwesomeIcon icon={faPlus} size="1x"/>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">Ismail Hossain</h4>
                      <p class="card-text">
                      Graphics Designer with expert knowledge in UI & UX design. 
                      </p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="https://www.facebook.com/IsMu20013"
                          >
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="##"
                          >
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="mailto: contact@tickets4travel.com"
                          >
                            <FontAwesomeIcon icon={faMailBulk} size="2x"/>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            without rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/sagor-mahtab/"
                          >
                           <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default MeetWithUs;
