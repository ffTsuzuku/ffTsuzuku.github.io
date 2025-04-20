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
import roadmap from "../data/lc_roadmap";
import Search from "../imgs/icons/Search.tsx";
import React, { useState } from "react";
import Map from "../components/MermaidRoadmap/Roadmap/Map";
import ActivityGraph from "../components/ActivityGraph";

/**
 * @todo: show difficulty of problems
 * @todo:  update main content
 * 	increase percents of the skills
 * 	change 5 yrs exp to 8
 */
function DSA() {
  const [search, setSearch] = useState("");
  const [selectedStep, setSelectedStep] = useState("");
	const headerTextColor = useColorModeValue("#e55858", "white")
  const open_url = (url?: string) => {
    if (!url) {
      return;
    }
    window.open(url, "_blank");
  };

	const table_size = useBreakpointValue(['sm', 'md'])

  // filter questions by roadmap steps
  const steps = Object.keys(roadmap);
  const selectable_steps = steps.map((step) => {
    return (
      <option value={step} onChange={() => setSelectedStep(step)} key={step}>
        {roadmap[step].section}
      </option>
    );
  });
  const steps_menu = (
		//@ts-ignore
    <Select onChange={(e) => setSelectedStep(e.target.value)} placeholder="Step">
      {selectable_steps}
    </Select>
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
          <Td>{problem.name}</Td><Td>
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

  return (
    <>
      <Header
        sectionTextColor={headerTextColor}
        menuItemBgColorTheme={["lightgray", ""]}
      />
			<Map />
			<ActivityGraph />
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

export default DSA

