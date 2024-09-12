import { ParallaxProvider } from "react-scroll-parallax";
import UpcomingTournamentCard from "./UpcomingTournamentCard";
import ParallaxBannerComponent from "../../parallax-banner/ParallaxBannerComponent";

const UpcomingTournaments = ({ tournaments }) => {
    const upcomingTournaments = tournaments.filter(
        (tournament) => tournament.categoryTour === "upcomingTour"
    );

    return (
        <ParallaxProvider>
            <ParallaxBannerComponent
                backgroundImage="https://images7.alphacoders.com/118/thumb-1920-1186314.jpg"
                title="Upcoming Tournaments"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo necessitatibus ducimus dolores facere adipisci quos pariatur perferendis omnis fuga quis, unde vero. At aliquam repudiandae quaerat, quisquam quia animi! dolores facere adipisci quos pariatur perferendis omnis fuga quis, unde vero. At aliquam repudiandae quaerat, quisquam quia animi!"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-4 mt-10">
                {upcomingTournaments.map((tournament) => (
                    <UpcomingTournamentCard key={tournament._id} tournament={tournament} />
                ))}
            </div>
        </ParallaxProvider>
    );
};

export default UpcomingTournaments;
