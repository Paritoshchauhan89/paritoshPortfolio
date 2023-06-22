import React from "react";
import projec1 from "../img/project1.png";
import projec2 from "../img/project2.png";
import projec3 from "../img/project3.png";
import projec4 from "../img/project4.png";
import project5 from "../img/project5.png";
import project6 from "../img/project6.png";
import project7 from "../img/project7.png";

function Work() {
  const project = [
    {
      url: "https://paritosh.netlify.app",
      github: "https://github.com/Paritoshchauhan89/paritoshPortfolio",
      img: projec1,
    },
      {
      url:"https://paritoshimdb.netlify.app",
      github:"https://github.com/Paritoshchauhan89/Movie",
      img: project5,
    },
    {
      url: "https://carbooking.netlify.app/",
      github: "https://github.com/Paritoshchauhan89",
      img: projec2,
    },
    {
      url: "https://projectdummy.netlify.app/",
      github: "https://github.com/Paritoshchauhan89",
      img: projec3,
    },
    {
      url: "https://dhabba.netlify.app/",
      github: "https://github.com/Paritoshchauhan89",
      img: projec4,
    },
    {
      url:"https://paritoshben10.netlify.app/",
      github:"https://github.com/Paritoshchauhan89/Ben10",
      img: project6,
    },
    {
      url:"https://dhruvsliderlayout.netlify.app/",
      github:"https://github.com/Paritoshchauhan89/Sliderstm",
      img: project7,
    }
  ];

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Work</h2>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {project.map((item) => (
            <Card
              key={item.url}
              img={item.img}
              url={item.url}
              github={item.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Card = ({ img, url, github }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      <div className="portfolio-wrap">
        <img src={img} className="img-fluid" alt="" height="100%" />
        <div className="portfolio-info">
          <div
            className="portfolio-links  d-flex justify-content-between my-3"
            style={{ width: "28%" }}
          >
            <a href={url} className="linkedin" target="_blank" rel="noreferrer">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_gp7ouyyz.json"
                background="transparent"
                style={{ width: "30px", height: "30px" }}
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </a>
            <a
              href={github}
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_6HFXXE.json"
                background="transparent"
                style={{ width: "30px", height: "30px" }}
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
