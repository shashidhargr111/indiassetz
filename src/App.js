import "./App.css";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";

// 2 sectoins
//   - navbar
//   - dashboard content

function App() {
  return (
    <div className="appContainer">
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
