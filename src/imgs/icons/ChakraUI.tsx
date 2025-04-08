const ChakraUI = ({style, fill, size}) => {
  return (
    <svg
      stroke="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height={size ?? "200px"}
      width={size ?? "200px"}
			style={style}
      fill={fill ?? "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z">
      </path>
    </svg>
  );
};

export default ChakraUI
