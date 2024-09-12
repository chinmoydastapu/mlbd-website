import { ParallaxProvider } from "react-scroll-parallax";
import OngoingTournamentCard from "./OngoingTournamentCard";
import ParallaxBannerComponent from "../../parallax-banner/ParallaxBannerComponent";

const OngoingTournaments = ({ tournaments }) => {
  const currentTournaments = tournaments.filter(
    (tournament) => tournament.categoryTour === "ongoingTour"
  );

  return (
    <ParallaxProvider>
      <ParallaxBannerComponent
        backgroundImage="https://images5.alphacoders.com/127/1271344.jpg"
        title="Ongoing Tournaments"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo necessitatibus ducimus dolores facere adipisci quos pariatur perferendis omnis fuga quis, unde vero. At aliquam repudiandae quaerat, quisquam quia animi! dolores facere adipisci quos pariatur perferendis omnis fuga quis, unde vero. At aliquam repudiandae quaerat, quisquam quia animi!"
      />

      <div className="grid grid-cols-1 mx-4 mt-10">
        {currentTournaments.map((tournament) => (
          <OngoingTournamentCard key={tournament._id} tournament={tournament} />
        ))}
      </div>
    </ParallaxProvider>
  );
};

export default OngoingTournaments;