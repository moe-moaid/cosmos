"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const people = [
  {
    image: "/images/1.png",
    paragraph:
      "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories, combined with their competitive prices.",
    name: "Marvin McKinney",
    position: "Web designer",
  },
  {
    image: "/images/2.png",
    paragraph:
      "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories, combined with their competitive prices.",
    name: "John Doe",
    position: "Web developer",
  },
  {
    image: "/images/3.png",
    paragraph:
      "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories, combined with their competitive prices.",
    name: "Laura McKinsey",
    position: "Content Writer",
  },
];

function TestimonialSec() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? people.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === people.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
      <div className="relative w-[90%] h-[330px] lg:w-[30%] lg:h-[350px] mx-auto lg:ms-36 lg:-mt-24">
        <Image
          src="/images/baloon.png"
          fill
          sizes="max-w-[589px]"
          alt="baloon image"
          className="mt-20 w-1/2"
        />
      </div>

      <div className="relative flex flex-col lg:flex-row lg:items-center gap-10 lg:w-1/2 xl:w-1/3 mt-24 lg:-mt-20 z-40 bg-[#1A1717] px-8 py-24 shadow-xl">
        <svg
        className="absolute bottom-[15%] right-[12%]"
          width="113"
          height="113"
          viewBox="0 0 113 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2992 67.9449C20.9801 73.797 17.3144 79.5904 12.4054 85.1666C10.8433 86.9409 10.645 89.4738 11.9123 91.4687C12.8882 93.0033 14.5297 93.8775 16.2677 93.8775C16.7574 93.8775 17.2557 93.8085 17.7471 93.6654C28.1512 90.6256 52.42 79.8284 53.0717 45.3159C53.3235 31.9893 43.5763 20.5403 30.8842 19.2506C23.8889 18.5505 16.8902 20.8231 11.7037 25.5113C6.51025 30.2047 3.53076 36.9051 3.53076 43.8969C3.53076 55.5614 11.8106 65.762 23.2992 67.9449ZM16.4384 30.7512C19.7369 27.77 23.8889 26.182 28.2909 26.182C28.9134 26.182 29.541 26.213 30.1703 26.2785C39.2347 27.1975 46.192 35.5015 46.0092 45.1814C45.5592 69.0622 32.6291 79.8128 21.9215 84.6218C25.3097 80.0387 27.9719 75.3246 29.8651 70.5468C30.6031 68.6863 30.4807 66.6069 29.5306 64.8412C28.5357 62.9894 26.7615 61.6756 24.6665 61.2358C16.5109 59.5306 10.5933 52.237 10.5933 43.8968C10.5933 38.9 12.7244 34.1084 16.4384 30.7512Z"
            fill="white"
            fill-opacity="0.2"
          />
          <path
            d="M68.3071 91.4688C69.283 93.0033 70.9244 93.8775 72.6625 93.8775C73.1522 93.8775 73.6488 93.8086 74.1419 93.6654C84.546 90.6256 108.813 79.8284 109.465 45.3159C109.713 31.9893 99.9676 20.5403 87.2737 19.2506C80.2699 18.5384 73.2832 20.8213 68.0967 25.5113C62.9033 30.2047 59.9238 36.9051 59.9238 43.8969C59.9238 55.5614 68.2037 65.762 79.6906 67.9449C77.3697 73.8022 73.704 79.5956 68.7968 85.1684C67.2346 86.9443 67.038 89.4755 68.3071 91.4688ZM86.2564 70.5502C86.9944 68.6898 86.8737 66.6103 85.9253 64.8447C84.9287 62.9912 83.1562 61.6773 81.0595 61.2359C72.9038 59.5306 66.9863 52.2371 66.9863 43.8969C66.9863 38.8983 69.1174 34.1084 72.8314 30.7512C76.1282 27.77 80.2802 26.182 84.6839 26.182C85.3046 26.182 85.9323 26.213 86.5633 26.2785C95.626 27.1975 102.585 35.5015 102.402 45.1814C101.954 69.0639 89.0221 79.8128 78.3145 84.6218C81.701 80.0422 84.3598 75.3281 86.2564 70.5502Z"
            fill="white"
            fill-opacity="0.2"
          />
        </svg>

        <div className="flex flex-row justify-center space-x-10 lg:space-x-0 lg:flex-col items-center">
          {people.map((person, index) => (
            <motion.div
              key={index}
            //   initial={{ opacity: index === current ? 1 : 0 }}
            //   animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={`w-14 h-14 rounded-full overflow-hidden mb-4 ${
                index === current ? "border-2 border-white scale-150 my-2" : ""
              }`}
            >
              <Image
                src={person.image}
                alt={person.name}
                width={96}
                height={96}
              />
            </motion.div>
          ))}
        </div>
        <div className="relative flex flex-col justify-start items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <p className="mb-4 pe-5">{people[current].paragraph}</p>
              <h4 className="font-bold">{people[current].name}</h4>
              <p>{people[current].position}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center gap-4 w-full mt-4">
            <button
              onClick={handlePrev}
              className="size-[40px] border-2 border-[#FFFFFF10] bg-[#171717] flex justify-center items-center rounded-lg"
            >
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.255028 4.564L8.255 0.064019C8.41 -0.0229807 8.599 -0.0209808 8.752 0.068019C8.906 0.158019 9 0.322018 9 0.500018V9.49999C9 9.67799 8.906 9.84199 8.752 9.93199C8.674 9.97699 8.587 9.99999 8.5 9.99999C8.416 9.99999 8.331 9.97899 8.255 9.93599L0.255028 5.436C0.0980282 5.347 2.86102e-05 5.181 2.86102e-05 5C2.86102e-05 4.819 0.0980282 4.653 0.255028 4.564Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="size-[40px] border-2 border-[#FFFFFF10] bg-[#171717] flex justify-center items-center rounded-lg"
            >
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.74497 4.564L0.744998 0.064019C0.589998 -0.0229807 0.400999 -0.0209808 0.247999 0.068019C0.0939997 0.158019 0 0.322018 0 0.500018V9.49999C0 9.67799 0.0939997 9.84199 0.247999 9.93199C0.325999 9.97699 0.412999 9.99999 0.499998 9.99999C0.583998 9.99999 0.668998 9.97899 0.744998 9.93599L8.74497 5.436C8.90197 5.347 8.99997 5.181 8.99997 5C8.99997 4.819 8.90197 4.653 8.74497 4.564Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSec;
