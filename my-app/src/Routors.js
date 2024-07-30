import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Error from "./404";
import About from "./About";
import Ourproduct from "./Ourproduct";
import Services from "./Services";
import Ourwork from "./Ourwork";
import Security from "./Security";
import Automations from "./Automations";
import Inquirenow from "./Inquirenow";
import Example from "./Request";
import Sitemap from "./Sitemap";
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourproduct" element={<Ourproduct />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourwork" element={<Ourwork />} />
        <Route path="/inquirenow" element={<Inquirenow />} />
        <Route path="/security" element={<Security />} />
        <Route path="/automations" element={<Automations />} />
        <Route path="/request" element={<Example />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
