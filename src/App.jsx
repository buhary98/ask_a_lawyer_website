import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import PreLoader from "./components/preloader/PreLoader";
import ScrollToTop from "./components/header/ScrollToTop";
// import ProFeatures from "./components/pro-features/ProFeatures";
import SubHeader from "./components/header/SubHeader";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Lawyers from "./components/lawyers/Lawyers";
import AboutUs from "./components/about/AboutUs";
import Facts from "./components/facts/Facts";
import ChooseUs from "./components/chooseus/ChooseUs";
import CallToAction from "./components/call-to-action/CallToAction";
import Service from "./components/service/Service";
import Feautes from "./components/feautes/Feautes";
import Testimonials from "./components/testimonials/Testimonials";
import PricingTable from "./components/price/PricingTable";
// import Blog from "./components/blog/Blog";
import FaQ from "./components/faq/FaQ";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
// import ClientPortal from "./components/client-portal/ClientPortal";
import AppointmentForm from "./components/forms/AppointmentForm";
import SubscriptionForm from "./components/forms/SubscriptionForm";
import Chat from "./components/chat/Chat";

function App() {
  const [showPreLoader, setShowPreLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (showPreLoader) {
    return <PreLoader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SubHeader />
              <Header />
              <Banner />
              <Lawyers />
              <AboutUs />
              <Facts />
              <ChooseUs />
              <CallToAction />
              <Service />
              <Feautes />
              <Testimonials />
              <PricingTable />
              {/* <Blog /> */}
              <FaQ />
              <Contact />
              <Footer />
              <Chat phoneNumber="+85255364896" />
            </>
          }
        />
        {/* <Route path="/client-portal" element={<ClientPortal />} /> */}
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/subscription" element={<SubscriptionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
