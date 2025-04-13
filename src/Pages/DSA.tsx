import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "../components/Header";
import roadmap, { Problem } from "../data/lc_roadmap";
import Search from "../imgs/icons/Search.tsx";
import React, { useState } from "react";
import Map from "../components/MermaidRoadmap/Roadmap/Map";
import ToggleSwitch from "../components/Switch";
import Flame from "../imgs/icons/Flame";
import BinaryTree from "../imgs/icons/BinaryTree";
import Activity from "../imgs/icons/Activity";
import LeetCodeHeatmap from "../components/MermaidRoadmap/LeetCodeMap";

/**
 * @todo: show difficulty of problems
 * @todo:  update main content
 * 	increase percents of the skills
 * 	change 5 yrs exp to 8
 */
function DSA() {
  const [search, setSearch] = useState("");
  const [selectedStep, setSelectedStep] = useState("");
  const headerTextColor = useColorModeValue("#e55858", "white");
  const open_url = (url?: string) => {
    if (!url) {
      return;
    }
    window.open(url, "_blank");
  };

  const table_size = useBreakpointValue(["sm", "md"]);

  // filter questions by roadmap steps
  const steps = Object.keys(roadmap);
  const selectable_steps = steps.map((step) => {
    return (
      <option
        value={step}
        onChange={() => setSelectedStep(step)}
        key={step}
      >
        {roadmap[step].section}
      </option>
    );
  });
  const steps_menu = (
    //@ts-ignore
    <Select
      onChange={(e) => setSelectedStep(e.target.value)}
      placeholder="Step"
    >
      {selectable_steps}
    </Select>
  );

	const all_problems: Array<Problem> = []
  Object.keys(roadmap).forEach(
    (curr: string) => all_problems.push(...roadmap[curr].problems)
  );

  const question_rows_jsx = steps.map((step) => {
    const section_data = roadmap[step];
    const { problems: all_problems } = section_data;
    let problems = all_problems;

    if (selectedStep && step !== selectedStep) {
      problems = [];
    }
    if (search) {
      problems = problems.filter((problem) => problem.name.includes(search));
    }

    const problems_jsx = problems.map((problem) => {
      return (
        //@ts-ignore
        <Tr key={problem.name}>
          <Td>{problem.name}</Td>
          <Td>
            <Button onClick={() => open_url(problem.url)}>Leetcode</Button>
          </Td>
          <Td>
            <Button
              onClick={() => open_url(problem.solution)}
              disabled={!problem.solution}
            >
              Solution
            </Button>
          </Td>
        </Tr>
      );
    });

    return problems_jsx;
  });

  const switchBgColor = useColorModeValue("#D1D5DB", "#424242");
  const GraphIcon = <BinaryTree />;
  const ActivityIcon = <Activity />;
	const [displayRoadMap, setDisplayRoadMap] = useState(true)

	const LCHeatMap = <Flex marginX={'auto'} justifyContent={'center'} p={3}>
		<LeetCodeHeatmap problems={all_problems} />
	</Flex> 

  const MapJsx = displayRoadMap ?  <Map /> : LCHeatMap;
  return (
    <>
      <Header
        sectionTextColor={headerTextColor}
        menuItemBgColorTheme={["lightgray", ""]}
      />
      {MapJsx}
      <ToggleSwitch
				onChange={() => setDisplayRoadMap(prev => !prev)}
        onIcon={ActivityIcon}
        offIcon={GraphIcon}
        style="square"
        onBgColor={switchBgColor}
        offBgColor={switchBgColor}
        cssProps={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "10px",
        }}
      />
      <Flex p={3} gap={3}>
        <InputGroup>
          <InputLeftElement>
            <Search width={"20px"} height={"20px"} />
          </InputLeftElement>
          <Input
            value={search}
            placeholder="Search Questions..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
        {steps_menu}
      </Flex>
      <Table size={table_size}>
        <Thead>
          <Tr>
            <Th>Question</Th>
            <Th>Link</Th>
            <Th>Solution</Th>
          </Tr>
        </Thead>
        <Tbody>
          {question_rows_jsx}
        </Tbody>
      </Table>
    </>
  );
}

export default DSA;
