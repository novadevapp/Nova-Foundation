import React from "react";

export default ({onClick, id}) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick = {onClick}
      id = {id}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.28504 0.182617H3.56131L2.81657 0.906976H0.209961V2.35569H10.6364V0.906976H8.02978L7.28504 0.182617ZM8.40215 4.52877V11.7724H2.4442V4.52877H8.40215ZM0.954732 3.08006H9.89167V11.7724C9.89167 12.5692 9.2214 13.2211 8.40218 13.2211H2.44422C1.625 13.2211 0.954732 12.5692 0.954732 11.7724V3.08006Z"
        fill="#D14646"
      />
    </svg>
  );
};
