import React from 'react'
import webimg from '../img/Web Devlopment.png'
import appimg from '../img/graphic.png'
import blockimg from '../img/cw.jpg'
import seoimg from '../img/seo.c94c36f70377129fbac8abff96381e18.svg'
import autoimg from '../img/autocad.webp'
import videoimg from '../img/pre.jpg'
function Services() {
  const data = [
    {
    img:webimg,
    name:"Web Development",
    content:"Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate."
  },
    {
    img:appimg,
    name:"Graphic design",
    content:"Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate."
  },
    {
    img:blockimg,
    name:"Content Writer",
    content:"Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate."
  },
  {
    img:seoimg,
    name:"SEO",
    content:"Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate."
  },
  {
    img:autoimg,
    name:"AutoCad",
    content:"Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate."
  },
  {
    img:videoimg,
    name:"Video Editing",
    content:"Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate."
  },
]
  return (
    <section id="chefs" class="chefs section-bg">
      <div class="container" data-aos="fade-up">

      <div className="section-title">
          <h2>Services</h2>
        </div>

        <div class="row gy-4">
        {data.map((item)=>  <div class="col-lg-4 col-md-6 d-flex align-items-stretch"  key={item.name}>
            <div class="chef-member">
              <div class="member-img">
                <img src={item.img} class="img-fluid" alt="" height="500px"/>
               
              </div>
              <div class="member-info">
                <h4>{item.name}</h4>
                <p>{item.content}</p>
              </div>
            </div>
          </div>)}
        

         

        </div>

      </div>
    </section>
  )
}

export default Services