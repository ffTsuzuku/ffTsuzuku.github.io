import {
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import roadmap from "../../data/lc_roadmap";
import {
	contribution_legend,
  day_of_week_label_styles,
  day_of_week_styles,
  day_styles,
  graph_container_styles,
  header_styles,
  no_day_styles,
  table_container_styles,
  table_styles,
} from "./styles";
import {
	get_count_and_color_by_date,
  calculate_days_of_week,
  calculate_header_span,
  cast_to_ordinal_date,
  generate_contribution_palette,
  get_problem_count_per_day,
} from "./util";

const problem_count_by_day = get_problem_count_per_day(roadmap);
const day_information = calculate_days_of_week();
const spans = calculate_header_span();

const ActivityGraph = () => {
  const { colorMode } = useColorMode();
  const border_color = useColorModeValue("#d1d9e0", "#3d444d");
  const max_container_width = useBreakpointValue({ base: "95%" });
  const cell_size = useBreakpointValue({ base: "10px", lg: "18px" });

  const container_styles = {
    ...table_container_styles,
  };

  const top_container_styles = {
    ...graph_container_styles,
    borderColor: border_color,
    maxWidth: max_container_width,
  };

  const cell_styles = {
    ...day_styles,
    height: cell_size,
    width: cell_size,
    minWidth: cell_size,
  };

  const no_cell_styles = {
    ...no_day_styles,
    height: cell_size,
    width: cell_size,
    minWidth: cell_size,
  };

  const body_jsx = day_information.map((day) => {
    const days_jsx = day.days.map((date, index) => {
      if (!date) {
        return <td style={no_cell_styles} key={index}></td>;
      }
      const cell_style = { ...cell_styles };
      const [count, color] = get_count_and_color_by_date(
        date,
        problem_count_by_day,
        colorMode,
      );
      cell_style.backgroundColor = color;
      return (
        <td
          key={index}
          style={cell_style}
          title={`${count} problems completed on ${cast_to_ordinal_date(date)}`}
        >
        </td>
      );
    });
    return (
      <tr key={day.id} style={{ height: "10px", boxSizing: "border-box" }}>
        <td style={day_of_week_styles}>
          <span style={day_of_week_label_styles}>{day.label}</span>
        </td>
        {days_jsx}
      </tr>
    );
  });

  const contribution_palette = generate_contribution_palette(colorMode);
	const legend_jsx = Object.keys(contribution_palette).map(level => {
        return <div
					key={level}
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: contribution_palette[level]
          }}
        >
        </div>
	})

  return (
    <div style={top_container_styles}>
      <div style={container_styles}>
        <table style={table_styles}>
          <thead>
            <tr>
              <td style={header_styles} colSpan={1}>
              </td>
              <td style={header_styles} colSpan={spans[0]}>
                <span>{"Jan"}</span>
              </td>
              <td style={header_styles} colSpan={spans[1]}>
                <span>{"Feb"}</span>
              </td>
              <td style={header_styles} colSpan={spans[2]}>
                <span>{"Mar"}</span>
              </td>
              <td style={header_styles} colSpan={spans[3]}>{"Apr"}</td>
              <td style={header_styles} colSpan={spans[4]}>{"May"}</td>
              <td style={header_styles} colSpan={spans[5]}>{"Jun"}</td>
              <td style={header_styles} colSpan={spans[6]}>{"Jul"}</td>
              <td style={header_styles} colSpan={spans[7]}>{"Aug"}</td>
              <td style={header_styles} colSpan={spans[8]}>{"Sep"}</td>
              <td style={header_styles} colSpan={spans[9]}>{"Oct"}</td>
              <td style={header_styles} colSpan={spans[10]}>
                {"Nov"}
              </td>
              <td style={header_styles} colSpan={spans[11]}>
                {"Dec"}
              </td>
            </tr>
          </thead>
          <tbody>
            {body_jsx}
          </tbody>
        </table>
      </div>
      <div style={contribution_legend}>
				High
				{legend_jsx}
				Low
      </div>
    </div>
  );
};

export default ActivityGraph;
