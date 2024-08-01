import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import F1RacerPage from "./components/pages/F1RacerPage";
import AboutPage from "./components/pages/AboutPage";
import NewsPage from "./components/pages/NewsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
