/** @format */

import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import EnquiryPage from "./Pages/EnquiryPage";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Pages/MainLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/" element={<MainLayout></MainLayout>}>
            <Route path="home" element={<HomePage></HomePage>}></Route>
            <Route path="about" element={<AboutPage></AboutPage>}></Route>
            <Route path="contact" element={<ContactPage></ContactPage>}></Route>
            <Route path="enquiry" element={<EnquiryPage></EnquiryPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
