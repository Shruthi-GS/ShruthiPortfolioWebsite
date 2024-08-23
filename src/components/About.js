import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Section id="about">
      <h2>About Me</h2>
      <p>I am a third year Computer Science student with a strong foundation in programming, web development and keen interest in AI-ML. I excel at problem-solving and creating innovative solutions using various technologies. I have excellent communication skills and a proven ability to work in team environments.</p>
      <Interests>
      <p>My interests include painting and watching Sci-Fi movies.</p> 
      </Interests>
      <ResumeButton href="https://shruthi-gs.github.io/ShruthiPortfolioWebsite\ShruthiGS.pdf" download="ShruthiGS_Resume.pdf">My Resume</ResumeButton>
    </Section>
  );
};

export default About;

const Section = styled.section`
  padding: 4em 1em;
  max-width: 1200px;
  margin: auto;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;
  text-align: center;
  animation: slideIn 1s ease-out;
  @keyframes slideIn {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  h2 {
    font-size: 2em;
    color: #333;
  }
  p {
    font-size: 1.1em;
    color: #666;
    margin-top: 1em;
  }
`;
const Interests = styled.div`
  margin-top: 1em;
  font-size: 1em;
  color: #333;
  text-align: center;
`;

const ResumeButton = styled.a`
  display: inline-block;
  margin-top: 2em;
  padding: 0.75em 1.5em;
  background-color: #ff1493;
  color: #fff;
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c71585;
  }
`;
