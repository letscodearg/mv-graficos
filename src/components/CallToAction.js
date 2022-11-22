import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const CallToAction = ({ image, children, link, text }) => {
  return (
    <Container>
      <Cover>
        <img src={image} alt={`${image}`}/>
      </Cover>
      <Action>
        {children}
        <Link to={link}>{text}</Link>
      </Action>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1280px) {

  }
`;
const Cover = styled.figure`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Action = styled.article`
  z-index: 1;
  align-self: center;
  width: 48%;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  justify-content: center;
  background-color: rgba(240, 240, 240, 0);
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 5%;
    height: 100%;
    background-color: rgba(228, 0, 42, 0);
    transform: skewX(45deg) scale(2);
    right: -10%;
    transition: all 0.3s;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h2,
  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: "Josefin Slab", serif;
    font-weight: 700;
    opacity: 1;
    transition: all 1s;
    text-align: right;
    color: snow;
  }
  p {
    font-size: 1rem;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    opacity: 1;
    transition: all 1s;
    color: snow;
  }
  a {
    text-decoration: none;
    background-color: rgba(228, 0, 42, 1);
    padding: 0.5rem 1.25rem;
    color: rgb(240, 240, 240);
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    margin: 1rem 0;
    border-radius: 1rem;
    text-transform: uppercase;
  }
  &:hover {
    background-color: snow;
    &::before {
      right: 105%;
      background-color: rgba(228, 0, 42, 1);
    }
    h2,
    h3,
    p {
      opacity: 1;
      color: #131E29;
    }
  }
  @media screen and (max-width: 1280px) {
    width: 100%;
    display: flex;
    align-self: flex-end;
    background-color: rgba(240, 240, 240, 1);
    &::before {
      content: "";
      position: absolute;
      background-color: rgba(228, 0, 42, 1);
      right: auto;
      left: 0;
      bottom: 0;
      transition: all 0.3s;
    }
  }
`;

export default CallToAction;
