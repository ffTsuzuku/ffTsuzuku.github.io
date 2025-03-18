import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import Header from "../components/Header";
import roadmap from "../data/lc_roadmap";

/**
 * @todo: make it so when header is hidden the menu button shows dsa
 * @todo: show difficulty of problems
 * @todo:  update main content
 *	increase percents of the skills 
 *	change 5 yrs exp to 8
 * @todo: fix light mode on this page
 * */
function DSA() {
  const open_url = (url?: string) => {
    if (!url) {
      return;
    }
    window.open(url, "_blank");
  };

  const SectionsJSX = Object.keys(roadmap).map((section) => {
    return (
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {roadmap[section].section}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {roadmap[section].problems.map((problem) => {
            return (
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                {problem.name}
                <Flex gap={3} m={3}>
                  <Button onClick={() => open_url(problem.url)}>
                    Leetcode
                  </Button>
                  <Button onClick={() => open_url(problem.solution)}>
                    Solution
                  </Button>
                </Flex>
              </Flex>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    );
  });
  return (
    <>
      <Header />
      <Accordion allowToggle>
        {SectionsJSX}
      </Accordion>
    </>
  );
}

export default DSA;
