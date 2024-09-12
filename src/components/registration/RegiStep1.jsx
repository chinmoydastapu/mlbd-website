import { useState } from "react";

const RegiStep1 = () => {
    const [imageName, setImageName] = useState("Click Here to Upload the Team Logo");
    const [avatar, setAvatar] = useState("https://img.freepik.com/premium-photo/gaming-logo-avatar-gaming-streamer-blogger-channel_327483-16300.jpg");
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                setError("File size should not exceed 10MB.");
                return;
            }
            setImageName(file.name);
            setAvatar(URL.createObjectURL(file));
            setError("");
        }
    };

    const teamInfoInputClasses = "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600";
    const teamInfoLabelClasses = "absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm";

    return (
        <>
            <p className="font-bold text-base">Team Information</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="relative">
                        <input autoComplete="off" id="team-name" name="teamName" type="text" className={teamInfoInputClasses} placeholder="Team Name" />
                        <label htmlFor="team-name" className={teamInfoLabelClasses}>Team Name</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="leader-name" name="leaderName" type="text" className={teamInfoInputClasses} placeholder="Team Leader Name" />
                        <label htmlFor="leader-name" className={teamInfoLabelClasses}>Team Leader Name</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="wapp-num" name="wappNum" type="text" className={teamInfoInputClasses} placeholder="Team Leader's WhatsApp Number" />
                        <label htmlFor="wapp-num" className={teamInfoLabelClasses}>Team Leader&apos;s WhatsApp Number</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="dis-id" name="disId" type="text" className={teamInfoInputClasses} placeholder="Team Leader's Discord ID" />
                        <label htmlFor="dis-id" className={teamInfoLabelClasses}>Team Leader&apos;s Discord ID</label>
                    </div>
                </div>
                <div className="relative md:col-span-2 xl:col-auto text-center border-2 p-4 shadow-sm">
                    <img src={avatar} alt="Team Avatar" className="w-20 h-20 mx-auto mb-2 rounded-full object-cover border-4 border-gray-400" />
                    <input id="team-photo" name="teamPhoto" type="file" className={`${teamInfoInputClasses} hidden`} accept="image/*" onChange={handleFileChange} />
                    <label htmlFor="team-photo" className="font-semibold cursor-pointer p-1 w-full hover:text-gray-800 text-gray-600 text-base focus:outline-none focus:borer-rose-600">{imageName}</label>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
            </div>
        </>
    );
};

export default RegiStep1;