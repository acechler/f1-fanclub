
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const HomePage = () => {

  return(
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-slate-600">
        <h2>Card</h2>
        
      </div>
      <div className="bg-slate-600">
        <h2>Card</h2>
      </div>
      <div className="bg-slate-600">
        <h2>Card</h2>
      </div>
      <div className="bg-slate-600">
        <h2>Card</h2>
      </div>

    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App flex flex-col lg:flex-row">
        <Navbar />
        <div className="w-screen px-6 lg:mt-8 lg:px-0">
          <Routes>
            <Route path="/" element={<div> Home Page</div>} />
            <Route path="/racers" element={<div>F1 Racers</div>} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/events" element={<div>Events</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;