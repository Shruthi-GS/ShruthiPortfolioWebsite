import React from 'react';
import styled from 'styled-components';

const Education = () => {
  return (
    <Section id="education">
      <h2>Education</h2>
      <EducationItem>
        <h3>KLS Gogte Institute of Technology, Belagavi</h3>
        <p>BE, Computer Science & Engineering (2025)</p>
        <p>CGPA: 9.39</p>
      </EducationItem>
      <EducationItem>
        <h3>KLE Independent PU College, Belagavi</h3>
        <p>Pre-University Course (PUC), Science (2021)</p>
        <p>Percentage: 99.5%</p>
      </EducationItem>
      <EducationItem>
        <h3>Love Dale Central School, Belagavi</h3>
        <p>Tenth std, CBSE (2019)</p>
        <p>Percentage: 94%</p>
      </EducationItem>
    </Section>
  );
};

export default Education;

const Section = styled.section`
  padding: 3em 1em;
  max-width: 1200px;
  margin: auto;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;
`;

const EducationItem = styled.div`
  margin-bottom: 2em;
  padding: 1em;
  background: #f9f9f9;
  border-left: 4px solid #ff1493;
`;
