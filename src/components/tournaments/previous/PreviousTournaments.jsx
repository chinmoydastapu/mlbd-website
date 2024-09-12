import { ParallaxProvider } from "react-scroll-parallax";
import PreviousTournamentCard from "./PreviousTournamentCard";
import ParallaxBannerComponent from "../../parallax-banner/ParallaxBannerComponent";

const PreviousTournaments = ({ tournaments }) => {
    const previousTournaments = tournaments.filter(
        (tournament) => tournament.categoryTour === "pastTour"
    );

    return (
        <ParallaxProvider className="w-full max-w-6xl mx-auto">
            <ParallaxBannerComponent
                backgroundImage="https://i.pinimg.com/originals/a9/64/29/a964296166cdef4277bce6fd918bdfe8.jpg"
                title="Previous Tournaments"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo necessitatibus ducimus dolores facere adipisci quos pariatur perferendis omnis fuga quis, unde vero. At aliquam repudiandae quaerat, quisquam quia animi! dolores facere adipisci quos pariatur perferendis omnis fuga quis, unde vero. At aliquam repudiandae quaerat, quisquam quia animi!"
            />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mx-4 mt-10">
                {previousTournaments.map((tournament) => (
                    <PreviousTournamentCard key={tournament._id} tournament={tournament} />
                ))}
            </div>
        </ParallaxProvider>
    );
};

export default PreviousTournaments;
