import React from "react";
import Star from "./star";
import Donut from "./donut";
import Splash from "./splash";
import Image from "next/image";
import FadeColor from "./fadeColor";
import Spiral from "./spiral";
import Line from "./line";

function Hero() {
  return (
    <div className="flex flex-row">
      {/* left column */}
      <div className="flex flex-col">
        <div className="flex flex-row justify-center md:justify-start">
          <Star />
          <div className="relative mt-6">
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] xl:text-[100px] 2xl:text-[140px] text-white bold leading-[50px] sm:leading-[80px] md:leading-[100px] 2xl:leading-[150px] relative">
              WE ARE
              <Donut />
            </h1>
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] xl:text-[100px] 2xl:text-[140px] bold holotext leading-[50px] sm:leading-[80px] md:leading-[100px] 2xl:leading-[150px] relative">
              WEB DESIGN
              <Splash />
            </h1>
            <h1 className="text-[20px] sm:text-[40px] md:text-[60px] xl:text-[80px] 2xl:text-[100px] text-white light tracking-[20px] md:tracking-[30px]">
              AGENCY
            </h1>
          </div>
        </div>
        <div className="relative">
          <Image
            className="mt-8 w-[90%] 2xl:w-[80%] mx-auto xl:ms-[20%]"
            src="/images/meeting.png"
            width={800}
            height={400}
            alt="meeting"
          />
          {/* explore button */}
          <div className="absolute bottom-[30%] sm:bottom-[25%] md:bottom-0 right-[4%] md:right-[8%] xl:-right-[8%] 2xl:right-[1%] bg-primary text-black size-[70px] sm:size-[100px] md:size-[130px] 2xl:size-[190px] rounded-full flex flex-col items-center justify-center hover:cursor-pointer">
            <svg
            className="w-4 lg:w-6"
            //   width="31"
            //   height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_787)">
                <path
                  d="M30.3339 0.243573C30.1066 0.0177413 29.7706 -0.0588585 29.4678 0.0467332L1.13447 10.0468C0.800601 10.1643 0.577516 10.4799 0.578126 10.8336C0.578431 11.1873 0.801822 11.5022 1.13569 11.6194L13.4615 15.9377L19.1131 10.2855C19.44 9.96839 19.9606 9.97236 20.2826 10.2943C20.6045 10.6163 20.6085 11.1369 20.2914 11.4638L14.6401 17.116L18.9584 29.4427C19.0753 29.776 19.3896 29.9991 19.7427 30H19.7443C20.0976 30.0003 20.4126 29.7775 20.5304 29.4443L30.5305 1.11059C30.6364 0.807849 30.5601 0.471237 30.3339 0.243573Z"
                  fill="#141414"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_787">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-black bold text-[12px] sm:text-[14px] md:text-[20px] mt-2">Explore</p>
            <p className="text-black bold text-[12px] sm:text-[14px] md:text-[20px]">More</p>
          </div>

            {/* gradiant border large */}
          <div className="block px-4 md:px-0 md:absolute left-[2%] xl:left-[14%] -bottom-[2%] gradient-border w-full  md:w-[35%] mt-4 md:mt-0">
            <p className="text-[#B0B0B0] text-[16px] mb-1">INDUCTION</p>
            <p className="text-white bold text-[24px] pb-3">
              Creative <span className="light tracking-[4px]">Design</span>
            </p>
          </div>
          
        </div>
        <div className="flex flex-row justify-center lg:justify-start space-x-3 md:ms-[10%] mt-[7%]">
          <button className="outline-none size-[45px] border-none flex items-center justify-center bg-[#131313] shadow-lg">
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.4845 5.17395L4.9845 0.679856C5.13075 0.533798 5.3685 0.533798 5.51475 0.679856C5.661 0.825914 5.661 1.06335 5.51475 1.20941L1.65525 5.06384H13.875C14.082 5.06384 14.25 5.23162 14.25 5.43835C14.25 5.64508 14.082 5.81286 13.875 5.81286H1.65525L5.51475 9.66729C5.661 9.81335 5.661 10.0508 5.51475 10.1968C5.44125 10.2702 5.34525 10.3062 5.24925 10.3062C5.15325 10.3062 5.05725 10.2695 4.98375 10.1968L0.48375 5.70275C0.337501 5.55669 0.337501 5.31926 0.48375 5.1732L0.4845 5.17395Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="outline-none size-[45px] border-none flex items-center justify-center bg-primary shadow-lg">
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5155 5.17395L10.0155 0.679856C9.86925 0.533798 9.6315 0.533798 9.48525 0.679856C9.339 0.825914 9.339 1.06335 9.48525 1.20941L13.3447 5.06384H1.125C0.918 5.06384 0.75 5.23162 0.75 5.43835C0.75 5.64508 0.918 5.81286 1.125 5.81286H13.3447L9.48525 9.66729C9.339 9.81335 9.339 10.0508 9.48525 10.1968C9.55875 10.2702 9.65475 10.3062 9.75075 10.3062C9.84675 10.3062 9.94275 10.2695 10.0162 10.1968L14.5162 5.70275C14.6625 5.55669 14.6625 5.31926 14.5162 5.1732L14.5155 5.17395Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* right column */}
      <div className="hidden lg:flex flex-col">
        <div>
          <FadeColor />
          <Spiral />
        </div>
        <div>
          <Line />
        </div>
        <div className="absolute lg:bottom-[12%] 2xl:-bottom-[9%] lg:right-6 xl:right-10 w-[20%] gradient-border py-5">
          <p className="text-[#B0B0B0]">
            ProinProin efficitur, mauris vel condimentum pulvinar, velit orci
            consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec
            odio orci.
          </p>
        </div>

        <div className="absolute lg:bottom-0 xl:-bottom-[7%] 2xl:-bottom-[28%] lg:right-6 xl:right-20 py-5 flex flex-row justify-between items-center">
          <div className="flex flex-row gap-5 items-center">
            <svg
              width="62"
              height="63"
              viewBox="0 0 62 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="31"
                cy="31.5735"
                rx="31"
                ry="30.9593"
                fill="#D9D9D9"
              />
            </svg>
            <div className="flex flex-col">
              <p className="text-white medium text-[16px]">Eleanor Pena</p>
              <p className="text-[#B0B0B0] light text-[12px]">Eleanor Pena</p>
            </div>
          </div>

          <svg
            width="126"
            height="48"
            viewBox="0 0 126 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.602539"
              width="126"
              height="46.9383"
              fill="url(#pattern0_417_5094)"
            />
            <defs>
              <pattern
                id="pattern0_417_5094"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#image0_417_5094"
                  transform="matrix(0.00456621 0 0 0.0122413 0 -0.00306033)"
                />
              </pattern>
              <image
                id="image0_417_5094"
                width="219"
                height="110"
                href="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
      </div>

      {/* signature */}
    </div>
  );
}

export default Hero;
