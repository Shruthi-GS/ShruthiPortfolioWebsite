import React from 'react';
import styled from 'styled-components';

const Internship = () => {
  return (
    <Section id="internship">
      <h2>Internship</h2>
      <ExperienceItem>
        <h3>Creintors Automation Solutions Pvt Ltd., Belagavi (Currently Pursuing)</h3>
        <p>Working on “Using Data Analytics to optimize profit and sales metrics for a dairy union.”</p>
        <p>Using Python to analyze and visualize the sales of dealers, across
        different routes and of various dairy products.</p>

      </ExperienceItem>
    </Section>
  );
};

export default Internship;

const Section = styled.section`
  padding: 3em 1em;
  max-width: 1200px;
  margin: auto;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2em;
  padding: 1em;
  background: #f9f9f9;
  border-left: 4px solid #ff1493;
`;
