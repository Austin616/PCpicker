import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Parts from "./pages/Parts/Parts.jsx";
import NotFound from "./components/NotFound.jsx";
import Build from "./pages/Build/Build.jsx";
import AI from "./pages/AI/AI.jsx";
import Footer from "./components/Footer.jsx";
import Category from "./pages/Parts/Category/Category.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Parts" element={<Parts />} />
            <Route path="/Build" element={<Build />} />
            <Route path="/AI" element={<AI />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/category/:category" element={<Category />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
