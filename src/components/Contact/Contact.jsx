import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/edusity_assets/msg-icon.png"
import mail_icon from "../../assets/edusity_assets/mail-icon.png"
import phone_icon from "../../assets/edusity_assets/phone-icon.png"
import location_icon from "../../assets/edusity_assets/location-icon.png"
import White_arrow from "../../assets/edusity_assets/white-arrow.png"
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "50e6a26c-db81-4801-89c4-7a3030eba066");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="Contact">
      <div className="Contact-column">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          We're here to help with any questions or support you need. Reach out
          via phone, email, or the contact form below, and our team will respond
          promptly. Your satisfaction is our priority. Let's connect and see how
          we can assist you!
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />shahbaz148643@gmail.com</li>
            <li><img src={phone_icon} alt="" />+ 781 786 4025</li>
            <li><img src={location_icon} alt="" />high road new york near sams club 144/b usa</li>
        </ul>
      </div>
      <div className="Contact-column">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required/>
            <label>Phone number</label>
            <input type="tel" name="phone" placeholder="Enter Your Cell Number" required />
            <label>Write Msg here</label>
            <textarea name="msg" rows="6" placeholder="Enter YOur msg here" required></textarea>
            <button className="btn dark-btn" type="submit">Submit Now <img src={White_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
