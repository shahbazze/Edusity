import React, { useRef } from "react";
import "./Testimonials.css";
import Next_icon from "../../assets/edusity_assets/next-icon.png";
import Back_icon from "../../assets/edusity_assets/back-icon.png";
import User_2 from "../../assets/edusity_assets/user-2.png";
import User_3 from "../../assets/edusity_assets/user-3.png";
import User_1 from "../../assets/edusity_assets/user-1.png";
import User_4 from "../../assets/edusity_assets/user-4.png";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if(tx>-50)
        {
            tx -=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
  };

  const slideBackward = () => {
    if(tx<0)
        {
            tx +=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
  };

  return (
    <div className="Testimonials">
      <img src={Next_icon} alt="" className="Next-btn" onClick={slideForward} />
      <img
        src={Back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_1} alt="" />
                <div>
                  <h3>Elisa Eisha</h3>
                  <span>helio,usa</span>
                </div>
              </div>
            </div>
            <p>
              As a tech professional based in the USA, I've found solutions to
              be invaluable. Their innovative approach and commitment to
              technological excellence have significantly enhanced our
              operations. Their team's expertise and dedication to quality make
              them a reliable partner for any tech-based initiative.
            </p>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_2} alt="" />
                <div>
                  <h3>Asad Haider</h3>
                  <span>berlin,Germany</span>
                </div>
              </div>
            </div>
            <p>
              As a new user based in the USA, my experience has been
              outstanding. The innovative solutions and commitment to technology
              at [Your Company Name] have exceeded my expectations. I highly
              recommend them for anyone looking for reliable and advanced tech
              services.
            </p>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_3} alt="" />
                <div>
                  <h3>Tulsi dav</h3>
                  <span>New york,usa</span>
                </div>
              </div>
            </div>
            <p>
              Being new and based in the USA, I've been thoroughly impressed
              with the innovative solutions and commitment to technology at
              [Your Company Name]. They've exceeded my expectations, and I
              highly recommend their reliable and advanced tech services.
            </p>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_4} alt="" />
                <div>
                  {" "}
                  <h3>Elisa Eisha</h3>
                  <span>san fransico,usa</span>
                </div>
              </div>
            </div>
            <p>
              As a new user, I've been thoroughly impressed by the innovative
              solutions and commitment to technology. Their dedication to
              excellence has already made a significant impact, and I highly
              recommend their advanced tech services.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
