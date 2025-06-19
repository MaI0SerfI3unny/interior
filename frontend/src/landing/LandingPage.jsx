import style from "./style.module.scss";
import { Banner } from "@/landing/_components/Banner/Banner";
import { WhyWe } from "./_components/WhyWe/WhyWe";
import { DesignPanel } from "./_components/DesignPanel/DesignPanel";
import { Gallery } from "./_components/Gallery/Gallery";
import { Comment } from "./_components/Comment/Comment";
import { RoadMap } from "./_components/RoadMap/RoadMap";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { CookiesBanner } from "../_components/CookiesBanner/CookiesBanner.jsx";

export const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className={style.main}>
      <Banner />
      <WhyWe id="whyWe" />
      <DesignPanel />
      <RoadMap id="roadmap" />
      <Gallery id="gallery" />
      <Comment id="reviews" />
      <CookiesBanner />
    </div>
  );
};
