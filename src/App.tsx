import "./App.css";
import MatrixRain from "./components/MatrixScreenSaver";
import { useEffect, useRef, useState } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import Main from "./Pages/Main";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DSA from "./Pages/DSA";

function App() {
  const [showRenderSS, setShouldRenderSS] = useState(false);
  const lastActionTimeStamp = useRef(Date.now());

  useEffect(() => {
    window.addEventListener(
      "mousemove",
      () => (lastActionTimeStamp.current = Date.now()),
    );
    window.addEventListener(
      "keydown",
      () => (lastActionTimeStamp.current = Date.now()),
    );

    const handler = setInterval(() => {
      const elapsed = Date.now() - lastActionTimeStamp.current;

      if (elapsed > 100000) {
        setShouldRenderSS(true);
      } else {
        setShouldRenderSS(false);
      }
    });

    return () => clearInterval(handler);
  }, []);

	const router = createBrowserRouter([
		{path: '/', element: <Main />},
		{path: '/dsa', element: <DSA />}
	])


  let Content = [<RouterProvider router={router} key={1}/>]
  if (showRenderSS) {
    Content.unshift(<MatrixRain key={0} />);
  } 

  return <div className="App">{Content}</div>;
}

export default App;
