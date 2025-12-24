import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/general/Layout";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import FAQPage from "./pages/FAQPage";
import FeaturesManagement from "./pages/features/FeaturesManagement";
import FeaturesScheduling from "./pages/features/FeaturesScheduling";
import YourOwnApp from "./pages/features/YourOwnApp";
import BusinessTypePage from "./pages/business/BusinessTypePage";
import SeeMorePage from "./pages/business/SeeMorePage";
import ApplicationBranch from "./pages/ApplicationBranch";
import KitRequest from "./pages/KitRequest";
import { Toaster } from "sonner";
import FormLayout from "./components/general/FormLayout";
import { useMeta } from "./apis/application";
import { useMetaStore } from "./store/useMetaStore";
import { useEffect } from "react";

function App() {
  const { data: metaData, isLoading } = useMeta();
  const setMeta = useMetaStore((state) => state.setMeta);
  const setIsLoading = useMetaStore((state) => state.setIsLoading);

  useEffect(() => {
    if (metaData) {
      setMeta(metaData);
    }
  }, [metaData, setMeta]);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

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
          <Route path="features/your_own_app" element={<YourOwnApp />} />
          <Route path="/business-type" element={<BusinessTypePage />} />
          <Route path="/see_more" element={<SeeMorePage />} />
          <Route path="about" element={<div>About Page</div>} />
        </Route>
        <Route path="application" element={<FormLayout />}>
          <Route index element={<ApplicationBranch />}></Route>
          <Route path="kit-request" element={<KitRequest />}></Route>
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
