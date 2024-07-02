import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

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
        <div className="flex-1 p-6 lg:p-8 bg-gray-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/racers" element={<div>F1 Racers</div>} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/news" element={<div>News</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
