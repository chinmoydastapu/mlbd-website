const RegiStep2 = () => {
    const teamInfoInputClasses = "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600";
    const teamInfoLabelClasses = "absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm";
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-8">
            {/* Player 1 Information */}
            <div>
                <p className="font-bold text-base py-5">Player-1 Information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="relative">
                        <input autoComplete="off" id="p1-ign" name="p1IGN" type="text" className={teamInfoInputClasses} placeholder="IGN" />
                        <label htmlFor="p1-ign" className={teamInfoLabelClasses}>IGN</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p1-ID" name="p1ID" type="text" className={teamInfoInputClasses} placeholder="ID" />
                        <label htmlFor="p1-ID" className={teamInfoLabelClasses}>ID</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p1-server" name="p1Server" type="text" className={teamInfoInputClasses} placeholder="Server" />
                        <label htmlFor="p1-server" className={teamInfoLabelClasses}>Server</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p1-device-model" name="p1DeviceModel" type="text" className={teamInfoInputClasses} placeholder="Device Name and Model" />
                        <label htmlFor="p1-device-model" className={teamInfoLabelClasses}>Device Name and Model</label>
                    </div>
                </div>
            </div>
            {/* Player 2 Information */}
            <div>
                <p className="font-bold text-base py-5">Player-2 Information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="relative">
                        <input autoComplete="off" id="p2-ign" name="p2IGN" type="text" className={teamInfoInputClasses} placeholder="IGN" />
                        <label htmlFor="p2-ign" className={teamInfoLabelClasses}>IGN</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p2-ID" name="p2ID" type="text" className={teamInfoInputClasses} placeholder="ID" />
                        <label htmlFor="p2-ID" className={teamInfoLabelClasses}>ID</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p2-server" name="p2Server" type="text" className={teamInfoInputClasses} placeholder="Server" />
                        <label htmlFor="p2-server" className={teamInfoLabelClasses}>Server</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p2-device-model" name="p2DeviceModel" type="text" className={teamInfoInputClasses} placeholder="Device Name and Model" />
                        <label htmlFor="p2-device-model" className={teamInfoLabelClasses}>Device Name and Model</label>
                    </div>
                </div>
            </div>
            {/* Player 3 Information */}
            <div>
                <p className="font-bold text-base py-5">Player-3 Information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="relative">
                        <input autoComplete="off" id="p3-ign" name="p3IGN" type="text" className={teamInfoInputClasses} placeholder="IGN" />
                        <label htmlFor="p3-ign" className={teamInfoLabelClasses}>IGN</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p3-ID" name="p3ID" type="text" className={teamInfoInputClasses} placeholder="ID" />
                        <label htmlFor="p3-ID" className={teamInfoLabelClasses}>ID</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p3-server" name="p3Server" type="text" className={teamInfoInputClasses} placeholder="Server" />
                        <label htmlFor="p3-server" className={teamInfoLabelClasses}>Server</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p3-device-model" name="p3DeviceModel" type="text" className={teamInfoInputClasses} placeholder="Device Name and Model" />
                        <label htmlFor="p3-device-model" className={teamInfoLabelClasses}>Device Name and Model</label>
                    </div>
                </div>
            </div>
            {/* Player 4 Information */}
            <div>
                <p className="font-bold text-base py-5">Player-4 Information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="relative">
                        <input autoComplete="off" id="p4-ign" name="p4IGN" type="text" className={teamInfoInputClasses} placeholder="IGN" />
                        <label htmlFor="p4-ign" className={teamInfoLabelClasses}>IGN</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p4-ID" name="p4ID" type="text" className={teamInfoInputClasses} placeholder="ID" />
                        <label htmlFor="p4-ID" className={teamInfoLabelClasses}>ID</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p4-server" name="p4Server" type="text" className={teamInfoInputClasses} placeholder="Server" />
                        <label htmlFor="p4-server" className={teamInfoLabelClasses}>Server</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p4-device-model" name="p4DeviceModel" type="text" className={teamInfoInputClasses} placeholder="Device Name and Model" />
                        <label htmlFor="p4-device-model" className={teamInfoLabelClasses}>Device Name and Model</label>
                    </div>
                </div>
            </div>
            {/* Player 5 Information */}
            <div>
                <p className="font-bold text-base py-5">Player-5 Information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="relative">
                        <input autoComplete="off" id="p5-ign" name="p5IGN" type="text" className={teamInfoInputClasses} placeholder="IGN" />
                        <label htmlFor="p5-ign" className={teamInfoLabelClasses}>IGN</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p5-ID" name="p5ID" type="text" className={teamInfoInputClasses} placeholder="ID" />
                        <label htmlFor="p5-ID" className={teamInfoLabelClasses}>ID</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p5-server" name="p5Server" type="text" className={teamInfoInputClasses} placeholder="Server" />
                        <label htmlFor="p5-server" className={teamInfoLabelClasses}>Server</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p5-device-model" name="p5DeviceModel" type="text" className={teamInfoInputClasses} placeholder="Device Name and Model" />
                        <label htmlFor="p5-device-model" className={teamInfoLabelClasses}>Device Name and Model</label>
                    </div>
                </div>
            </div>
            {/* Player 6 Information */}
            <div>
                <p className="font-bold text-base py-5">Player-6 Information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="relative">
                        <input autoComplete="off" id="p6-ign" name="p6IGN" type="text" className={teamInfoInputClasses} placeholder="IGN" />
                        <label htmlFor="p6-ign" className={teamInfoLabelClasses}>IGN</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p6-ID" name="p6ID" type="text" className={teamInfoInputClasses} placeholder="ID" />
                        <label htmlFor="p6-ID" className={teamInfoLabelClasses}>ID</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p6-server" name="p6Server" type="text" className={teamInfoInputClasses} placeholder="Server" />
                        <label htmlFor="p6-server" className={teamInfoLabelClasses}>Server</label>
                    </div>
                    <div className="relative">
                        <input autoComplete="off" id="p6-device-model" name="p6DeviceModel" type="text" className={teamInfoInputClasses} placeholder="Device Name and Model" />
                        <label htmlFor="p6-device-model" className={teamInfoLabelClasses}>Device Name and Model</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegiStep2;