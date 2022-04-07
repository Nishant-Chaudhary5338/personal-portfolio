import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import EnquiryPage from "./Pages/EnquiryPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<HomePage></HomePage>}></Route>
          <Route path="about" element={<AboutPage></AboutPage>}></Route>
          <Route path="contact" element={<ContactPage></ContactPage>}></Route>
          <Route path="enquiry" element={ <EnquiryPage></EnquiryPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
