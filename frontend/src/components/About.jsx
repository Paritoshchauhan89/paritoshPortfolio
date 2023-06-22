import React from "react";
import myimg from "../img/myimg.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSpring, animated } from "react-spring";
import resume from '../img/paritosh.pdf'
function About() {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 300, friction: 60 },
  }));



  const skills = [
    { name: "HTML", val: "80" },
    { name: "CSS", val: "70" },
    { name: "Bootstrap", val: "80" },
    { name: "Tailwind", val: "60" },
    { name: "JavaScript", val: "60" },
    { name: "React", val: "50" },
    { name: "NodeJs", val: "20" },
    { name: "Git, Github", val: "60" },
  ]

  return (

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="row">
          <animated.div
            className="col-lg-4"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.to(trans) }}
          >
            <img src={myimg} className="img-fluid borderNew" alt="not found" />
          </animated.div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Web Developer</h3>
            <p className="fst-italic">
              My name Paritosh, I am a Web Developer and Web Designer. An Open Source enthusiast and a Computer Science student from India.I love working on new and exciting technologies emerging nowadays.I have good work experience as a Web Development in startup(s) and learn new technologies.: Skills - Html, Css, Bootstrap, Javascript, React js. 
            </p>

            <div className="row">
              <div className="col-lg-6">
                <h5 style={{ color: "#728394" }}>Contact Details</h5>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                    <a
                      href="mailto:
                      paritoshc889@gmail.com"
                      style={{ textDecoration: "none" }}
                    >
                      paritoshc889@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://paritosh.netlify.app"
                      style={{ textDecoration: "none" }}
                    >
                      https://paritosh.netlify.app
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+919319342061"
                      style={{ textDecoration: "none" }}
                    >
                      +91 9319342061
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>In Ghaziabad</span>
                  </li>
                </ul>

              </div>
              <div className="col-lg-6 d-flex  align-items-center">
                <a href={resume} className="button-58" download>
                  <span className="text">
                    <i className="fa-solid fa-download"></i> Download Resume
                  </span>
                </a>
              </div>

            </div>
          </div>


        </div>
        <div id="skills" className="skills section-bg my-5">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
              <p>I love working on new and exciting technologies emerging nowadays.I have good work experience as a Web Development in startup(s) and learn new technologies.</p>
            </div>
            <div className="row skills-content">
              {skills.map((item) => {
                return <div className="col-lg-6" key={item.name}>
                  <div className="progress" >
                    <span className="skill">{item.name} <i className="val">{item.val}%</i></span>
                    <div className="progress-bar-wrap" style={{ borderRadius: "5px" }}>
                      <ProgressBar completed={item.val} height="10px" isLabelVisible={false} transitionDuration="3s" animateOnRender={true} />
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>


    </section>

  );
}

export default About;
