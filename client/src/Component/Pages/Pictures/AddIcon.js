import React from "react";
export default ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className = "add-icon"
    >
      <g id="icon/content/add_circle_24px">
        <path
          id="icon/content/add_circle_24px_2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.9165 17.4998C2.9165 9.44984 9.44984 2.9165 17.4998 2.9165C25.5498 2.9165 32.0832 9.44984 32.0832 17.4998C32.0832 25.5498 25.5498 32.0832 17.4998 32.0832C9.44984 32.0832 2.9165 25.5498 2.9165 17.4998ZM18.9582 18.9582H24.7915V16.0415H18.9582V10.2082H16.0415V16.0415H10.2082V18.9582H16.0415V24.7915H18.9582V18.9582Z"
          fill="url(#paint0_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1.74984"
          y1="17.8239"
          x2="31.1109"
          y2="17.8239"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F27088" />
          <stop offset="1" stop-color="#C33650" />
        </linearGradient>
      </defs>
    </svg>
  );
};
