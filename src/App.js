import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CointList from "./pages/CointList";
import CoinDetail from "./components/CoinDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cointlist" element={<CointList />} />
        <Route path="cointlist/cointdetail/:id" element={<CoinDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
