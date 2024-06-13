import Image from "next/image";
import React from "react";
import Topography from "./topography";

function Ideas() {
  const cards = [
    {
      title: "Web Design & Development",
      description:
        "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam.",
      order: "01",
    },
    {
      title: "Advertising and Marketing Campaigns",
      description:
        "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam.",
      order: "02",
    },
    {
      title: "Creative Consulting and Development",
      description:
        "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam.",
      order: "03",
    },
    {
      title: "Branding and Identity Design",
      description:
        "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam.",
      order: "03",
    },
  ];
  return (
    <div className="relative">
      <svg
        className=" hidden xl:block absolute xl:top-0 2xl:top-5 z-20 xl:right-2 2xl:right-12 xl:w-44 2xl:w-[300px]"
        width="300"
        height="289"
        viewBox="0 0 300 289"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M91.0843 1.5765C92.0438 1.16758 93.0085 0.768338 93.9781 0.378906H206.022C206.992 0.768338 207.956 1.16758 208.916 1.5765H91.0843Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M68.5382 13.5525C69.1632 13.1487 69.7915 12.7495 70.4229 12.3549H229.577C230.209 12.7495 230.837 13.1487 231.462 13.5525H68.5382Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M53.8785 24.3308C53.4026 24.7271 52.9291 25.1263 52.4583 25.5284H247.542C247.071 25.1263 246.597 24.7271 246.122 24.3308H53.8785Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M39.962 37.5044C40.3352 37.1031 40.7107 36.7039 41.0882 36.3068H258.912C259.289 36.7039 259.665 37.1031 260.038 37.5044H39.962Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M30.8399 48.2827C30.5342 48.6803 30.2305 49.0796 29.9287 49.4803H118.189C119.455 49.0563 120.733 48.6569 122.021 48.2827H30.8399Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M177.979 48.2827C179.267 48.6569 180.545 49.0563 181.811 49.4803H270.071C269.77 49.0796 269.466 48.6803 269.16 48.2827H177.979Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M95.7835 60.2587H22.5253C22.2768 60.6566 22.0301 61.0558 21.7853 61.4563H93.9719C94.5712 61.0507 95.1751 60.6515 95.7835 60.2587Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M206.028 61.4563C205.429 61.0507 204.825 60.6515 204.216 60.2587H277.475C277.723 60.6566 277.97 61.0558 278.215 61.4563H206.028Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M80.6541 72.2346H15.791C15.5906 72.6328 15.3919 73.032 15.195 73.4322H79.4295C79.8343 73.0296 80.2425 72.6304 80.6541 72.2346Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M220.57 73.4322C220.166 73.0296 219.757 72.6304 219.346 72.2346H284.209C284.409 72.6328 284.608 73.032 284.805 73.4322H220.57Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M70.0363 84.2106H10.4129C10.2548 84.6089 10.0983 85.0081 9.94351 85.4082H69.1481C69.4413 85.0067 69.7374 84.6075 70.0363 84.2106Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M230.852 85.4082C230.559 85.0067 230.263 84.6075 229.964 84.2106H289.587C289.745 84.6089 289.902 85.0081 290.057 85.4082H230.852Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M62.2882 96.1865H6.24197C6.12202 96.585 6.0037 96.9842 5.887 97.3841H61.6403C61.8536 96.9833 62.0696 96.5841 62.2882 96.1865Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M238.36 97.3841C238.146 96.9833 237.93 96.5841 237.712 96.1865H293.758C293.878 96.585 293.996 96.9842 294.113 97.3841H238.36Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M56.7048 108.162H3.17552C3.09098 108.561 3.00802 108.96 2.92667 109.36H56.2497C56.3989 108.96 56.5506 108.56 56.7048 108.162Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M243.75 109.36C243.601 108.96 243.449 108.56 243.295 108.162H296.824C296.909 108.561 296.992 108.96 297.073 109.36H243.75Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M52.9191 120.138H1.14254C1.09147 120.537 1.04197 120.936 0.994055 121.336H52.6305C52.7243 120.936 52.8205 120.537 52.9191 120.138Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M247.37 121.336C247.276 120.936 247.18 120.537 247.081 120.138H298.857C298.909 120.537 298.958 120.936 299.006 121.336H247.37Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M50.7236 132.114H0.0944656C0.075572 132.513 0.0582427 132.912 0.0424838 133.312H50.5864C50.6297 132.912 50.6755 132.513 50.7236 132.114Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M249.414 133.312C249.37 132.912 249.325 132.513 249.276 132.114H299.906C299.924 132.513 299.942 132.912 299.958 133.312H249.414Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M50 144.09H0C0.0125933 144.49 0.0267565 144.889 0.0424838 145.288H50.0059C50.002 144.922 50 144.556 50 144.19C50 144.157 50 144.124 50 144.09Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M249.994 145.288C249.998 144.922 250 144.556 250 144.19C250 144.157 250 144.124 250 144.09H300C299.996 144.212 299.992 144.334 299.988 144.456C299.979 144.733 299.968 145.011 299.958 145.288H249.994Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M50.6998 156.066H0.855364C0.900019 156.466 0.946251 156.865 0.994055 157.264H50.8492C50.797 156.865 50.7472 156.466 50.6998 156.066Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M249.151 157.264C249.203 156.865 249.253 156.466 249.3 156.066H299.145C299.1 156.466 299.054 156.865 299.006 157.264H249.151Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M52.87 168.042H2.68808C2.76602 168.442 2.84555 168.841 2.92667 169.24H53.1718C53.0688 168.842 52.9682 168.442 52.87 168.042Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M246.828 169.24C246.931 168.842 247.032 168.442 247.13 168.042H297.312C297.234 168.442 297.154 168.841 297.073 169.24H246.828Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M56.628 180.018H5.54297C5.65603 180.418 5.7707 180.817 5.887 181.216H57.0979C56.9388 180.818 56.7821 180.419 56.628 180.018Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M242.902 181.216C243.061 180.818 243.218 180.419 243.372 180.018H294.457C294.344 180.418 294.229 180.817 294.113 181.216H242.902Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M62.1791 191.994H9.48601C9.63684 192.394 9.78935 192.793 9.94351 193.192H62.8448C62.6203 192.794 62.3984 192.395 62.1791 191.994Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M237.155 193.192C237.38 192.794 237.602 192.395 237.821 191.994H290.514C290.363 192.394 290.211 192.793 290.057 193.192H237.155Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M69.8869 203.97H14.6125C14.8049 204.37 14.9991 204.77 15.195 205.168H70.7985C70.4917 204.771 70.1878 204.372 69.8869 203.97Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M229.202 205.168C229.508 204.771 229.812 204.372 230.113 203.97H285.388C285.195 204.37 285.001 204.77 284.805 205.168H229.202Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M80.4478 215.946H21.0606C21.3003 216.346 21.5419 216.746 21.7853 217.144H81.708C81.2845 216.748 80.8644 216.349 80.4478 215.946Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M218.292 217.144C218.716 216.748 219.136 216.349 219.552 215.946H278.939C278.7 216.346 278.458 216.746 278.215 217.144H218.292Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M95.4767 227.922H29.0362C29.3317 228.323 29.6293 228.722 29.9287 229.12H97.3626C96.7292 228.727 96.1005 228.328 95.4767 227.922Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M202.637 229.12C203.271 228.727 203.899 228.328 204.523 227.922H270.964C270.668 228.323 270.371 228.722 270.071 229.12H202.637Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M121.345 239.898H38.86C39.2252 240.299 39.5925 240.698 39.962 241.096H125.725C124.252 240.729 122.792 240.329 121.345 239.898Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M174.275 241.096C175.748 240.729 177.208 240.329 178.655 239.898H261.14C260.775 240.299 260.407 240.698 260.038 241.096H174.275Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M52.4583 253.072C51.994 252.675 51.5322 252.276 51.0728 251.874H248.927C248.468 252.276 248.006 252.675 247.542 253.072H52.4583Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M66.7133 263.85C67.3185 264.253 67.9268 264.653 68.5382 265.047H231.462C232.073 264.653 232.682 264.253 233.287 263.85H66.7133Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M91.0843 277.023C90.1683 276.633 89.257 276.234 88.3504 275.826H211.65C210.743 276.234 209.832 276.633 208.916 277.023H91.0843Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M150 288.999C156.461 288.999 162.827 288.592 169.074 287.802H130.926C137.173 288.592 143.539 288.999 150 288.999Z"
          fill="white"
          fill-opacity="0.2"
        />
      </svg>
      <Image className="hidden lg:block absolute bottom-0 right-0 size-[800px]" src='/images/customFade.svg' width={568} height={376} alt="image" />
      {/* mainCard */}
      <div className="relative w-[95%] lg:w-[85%] xl:w-[80%] 2xl:w-[67%] rounded-2xl px-2 lg:px-0 bg-[#1A1717] pt-16 mt-24 mx-auto">
        <Topography />
        <div className="flex flex-row justify-center items-center gap-5 mb-5">
          <p className="text-white light text-[18px] md:text-[20px] lg:text-[50px]">
            Unique <span className="text-white bold">Ideas</span>
          </p>
          <Image className="w-24 md:w-36 lg:w-44 xl:w-[200px]" src="/images/pc.png" width={220} height={64} alt="pcImage" />
        </div>

        <div className="flex flex-row justify-center items-center gap-5">
          <svg
          className="w-10 md:w-12 lg:w-16"
            // width="90"
            // height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_417_5173)">
              <circle cx="45" cy="41" r="41" fill="#EDBC5A" />
              <path
                d="M55.9806 35.1961C56.0889 34.6546 55.7377 34.1277 55.1961 34.0194L46.3709 32.2544C45.8293 32.1461 45.3025 32.4973 45.1942 33.0388C45.0859 33.5804 45.4371 34.1072 45.9787 34.2155L53.8233 35.7845L52.2544 43.6291C52.1461 44.1707 52.4973 44.6975 53.0388 44.8058C53.5804 44.9141 54.1072 44.5629 54.2155 44.0213L55.9806 35.1961ZM37.5547 47.8321L55.5547 35.832L54.4453 34.1679L36.4453 46.1679L37.5547 47.8321Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_417_5173"
                x="0"
                y="0"
                width="90"
                height="90"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_417_5173"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_417_5173"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <p className="text-white bold text-[18px] md:text-[20px] lg:text-[50px]">
            For Your <span className="text-white light">Business</span>.
          </p>
        </div>

        <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center lg:mx-[40px] xl:mx-[110px] mt-[60px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="border border-[#262626] group px-5 py-5 mb-5 flex flex-col lg:justify-between"
            >
              <p className="medium text-white text-[16px] mb-5">{card.title}</p>
              <p className="medium text-[#1A1717] group-hover:text-white text-[16px] transition-all ease-in-out duration-300">
                {card.description}
              </p>
              <div className="flex flex-row justify-between items-center mx-2">
                {/* initial svg */}
                <svg
                  className="group-hover:hidden"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="#333333" />
                  <path
                    d="M22.9839 10.1789C23.0827 9.63551 22.7223 9.11493 22.1789 9.01613L13.3241 7.40616C12.7807 7.30737 12.2601 7.66777 12.1613 8.21115C12.0625 8.75452 12.4229 9.27511 12.9663 9.3739L20.8372 10.805L19.4062 18.6759C19.3074 19.2193 19.6678 19.7399 20.2111 19.8387C20.7545 19.9375 21.2751 19.5771 21.3739 19.0337L22.9839 10.1789ZM9.56921 19.8222L22.5692 10.8222L21.4308 9.17781L8.43079 18.1778L9.56921 19.8222Z"
                    fill="white"
                  />
                </svg>
                {/* hover svg */}
                <svg
                  className="hidden group-hover:block transition-all ease-in-out duration-300"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="21" cy="21" r="21" fill="#EDBC5A" />
                  <path
                    d="M28.9839 16.1789C29.0827 15.6355 28.7223 15.1149 28.1789 15.0161L19.3241 13.4062C18.7807 13.3074 18.2601 13.6678 18.1613 14.2111C18.0625 14.7545 18.4229 15.2751 18.9663 15.3739L26.8372 16.805L25.4062 24.6759C25.3074 25.2193 25.6678 25.7399 26.2111 25.8387C26.7545 25.9375 27.2751 25.5771 27.3739 25.0337L28.9839 16.1789ZM15.5692 25.8222L28.5692 16.8222L27.4308 15.1778L14.4308 24.1778L15.5692 25.8222Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[50px] medium holotextDark group-hover:text-primary transition-all ease-in-out duration-300">
                  {card.order}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ring */}
      {/* color */}
    </div>
  );
}

export default Ideas;
