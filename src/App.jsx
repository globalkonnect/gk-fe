import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";
import Clients from "./Pages/Clients";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Recognitions from "./Pages/Recognitions";
import Service from "./Pages/Service";
import Testimonials from "./Pages/Testimonials";
import Tours from "./Pages/Tours";
import VisaServices from "./Pages/VisaServices";
import WhyUs from "./Pages/WhyChoose";
import Courtesy from "./Components/Courtesy";
function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
      <Courtesy />
    </>
  );
}

export default App;
