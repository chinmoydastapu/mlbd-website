import OngoingTournamentCard from "./OngoingTournamentCard";

const OngoingTournaments = ({ tournaments }) => {
  const currentTournaments = tournaments.filter(
    (tournament) => tournament.categoryTour === "ongoingTour"
  );

  return (
    <div className="bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
        Ongoing Tournaments
      </h1>

      <div className="grid grid-cols-1">
        {currentTournaments.map((tournament) => (
          <OngoingTournamentCard key={tournament._id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
};

export default OngoingTournaments;