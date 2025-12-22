import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/general/Layout";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import FAQPage from "./pages/FAQPage";
import FeaturesManagement from "./pages/features/FeaturesManagement";
import FeaturesScheduling from "./pages/features/FeaturesScheduling";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="faqs" element={<FAQPage />} />
          <Route path="features/management" element={<FeaturesManagement />} />
          <Route path="features/scheduling" element={<FeaturesScheduling />} />
          <Route path="about" element={<div>About Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
