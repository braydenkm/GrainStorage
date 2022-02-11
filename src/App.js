import "./App.css";
import { TopBar, Page, BottomNav } from "./components/index";

function App() {
  const pageTitle = "Grain Storage";
  return (
    <div className="App">
      <TopBar title={pageTitle} />
      <Page />
      <BottomNav />
    </div>
  );
}

export default App;
