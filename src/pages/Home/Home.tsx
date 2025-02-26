import Hero from "../../components/Hero/Hero";
import HeroCards from "../../components/HeroCards/HeroCards";
import Subscribe from "../../components/Subscribe/Subscribe";
import Trending from "../../components/TrendingSection/Trending";
import Testimonial from "../../components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      
      {/* <MainVideo /> */}
      <Hero />
      <HeroCards />
      <Trending />
      <Testimonial/>
      <Subscribe />
    </div>
  );
}
