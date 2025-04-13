const Activity = ({...props}) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
			{...props}
    >
      <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5"></path>
    </svg>
  );
};

export default Activity
