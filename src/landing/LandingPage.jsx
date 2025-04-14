import { Header } from "@/_components/Header/Header";
import { Footer } from "@/_components/Footer/Footer";
import style from "./style.module.scss"
import { Banner } from "@/landing/_components/Banner/Banner";
import { WhyWe } from "./_components/WhyWe/WhyWe";
import { DesignPanel } from "./_components/DesignPanel/DesignPanel";
import { Gallery } from "./_components/Gallery/Gallery";
import { Comment } from "./_components/Comment/Comment";
import { RoadMap } from "./_components/RoadMap/RoadMap";

export const LandingPage = () => {
  return (
    <div>
      <Header/>
      <div className={style.main}>
          <Banner/>
          <WhyWe/>
          <DesignPanel/>
          <RoadMap/>
          <Gallery/>
          <Comment/>
      </div>
      <Footer/>
    </div>
  );
}