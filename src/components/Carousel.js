import { useRef, useEffect } from "react";
import styled from "styled-components";
const Carousel = ({
  slides = [],
  velocity = 500,
  interval = 5000,
  height = "auto",
  mbWidth = "240%",
  dkWidth = "120%",
}) => {
  const galeria = useRef(null);
  useEffect(() => {
    const autoplay = (velocity = 500) => {
      let galery = galeria.current;
      let slides = galery ? galery.children : [];
      if (slides.length < 0) return false;
      let firstSlide = slides[0];
      galery.style.transition = `${velocity}ms ease-out all`;
      let offset = firstSlide.offsetWidth;
      galery.style.transform = `translateX(-${offset}px)`;
      const transition = () => {
        galery.style.transition = "null";
        galery.style.transform = `translateX(0)`;
        galery.appendChild(firstSlide);
        galery.removeEventListener("transitionend", transition);
      };
      galery.addEventListener("transitionend", transition);
    };

    const loop = setInterval(() => autoplay(velocity), interval);
    galeria.current.addEventListener("mouseenter", () => clearInterval(loop));
    galeria.current.addEventListener("mouseleave", () =>
      setInterval(autoplay, interval)
    );
  }, [velocity, interval]);
  return (
    <Contenedor>
      <Galeria
        ref={galeria}
        height={height}
        mbWidth={mbWidth}
        dkWidth={dkWidth}
      >
        {slides &&
          slides.map((slide, index) => (
            <Slide key={index}>
              <img src={slide} alt={`Slide ${index}`} />
            </Slide>
          ))}
      </Galeria>
    </Contenedor>
  );
};

const Contenedor = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: 4rem;
`;
const Galeria = styled.div`
  display: flex;
  flex-wrap: nowrap;
  ${(props) =>
    props.mbWidth !== "auto" ? `width:${props.mbWidth};` : `width:auto;`}
  @media screen and (min-width: 1200px) {
    ${(props) =>
      props.dkWidth !== "auto" ? `width:${props.dkWidth};` : `width:auto;`}
  }
  ${(props) =>
    props.height !== "auto"
      ? `max-height:${props.height};`
      : `max-height:auto;`}
`;
const Slide = styled.figure`
  transition: 0.3s ease all;
  z-index: 10;
  position: relative;
  margin: 0px;
  width: 100%;
  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: contain;
    vertical-align: top;
  }
`;

export { Carousel };
