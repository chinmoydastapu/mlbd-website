import RegiStep1 from "./RegiStep1";
import RegiStep2 from "./RegiStep2";

const Registration = () => {
    return (
        <div className="w-11/12 mx-auto my-5 p-5 shadow-xl">
            <div>
                <img src="https://www.royalcable.com.ph/wp-content/uploads/2022/01/website-banner22.jpg" alt="Register Now" className="w-full h-full rounded-xl object-cover" />
                <p className="capitalize text-xl md:text-3xl text-center font-semibold font-serif my-5">Registration is open now! Hurry up!</p>
            </div>
            <form className="divide-y divide-gray-200">
                <div className="py-5 text-base space-y-4 text-gray-700 sm:text-lg w-full">
                    {/* Team Information */}
                    <RegiStep1 />
                    <RegiStep2 />
                    <div className="flex justify-between items-center w-full text-center pt-5">
                        <button className="relative px-8 py-3 font-bold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition transform duration-300 ease-in-out">
                            Clear Fields
                        </button>
                        <button className="relative px-8 py-3 font-bold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition transform duration-300 ease-in-out">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Registration;