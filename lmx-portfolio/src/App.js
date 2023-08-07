import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
