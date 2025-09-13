import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen p-4 bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
