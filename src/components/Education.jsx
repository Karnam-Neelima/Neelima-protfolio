import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 110%;
  padding: 40px 20px;
  background-color: white;
`;

const Title = styled.h2`
  text-align: center;
  color: #de3163;
  font-family: 'Verdana';
`;

const Table = styled.table`
  margin: 20px auto;
  border-collapse: collapse;
  width: 80%;
`;

const Th = styled.th`
  background-color: #454545;
  color: #ffbf00;
  padding: 10px;
`;

const Td = styled.td`
  text-align: center;
  padding: 10px;
  border: 1px solid black;
`;

const Education = () => (
  <Section id="projects1">
    <Title>Education</Title>
    <Table>
      <thead>
        <tr>
          <Th>Education</Th>
          <Th>Institute</Th>
          <Th>Year of Passing</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>Bachelor's Degree</Td>
          <Td>Audisankara College of Engineering & Technology</Td>
          <Td>2024</Td>
        </tr>
        <tr>
          <Td>Intermediate</Td>
          <Td>Vignan Junior College</Td>
          <Td>2020</Td>
        </tr>
        <tr>
          <Td>Secondary Education</Td>
          <Td>Sri Sainadh E.M High School</Td>
          <Td>2018</Td>
        </tr>
      </tbody>
    </Table>
  </Section>
);

export default Education;
