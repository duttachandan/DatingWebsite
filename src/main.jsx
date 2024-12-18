import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./Pages/Home.jsx";
import "./App.css";
import SignupPage from "./Pages/SignupPage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import WithDraw from "./Pages/Withdraw.jsx";
import Privacy from "./Pages/Privacy.jsx";
import Deposit from "./Pages/Deposit.jsx";
import Contact from "./Pages/Contact.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Packages from "./Pages/Packages.jsx";
import { LoginProvider } from "./Store/Store.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* home routes and signup auth */}
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Contact options */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<AboutUs />} />

          {/* payment pages */}
          <Route path="/checkout" element={<Deposit />} />
          <Route path="/withdraw" element={<WithDraw />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </LoginProvider>
);
