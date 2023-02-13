import React from 'react'

export function Logo({ fillColor, size }) {
  const fill = fillColor || '#5c7cfa'
  const sizeValue = `${size}px` || "100px"
  
  return (
    <svg viewBox="0,0,256,256" width={sizeValue} height={sizeValue} fillRule="nonzero">
      <g fill={fill} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
        <g transform="scale(5.12,5.12)">
          <path d="M38.399,7h-26.798c-3.64,0 -6.601,2.969 -6.601,6.622l0.061,17.737c0,3.662 2.928,6.641 6.526,6.641h3.46l0.012,7.002c0.001,0.417 0.26,0.789 0.65,0.935c0.114,0.042 0.232,0.063 0.35,0.063c0.283,0 0.56,-0.121 0.754,-0.343l6.678,-7.66l15.001,-0.073c3.71,0 6.508,-2.748 6.508,-6.391v-17.915c0,-3.649 -2.961,-6.618 -6.601,-6.618zM23,21.035c0.037,1.447 -0.626,4.735 -3.397,6.824c-0.18,0.136 -0.392,0.202 -0.601,0.202c-0.303,0 -0.603,-0.137 -0.799,-0.398c-0.333,-0.441 -0.245,-1.068 0.196,-1.4c0.883,-0.666 1.471,-1.488 1.867,-2.293c-0.247,0.056 -0.502,0.091 -0.765,0.091c-1.93,0 -3.5,-1.583 -3.5,-3.53c0,-1.947 1.569,-3.531 3.499,-3.531c1.93,0 3.5,1.583 3.5,3.53zM33.999,21.035c0.037,1.447 -0.626,4.735 -3.397,6.824c-0.18,0.136 -0.392,0.202 -0.601,0.202c-0.303,0 -0.603,-0.137 -0.799,-0.398c-0.333,-0.441 -0.245,-1.068 0.196,-1.4c0.883,-0.666 1.471,-1.488 1.867,-2.293c-0.247,0.056 -0.502,0.091 -0.765,0.091c-1.93,0 -3.5,-1.583 -3.5,-3.53c0,-1.947 1.57,-3.53 3.5,-3.53c1.93,0 3.5,1.583 3.5,3.53z"></path>
        </g>
      </g>
    </svg>
  )
}


export function LoadingSvg({ fill }) {
  let finalFill = "#8129d9" || fill;

  return (
    <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 100 100" enableBackground="new 0 0 0 0" strokeWidth="1.2">
      <path fill={finalFill} d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur=".7s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite" />
      </path>
    </svg>
  )
}