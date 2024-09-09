import React from "react";
import "./App.css";
import UsersList from "./Components/UsersList";
import ContactForm from "./Components/ContactForm";

import ErrorPage from "./Components/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="contact-form" element={<ContactForm />} />
          <Route path="contact" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
