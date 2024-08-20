import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Tours from "./Pages/Tours";
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
              {/* <About /> */}
              <Tours />
              {/* <WhyUs /> */}
              {/* <Service /> */}
              {/* <Clients /> */}
              {/* <VisaServices /> */}
              {/* <Recognitions /> */}
              {/* <Testimonials /> */}
              {/* <ContactUs /> */}
            </div>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
