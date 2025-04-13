import React from "react";
import { scaleLinear } from "@visx/scale";
import { Group } from "@visx/group";
import { Tooltip, defaultStyles, useTooltip } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { Problem } from "../../../data/lc_roadmap";

type Props = {
  problems: Problem[];
};

type HeatCell = {
  date: string;
  count: number;
};

const CELL_SIZE = 16;
const CELL_GAP = 4;
const WEEKS = 20;

const LeetCodeHeatmap: React.FC<Props> = ({ problems }) => {
  // Map date string to count
  const countByDate = new Map<string, number>();
  for (const problem of problems) {
		const completed_at = problem.completed_at
		if (!completed_at) continue
    const date = new Date(problem.completed_at).toISOString().split("T")[0];
    countByDate.set(date, (countByDate.get(date) || 0) + 1);
  }

  // Generate past WEEKS * 7 days
  const today = new Date();
  const dates: HeatCell[] = [];

  for (let i = WEEKS * 7 - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().split("T")[0];
    dates.push({ date: key, count: countByDate.get(key) || 0 });
  }

  // Organize into rows by weekday (0–6)
  const weeks = Array.from({ length: WEEKS }, (_, i) => {
    return dates.slice(i * 7, i * 7 + 7).map((cell) => ({
      ...cell,
      dayOfWeek: new Date(cell.date).getDay(),
    }));
  });

  const colorScale = scaleLinear<number>({
    domain: [0, Math.max(...dates.map((d) => d.count), 1)],
    range: ["#e0e0e0", "#1e40af"],
  });

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip<HeatCell>();

  return (
    <svg width={WEEKS * (CELL_SIZE + CELL_GAP)} height={7 * (CELL_SIZE + CELL_GAP)}>
      <Group top={0} left={0}>
        {weeks.map((week, weekIdx) =>
          week.map((cell, dayIdx) => {
            const x = weekIdx * (CELL_SIZE + CELL_GAP);
            const y = dayIdx * (CELL_SIZE + CELL_GAP);
            const color = colorScale(cell.count);

            return (
              <rect
                key={`${cell.date}`}
                x={x}
                y={y}
                width={CELL_SIZE}
                height={CELL_SIZE}
                fill={color}
                rx={2}
                ry={2}
                onMouseMove={(e) => {
                  const coords = localPoint(e) || { x, y };
                  showTooltip({
                    tooltipData: cell,
                    tooltipLeft: coords.x,
                    tooltipTop: coords.y,
                  });
                }}
                onMouseLeave={hideTooltip}
              />
            );
          })
        )}
      </Group>

      {tooltipOpen && tooltipData && (
        <Tooltip
          top={tooltipTop}
          left={tooltipLeft}
          style={{ ...defaultStyles, fontSize: "12px", padding: "4px 8px" }}
        >
          <strong>{tooltipData.date}</strong>
          <br />
          {tooltipData.count} problem{tooltipData.count !== 1 ? "s" : ""}
        </Tooltip>
      )}
    </svg>
  );
};

export default LeetCodeHeatmap;
