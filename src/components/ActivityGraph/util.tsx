import { ColorMode } from "@chakra-ui/react";
import {contribution_color_styles} from "./styles";
interface DayInfo {
  id: string;
  label: string;
  days: Array<Date | undefined>;
}
type YearlyDateInfo = Array<DayInfo>;

const calculate_days_of_week = (): YearlyDateInfo => {
  const days_of_week = [
    { id: "sunday", label: "", days: [] },
    { id: "monday", label: "Mon", days: [] },
    { id: "tuesday", label: "", days: [] },
    { id: "wednesday", label: "Wed", days: [] },
    { id: "thursday", label: "", days: [] },
    { id: "friday", label: "Fri", days: [] },
    { id: "saturday", label: "", days: [] },
  ];
  // we need to insert empty cells when jan 1st isnt a sunday
  const jan_1 = new Date(2025, 0, 1);
  const days_to_pad = jan_1.getDay();
  for (let i = 0; i < days_to_pad; i++) {
    days_of_week[i].days.push(undefined);
  }
  for (let month = 0; month < 12; month++) {
    const days_in_month = new Date(2025, month + 1, 0).getDate();
    for (let day = 1; day <= days_in_month; day++) {
      const date = new Date(2025, month, day);
      days_of_week[date.getDay()].days.push(date);
    }
  }
	const max_day_count = days_of_week.reduce((carry, weekday) => {
		return Math.max(weekday.days.length, carry)
	}, 0)

	for (let i = 0; i < days_of_week.length; i++) {
		const diff = max_day_count - days_of_week[i].days.length
		if (!diff) {
			continue
		}
		for (let j = 0; j < diff; j++) {
			days_of_week[i].days.push(undefined)
		}
	}
  return days_of_week;
};

const get_problem_count_per_day = (roadmap) => {
  const sections = Object.keys(roadmap);
  const map = new Map<number, number>();

  for (const section of sections) {
    const problems = roadmap[section].problems;
    for (const problem of problems) {
      if (!problem.completed_at) continue;

      const timestamp = new Date(problem.completed_at).getTime();
      const count = (map.get(timestamp) ?? 0) + 1;
      map.set(timestamp, count);
    }
  }

  return map;
};

const get_count_and_color_by_date = (
	date: Date, problem_count_by_day, theme: ColorMode
) => {
  const nts = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  const count = problem_count_by_day.get(nts) ?? 0;
	const {high, med, low, empty} = generate_contribution_palette(theme)

  if (count >= 3) {
    return [count, high];
  } else if (count == 2) {
    return [count, med];
  } else if (count === 1) {
    return [count, low];
  } else {
    return [count, empty];
  }
};

const generate_contribution_palette = (theme) => {
	const palette = contribution_color_styles
	const high = theme === 'light' ? palette.high.light : palette.high.dark
	const med = theme === 'light' ? palette.med.light : palette.med.dark
	const low = theme === 'light' ? palette.low.light : palette.low.dark
	const empty = theme === 'light' ? palette.empty.light : palette.empty.dark

	return {high, med, low, empty}
}

const calculate_header_span = () => {
	let curr_date = new Date(2025, 0, 1, 0, 0, 0)
	let final_day = new Date(2026, 1, 0, 0, 0, 0).getTime()
	let curr_month = 0
	let spans: number [] = []
	let span = 0
	let padding = new Date(2025, 0, 1).getDay()
	while (
		curr_date.getTime() <= final_day && curr_date.getFullYear() === 2025
	) {
		for (let i = padding; i < 7; i++) {
			if (i === 0 && curr_month !== curr_date.getMonth()) {
				spans.push(span)
				span = 0
				curr_month = curr_date.getMonth()
			}
			curr_date = new Date(
				curr_date.getFullYear(), 
				curr_date.getMonth(),
				curr_date.getDate() + 1, 0, 0, 0
			)
		}
		//console.log(curr_date)
		padding = 0
		span++
	}
	spans.push(span)
	return spans
}

const cast_to_ordinal_date = (date: Date) => {
	const day = date.getDate()
	const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date)
	const suffix = get_ordinal_suffix(day)

	return `${month} ${day}${suffix}`
}

const get_ordinal_suffix = (day) => {
	if (day >= 11 && day <= 13) return 'th'
	switch(day %10) {
			case 1: return 'st'
			case 2: return 'nd'
			case 3: return 'rd'
			default: return 'th'
	}
}

export {
	get_count_and_color_by_date,
	get_problem_count_per_day,
	calculate_days_of_week,
	calculate_header_span,
	cast_to_ordinal_date,
	generate_contribution_palette,
}
