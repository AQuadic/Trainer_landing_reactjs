import { useState } from "react";
import HomeHero from "@/components/home/HomeHero";
import HomeFeatures from "@/components/home/HomeFeatures";
import HomeMembership from "@/components/home/HomeMembership";
import BlogContact from "@/components/blog/BlogContact";
import HomePefetcFor from "@/components/icons/home/HomePefetcFor";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeStandout from "@/components/home/HomeStandout";

const HomePage = () => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);

  return (
    <div>
      <HomeHero />

      <HomeFeatures
        selected={selectedFeature}
        onSelect={setSelectedFeature}
      />

      <HomeMembership selectedFeature={selectedFeature} />

      <HomePefetcFor />
      <HomeStandout />
      <HomeTestimonials />
      <BlogContact />
    </div>
  );
};

export default HomePage;
