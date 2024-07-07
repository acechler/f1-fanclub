import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import F1RacerPage from "./components/pages/F1RacerPage";
import AboutPage from "./components/pages/AboutPage";
import NewsPage from "./components/pages/NewsPage";

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
        <div className="flex mx-auto p-4 lg:p-4 ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/racers" element={<F1RacerPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/news" element={<NewsPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
