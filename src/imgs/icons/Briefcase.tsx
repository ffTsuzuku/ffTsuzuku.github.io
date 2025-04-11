const BriefCase = ({ size, fill, style }) => {
  return (
    <svg
      stroke="currentColor"
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 16 16"
      height={size ?? "30px"}
      width={size ?? "30px"}
			style={style}
      fill={fill ?? "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 4h-4v-1c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1v1h-4c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-9c0-0.55-0.45-1-1-1zM6 3.002c0.001-0.001 0.001-0.001 0.002-0.002h3.996c0.001 0.001 0.001 0.001 0.002 0.002v0.998h-4v-0.998zM15 8h-2v1.5c0 0.275-0.225 0.5-0.5 0.5h-1c-0.275 0-0.5-0.225-0.5-0.5v-1.5h-6v1.5c0 0.275-0.225 0.5-0.5 0.5h-1c-0.275 0-0.5-0.225-0.5-0.5v-1.5h-2v-1h14v1z">
      </path>
    </svg>
  );
};

export default BriefCase
