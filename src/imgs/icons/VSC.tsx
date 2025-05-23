const VSC = ({size, fill, style}) => {
  return (
    <svg
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      focusable="false"
      height={size ?? "200px"}
      width={size ?? "200px"}
			style={style}
      fill={fill ?? "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z">
      </path>
    </svg>
  );
};
export default VSC
