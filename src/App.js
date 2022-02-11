import "./App.css";
import { NavBar } from "./components/index";

function App() {
  const pageTitle = "Grain Storage";
  return (
    <div className="App">
      <NavBar title={pageTitle} />
    </div>
  );
}

export default App;
