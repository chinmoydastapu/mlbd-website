import PreviousTournamentCard from "./PreviousTournamentCard";

const PreviousTournaments = ({ tournaments }) => {
    const previousTournaments = tournaments.filter(
        (tournament) => tournament.categoryTour === "pastTour"
    );

    return (
        <div className="w-full max-w-6xl mx-auto py-12">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Previous Tournaments</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mx-4">
                {previousTournaments.map((tournament) => (
                    <PreviousTournamentCard key={tournament._id} tournament={tournament} />
                ))}
            </div>
        </div>
    );
};

export default PreviousTournaments;
