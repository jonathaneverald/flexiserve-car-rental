import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import CarsPage from "./pages/Cars";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cars" element={<CarsPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
