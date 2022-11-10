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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: all 0.5s ease-in-out;
  }

  @media screen and (min-width: 1200px) {
    width: 10%;
    cursor: pointer;
    &:hover {
        z-index: 2;
        transform: scale(2);
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
    transition: all 0.5s ease-in-out;
    top: 0;
    margin: 0;
    font-size: .5rem;
    width: 80%;
    padding: .5rem;
    line-height: .8rem;
  }
`;

export default BoxHover;
