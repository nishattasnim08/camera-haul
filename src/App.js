import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Reviews from './Components/Reviews/Reviews';
import Blogs from './Components/Blogs/Blogs';
import ErrorAlert from './Components/ErrorAlert/ErrorAlert';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="review" element={<Reviews />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<ErrorAlert />} />
      </Routes>
    </div>
  );
}

export default App;
