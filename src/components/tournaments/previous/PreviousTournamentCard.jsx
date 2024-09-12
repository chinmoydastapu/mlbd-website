import { useState } from "react";

const PreviousTournamentCard = ({ tournament }) => {
    const [showTrailer, setShowTrailer] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleToggleTrailer = () => {
        setShowTrailer(true);
        setModalContent(
            <iframe
                src={tournament.pastTourTrailer}
                className="w-full h-full"
                title="Tournament Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        );
        setShowModal(true);
    };

    const handleToggleBanner = () => {
        setModalContent(
            <img
                src={tournament.pastTourbanner}
                alt={tournament.pastTourName}
                className="w-fit h-[80vh] rounded-lg"
            />
        );
        setShowModal(true);
    };

    return (
        <div
            className="relative bg-cover bg-center shadow-xl rounded-lg overflow-hidden mb-12 w-full max-w-5xl mx-auto"
            style={{ backgroundImage: `url(${tournament.pastTourbanner})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>

            {/* Content Section */}
            <div className="relative p-6 text-white">
                {/* Tournament Details Section */}
                <div className="space-y-4">
                    <h3 className="text-3xl xl:text-2xl font-bold capitalize">{tournament.pastTourName}</h3>
                    <p className="text-xs text-red-400 w-fit">Tournament Duration: {tournament.pastTourStartDate} - {tournament.pastTourEndDate}</p>
                    <div className="space-y-2">
                        <p>💎 Prize Pool: {tournament.pastTourDiamond}</p>
                        <p>💵 Cash: {tournament.pastTourMoney ? tournament.pastTourMoney : '0$'}</p>
                        <p>🎟️ Teams: {tournament.pastTourTeams}</p>
                    </div>

                    {/* Winners Section */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold">Top 3 Winners</h4>
                        <div className="flex items-center gap-4">
                            {tournament.pastTourWinner1Logo && (
                                <div className="flex items-center gap-2">
                                    <img
                                        className="w-10 h-10 rounded-full object-cover"
                                        src={tournament.pastTourWinner1Logo}
                                        alt={tournament.pastTourWinner1}
                                    />
                                    <span>{tournament.pastTourWinner1}</span>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-4">
                            {tournament.pastTourWinner2Logo && (
                                <div className="flex items-center gap-2">
                                    <img
                                        className="w-10 h-10 rounded-full object-cover"
                                        src={tournament.pastTourWinner2Logo}
                                        alt={tournament.pastTourWinner2}
                                    />
                                    <span>{tournament.pastTourWinner2}</span>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-4">
                            {tournament.pastTourWinner3Logo && tournament.pastTourWinner3 && (
                                <div className="flex items-center gap-2">
                                    <img
                                        className="w-10 h-10 rounded-full object-cover"
                                        src={tournament.pastTourWinner3Logo}
                                        alt={tournament.pastTourWinner3}
                                    />
                                    <span>{tournament.pastTourWinner3}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4 text-sm">
                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                            🏟️ Venue: {tournament.pastTourVenu}
                        </span>
                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                            🌍 Region: {tournament.pastTourRegion}
                        </span>
                    </div>

                    {/* Toggle Button for Trailer */}
                    <button
                        onClick={handleToggleTrailer}
                        className="mt-4 inline-block bg-indigo-600 text-white py-2 px-4 w-full shadow-lg hover:bg-indigo-700 transition duration-200"
                    >
                        Watch Trailer
                    </button>
                    {/* Button for View Full Banner */}
                    <button
                        onClick={handleToggleBanner}
                        className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 w-full shadow-lg hover:bg-blue-700 transition duration-200"
                    >
                        View Full Banner
                    </button>
                </div>
            </div>

            {/* The Modal for Displaying the Trailer or Banner */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
                    <div className={`bg-white rounded-lg shadow-lg relative max-w-4xl ${showTrailer ? 'w-full' : 'w-fit'} h-[80vh]`}>
                        {/* Close Button */}
                        <button
                            onClick={() => { setShowModal(false); setShowTrailer(false) }}
                            className="absolute -top-3 right-0 text-white font-bold text-5xl p-1 rounded-full">
                            &times;
                        </button>

                        {/* Modal Content */}
                        {modalContent}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PreviousTournamentCard;