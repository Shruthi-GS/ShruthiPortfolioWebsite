import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <Section id="projects">
      <h2>Projects</h2>
      <Project>
        <h3>Heart Disease Prediction using Machine Learning</h3>
        <p>Developed a heart disease prediction model using Deep Learning combined with the Random Forest algorithm, achieving an accuracy of 98.53%.
        <br></br>Designed a user-friendly app for seamless input of health metrics
        and clear prediction displays.
        <br></br>Integrated the machine learning model to provide heart disease risk assessments.</p>
        <p><b>Tech Stack:</b>  App - using Android Studio - Java, Flask, Python.</p>
      </Project>
      <Project>
        <h3>An education ecosystem for Specially abled Students</h3>
        <p>Developed a website that specifically aids blind and deaf students.
        <br></br>It features text-to-speech and speech-to-text conversion, useful for blind students for answer submissions.
        <br></br>Includes sign-language videos to help deaf students learn effectively.</p>
        <p><b>Tech Stack:</b> HTML, CSS, JavaScript, PHP, MySQL.</p>
      </Project>
      <Project>
        <h3>A frontend website for a government school</h3>
        <p>Developed a comprehensive website for Govt Kannada Higher Primary School No. 26, Vishweshwaraya Nagar, Belagavi.
        <br></br>Includes sections like About the school, Facilities, Achievements, Gallery, Admission, and Contact information.</p>
        <p><b>Tech Stack:</b> HTML, CSS, JavaScript, Bootstrap.</p>
        <a href="https://govtkanhigherprimaryschool26.w3spaces.com">View Project</a>
      </Project>
    </Section>
  );
};

export default Projects;

const Section = styled.section`
  padding: 4em 1em;
  max-width: 1200px;
  margin: auto;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;
  text-align: center;
  animation: fadeIn 1s ease-in;
`;

const Project = styled.div`
  margin-bottom: 2em;
  padding: 1em;
  background: #f9f9f9;
  border-left: 4px solid #ff1493;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
  h3 {
    font-size: 1.5em;
    color: #333;
  }
  p {
    font-size: 1em;
    color: #666;
    margin-top: 0.5em;
  }
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
