import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 117%;
  padding: 40px 20px;
  background-color: #999999;
`;

const Title = styled.h2`
  text-align: center;
  color: #de3163;
  font-family: 'Verdana';
`;

const ImageGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SkillImage = styled.img`
  width: 150px;
  height: 100px;
`;

const Skills = () => (
  <Section id="achievements">
    <Title>Skills</Title>
    <ImageGrid>
      <SkillImage src="https://i.pinimg.com/564x/2f/9c/11/2f9c11f9e55efbf1791f12c06d60729b.jpg" alt="Python" />
      <SkillImage src="https://pbs.twimg.com/media/FNBFUx1WQAc3qzA?format=jpg&name=900x900" alt="SQL" />
      <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQvlNaOatKBueSDGX1hmXJ2UuDVhspkWAvGg&usqp=CAU" alt="HTML, CSS, JS" />
    </ImageGrid>
  </Section>
);

export default Skills;
