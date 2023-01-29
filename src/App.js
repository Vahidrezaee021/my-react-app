import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <AboutUs /> } />
      </Routes>
      
    </div>
  );
}

export default App;
