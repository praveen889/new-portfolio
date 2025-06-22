import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import './css/mediaquery.css'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" id="skill-box">
                        <h2>Skills</h2>
                        <p>Skilled in full-stack development with expertise in React.js, Node.js, Electron, and Python. Experienced in building ERP systems, billing software, and custom management solutions with intuitive UI and robust backend logic.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="meter"/>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter"/>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter"/>
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter"/>
                                <h5>Node Js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter"/>
                                <h5>React Navtive</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="meter"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter"/>
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="meter"/>
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="meter"/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter"/>
                                <h5>Tailwind CSS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
