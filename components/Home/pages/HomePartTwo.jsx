import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const HomePartTwo = () => {
  const imageWidth = 150;
  const imageHeight = 100;
  const gap = 100;

  const images = [
    <Image
      key="image1"
      src="/houseDesign.png"
      width={imageWidth}
      height={imageHeight}
      alt="Image 1"
      style={{ marginRight: `${gap}px` }}
      objectFit="contain" // Add objectFit
    />,
    <Image
      key="image2"
      src="/company.png"
      width={imageWidth}
      height={imageHeight}
      alt="Image 2"
      style={{ marginRight: `${gap}px` }}
      objectFit="contain" // Add objectFit
    />,
    <Image
      key="image3"
      src="/architecture.png"
      width={imageWidth}
      height={imageHeight}
      alt="Image 3"
      style={{ marginRight: `${gap}px` }}
      objectFit="contain" // Add objectFit
    />,
    <Image
      key="image4"
      src="/arrow.png"
      width={imageWidth}
      height={imageHeight}
      alt="Image 4"
      style={{ marginRight: `${gap}px` }}
      objectFit="contain" // Add objectFit
    />,
    <Image
      key="image5"
      src="/bureau.png"
      width={imageWidth}
      height={imageHeight}
      alt="Image 5"
      style={{ marginRight: `${gap}px` }}
      objectFit="contain" // Add objectFit
    />,
    <Image
      key="image6"
      src="/realestate.png"
      width={imageWidth}
      height={imageHeight}
      alt="Image 6"
      style={{ marginRight: `${gap}px`, }}
      objectFit="contain" // Add objectFit
    />,
  ];

  return (
    <Marquee
      direction="left"
      className="flex items-center mt-9"
      gradient={false}
      pauseOnHover
    >
      {images}
    </Marquee>
  );
};

export default HomePartTwo;