import { CSSProperties } from "react";

const contribution_color_styles = {
  high: { light: "#2ca44e", dark: "#6bc46d" },
  med: { light: "#2ca44e", dark: "#2a6a30" },
  low: { light: "#4bc26b", dark: "#1b4721" },
  empty: { light: "#f0f2f5", dark: "#2a313c" },
};

const day_styles: CSSProperties = {
  backgroundColor: "#2c313d",
  height: "23px",
  width: "23px",
  minWidth: "23px",
  padding: 0,
  boxSizing: "border-box",
  borderRadius: "3px",
};

const no_day_styles: CSSProperties = {
  ...day_styles,
  backgroundColor: "transparent",
  border: "0px",
};

const table_container_styles: CSSProperties = {
  overflowY: "hidden",
  overflowX: "auto",
  width: "100%",
};
const graph_container_styles: CSSProperties = {
  marginLeft: "auto",
  marginRight: "auto",
  border: "1px solid",
  borderColor: "#3d444d",
  borderRadius: "5px",
  padding: "10px",
  marginTop: "10px",
};

const table_styles: CSSProperties = {
  borderCollapse: "separate",
  borderSpacing: "4px",
  overflow: "hidden",
};

const day_of_week_styles: CSSProperties = {
  padding: ".125 em .5em .125em 0",
  fontSize: "12px",
  textAlign: "left",
};

const day_of_week_label_styles: CSSProperties = {
  display: "block",
  height: "10px",
  position: "relative",
  bottom: "4px",
};

const header_styles: CSSProperties = {
  height: "10px",
  width: "10px",
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
  textAlign: "left",
  fontSize: "12px",
  whiteSpace: "nowrap",
};

const contribution_legend: CSSProperties = {
  display: "flex",
  gap: 3,
  flexDirection: "row-reverse",
  alignItems: "center",
  marginTop: "10px",
};

export {
  contribution_color_styles,
  contribution_legend,
  day_of_week_label_styles,
  day_of_week_styles,
  day_styles,
  graph_container_styles,
  header_styles,
  no_day_styles,
  table_container_styles,
  table_styles,
};
