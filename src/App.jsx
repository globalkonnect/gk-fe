import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";
import Clients from "./Pages/Clients";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Recognitions from "./Pages/Recognitions";
import Testimonials from "./Pages/Testimonials";
import Tours from "./Pages/Tours";
import VisaServices from "./Pages/VisaServices";
import WhyUs from "./Pages/WhyChoose";
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
              {/* <Service /> */}
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
