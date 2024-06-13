import Image from "next/image";
import Hero from "./components/hero";
import Ideas from "./components/ideas";
import Video from "./components/video";
import TestimonialSec from "./components/testimonialSec";
import News from "./components/news";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Ideas />
      <Video />
      <TestimonialSec />
      {/* news */}
      <News />
    </main>
  );
}
