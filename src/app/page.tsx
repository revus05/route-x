import { Events } from "components/events/Events";
import { HeroSection } from "components/HeroSection";
import { Pilots } from "components/Pilots";
import { SeasonEvents } from "components/SeasonEvents";
import { TrackDaysAndTrains } from "components/TrackDaysAndTrains";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SeasonEvents />
      <Events />
      <Pilots />
      <TrackDaysAndTrains />
    </>
  );
}
