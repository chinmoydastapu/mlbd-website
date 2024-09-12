import { useState } from "react";

const UpcomingTournamentCard = ({ tournament }) => {
    const [showPopUp, setShowPopUp] = useState(false);

    return (
        <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8">
            <div className="lg:flex justify-between p-6">
                {/* Tournament Name, Venue, and Prizes */}
                <div className="flex-1 space-y-4">
                    <h2 className="text-4xl font-bold text-indigo-700 capitalize">
                        {tournament.upcomingTourName}
                    </h2>
                    <p className="text-lg text-gray-600">🏟️ Venue: {tournament.upcomingTourVenu}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                            💎 Prize Pool: {tournament.upcomingTourDiamond}
                        </span>
                        {tournament.upcomingTourMoney && (
                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                                💵 Cash: {tournament.upcomingTourMoney}
                            </span>
                        )}
                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                            🎟️ Slots: {tournament.upcomingTourTeamSlot}
                        </span>
                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                            🌍 Region: {tournament.upcomingTourRegion}
                        </span>
                    </div>
                </div>

                {/* Banner Image */}
                <div className="flex-shrink-0 h-auto w-full lg:h-48 lg:w-48 my-6 lg:my-0">
                    <img
                        className="w-full h-full object-cover rounded-lg shadow-md hover:cursor-zoom-in"
                        src={tournament.upcomingTourbanner}
                        alt={tournament.upcomingTourName}
                        onClick={() => setShowPopUp(true)}
                    />
                </div>
            </div>

            {/* Tournament Details */}
            <div className="p-6 bg-gray-50">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">Tournament Details</h3>
                <p className="text-gray-700">{tournament.upcomingTourDetails}</p>
                <p className="text-base text-green-600 bg-green-100 w-full text-center p-2 mt-3">Tournament Will Be Starting Within: {tournament.upcomingTourStartEstimation}</p>
            </div>

            {/* The Modal for Displaying the Banner */}
            {showPopUp && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
                    <div className={"bg-white rounded-lg shadow-lg relative max-w-4xl w-fit h-[80vh]"}>
                        {/* Close Button */}
                        <button
                            onClick={() => setShowPopUp(false)}
                            className="absolute -top-3 right-0 text-white font-bold text-5xl p-1 rounded-full">
                            &times;
                        </button>

                        {/* Modal Content */}
                        <img
                            src={tournament.upcomingTourbanner}
                            alt={tournament.upcomingTourName}
                            className="w-fit h-[80vh] rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpcomingTournamentCard;
