import { Box, styled, Slide, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  BannerContainer,
  BannerImage,
  BannerContent,
  BannerTitle,
  BannerBody,
  BannerSection,
  SliderLine,
} from "../../styles/banner/Banner";

const GallleryImage = styled("img")`
  width: 40%;
  height: 500px;
  object-fit: contain;
`;

const GalleryContent = styled("div")`
  width: 60%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: "10px";
`;

const titles = ["Make your Dreams", "Huge Collections", "Better Quality"];
const images = [
  "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-slide1-img.png",
  "https://depot.qodeinteractive.com/wp-content/uploads/2017/02/h1-slide2-img1.png",
  "https://depot.qodeinteractive.com/wp-content/uploads/2017/02/h1-slide3-img.jpg",
];
function HomeGallery() {
  const [show, setShow] = useState(true);
  const [contentIndex, setContentIndex] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setContentIndex((i) => (i + 1) % titles.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <BannerContainer ref={containerRef}>
        <Slide
          direction="down"
          in={show}
          timeout={{ enter: 500, exit: 500 }}
          container={containerRef.current}
        >
          <BannerSection>
            <BannerContent>
              <BannerTitle>{titles[contentIndex]}</BannerTitle>
              <BannerBody>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                laboriosam corporis enim!
              </BannerBody>
            </BannerContent>
            <BannerImage src={images[contentIndex]}></BannerImage>
          </BannerSection>
        </Slide>
      </BannerContainer>
      {titles.map((t, index) => (
        <SliderLine
          key={t}
          isShow={index == contentIndex}
          index={index}
        ></SliderLine>
      ))}
    </>
  );
}

export default HomeGallery;
