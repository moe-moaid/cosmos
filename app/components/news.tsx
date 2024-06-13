import React from "react";
import Carousel from "./carousel";

function News() {
          return (
    <div className="flex flex-col mt-10">
      <p className="mx-auto text-primary flex flex-row items-center gap-3">
        BLOG & NEWS
        <span>
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.94721 2.10557C1.45324 1.85858 0.852562 2.05881 0.605573 2.55279C0.358584 3.04676 0.558808 3.64744 1.05279 3.89443L1.94721 2.10557ZM15.8162 10.9487C16.3402 10.774 16.6233 10.2077 16.4487 9.68377L13.6026 1.14562C13.428 0.621679 12.8617 0.338519 12.3377 0.513167C11.8138 0.687815 11.5306 1.25414 11.7053 1.77808L14.2351 9.36754L6.64562 11.8974C6.12168 12.072 5.83852 12.6383 6.01317 13.1623C6.18781 13.6862 6.75414 13.9694 7.27808 13.7947L15.8162 10.9487ZM1.05279 3.89443L15.0528 10.8944L15.9472 9.10557L1.94721 2.10557L1.05279 3.89443Z"
              fill="#EDBC5A"
            />
          </svg>
        </span>
      </p>
      <h1 className="bold mx-auto text-white text-[40px]">Our Latest News & Blog Get</h1>
      <h1 className="bold mx-auto text-white text-[40px]">Every Updates</h1>

            {/* slider */}
          <Carousel />
    </div>
  );
}

export default News;
