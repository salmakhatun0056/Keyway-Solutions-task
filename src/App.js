import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Guest from "./pages/Guest";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {
  return (
    <div >

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/guest" element={<Guest />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
