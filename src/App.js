import "./App.css";
import Banner from "./components/Banner";
import NavbarPage from "./components/NavbarPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Banner />
    </div>
  );
}

export default App;
