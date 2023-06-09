import './App.css';
import Login from './components/Login';
import Otp from './components/Otp';
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/verifyotp/:no" element={<Otp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<h1>No data found.</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
