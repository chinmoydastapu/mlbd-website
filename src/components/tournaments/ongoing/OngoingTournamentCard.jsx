import { useState } from "react";

const OngoingTournamentCard = ({ tournament }) => {
  const [showPopUpBanner, setShowPopUpBanner] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8">
      <div className="md:flex">
        {/* Banner Section */}
        <div className="md:w-1/2 h-80 md:h-auto">
          <img
            className="w-full h-full object-cover object-center hover:cursor-zoom-in"
            src={tournament.currentTourbanner}
            alt={tournament.currentTourName}
            onClick={() => setShowPopUpBanner(true)}
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-6 space-y-6">
          {/* Tournament Name and Venue */}
          <div>
            <h2 className="text-4xl font-bold text-indigo-700 mb-2 capitalize">
              {tournament.currentTourName}
            </h2>
            <p className="text-lg text-gray-600 mb-1">🏟️ Venue: {tournament.currentTourVenu}</p>
            <p className="text-xs text-red-600 bg-red-100 w-fit p-2 rounded-full">Tournament Will Be Ending Within: {tournament.currentTourEndEstimation}</p>
          </div>

          {/* Tournament Information */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-700">Tournament Details</h3>
            <p className="text-gray-700 mb-4">{tournament.currentTourDetails}</p>

            {/* Information Badges */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                💎 Prize Pool: {tournament.currentTourDiamond}
              </span>
              {tournament.currentTourMoney && (
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                  💵 Cash: {tournament.currentTourMoney}
                </span>
              )}
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                🎟️ Slots: {tournament.currentTourTeamSlot}
              </span>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                🌍 Region: {tournament.currentTourRegion}
              </span>
            </div>
          </div>

          {/* Trailer Section */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-700">Watch the Trailer</h3>
            <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-lg shadow-lg">
              <iframe
                src={tournament.currentTourTrailer}
                className="absolute inset-0 w-full h-full rounded-lg"
                title="Tournament Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* The Modal for Displaying the Banner */}
      {showPopUpBanner && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
          <div className={"bg-white rounded-lg shadow-lg relative max-w-4xl w-fit h-[80vh]"}>
            {/* Close Button */}
            <button
              onClick={() => setShowPopUpBanner(false)}
              className="absolute -top-3 right-0 text-white font-bold text-5xl p-1 rounded-full">
              &times;
            </button>

            {/* Modal Content */}
            <img
              src={tournament.currentTourbanner}
              alt={tournament.currentTourName}
              className="w-fit h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OngoingTournamentCard;