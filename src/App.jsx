import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
import Recognitions from "./Pages/Recognitions";
import Clients from "./Pages/Clients";
import About from "./Pages/About";
import WhyUs from "./Pages/WhyChoose"
import VisaServices from "./Pages/VisaServices";
import Service from "./Pages/Service";
import Tours from "./Pages/Tours";
import Testimonials from "./Pages/Testimonials";
function App() {
  return (
    <div>
      <About />
      <Tours />
      <WhyUs />
      <Service />
      <Clients />
      <VisaServices />
      <Recognitions />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
