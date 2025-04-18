const LeftArrow = ({size, stroke, strokeWidth}) => {
  return (
    <svg
      stroke={stroke ?? "currentColor"}
      fill="currentColor"
      strokeWidth={strokeWidth ?? 0}
      viewBox="0 0 24 24"
      height={size ?? "200px"}
      width={size ?? "200px"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z">
      </path>
    </svg>
  );
};

export default LeftArrow
