import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Section id="contact">
      <h2>Contact Me</h2>
      <ContactForm action="mailto:gsshruthi233@gmail.com" method="post" enctype="text/plain">
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" name="name" required />
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />
        <Label htmlFor="message">Message:</Label>
        <Textarea id="message" name="message" required></Textarea>
        <Button type="submit">Send</Button>
      </ContactForm>
      <p>Find me on <a href="https://linkedin.com/in/shruthi-g-s">LinkedIn</a> and <a href="https://github.com/Shruthi-GS">GitHub</a></p>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  padding: 3em 1em;
  max-width: 1200px;
  margin: auto;
  background: #fff0f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;
  text-align: center;

  a {
    color: #ff1493;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 0.5em;
    transition: color 0.3s ease;
  }
  a:hover {
    color: #c71585;
  }  
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
`;

const Label = styled.label`
  margin-bottom: 1em;
  font-size: 1em;
`;

const Input = styled.input`
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  background: #ff1493;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #c71585;
  }
`;

