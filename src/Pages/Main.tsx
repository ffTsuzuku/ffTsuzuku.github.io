
import { Divider, Show, VisuallyHidden } from "@chakra-ui/react";

import logo from "./logo.svg";
import "../App.css";
import Cover from "../components/Cover";
import NavigationOverlay from "../components/NavigationOverlay";
import WorkExperience from "../components/WorkExperience";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import MatrixRain from "../components/MatrixScreenSaver";
import Projects from "../components/Projects";

import { useEffect, useRef, useState } from "react";

import { useBreakpointValue } from "@chakra-ui/react";

import useIntersection from "../hooks/useIntersection";
function Main() {
  const interSectionThreshold = useBreakpointValue({
    base: 0.3,
    md: 0.5,
    lg: 0.8,
  });

  const [currentlyViewing, setCurrentlyViewing] = useState<AvailableSections>();

  const [showRenderSS, setShouldRenderSS] = useState(false);
  // const [lastActionTimeStamp, setLastActionTimeStamp] = useState(Date.now())
  const lastActionTimeStamp = useRef(Date.now());

  const coverRef = useRef<HTMLDivElement>(null);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);


  const showingCover = useIntersection({
    element: coverRef,
    rootMargin: "0px",
    threshold: interSectionThreshold,
  });
  const showingWorkExperience = useIntersection({
    element: workExperienceRef,
    rootMargin: "0px",
    threshold: interSectionThreshold,
  });
  const showingTechStack = useIntersection({
    element: techStackRef,
    rootMargin: "0px",
    threshold: interSectionThreshold,
  });
  const showingEducation = useIntersection({
    element: educationRef,
    rootMargin: "0px",
    threshold: interSectionThreshold,
  });

  useEffect(() => {
    if (showingCover) {
      setCurrentlyViewing("Home");
    } else if (showingWorkExperience) {
      setCurrentlyViewing("Work Experience");
    } else if (showingTechStack) {
      setCurrentlyViewing("Tech Stack");
    } else if (showingEducation) {
      setCurrentlyViewing("Education");
    }
  }, [showingCover, showingEducation, showingWorkExperience, showingTechStack]);

  const NavOverJSX = <NavigationOverlay currentlyViewing={currentlyViewing} />;
	const Content = [
		<Cover element={coverRef} key={1} />,
		<WorkExperience element={workExperienceRef} key={2} />,
		<TechStack element={techStackRef} key={3} />,
		<Education element={educationRef} key={4} />,
		<Projects element={projectsRef} key={5} />,
	];
  return <div className="App">{Content}</div>;
}

export default Main;
