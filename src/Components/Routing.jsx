import { BrowserRouter, Route, Routes } from "react-router-dom";
import LetsTalk from "./LetsTalk";
import App from "../App";

function Routing() {
  return (
    <div>
      <div className="fixed top-0 -z-10 h-screen w-screen">
        {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}

        <div class="relative h-screen w-screen bg-slate-950">
          <div class="absolute bottom-0 left-[-20%] right-0 top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/letstalk" element={<LetsTalk />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
