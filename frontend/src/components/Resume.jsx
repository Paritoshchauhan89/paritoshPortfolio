import React from 'react'

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Paritosh</h4>
              <p><em>Web Developer</em></p>
              <ul>
                <li>Shain Vihar Ghazibad In U.P (pincode:-201009)</li>
                <li><a href="tel:+919319342061" style={{ textDecoration: "none",color:"inherit" }}>+919319342061</a></li>
                <li><a href="mailto:paritoshc889@gmail.com" style={{ textDecoration: "none",color:"inherit" }}>paritoshc889@gmail.com</a></li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4> Masters in Computer Application (MCA)</h4>
              <h5>2023 - 2025</h5>
              <p><em>Hi-Tech Institute of Engineering & Technology</em></p>
              <p>I i am pursuing my MCA(1st Year) from Hi-Tech college in 2025, Here I learned How Smart contracts work and the Deep knowledge of WEB3 And many thing that help me in present</p>
            </div>
            <div className="resume-item">
              <h4>Bachelors's in Computer Application(BCA)</h4>
              <h5>2019 - 2022</h5>
              <p><em>Institute of Professional Excellence and Management</em></p>
              <p>I completed my BCA from IPEM college in 2022, Here I learned  About Web Development, How frontend and backend work Api intregration And many thing that help me in present</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>WEB DEVELOPER</h4>
              <h5>Sep 2022 - Present</h5>
              <p><em>Dhruv Info Systems Private Limited</em></p>
              <ul>
                <li>My role is fullstack Developer and My responsibilities are to maintain and Develop Frontend and backend both.</li>
                
              </ul>
            </div>
            {/* <div className="resume-item">
              <h4>FullStack Developer(MERN)</h4>
              <h5>Apr 2021 - Aug 2021</h5>
              <p><em>Physiomatica Health Care</em></p>
              <ul>
                <li>My Role was MERN Stack and my responsibility are to develop React Website and Dashboard Using ReactJs,Meterial UI ,Redux, NodeJs, ExpressJs and Mongodb.</li>
     
              </ul>
            </div>
            <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>Jan 2021 -  Jun 2021</h5>
              <p><em>Futureminds</em></p>
              <ul>
                <li>My Role was Frontend  Developer and my responsibility are to develop Website  Using HTML, CSS, JavaScript, Jquery and Bootstrap. andalso make responsive layout and here I done some work on figma</li>
                 
              </ul>
            </div> */}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume