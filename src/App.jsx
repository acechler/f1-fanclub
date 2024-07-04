import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RacerDashboard
 from "./components/RacerDashboard";
const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">

    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App flex flex-col lg:flex-col min-h-screen">
        <div className="w-full lg:w-full">
          <Navbar />
        </div>
        <div className="flex mx-auto p-4 lg:p-4 bg-gray-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/racers" element={<div>F1 Racers <RacerDashboard/> </div>} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/news" element={<div>News</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
