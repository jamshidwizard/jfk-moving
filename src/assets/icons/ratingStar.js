import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={30}
      height={28}
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.481.785c.286-.578.752-.578 1.037 0l3.599 7.29c.285.578 1.04 1.127 1.678 1.22l8.045 1.172c.638.092.782.537.32.986l-5.821 5.675c-.462.45-.75 1.338-.641 1.973l1.374 8.013c.109.635-.27.91-.84.61l-7.195-3.786c-.57-.3-1.504-.3-2.075 0L6.767 27.72c-.57.3-.948.025-.84-.61l1.375-8.013c.109-.635-.18-1.523-.641-1.973L.839 11.45c-.462-.45-.318-.893.32-.986l8.046-1.172c.638-.093 1.393-.642 1.678-1.22L14.48.785z"
        fill="#447E7F"
      />
    </svg>
  )
}

export default SvgComponent
