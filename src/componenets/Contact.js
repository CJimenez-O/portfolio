import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Container id="contact">
      <h3 className="contact-title">Get in touch</h3>
      <form
        className="contact-form"
        action="https://formspree.io/f/xdoyeyee"
        method="POST"
      >
            <label for="name">Name</label>
            <input
              type="name"
              className="form-input"
              placeholder="Richard Hendricks"
              name="name"
            />
            <label for="email">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="your@email.com"
              name="_replyto"
            />
        <label for="message">Message</label>
        <textarea
          placeholder="Message:"
          name="Message:"
          class="contact-form-txtarea"
        />

        <button type="submit" className="submit-btn">
          Send
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  display: grid;
  margin: 50px 0;

  .contact-title {
    text-align: center;
    font-size: 30px;
    border-bottom: 1px solid #03cffc;
    width: 20%;
    margin: auto;
    margin-top: 25px;
  }
  .contact-form {
    display: grid;
    height: auto;
    margin: 30px auto;
    background-color: rgb(40, 44, 52);
    padding: 40px 30px;
    border-radius: 10px;
  }
  .personal-info {
    display: flex;
    gap: 10px;
  }
  .input-div {
    display: grid;
    margin: auto;
  }
  label {
    color: white;
  }
  .form-input {
    margin: 5px 0px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 10px;
    border: 1px solid #000;
  }
  .contact-form-txtarea {
    height: 100px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-top: 5px;
    border-radius: 10px;
    border: 1px solid #000;
  }
  .form-input:focus {
    outline: none;
    border-radius: 10px;
  }
  .contact-form-txtarea:focus {
    outline: none;
    border-radius: 10px;
  }
  .submit-btn {
    width: 80%;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
    border: 1px solid #000;
    padding: 5px 0;
    background-color: #03cffc;
    color: white;
    cursor: pointer;
  }
  .submit-btn:hover {
    color: #03cffc;
    background-color: transparent;
  }

  @media (max-width: 790px) {
    display: block;
    
    .contact-title {
      text-align: center;
      font-size: 25px;
      border-bottom: 1px solid #03cffc;
      width: unset;
      margin: 0 10%;
      margin-top: 25px;
    }
    .contact-form {
    }

    .input-div {
      display: block;
      width: 100%;
    }
  }
`;

export default Contact;
