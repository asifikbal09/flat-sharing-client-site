import CTA from "@/components/landing/CTA";
import FeaturedFlats from "@/components/landing/FeatueredFlat";
import Hero from "@/components/landing/Hero";
import SearchFilters from "@/components/landing/SearchFilters";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchFilters />

      <FeaturedFlats />
      <CTA />
    </>
  );
}
