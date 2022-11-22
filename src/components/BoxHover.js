import React from "react";
import styled from "styled-components";

const BoxHover = ({ src, text }) => {
  return (
    <>
      <Box>
        <img src={src} alt={`box ${text}`} />
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
  margin: 1rem;
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
    &::before {
      content: " ";
      width: 100%;
      height: 100%;
      background: #000;
      position: absolute;
      opacity: 0;
      transition: all 0.3s;
      top: 0;
      left: 0;
      z-index: 1;
    }
    &:hover {
      z-index: 2;
      transform: scale(1.2);
      transition: all 0.5s ease-in-out;
      &::before {
        opacity: 0.7;
      }
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
  background-color: #e4002b;
  z-index: 2;
  padding: 1rem 0.75rem;
  text-transform: uppercase;
  font-family: sans-serif;
  position: absolute;
  top: 1rem;
  line-height: 1.8rem;
  font-size: 1rem;
  width: 80%;
  @media screen and (min-width: 1200px) {
    opacity: 0;
    transition: all 0.5s ease-in-out;
    top: 1rem;
    margin: 0;
    font-size: 0.8rem;
    width: 80%;
    padding: 0.5rem;
    line-height: 1.5rem;
    color: snow;
    background-color: transparent;
  }
`;

export default BoxHover;
