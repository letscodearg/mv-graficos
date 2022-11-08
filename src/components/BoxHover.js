import {useState} from 'react';
import React from "react";
import styled from "styled-components";

const BoxHover = ({ src, text, altText }) => {
  const [active, setActive] = useState(false)

  return (
    <>
      <Box onClick={() => setActive(!active)}>
        <img src={src} alt="box image" />
        <Text>{text}</Text>
      </Box>
      <TextBox><AltText>{active ? altText : "TEXTO GENERICO"}</AltText></TextBox>
    </>

  );
};

const Box = styled.section`
  width: 80%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
  }

  @media screen and (min-width: 1200px) {
    width: 10%;
    margin: 1rem;
    cursor: pointer
  }
`;
const Text = styled.h2`
  color: #fafafa;
  background-color: #df001f;
  z-index: 2;
  padding: 1rem 0.25rem;
  text-transform: uppercase;
  font-family: sans-serif;
  position: absolute;
  top: 50%;

  @media screen and (min-width: 1200px) {
    opacity: 0;
  }
`;
const TextBox = styled.article`

`;
const AltText = styled.p`

`;

export default BoxHover;
