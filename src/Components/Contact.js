import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  const form = useRef();
  const notify = () => toast("Message sent!");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vbg6bdq", "template_63e1bnl", form.current, {
        publicKey: "0yYobg3Hgro7rRztQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="about">
      <div style={{ backgroundColor: "#f1f5f9" }}>
        <Container>
          <h3 style={{ padding: "20px 0px" }}>Contact</h3>
          <Row>
            <Col lg={6}>
              <div className="contact">
                <h5 style={{ textAlign: "left", margin: "10px" }}>
                  Get In Touch With Me
                </h5>
                <p style={{ textAlign: "left", margin: "12px" }}>
                  Hey there! Thanks for checking out my portfolio. Have a
                  question, want to collaborate, or just want to say hi? Drop me
                  a message using the form below. I look forward to hearing from
                  you!
                </p>
                <div style={{ textAlign: "left", padding: "20px 20px 20px" }}>
                  <p>
                    <FaMapLocationDot style={{ marginRight: "8px" }} />
                    IPS Academy, Indore
                  </p>
                  <p>
                    <MdEmail style={{ marginRight: "8px" }} />
                    tanishkaagrawal118@gmail.com
                  </p>
                  <p>
                    <BiSolidPhoneCall style={{ marginRight: "8px" }} />
                    7879460536
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <h5 style={{margin:'12.4px'}}>Contact me </h5>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="inputs"
                    name="from_name"
                  ></input>
                  <br></br>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="inputs"
                    name="user-email"
                  ></input>
                  <br></br>
                  {/* <input type="number" placeholder="Enter your number" className="inputs"/><br></br> */}
                  <textarea
                    className="inputs"
                    rows={2}
                    placeholder="Message"
                    name="message"
                  />
                  <button
                    type="submit"
                    onClick={notify}
                    class="btn btn-outline-primary"
                    style={{ borderColor: '#0e7490' }}
                  >
                    Send
                  </button>
                  <ToastContainer />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
