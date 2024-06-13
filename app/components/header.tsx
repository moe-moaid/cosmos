"use client";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  const navOptions = [
    "Home",
    "About",
    "Pages +",
    "Services +",
    "Projects",
    "Blogs +",
  ];
  return (
    <nav className="flex flex-row justify-between items-center px-8 py-10 bg-transparent">
      <svg
        className="w-[150px] md:w-[220px]"
        width="220"
        height="40"
        viewBox="0 0 205 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.22421 20L0 15.2479L6.06171 4.75216L14.2907 9.49609L14.2954 0H26.4189L26.4236 9.49609L34.6525 4.75216L40.7143 15.2479L32.49 20L40.7143 24.7521L34.6525 35.2479L26.4236 30.5039L26.4189 40H14.2954L14.2907 30.5039L6.06171 35.2479L0 24.7521L8.22421 20Z"
          fill="#EDBC5A"
        />
        <path
          d="M66.3224 29.448C62.973 29.448 60.189 28.3387 57.9704 26.12C55.773 23.88 54.6744 21.1067 54.6744 17.8C54.6744 14.4933 55.773 11.7307 57.9704 9.512C60.189 7.272 62.973 6.152 66.3224 6.152C68.3277 6.152 70.1837 6.62133 71.8904 7.56C73.597 8.47733 74.941 9.736 75.9224 11.336L71.5064 13.896C71.0157 13.0213 70.3117 12.3493 69.3944 11.88C68.477 11.3893 67.453 11.144 66.3224 11.144C64.3384 11.144 62.749 11.752 61.5544 12.968C60.381 14.184 59.7944 15.7947 59.7944 17.8C59.7944 19.8053 60.381 21.416 61.5544 22.632C62.749 23.848 64.3384 24.456 66.3224 24.456C67.453 24.456 68.477 24.2107 69.3944 23.72C70.333 23.2293 71.037 22.5573 71.5064 21.704L75.9224 24.264C74.9624 25.864 73.629 27.1333 71.9224 28.072C70.2157 28.9893 68.349 29.448 66.3224 29.448ZM92.0141 27.016C90.3714 28.6373 88.3661 29.448 85.9981 29.448C83.6301 29.448 81.6248 28.6373 79.9821 27.016C78.3394 25.3733 77.5181 23.368 77.5181 21C77.5181 18.632 78.3394 16.6373 79.9821 15.016C81.6248 13.3733 83.6301 12.552 85.9981 12.552C88.3661 12.552 90.3714 13.3733 92.0141 15.016C93.6568 16.6373 94.4781 18.632 94.4781 21C94.4781 23.368 93.6568 25.3733 92.0141 27.016ZM83.3741 23.72C84.0781 24.424 84.9528 24.776 85.9981 24.776C87.0434 24.776 87.9181 24.424 88.6221 23.72C89.3261 23.016 89.6781 22.1093 89.6781 21C89.6781 19.8907 89.3261 18.984 88.6221 18.28C87.9181 17.576 87.0434 17.224 85.9981 17.224C84.9528 17.224 84.0781 17.576 83.3741 18.28C82.6701 18.984 82.3181 19.8907 82.3181 21C82.3181 22.1093 82.6701 23.016 83.3741 23.72ZM106.569 12.552C108.276 12.552 109.694 13.1387 110.825 14.312C111.977 15.4853 112.553 17.1067 112.553 19.176V29H107.753V19.88C107.753 18.9413 107.486 18.2267 106.953 17.736C106.441 17.224 105.78 16.968 104.969 16.968C104.052 16.968 103.326 17.2453 102.793 17.8C102.26 18.3547 101.993 19.176 101.993 20.264V29H97.1931V13H101.993V14.504C102.953 13.2027 104.478 12.552 106.569 12.552ZM120.393 17.672C120.393 17.992 120.66 18.2587 121.193 18.472C121.748 18.664 122.409 18.8667 123.177 19.08C123.945 19.272 124.713 19.528 125.481 19.848C126.249 20.168 126.9 20.7013 127.433 21.448C127.988 22.1733 128.265 23.0907 128.265 24.2C128.265 25.928 127.625 27.24 126.345 28.136C125.065 29.0107 123.487 29.448 121.609 29.448C118.239 29.448 115.945 28.1787 114.729 25.64L118.889 23.272C119.316 24.5307 120.223 25.16 121.609 25.16C122.761 25.16 123.337 24.8293 123.337 24.168C123.337 23.848 123.06 23.5813 122.505 23.368C121.972 23.1547 121.321 22.952 120.553 22.76C119.785 22.5467 119.017 22.28 118.249 21.96C117.481 21.6187 116.82 21.096 116.265 20.392C115.732 19.688 115.465 18.824 115.465 17.8C115.465 16.136 116.063 14.8453 117.257 13.928C118.473 13.0107 119.967 12.552 121.737 12.552C123.06 12.552 124.265 12.8507 125.353 13.448C126.441 14.024 127.316 14.8667 127.977 15.976L123.881 18.184C123.369 17.2453 122.655 16.776 121.737 16.776C120.841 16.776 120.393 17.0747 120.393 17.672ZM142.122 13H146.922V29H142.122V27.496C140.991 28.7973 139.402 29.448 137.354 29.448C135.242 29.448 133.439 28.6373 131.946 27.016C130.452 25.3733 129.706 23.368 129.706 21C129.706 18.632 130.452 16.6373 131.946 15.016C133.439 13.3733 135.242 12.552 137.354 12.552C139.402 12.552 140.991 13.2027 142.122 14.504V13ZM135.562 23.848C136.266 24.552 137.183 24.904 138.314 24.904C139.444 24.904 140.362 24.552 141.066 23.848C141.77 23.144 142.122 22.1947 142.122 21C142.122 19.8053 141.77 18.856 141.066 18.152C140.362 17.448 139.444 17.096 138.314 17.096C137.183 17.096 136.266 17.448 135.562 18.152C134.858 18.856 134.506 19.8053 134.506 21C134.506 22.1947 134.858 23.144 135.562 23.848ZM150.443 29V5.64H155.243V29H150.443ZM167.556 6.6C169.561 6.6 171.236 7.272 172.58 8.616C173.924 9.96 174.596 11.6347 174.596 13.64C174.596 15.6453 173.924 17.32 172.58 18.664C171.236 20.008 169.561 20.68 167.556 20.68H161.796V29H159.556V6.6H167.556ZM167.556 18.568C168.942 18.568 170.084 18.1093 170.98 17.192C171.897 16.2533 172.356 15.0693 172.356 13.64C172.356 12.2107 171.897 11.0373 170.98 10.12C170.084 9.18133 168.942 8.712 167.556 8.712H161.796V18.568H167.556ZM179.91 15.656C180.891 13.7147 182.577 12.744 184.966 12.744V14.792C183.515 14.792 182.31 15.2187 181.35 16.072C180.39 16.9253 179.91 18.2693 179.91 20.104V29H177.798V13H179.91V15.656ZM200.3 26.984C198.679 28.584 196.695 29.384 194.348 29.384C192.001 29.384 190.007 28.584 188.364 26.984C186.743 25.3627 185.932 23.368 185.932 21C185.932 18.632 186.743 16.648 188.364 15.048C190.007 13.4267 192.001 12.616 194.348 12.616C196.695 12.616 198.679 13.4267 200.3 15.048C201.943 16.648 202.764 18.632 202.764 21C202.764 23.368 201.943 25.3627 200.3 26.984ZM189.868 25.512C191.084 26.728 192.577 27.336 194.348 27.336C196.119 27.336 197.612 26.728 198.828 25.512C200.044 24.2747 200.652 22.7707 200.652 21C200.652 19.2293 200.044 17.736 198.828 16.52C197.612 15.2827 196.119 14.664 194.348 14.664C192.577 14.664 191.084 15.2827 189.868 16.52C188.652 17.736 188.044 19.2293 188.044 21C188.044 22.7707 188.652 24.2747 189.868 25.512Z"
          fill="white"
        />
      </svg>
      <div className="hidden sm:flex">
        <ul className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 lg:gap-8 normal text-white text-[8px] sm:text-[14px] lg:text-[18px] hover:cursor-pointer">
          {navOptions.map((option, index) => (
            <li
              key={index}
              className="hover:bg-primary hover:text-black hover:cursor-pointer hover:rounded-md px-2 py-1 transition-all ease-in-out duration-300"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:hidden">
        <button onClick={handleMenu}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.55556 2.76801C5.55556 4.30214 4.3119 5.54579 2.77778 5.54579C1.24365 5.54579 0 4.30214 0 2.76801C0 1.23389 1.24365 -0.00976562 2.77778 -0.00976562C4.3119 -0.00976562 5.55556 1.23389 5.55556 2.76801ZM5.55556 12.4901C5.55556 14.0242 4.3119 15.2679 2.77778 15.2679C1.24365 15.2679 0 14.0242 0 12.4901C0 10.956 1.24365 9.71232 2.77778 9.71232C4.3119 9.71232 5.55556 10.956 5.55556 12.4901ZM2.77778 24.9904C4.3119 24.9904 5.55556 23.7467 5.55556 22.2126C5.55556 20.6785 4.3119 19.4348 2.77778 19.4348C1.24365 19.4348 0 20.6785 0 22.2126C0 23.7467 1.24365 24.9904 2.77778 24.9904ZM15.2778 2.76801C15.2778 4.30214 14.0341 5.54579 12.5 5.54579C10.9659 5.54579 9.72224 4.30214 9.72224 2.76801C9.72224 1.23389 10.9659 -0.00976562 12.5 -0.00976562C14.0341 -0.00976562 15.2778 1.23389 15.2778 2.76801ZM12.5 15.2679C14.0341 15.2679 15.2778 14.0242 15.2778 12.4901C15.2778 10.956 14.0341 9.71232 12.5 9.71232C10.9659 9.71232 9.72224 10.956 9.72224 12.4901C9.72224 14.0242 10.9659 15.2679 12.5 15.2679ZM15.2778 22.2126C15.2778 23.7467 14.0341 24.9904 12.5 24.9904C10.9659 24.9904 9.72224 23.7467 9.72224 22.2126C9.72224 20.6785 10.9659 19.4348 12.5 19.4348C14.0341 19.4348 15.2778 20.6785 15.2778 22.2126ZM22.2222 5.54579C23.7563 5.54579 25 4.30214 25 2.76801C25 1.23389 23.7563 -0.00976562 22.2222 -0.00976562C20.6881 -0.00976562 19.4444 1.23389 19.4444 2.76801C19.4444 4.30214 20.6881 5.54579 22.2222 5.54579ZM25 12.4901C25 14.0242 23.7563 15.2679 22.2222 15.2679C20.6881 15.2679 19.4444 14.0242 19.4444 12.4901C19.4444 10.956 20.6881 9.71232 22.2222 9.71232C23.7563 9.71232 25 10.956 25 12.4901ZM22.2222 24.9904C23.7563 24.9904 25 23.7467 25 22.2126C25 20.6785 23.7563 19.4348 22.2222 19.4348C20.6881 19.4348 19.4444 20.6785 19.4444 22.2126C19.4444 23.7467 20.6881 24.9904 22.2222 24.9904Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-20 z-40 left-0 right-0 bg-black p-4 sm:hidden`}
      >
        <ul className="flex flex-col items-center gap-4 text-white text-[12px] bg-black">
          {navOptions.map((option, index) => (
            <li
              key={index}
              className="hover:bg-primary hover:text-black hover:cursor-pointer px-2 py-1 hover:rounded-md  transition-all ease-in-out duration-300"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;