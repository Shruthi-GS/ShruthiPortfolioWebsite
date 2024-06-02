import React from 'react';
import styled from 'styled-components';
const Home = () => {
  return (
    <Section id="home">
      <Intro>
        <h1>Hi, it's Shruthi G S</h1>
        <p>An aspiring software developer, skilled in web development and machine learning with strong communication and leadership abilities.</p>
        <ProfileImage src="./IMG-20240118-WA0000.jpg" alt="Shruthi G S" />
      </Intro>
    </Section>
  );
};

export default Home;

const Section = styled.section`
  background: #fffafa;
  text-align: center;
  padding: 4em 1em;
  animation: fadeIn 2s ease-in;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Intro = styled.div`
  max-width: 800px;
  margin: auto;
  h1 {
    font-size: 2.5em;
    color: #333;
  }
  p {
    font-size: 1.2em;
    color: #666;
    margin-top: 1em;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-top: 1em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
