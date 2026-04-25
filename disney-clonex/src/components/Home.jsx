import { useState, useEffect } from "react";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import MovieRow from "./MovieRow";
import Footer from "./Footer";
import Modals from "./GlobalModal";
import { SkeletonHero, SkeletonCard } from "./Skeleton";
import { useAppContext } from "../context/AppContext";
function Home() {
  const { searchQuery, t } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <div style={{ background: "#0d0117", minHeight: "100vh", color: "white" }} className="page-transition">
      <Header />
      <main style={{ paddingTop: "72px" }}>
        {isLoading ? (
          <div className="pt-20">
            <SkeletonHero />
            <div className="px-10 mt-8 mb-6 text-xl font-bold">{t("liveUpcoming")}</div>
            <div className="px-10 flex gap-4 overflow-hidden mb-12">
              {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)}
            </div>
            <div className="px-10 mb-6 text-xl font-bold">{t("featuredToday")}</div>
            <div className="px-10 flex gap-4 overflow-hidden">
              {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)}
            </div>
          </div>
        ) : (
          <>
            {!searchQuery && <ImageSlider />}
            <div style={{ paddingTop: "20px" }}>
              <MovieRow title={t("liveUpcoming")} type="sports" />
              <MovieRow title={t("featuredToday")} type="movie" filterBrand="marvel" />
              <MovieRow title={t("hotstarSpecials")} filterBrand="hotstar" />
              <MovieRow title={t("topPicks")} type="movie" />
              <MovieRow title={t("bollywoodHits")} filterBrand="bollywood" />
              <MovieRow title={t("sports")} type="sports" />
              <MovieRow title={t("international")} filterBrand="international" />
            </div>
          </>
        )}
        <Footer />
      </main>
      <Modals />
    </div>
  );
}
export default Home;