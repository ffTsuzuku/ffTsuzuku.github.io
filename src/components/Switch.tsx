import React from "react";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  onIcon?: React.ReactNode;
  offIcon?: React.ReactNode;
	onBgColor?: string;
	offBgColor?: string;
	style?: 'circle'|'square';
	cssProps?: CSSRule
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
	style= 'circle,',
  checked = false,
  onChange,
  disabled = false,
  onIcon,
  offIcon,
	onBgColor = '#3B82F6',
	offBgColor = '#D1D5DB',
	cssProps
}) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleToggle = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

	const switchRadius = style === 'circle' ? "9999px" :'3px'
	const switcherRadius = style === 'circle' ? '50%' : '10%'
  return (
    <button
      onClick={handleToggle}
      disabled={disabled}
      style={{
        width: "60px",
        height: "32px",
        borderRadius: switchRadius,
        backgroundColor: isChecked ? onBgColor : offBgColor,
        padding: "2px",
        display: "flex",
        alignItems: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "background-color 0.3s",
        border: "none",
        position: "relative",
				...cssProps
      }}
    >
      {/* Icon inside the track */}
      <div
        style={{
          position: "absolute",
          left: isChecked ? "8px" : "auto",
          right: isChecked ? "auto" : "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "20px",
          height: "20px",
          pointerEvents: "none",
        }}
      >
        {isChecked ? onIcon : offIcon}
      </div>

      {/* Thumb */}
      <div
        style={{
          width: "28px",
          height: "28px",
          backgroundColor: "white",
          borderRadius: switchRadius,
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
          transform: isChecked ? "translateX(28px)" : "translateX(0)",
          transition: "transform 0.3s",
          zIndex: 1,
        }}
      />
    </button>
  );
};

export default ToggleSwitch;
