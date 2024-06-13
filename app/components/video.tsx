import Image from "next/image";
import React from "react";

function Video() {
  return (
    <div className="relative flex flex-row justify-center items-center w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px] xl:h-[763px] mt-20">
      <Image src="/images/thumbnail.png" fill sizes="100vw" alt="Video Thumbnail" />
      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-none stroke-none border-none bg-transparent ">
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white light">Play</p>
        <svg
        className="w-16 sm:w-24 md:w-32 lg:w-[218px]"
          width="218"
          height="224"
          viewBox="0 0 218 224"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M171.976 34.5046C140.136 36.1496 131.401 8.15002 104.576 1.59473C76.0083 -5.38956 63.1146 11.9871 60.0615 26.1946C57.7081 37.1466 52.7613 41.9006 39.7238 44.9458C30.4313 46.6557 22.1972 51.4993 24.3539 64.7849C26.5107 78.0705 22.1391 86.0033 15.6315 90.7558C9.12382 95.5092 3.05241 102.257 0.917027 111.048C-2.69981 125.929 4.65274 141.515 18.2038 148.426C33.4315 156.026 41.6097 164.346 40.5402 181.602C40.2729 185.915 42.0673 208.861 63.8393 201.925C69.3382 200.173 92.0857 188.36 105.89 210.285C109.327 215.744 117.838 221.116 125.616 223.02C146.473 228.118 167.796 212.696 169.914 191.462C172.211 175.751 175.061 168.384 191.994 173.871C208.75 179.301 218.777 155.91 209.401 143.911C196.39 130.387 211.916 106.064 216.847 85.7692C223.586 58.0285 199.768 31.4834 171.976 34.5046Z"
            fill="#141414"
          />
        </svg>
      </button>
    </div>
  );
}

export default Video;
