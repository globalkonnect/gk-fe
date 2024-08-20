import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
import Recognitions from "./Pages/Recognitions";
import Clients from "./Pages/Clients";
import About from "./Pages/About";
import WhyUs from "./Pages/WhyChoose";
import VisaServices from "./Pages/VisaServices";
import Service from "./Pages/Service";
import Tours from "./Pages/Tours";
import Testimonials from "./Pages/Testimonials";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      window.location.href = location.hash;
    }
  }, [location]);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <About />
              <Tours />
              <WhyUs />
              <Service />
              <Clients />
              <VisaServices />
              <Recognitions />
              <Testimonials />
              <ContactUs />
            </div>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
