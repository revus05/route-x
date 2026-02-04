import { Events } from "components/events/Events";
import { HeroSection } from "components/HeroSection";
import { SeasonEvents } from "components/SeasonEvents";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SeasonEvents />
      <Events />
    </>
  );
}
