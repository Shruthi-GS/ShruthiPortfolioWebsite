import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <Section id="projects">
      <h2>Projects</h2>
      <Project>
        <h3>Heart Disease Prediction using Machine Learning (In progress)</h3>
        <p>Developing a heart disease prediction model using algorithms such as Random Forest, XGBoost, KNN, K-means, Logistic Regression, SVM, Naive Bayes, and Deep Learning combined with Random Forest.
        <br></br>Parameters include age, gender, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal.
        <br></br>Creating a user-friendly app for input and prediction display.</p>
        <p>Currently working on a research paper to document our findings.</p>
      </Project>
      <Project>
        <h3>An education ecosystem for Specially abled Students</h3>
        <p>Developed a website featuring text-to-speech and speech-to-text conversion for answer submission to aid blind students.
        <br></br>Included real time sign-language detection using video calls to aid deaf students.</p>
        <p><b>Tech Stack:</b> HTML, CSS, JavaScript, PHP, WebRTC and Machine Learning(LSTM model).</p>
      </Project>
      <Project>
        <h3>A frontend website for a government school</h3>
        <p>Developed a comprehensive website with sections for About, Facilities, Achievements, Gallery, Admission, and Contact.</p>
        <p><b>Tech Stack:</b> HTML, CSS, JavaScript, Bootstrap</p>
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
