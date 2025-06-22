import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  { InternCard } from './InternCard'
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './css/intern.css'
import './css/mediaquery.css'

export const Internship = () => {

  const intern = [
    {
      title: "React Js Intern",
      company: "InnovativSoft Pvt. Ltd.",
      description: "Developed an ERP and billing software with React.js and Java Designed userfriendly interfaces for seamless navigation and efficient data workflows. Implemented scalable backend solutions for robust ERP functionality.",
    },
    {
      title: "Web Developer Intern",
      company: "RnpSoft Pvt.Ltd.",
      description: "Developed the frontend of an E-Commerce website using React.js.Created various pages by fetching data from JSON files.Ensured the website was fully responsive across multiple devices and screen sizes.",
    },
    {
      title: "Web Developer",
      company: "Seoteq Pvt. Ltd.",
      description: "I interned at Seoteq Pvt. Ltd. as a Web Developer, where I built responsive websites using HTML, CSS, and JavaScript, and gained hands-on experience in frontend development and UI design.",
    },
  ];

  return (
    <section className="project" id="projects">
              <div className={ ""}>
                <h2>Internships</h2>
                <p>I’ve completed internships at InnovativSoft Pvt Ltd and RnPsoft Pvt Ltd, where I worked on full-stack development projects. At InnovativSoft, I contributed to ERP and billing software using React.js and Java. During my time at RnPsoft, I gained practical experience in web development and honed my skills in building dynamic, user-focused applications.</p>
                <div className="intern-table">
                      {
                        intern.map((intern, index) => {
                          return (
                            <div className="intern-card">
                              <h3>{intern.title}</h3>
                              <h5>{intern.company}</h5>
                              <span>{intern.description}</span>
                          </div>
                          )
                        })
                      }
                </div>
              </div>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
