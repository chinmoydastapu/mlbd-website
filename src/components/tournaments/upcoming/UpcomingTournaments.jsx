import UpcomingTournamentCard from "./UpcomingTournamentCard";

const UpcomingTournaments = ({ tournaments }) => {
    const upcomingTournaments = tournaments.filter(
        (tournament) => tournament.categoryTour === "upcomingTour"
    );

    return (
        <div className="bg-gray-100 py-10 px-4">
            <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
                Upcoming Tournaments
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-4">
                {upcomingTournaments.map((tournament) => (
                    <UpcomingTournamentCard key={tournament._id} tournament={tournament} />
                ))}
            </div>
        </div>
    );
};

export default UpcomingTournaments;
