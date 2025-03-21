import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Signup";
import Game from "./pages/Game";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Disclaimer from "./pages/Disclaimer";
import Term from "./pages/Term";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route
          path="/game"
          element={
            <ProtectedRoute>
              <Game />
            </ProtectedRoute>
          }
        />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/term" element={<Term />} />
      </Routes>
    </Router>
  );
};

export default App;
