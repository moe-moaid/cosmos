"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
const slides = [
  {
    date: "February-22th 2024",
    title: "Will you be attending Affiliate Summit Europe?",
    image: "/images/slide-1.png",
  },
  {
    date: "February-22th 2024",
    title: "Will you be attending Affiliate Summit Europe?",
    description:
      "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.",
    image: "/images/slide-2.png",
  },
  {
    date: "February-22th 2024",
    title: "Will you be attending Affiliate Summit Europe?",
    image: "/images/slide-3.png",
  },
  {
    date: "February-22th 2024",
    title: "Will you be attending Affiliate Summit Europe?",
    image: "/images/slide-3.png",
  },
];

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative p-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <div className=" p-4 rounded-lg">
              <p className="text-[#B0B0B0] light">{slide.date}</p>
              <h3 className="text-white text-[18px] bold my-3">
                {slide.title}
              </h3>
              {slide.description && (
                <p className="text-[#B0B0B0] light">{slide.description}</p>
              )}
              <Image
                src={slide.image}
                alt={slide.title}
                width={300}
                height={200}
                className="rounded-lg my-4"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.4998 28L20.9998 45.5L18.5498 43.05L33.5998 28L18.5498 12.95L20.9998 10.5L38.4998 28Z"
          fill="#6F6F6F"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 28L35 10.5L37.45 12.95L22.4 28L37.45 43.05L35 45.5L17.5 28Z"
          fill="#6F6F6F"
        />
      </svg>
    </div>
  );
};

export default Carousel;
