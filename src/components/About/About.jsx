import React from "react";
import "./About.css";
import about_img from "../../assets/edusity_assets/about.png";
import play_icon from "../../assets/edusity_assets/play-icon.png";
const About = ({setplaystate}) => {
  return (
    <div className="About">
      <div className="About-left">
        <img src={about_img} alt="about_img" className="about_img"/>
        <img src={play_icon} alt="play_icon" className="play_icon" onClick={() => setplaystate(true)}/>
      </div>
      <div className="About-right">
        <h3>About Univercity</h3>
        <h2>Nurturing's Tomorrow leaders Today</h2>
        <p>
          A good university nurtures tomorrow's leaders by providing a holistic
          education that emphasizes academic excellence and personal growth. Our
          curriculum challenges students to think critically and creatively,
          preparing them for lifelong learning and success in their fields.
        </p>
        <p>
          We offer a variety of extracurricular activities, clubs, and
          organizations to help students develop new skills, explore interests,
          and build lasting relationships. Our inclusive community supports
          students from diverse backgrounds, fostering empathy, integrity, and
          resilience.
        </p>
        <p>
          With state-of-the-art facilities, cutting-edge research opportunities,
          and strong industry connections, we prepare our graduates to make
          meaningful impacts in their careers and communities. Our commitment to
          both academic rigor and personal development ensures that our students
          become visionary leaders capable of driving positive change.
        </p>
      </div>
    </div>
  );
};

export default About;
