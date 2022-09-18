import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signin from "./Ssignin/Signin";
import { useAuth } from "./context/LoginContext";

function App() {
  const { user } = useAuth();

  return (
    <div className="app">
      <Routes>
        {!user ? (
          <Route path="/" element={<Signin />} />
        ) : (
          <Route path="/home" element={<Home />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
