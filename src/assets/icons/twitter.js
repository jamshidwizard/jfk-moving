import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={21}
      height={19}
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.508 2.885a8.222 8.222 0 01-2.417.685 4.335 4.335 0 001.851-2.407 8.269 8.269 0 01-2.673 1.055A4.133 4.133 0 0014.198.844c-2.322 0-4.207 1.949-4.207 4.352 0 .34.037.672.11.99-3.498-.181-6.597-1.912-8.674-4.548a4.465 4.465 0 00-.568 2.19c0 1.51.742 2.84 1.87 3.622a4.097 4.097 0 01-1.907-.543v.054c0 2.109 1.452 3.87 3.377 4.267a3.982 3.982 0 01-1.109.153c-.27 0-.535-.026-.791-.078.535 1.728 2.088 2.988 3.93 3.02A8.265 8.265 0 010 16.129a11.639 11.639 0 006.45 1.954c7.74 0 11.971-6.63 11.971-12.381 0-.19-.004-.378-.012-.564a8.701 8.701 0 002.1-2.252"
        fill="#FEFEFE"
      />
    </svg>
  );
}

export default SvgComponent;