import { Events } from "components/events/Events";
import { HeroSection } from "components/HeroSection";
import { MediaSection } from "components/media/Media";
import { Partners } from "components/Partners";
import { Pilots } from "components/Pilots";
import { SeasonEvents } from "components/SeasonEvents";
import { TrackDays } from "components/TrackDays";
import { Trains } from "components/Trains";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SeasonEvents />
      <Events />
      <Pilots />
      <Trains />
      <TrackDays />
      <MediaSection />
      <Partners />
    </>
  );
}
