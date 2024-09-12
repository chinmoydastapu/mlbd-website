import TeamMembers from "./TeamMembers";

const AboutUs = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex flex-col items-center justify-center p-10">
                <div className="bg-white shadow-2xl rounded-xl p-8 md:p-16 max-w-[80vw] max-h-[80vh] text-center overflow-y-scroll">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
                        About Us
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                        Welcome to our platform! We are a team of passionate professionals committed to delivering excellence in everything we do. Our mission is to innovate, inspire, and empower individuals and businesses around the globe.
                    </p>
                    <p className="text-md md:text-lg text-gray-600 mb-10">
                        Our team is diverse, creative, and driven by a shared passion for technology and innovation. Together, we strive to create experiences that make a difference.
                    </p>
                    <a href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-lg transform transition-transform hover:scale-110">
                        Contact Us
                    </a>
                </div>
            </div>
            <TeamMembers />
        </div>
    );
};

export default AboutUs;
