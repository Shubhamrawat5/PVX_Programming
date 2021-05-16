import React from 'react';

function Loader(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "0 0",
      }}
      className="animate-ping"
      width={280}
      height={250}
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <style />
      <g
        style={{
          transformOrigin: "140px 125px",
        }}
      >
        <path
          d="M83.823 145.735v-54.56h12.56q10.4 0 15.4 3.68t5 12.4q0 4.8-1.84 8t-4.6 5.16q-2.76 1.96-5.96 2.8-3.2.84-5.92.84h-7.92v21.68h-6.72zm6.72-48.56v20.88h7.36q2.72 0 4.92-.52 2.2-.52 3.8-1.76 1.6-1.24 2.48-3.36.88-2.12.88-5.32t-.92-5.16q-.92-1.96-2.72-3-1.8-1.04-4.52-1.4-2.72-.36-6.32-.36h-4.96"
          //fill="#df1317"
          className="fill-current text-purple-900"
          strokeWidth="none"
        />
        <path
          d="M139.583 145.735l-18.16-54.56h6.8l15.68 48.16h.08l15.44-48.16h6.8l-18.16 54.56h-8.48"
          // fill="#e4934b"
          className="fill-current text-purple-900"
          strokeWidth="none"
        />
        <path
          d="M169.263 145.735l15.76-27.76-15.76-26.8h7.6l12.88 22.16 12.8-22.16h7.6l-16.16 27.44 16.24 27.12h-7.76l-13.12-22.8-12.48 22.8h-7.6"
          // fill="#e2bb8b"
          className="fill-current text-purple-900"
          strokeWidth="none"
        />
      </g>
      <style id="fade-8cab2f5a-4a43-4a0d-ada5-20624c7ea701">
        {
          "@keyframes fade-8cab2f5a-4a43-4a0d-ada5-20624c7ea701{0%{animation-timing-function:cubic-bezier(.2057,.573,.3723,.9184);opacity:1}to{opacity:0}}"
        }
      </style>
    </svg>
  );
}

export default Loader;
