import { About } from "@/modules/about/about";
import { Hero } from "@/modules/hero/hero";
import { Highlights } from "@/modules/home/highlights";
import { getFeaturedCollections } from "@/modules/home/featured-data";
import { TripFinder } from "@/modules/home/trip-finder";
import { FeaturedDestinations } from "@/modules/home/featured-destinations";
import { ExperienceSpotlight } from "@/modules/home/experience-spotlight";

export default function Home() {
  return (
    <>
      <Hero />
      <TripFinder />
      <About />
      <FeaturedDestinations collections={getFeaturedCollections()} />
      <ExperienceSpotlight />
      <Highlights />
    </>
  );
}
