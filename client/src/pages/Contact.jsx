import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { MailIcon, PhoneIcon, LocationIcon } from "../assets/imgs/index";
import "../assets/scss/contact.scss";
import { useState } from "react";
import { BallTriangle } from "react-loader-spinner";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [NotSent, setNotSent] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setIsSubmiting(true);
    e.preventDefault();
    try {
      const response = await fetch("https://ayad-api.vercel.app/sendEmail", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 2500);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmiting(false);
      } else {
        console.error("Failed to send email");
        setIsSubmiting(false);
        setNotSent(true);
        setTimeout(() => {
          setNotSent(false);
        }, 2500);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSubmiting(false);
      setNotSent(true);
      setTimeout(() => {
        setNotSent(false);
      }, 2500);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <>
      <Navbar />
      <section className="mainContainer">
        <div style={{ top: isSent ? "5%" : "-100%" }} className="SentNotify">
          SYou Email Has Been Sent Successfully .
        </div>
        <div style={{ top: NotSent ? "5%" : "-100%" }} className="SentNotify">
          Faild To Send Your Email For The Moment ! Try Again Later.
        </div>

        <div className="left">
          <div
            className="contactCard"
            onClick={() =>
              (window.location = "mailto:ayadzakaria.pro@gmail.com")
            }
          >
            <img src={MailIcon} alt="Mail Icon" />
            <h2>Email Me</h2>
            <a href="">
              <p>ayadzakaria.pro@gmail.com</p>
            </a>
          </div>
          <div
            className="contactCard"
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send?phone=212699913184",
                "_blank"
              );
            }}
          >
            <img src={PhoneIcon} alt="Mail Icon" />
            <h2>Call Me</h2>
            <a
              href="https://api.whatsapp.com/send?phone=212699913184"
              target="_blank"
            >
              <p>+212 699 913 184</p>
            </a>
          </div>
          <div
            className="contactCard"
            onClick={() => {
              window.open("https://goo.gl/maps/DiVSxktVQdbVChgAA", "_blank");
            }}
          >
            <img src={LocationIcon} alt="Mail Icon" />
            <h2>Location</h2>
            <a href="https://goo.gl/maps/DiVSxktVQdbVChgAA" target="_blank">
              <p>Sidi Moumen, Casablanca Morocco</p>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="contactForm">
            <h1>
              Let's Work<span>Together</span>
            </h1>
            {isSubmiting ? (
              <div className="LoaderLabel">
                <BallTriangle
                  height={200}
                  width={400}
                  radius={4}
                  color="#eb613f"
                  ariaLabel="ball-triangle-loading"
                  wrapperClass={{}}
                  wrapperStyle=""
                  visible={true}
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contactForm">
                <div className="inputLabel">
                  <input
                    type="text"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    id="name"
                  />
                </div>
                <div className="inputLabel">
                  <input
                    type="email"
                    placeholder="Your Email *"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputLabel">
                  <input
                    type="text"
                    placeholder="Subject *"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputLabel">
                  <textarea
                    name="message"
                    contenteditable
                    spellcheck="false"
                    className="MessageInput"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message ..."
                    id="message"
                  />
                </div>
                <button className="sendMailBtn" type="submit">
                  Send
                </button>
              </form>
            )}{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
