import React from "react";
import about_img from '../Images/about_img.png'
import '../CSS/Contact_About.css'
function About() {
  return (
    <>
      <div className="content">
        <p id="about_me">
          <p id="sub_about_me">Hi Everyone, I am <span style={{fontWeight:'600',color:'yellow'}}>Hassan javaid</span> from <span style={{color:'yellow'}}>Pakistan Karachi</span>.</p>
          <p id="sub_about_desc">

          I'm a self-taught frontend developer with expertise in HTML, CSS,
          Bootstrap JavaScript, and React.js. Currently, I'm crafting
          user-friendly web interfaces and diving into exciting new projects. I
          have a passion for transforming ideas into interactive digital
          experiences. In my free time, I explore the latest tech trends, enjoy
          coding challenges, and love bringing creative concepts to life. Eager
          to collaborate, learn, and make a meaningful impact in the web
          development world! 🚀🌐
          </p>
        </p>
        <img src={about_img} id = 'about_img' alt=""/>
      </div>
    </>
  );
}

export default About;
