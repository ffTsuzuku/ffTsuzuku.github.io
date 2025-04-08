const RightArrow = ({size, stroke, strokeWidth}) => {
  return (
    <svg
      stroke={stroke ?? "currentColor"}
      fill="currentColor"
      stroke-width={strokeWidth ?? 0}
      viewBox="0 0 24 24"
      height={size ?? '200px'}
      width={size ?? '200px'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
      </path>
    </svg>
  );
};

export default RightArrow
