import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="review" element={<Reviews />} />
        <Route path="dashboard" element={<Reviews />} />
        <Route path="blogs" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
