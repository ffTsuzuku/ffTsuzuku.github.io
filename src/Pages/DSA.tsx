import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Header from "../components/Header";
import roadmap from "../data/lc_roadmap";

/**
 * @todo: make it so when header is hidden the menu button shows dsa
 * @todo: show difficulty of problems
 * @todo:  update main content
 * 	increase percents of the skills
 * 	change 5 yrs exp to 8
 * @todo: fix light mode on this page
 * @todo: make it so that loading the ss does not reset the page position
 */
function DSA() {
  const open_url = (url?: string) => {
    if (!url) {
      return;
    }
    window.open(url, "_blank");
  };

  const rows_jsx = Object.keys(roadmap).map((step) => {
    const section_data = roadmap[step];
    const { problems } = section_data;

    const problems_jsx = problems.map((problem) => {
      return (
        <Tr>
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

  return (
    <>
			<Header 
				sectionTextColor={'#e55858'}
				menuItemBgColorTheme={['pink', 'lightgray']}
			/>
      <Table>
        <Thead>
          <Tr>
            <Th>Question</Th>
            <Th>Link</Th>
            <Th>Solution</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows_jsx}
        </Tbody>
      </Table>
    </>
  );
}

export default DSA;
