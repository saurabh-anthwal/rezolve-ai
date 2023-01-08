import "./App.css";
import Dashboard from "./component/dashboard/Dashboard";
import Navbar from "./component/navbar/Navbar";
import Sidebar from "./component/sideBar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-wrap gap-2">
        <div>
          <Sidebar />
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
