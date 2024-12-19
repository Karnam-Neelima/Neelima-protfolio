import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 110%;
  padding: 20px;
  background-color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Times New Roman';
  color: #5dade2;
`;

const ResumeLink = styled.a`
  color:blue:
  text-decoration: underline;
  font-size: 18px;
`;

const Home = () => (
  <Section id="home">
    <Title>Hello, I am Neelima Karnam</Title>
    <ResumeLink href="https://drive.google.com/file/d/12cGKGO50KiCtMVa4DpVWEtUAt3clVrVs/view?usp=drivesdk">
      CLICK HERE TO VIEW MY RESUME
    </ResumeLink>
  </Section>
);

export default Home;
