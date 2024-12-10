import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailVerification from "./EmailVerification";
import BusinessForm from "./BusinessForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailVerification />} />
        <Route path="/business-form" element={<BusinessForm />} />
      </Routes>
    </Router>
  );
}

export default App;
