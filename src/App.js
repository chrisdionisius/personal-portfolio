import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import NavbarPage from "./components/NavbarPage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
