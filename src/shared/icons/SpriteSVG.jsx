import PropTypes from "prop-types";
export const SpriteSVG = ({ name }) => {
  switch (name) {
    case "edit":
      return (
        <svg id="icon-edit" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.88"
            d="M22.667 4c0.679-0.661 1.607-1.069 2.631-1.069 2.083 0 3.771 1.688 3.771 3.771 0 1.024-0.408 1.952-1.070 2.631l0.001-0.001-18 18-7.333 2 2-7.333 18-18z"
          ></path>
        </svg>
      );
    case "close":
      return (
        <svg id="icon-close" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2"
            d="M24 8l-16 16M8 8l16 16"
          ></path>
        </svg>
      );
    case "youtube":
      return (
        <svg id="icon-youtube" viewBox="0 0 32 32">
          <path d="M24.24 6c-1.36-0.080-4.16-0.16-8.4-0.16h-0.56c-4.080 0-6.8 0.080-8.16 0.24-1.84 0.16-3.12 0.64-3.84 1.28-0.64 0.56-1.12 1.6-1.28 2.96-0.080 0.88-0.16 2.72-0.16 5.52v0.4c0 2.64 0.080 4.48 0.24 5.36 0.24 1.28 0.64 2.24 1.44 2.8 0.8 0.64 2.16 1.040 4.080 1.2 1.36 0.080 4.16 0.16 8.4 0.16h0.56c4.080 0 6.8-0.080 8.16-0.24 1.84-0.16 3.12-0.64 3.84-1.28 0.64-0.56 1.12-1.6 1.28-2.96 0.080-0.88 0.16-2.72 0.16-5.52v-0.4c0-2.64-0.080-4.48-0.24-5.36-0.24-1.28-0.64-2.24-1.44-2.8-0.8-0.64-2.16-1.040-4.080-1.2zM21.12 15.84l-8.8 5.28v-10.56l8.8 5.28z"></path>
        </svg>
      );
    case "trash":
      return (
        <svg id="icon-trash" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            d="M21.333 8v-1.067c0-1.493 0-2.24-0.291-2.811-0.261-0.504-0.661-0.905-1.151-1.158l-0.015-0.007c-0.571-0.291-1.317-0.291-2.811-0.291h-2.133c-1.493 0-2.24 0-2.811 0.291-0.504 0.261-0.905 0.661-1.158 1.15l-0.007 0.015c-0.291 0.571-0.291 1.317-0.291 2.811v1.067M13.333 15.333v6.667M18.667 15.333v6.667M4 8h24M25.333 8v14.933c0 2.24 0 3.36-0.436 4.216-0.391 0.756-0.992 1.357-1.726 1.738l-0.022 0.011c-0.856 0.436-1.976 0.436-4.216 0.436h-5.867c-2.24 0-3.36 0-4.216-0.436-0.756-0.391-1.357-0.992-1.737-1.726l-0.011-0.022c-0.436-0.856-0.436-1.976-0.436-4.216v-14.933"
          ></path>
        </svg>
      );
    case "instagram":
      return (
        <svg id="icon-instagram" viewBox="0 0 32 32">
          <path d="M28.718 10.757c-0.015-1.134-0.233-2.213-0.617-3.208l0.021 0.063c-0.682-1.722-2.021-3.059-3.7-3.722l-0.044-0.015c-0.921-0.356-1.985-0.573-3.097-0.596l-0.010-0c-1.367-0.061-1.801-0.078-5.271-0.078-3.472 0-3.917 0-5.274 0.078-1.063 0.023-2.112 0.223-3.106 0.597-1.723 0.678-3.062 2.015-3.727 3.693l-0.015 0.044c-0.357 0.919-0.574 1.981-0.595 3.091l-0 0.009c-0.062 1.367-0.080 1.8-0.080 5.265 0 3.466 0 3.909 0.080 5.265 0.021 1.063 0.222 2.11 0.594 3.104 0.682 1.721 2.022 3.058 3.701 3.721l0.044 0.015c0.917 0.37 1.979 0.601 3.091 0.638l0.016 0c1.369 0.061 1.803 0.080 5.274 0.080 3.472 0 3.917 0 5.274-0.080 1.122-0.023 2.187-0.239 3.172-0.616l-0.064 0.022c1.722-0.68 3.061-2.016 3.727-3.693l0.016-0.044c0.374-0.994 0.575-2.041 0.595-3.104 0.062-1.366 0.080-1.799 0.080-5.266-0.002-3.465-0.002-3.905-0.082-5.263zM15.989 22.531c-0.002 0-0.004 0-0.007 0-3.624 0-6.563-2.937-6.565-6.561v-0c0.002-3.624 2.94-6.561 6.565-6.561 0.002 0 0.005 0 0.007 0h-0c3.629 0 6.571 2.937 6.571 6.561-0.004 3.624-2.942 6.56-6.567 6.56-0.002 0-0.003 0-0.005 0h0zM22.823 10.696c-0.845 0-1.53-0.685-1.53-1.53s0.685-1.53 1.53-1.53v0c0.012-0 0.027-0.001 0.042-0.001 0.845 0 1.53 0.685 1.53 1.53s-0.685 1.53-1.53 1.53c-0.015 0-0.029-0-0.044-0.001l0.002 0z"></path>
          <path d="M15.992 19.976c2.211 0 4.004-1.793 4.004-4.004s-1.793-4.004-4.004-4.004v0c-2.211 0-4.004 1.793-4.004 4.004s1.793 4.004 4.004 4.004v0z"></path>
        </svg>
      );
    case "facebook":
      return (
        <svg id="icon-facebook" viewBox="0 0 32 32">
          <path d="M19.52 4.64h0.96v3.6h-1.2c-0.48 0-0.96 0-1.2 0.24s-0.24 0.48-0.24 1.040v1.28h2.64v3.040h-2.64v13.2h-4.080v-13.28h-2.16v-3.040h2.16v-1.040c0-1.76 0.24-3.040 0.72-3.6 0.72-1.040 2.16-1.52 4.32-1.52 0.24 0.080 0.48 0.080 0.72 0.080z"></path>
        </svg>
      );
    case "chevron_down":
      return (
        <svg id="icon-chevron_down" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.88"
            d="M8 20l8-8 8 8"
          ></path>
        </svg>
      );
    case "calendar":
      return (
        <svg id="icon-calendar" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M25.333 5.333h-18.666c-1.472 0-2.667 1.195-2.667 2.667v18.667c0 1.472 1.194 2.666 2.667 2.666h18.666c1.472 0 2.667-1.194 2.667-2.666v-18.667c0-1.472-1.194-2.667-2.667-2.667zM21.333 2.667v5.333M10.667 2.667v5.333M4 13.333h24"
          ></path>
        </svg>
      );
    case "add_photo":
      return (
        <svg id="icon-add_photo" viewBox="0 0 32 32">
          <path
            fill="#546081"
            style="fill: var(--color1, #546081)"
            d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"
          ></path>
          <path
            fill="none"
            stroke="#f3f3f3"
            style="stroke: var(--color2, #f3f3f3)"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2"
            d="M16.25 11v10.5M11 16.25h10.5"
          ></path>
        </svg>
      );
    case "search":
      return (
        <svg id="icon-search" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.88"
            d="M14.667 25.333c0.039 0 0.085 0.001 0.131 0.001 5.891 0 10.667-4.776 10.667-10.667s-4.776-10.667-10.667-10.667c-0.046 0-0.092 0-0.138 0.001l0.007-0c-5.835 0.074-10.537 4.821-10.537 10.666s4.702 10.593 10.53 10.666l0.007 0zM28 28l-5.8-5.8"
          ></path>
        </svg>
      );
    case "plus":
      return (
        <svg id="icon-plus" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="1.9862"
            d="M16 6.988v18.024M6.988 16h18.023"
          ></path>
        </svg>
      );
    case "logo":
      return (
        <svg id="icon-logo" viewBox="0 0 32 32">
          <path d="M22.13 0h-12.261l-9.87 9.87v12.261l9.87 9.87h12.261l9.87-9.87v-12.261l-9.87-9.87zM11.566 22.285l-6.322-6.323 6.322-6.322c2.391-2.391 6.323-2.391 8.714 0l6.322 6.322-6.322 6.323c-2.391 2.39-6.247 2.39-8.714 0z"></path>
        </svg>
      );
    case "eye_off":
      return (
        <svg id="icon-eye_off" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M23.92 23.92c-2.175 1.671-4.923 2.696-7.908 2.747l-0.012 0c-9.333 0-14.667-10.667-14.667-10.667 1.713-3.152 3.977-5.791 6.689-7.877l0.058-0.043M13.2 5.653c0.833-0.203 1.788-0.32 2.771-0.32 0.010 0 0.020 0 0.030 0h-0.002c9.333 0 14.667 10.667 14.667 10.667-0.871 1.615-1.826 3.008-2.91 4.29l0.030-0.036M18.827 18.827c-0.732 0.786-1.773 1.277-2.929 1.277-2.208 0-3.997-1.79-3.997-3.997 0-0.027 0-0.054 0.001-0.081l-0 0.004c0.020-1.128 0.505-2.139 1.27-2.854l0.002-0.002M1.333 1.333l29.333 29.333"
          ></path>
        </svg>
      );
    case "done":
      return (
        <svg id="icon-done" viewBox="0 0 32 32">
          <path d="M14.133 18.4l-2.9-2.9c-0.215-0.217-0.513-0.352-0.843-0.352-0.026 0-0.051 0.001-0.076 0.002l0.003-0c-0.359 0.001-0.683 0.147-0.917 0.383l-0 0c-0.227 0.228-0.367 0.543-0.367 0.891 0 0.015 0 0.030 0.001 0.045l-0-0.002c0 0.377 0.123 0.689 0.367 0.933l3.8 3.8c0.228 0.227 0.543 0.367 0.891 0.367 0.015 0 0.030-0 0.045-0.001l-0.002 0c0.013 0 0.027 0.001 0.042 0.001 0.348 0 0.662-0.14 0.891-0.367l7.567-7.567c0.218-0.216 0.353-0.516 0.353-0.847 0-0.025-0.001-0.050-0.002-0.074l0 0.003c-0.002-0.358-0.149-0.682-0.384-0.916l-0-0c-0.228-0.227-0.543-0.367-0.891-0.367-0.015 0-0.030 0-0.045 0.001l0.002-0c-0.013-0-0.027-0.001-0.042-0.001-0.348 0-0.663 0.14-0.891 0.367l-6.6 6.6zM16 29.333c-0.025 0-0.055 0-0.084 0-1.849 0-3.607-0.387-5.199-1.084l0.083 0.033c-1.644-0.709-3.048-1.669-4.234-2.85l0 0c-1.2-1.2-2.149-2.611-2.849-4.233-0.664-1.508-1.051-3.267-1.051-5.116 0-0.030 0-0.059 0-0.089l-0 0.005c0-1.844 0.351-3.577 1.051-5.2 0.709-1.644 1.669-3.048 2.85-4.234l-0 0c1.2-1.2 2.611-2.151 4.233-2.851 1.508-0.663 3.267-1.050 5.116-1.050 0.030 0 0.059 0 0.089 0l-0.005-0c1.844 0 3.577 0.349 5.2 1.049 1.644 0.709 3.048 1.671 4.234 2.851l-0-0c1.2 1.2 2.149 2.611 2.849 4.233 0.664 1.508 1.051 3.267 1.051 5.116 0 0.030-0 0.059-0 0.089l0-0.005c0 0.025 0 0.055 0 0.084 0 1.849-0.387 3.608-1.084 5.199l0.033-0.083c-0.709 1.644-1.669 3.048-2.85 4.234l0-0c-1.2 1.2-2.611 2.149-4.233 2.849-1.508 0.664-3.267 1.051-5.116 1.051-0.030 0-0.059-0-0.089-0l0.005 0zM16 26.667c2.956 0 5.472-1.039 7.551-3.116 2.077-2.079 3.116-4.595 3.116-7.551s-1.039-5.472-3.116-7.551c-2.079-2.077-4.595-3.116-7.551-3.116s-5.472 1.039-7.549 3.116c-2.079 2.079-3.117 4.595-3.117 7.551s1.040 5.472 3.117 7.551c2.077 2.077 4.593 3.116 7.549 3.116z"></path>
        </svg>
      );
    case "error":
      return (
        <svg id="icon-error" viewBox="0 0 32 32">
          <path d="M14.667 20h2.667v2.667h-2.667v-2.667zM14.667 9.333h2.667v8h-2.667v-8zM15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path>
        </svg>
      );
    case "eye":
      return (
        <svg id="icon-eye" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M1.333 16s5.333-10.667 14.667-10.667 14.667 10.667 14.667 10.667-5.333 10.667-14.667 10.667-14.667-10.667-14.667-10.667z"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M16 20c2.209 0 4-1.791 4-4s-1.791-4-4-4v0c-2.209 0-4 1.791-4 4s1.791 4 4 4v0z"
          ></path>
        </svg>
      );
    case "toggle":
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.25 15.8333H4.75"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.25 9.5H4.75"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.25 22.1667H4.75"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.25 28.5H4.75"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "close-menu":
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5 9.5L9.5 28.5"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 9.5L28.5 28.5"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "edit-01":
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_198_1441)">
            <path
              d="M1.62669 11.0323C1.67264 10.6188 1.69561 10.4121 1.75816 10.2188C1.81367 10.0474 1.89208 9.88423 1.99129 9.73379C2.10311 9.56422 2.2502 9.41713 2.54438 9.12295L9.91733 1.75001C10.5617 1.10568 11.6063 1.10568 12.2507 1.75001V1.75001C12.895 2.39434 12.895 3.43901 12.2507 4.08334L4.87771 11.4563C4.58353 11.7505 4.43644 11.8976 4.26687 12.0094C4.11643 12.1086 3.95327 12.187 3.78183 12.2425C3.58859 12.3051 3.38184 12.328 2.96835 12.374L1.45898 12.5417L1.62669 11.0323Z"
              stroke="#F3F3F3"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_198_1441">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "close-modal":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "edit-02":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_6215_7251)">
            <path
              d="M11.334 2C11.5091 1.8249 11.7169 1.68601 11.9457 1.59125C12.1745 1.49649 12.4197 1.44772 12.6673 1.44772C12.9149 1.44772 13.1601 1.49649 13.3889 1.59125C13.6177 1.68601 13.8256 1.8249 14.0006 2C14.1757 2.1751 14.3146 2.38297 14.4094 2.61174C14.5042 2.84051 14.5529 3.08571 14.5529 3.33333C14.5529 3.58096 14.5042 3.82615 14.4094 4.05493C14.3146 4.2837 14.1757 4.49157 14.0006 4.66667L5.00065 13.6667L1.33398 14.6667L2.33398 11L11.334 2Z"
              stroke="#F3F3F3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_6215_7251">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "add-modal-photo":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14" cy="14" r="14" fill="#546081" />
          <path
            d="M14.2188 9.625V18.8125"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.625 14.2188H18.8125"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "remove-ingredient":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0625 3.9375L3.9375 14.0625"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.0625 14.0625L3.9375 3.9375"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return "SVG not found";
  }
};

SpriteSVG.propTypes = {
  name: PropTypes.node,
};
