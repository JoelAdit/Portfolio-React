import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Technologies from "./Components/Tech";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <div className=" container mx-auto ">
        <Navbar />
        <Home />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
