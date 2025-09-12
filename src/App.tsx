import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing_page";
import Pricing from "./pages/pricing";
import ContactUs from "./pages/contact-us";
import HowItWorks from "./pages/how_it_works";
import PrivacyPolicy from "./pages/privacy_policy";
import TermsOfUse from "./pages/terms_of_use";
function App() {
  return (
    <BrowserRouter>
      <Routes  >
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
