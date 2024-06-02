import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <Section id="skills">
      <h2>Skills</h2>
      <SkillList>
        <SkillItem>Languages: C, C++, Python, HTML, CSS, JavaScript</SkillItem>
        <SkillItem>Frameworks: React.js, Django</SkillItem>
        <SkillItem>Database: MySQL</SkillItem>
        <SkillItem>Data visualization tools: Power BI, Tableau</SkillItem>
        <SkillItem>Machine Learning</SkillItem>
        <SkillItem>CRM: Salesforce</SkillItem>
      </SkillList>
    </Section>
  );
};

export default Skills;

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

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  padding: 0.5em 0;
  font-size: 1.2em;
  color: #333;
  transition: color 0.3s ease;
  &:hover {
    color: #c71585;
  }
`;
