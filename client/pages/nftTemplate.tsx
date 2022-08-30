import React from "react";

const NFTSvg = (props: {
  originAddress: string;
  sinkAddress: string;
  degree: string;
}) => (
  <svg
    width="290"
    height="500"
    viewBox="0 0 290 500"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="m-auto"
  >
    <defs>
      <filter id="f1">
        <feImage
          result="p0"
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjkwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI5MCA1MDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzI5MHB4JyBoZWlnaHQ9JzUwMHB4JyBmaWxsPScjZDhkYTZiJy8+PC9zdmc+"
        />
        <feImage
          result="p1"
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjkwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI5MCA1MDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nMTg2JyBjeT0nMzk4JyByPScxMjBweCcgZmlsbD0nI2YwNWI1ZicvPjwvc3ZnPg=="
        />
        <feImage
          result="p2"
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjkwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI5MCA1MDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nMjI5JyBjeT0nMjkxJyByPScxMjBweCcgZmlsbD0nI2E5NjA0NScvPjwvc3ZnPg=="
        />
        <feImage
          result="p3"
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjkwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI5MCA1MDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nNjgnIGN5PSczNjMnIHI9JzEwMHB4JyBmaWxsPScjYzY2ZmRiJy8+PC9zdmc+"
        />
        <feBlend mode="overlay" in="p0" in2="p1" />
        <feBlend mode="exclusion" in2="p2" />
        <feBlend mode="overlay" in2="p3" result="blendOut" />
        <feGaussianBlur in="blendOut" stdDeviation="42" />
      </filter>{" "}
      <clipPath id="corners">
        <rect width="290" height="500" rx="42" ry="42" />
      </clipPath>
      <path
        id="text-path-a"
        d="M40 12 H250 A28 28 0 0 1 278 40 V460 A28 28 0 0 1 250 488 H40 A28 28 0 0 1 12 460 V40 A28 28 0 0 1 40 12 z"
      />
      <path id="minimap" d="M234 444C234 457.949 242.21 463 253 463" />
      <filter id="top-region-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="24" />
      </filter>
      <linearGradient id="grad-up" x1="1" x2="0" y1="1" y2="0">
        <stop offset="0.0" stopColor="white" stopOpacity="1" />
        <stop offset=".9" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="grad-down" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0.0" stopColor="white" stopOpacity="1" />
        <stop offset="0.9" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <mask id="fade-up" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="url(#grad-up)" />
      </mask>
      <mask id="fade-down" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="url(#grad-down)" />
      </mask>
      <mask id="none" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="white" />
      </mask>
      <linearGradient id="grad-symbol">
        <stop offset="0.7" stopColor="white" stopOpacity="1" />
        <stop offset=".95" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <mask id="fade-symbol" maskContentUnits="userSpaceOnUse">
        <rect width="290px" height="300px" fill="url(#grad-symbol)" />
      </mask>
    </defs>
    <g clipPath="url(#corners)">
      <rect fill="d8da6b" x="0px" y="0px" width="290px" height="500px" />
      <rect
        style={{ filter: "url(#f1)" }}
        x="0px"
        y="0px"
        width="290px"
        height="500px"
      />{" "}
      <g
        style={{
          filter: "url(#top-region-blur)",
          transform: "scale(1.5)",
          transformOrigin: "center top",
        }}
      >
        <rect fill="none" x="0px" y="0px" width="290px" height="500px" />
        <ellipse
          cx="50%"
          cy="0px"
          rx="180px"
          ry="120px"
          fill="#041C32"
          opacity="0.85"
        />
      </g>
      <rect
        x="0"
        y="0"
        width="290"
        height="500"
        rx="42"
        ry="42"
        fill="rgba(0,0,0,0)"
        stroke="rgba(255,255,255,0.2)"
      />
    </g>
    <text textRendering="optimizeSpeed">
      <textPath
        startOffset="-100%"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontSize="10px"
        xlinkHref="#text-path-a"
      >
        {props.originAddress} → {props.sinkAddress} ⚛ {props.degree}
        <animate
          additive="sum"
          attributeName="startOffset"
          from="0%"
          to="100%"
          begin="0s"
          dur="30s"
          repeatCount="indefinite"
        />
      </textPath>{" "}
      <textPath
        startOffset="0%"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontSize="10px"
        xlinkHref="#text-path-a"
      >
        {props.originAddress} → {props.sinkAddress} ⚛ {props.degree}
        <animate
          additive="sum"
          attributeName="startOffset"
          from="0%"
          to="100%"
          begin="0s"
          dur="30s"
          repeatCount="indefinite"
        />{" "}
      </textPath>
    </text>
    <g mask="url(#fade-symbol)">
      <rect fill="none" x="0px" y="0px" width="290px" height="400px" />{" "}
      <text
        y="70px"
        x="32px"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontWeight="200"
        fontSize="36px"
      >
        I am
      </text>
      <text
        y="115px"
        x="32px"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontWeight="200"
        fontSize="36px"
      >
        {props.degree} degrees
      </text>
      <text
        y="160px"
        x="32px"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontWeight="200"
        fontSize="36px"
      >
        from
      </text>
      <text
        y="205px"
        x="32px"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontWeight="200"
        fontSize="36px"
      >
        Vitalik
      </text>
    </g>
    <rect
      x="16"
      y="16"
      width="258"
      height="468"
      rx="26"
      ry="26"
      fill="rgba(0,0,0,0)"
      stroke="rgba(255,255,255,0.2)"
    />
    <g style={{ transform: "translate(84px, 300px) scale(5)" }}>
      <g>
        <path
          d="M4.40434 13.6099C3.51517 13.1448 3 12.5924 3 12C3 10.3431 7.02944 9 12 9C16.9706 9 21 10.3431 21 12C21 12.7144 20.2508 13.3705 19 13.8858"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M12 11.01L12.01 10.9989"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M16.8827 6C16.878 4.97702 16.6199 4.25309 16.0856 3.98084C14.6093 3.22864 11.5832 6.20912 9.32664 10.6379C7.07005 15.0667 6.43747 19.2668 7.91374 20.019C8.44117 20.2877 9.16642 20.08 9.98372 19.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M9.60092 4.25164C8.94056 3.86579 8.35719 3.75489 7.91369 3.98086C6.43742 4.73306 7.06999 8.93309 9.32658 13.3619C11.5832 17.7907 14.6092 20.7712 16.0855 20.019C17.3977 19.3504 17.0438 15.9577 15.3641 12.1016"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="10s"
          repeatCount="indefinite"
        />
      </g>
    </g>
  </svg>
);

export default NFTSvg;
