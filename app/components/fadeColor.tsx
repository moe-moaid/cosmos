import React from "react";

function FadeColor() {
  return (
    <div className="absolute top-0 right-0">
      <svg
        className="lg:w-[480px] xl:w-[795px]"
        viewBox="0 0 795 921"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_custom1)">
          <path
            d="M776 332.787C776 436.48 691.83 520.54 588 520.54C484.17 520.54 400 436.48 400 332.787C400 229.094 484.17 145.034 588 145.034C691.83 145.034 776 229.094 776 332.787Z"
            fill="#EDBC5A"
            fill-opacity="0.7"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_custom1"
            x="0"
            y="-254.966"
            width="1176"
            height="1175.51"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="200"
              result="effect0_foregroundBlur_custom1"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default FadeColor;
