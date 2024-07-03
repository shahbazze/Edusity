import React from 'react'
import "./Campus.css"
import galler_1 from "../../assets/edusity_assets/gallery-1.png"
import galler_2 from "../../assets/edusity_assets/gallery-2.png"
import galler_3 from "../../assets/edusity_assets/gallery-3.png"
import galler_4 from "../../assets/edusity_assets/gallery-4.png"
import white_arrow from "../../assets/edusity_assets/white-arrow.png"
const Campus = () => {
  return (
    <div className='Campus'>
        <div className="Gallery">
            <img src={galler_1} alt="" />
            <img src={galler_2} alt="" />
            <img src={galler_3} alt="" />
            <img src={galler_4} alt="" />
        </div>
        <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus