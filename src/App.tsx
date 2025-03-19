import "./App.css";
import MatrixRain from "./components/MatrixScreenSaver";
import { useEffect, useRef, useState } from "react";
import Main from "./Pages/Main";
import {HashRouter, Route, Routes} from "react-router-dom";
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

  let Content = [
		<HashRouter key={1}>
			<Routes>
				<Route element={<Main />} path={'/'}/>
				<Route element={<DSA />} path={'/dsa'}/>
			</Routes>
		</HashRouter>
	]

  if (showRenderSS) {
    Content.unshift(<MatrixRain key={0} />);
  } 

  return <div className="App">{Content}</div>;
}

export default App;
