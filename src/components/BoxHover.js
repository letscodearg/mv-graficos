import React from "react";
import styled from "styled-components";

const BoxHover = ({ src, text }) => {
  return (
    <Box>
      <img src={src} alt="box image" />
      <Text>{text}</Text>
    </Box>
  );
};

const Box = styled.article`
  width: 25vw !important;
  height: 25vw !important;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
  }
`;
const Text = styled.h2`
  color: #fafafa;
  background-color: #df001f;
  z-index: 2;
  padding: 1rem 0.25rem;
  text-transform: uppercase;
  font-family: sans-serif;
`;

export default BoxHover;
