/** @format */

import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import EnquiryPage from "./Pages/EnquiryPage";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Pages/MainLayout";
import AlertContext from "./Components/AlertContext";
import AlertList from "./Components/AlertList";
import { uniqueId } from "lodash";

function App() {
  const [alerts, setAlerts] = useState([]);
  const showAlert = (message, type = "success", dismiss = 10) => {
    const id = uniqueId();
    const alert = { message, type, id };
    setAlerts([...alerts, alert]);
    dismiss &&
      setTimeout(() => {
        removeAlert();
      }, dismiss * 1000);
  };
  const removeAlert = (alert) => {
    setAlerts((latestALerts) => {
      return latestALerts.filter((a) => a !== alert);
    });
  };
  const alertData = { alerts, showAlert, removeAlert };
  return (
    <div>
      <BrowserRouter>
        <AlertContext.Provider value={alertData}>
          <AlertList></AlertList>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="/" element={<MainLayout></MainLayout>}>
              <Route path="home" element={<HomePage></HomePage>}></Route>
              <Route path="about" element={<AboutPage></AboutPage>}></Route>
              <Route
                path="contact"
                element={<ContactPage></ContactPage>}
              ></Route>
              <Route
                path="enquiry"
                element={<EnquiryPage></EnquiryPage>}
              ></Route>
            </Route>
          </Routes>
        </AlertContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
