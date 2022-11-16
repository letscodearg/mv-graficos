import React from "react";
import styled from "styled-components";

const BoxHover = ({ src, text }) => {
  return (
    <>
      <Box>
        <img src={src} alt={`box image ${text}`} />
        <Text>{text}</Text>
      </Box>
    </>
  );
};

const Box = styled.section`
  width: 80%;
  position: relative;
  display: flex;
  justify-content: center;
  transform: scale(1);
  transition: all 0.5s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: all 0.5s ease-in-out;
  }

  @media screen and (min-width: 1200px) {
    width: 25%;
    cursor: pointer;
    margin: 1rem;
    &:hover {
        z-index: 2;
        transform: scale(1.2);
        transition: all 0.5s ease-in-out;
      h2 {
        z-index: 2;
        opacity: 1;
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;
const Text = styled.h2`
  color: snow;
  background-color: #E4002B;
  z-index: 2;
  padding: 1rem 0.5rem;
  text-transform: uppercase;
  font-family: sans-serif;
  position: absolute;
  top: 50%;

  @media screen and (min-width: 1200px) {
    opacity: 0;
    transition: all 0.5s ease-in-out;
    top: 1rem;
    margin: 0;
    font-size: .8rem;
    width: 80%;
    padding: .5rem;
    line-height: 1.5rem;
  }
`;

export default BoxHover;
