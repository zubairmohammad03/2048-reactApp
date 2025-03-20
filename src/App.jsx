import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Signup";
import Game from "./pages/Game";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

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
      </Routes>
    </Router>
  );
};

export default App;
