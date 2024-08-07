import React, { useState, useEffect } from "react";
import RacerComponent from "./RacerComponent";
import DriverProfile from "./DriverProfile";
import OpenF1 from "../Utilities/OpenF1"; // Import the OpenF1 class


const RacerDashboard = ({ onSelectDriver }) => {
    const [racers, setRacers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedRacer, setSelectedRacer] = useState(null);

    useEffect(() => {
        const openF1Instance = new OpenF1();

        const fetchRacers = async () => {
            try {
                const response = await openF1Instance.getDrivers({ session_key: 'latest' });
                setRacers(response);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchRacers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleSelectDriver = (racer) => {
        setSelectedRacer(racer);
    };

    const handleDeselectDriver = () => {
        setSelectedRacer(null);
    };

    return (
        <div>
            {selectedRacer ? (
                <DriverProfile driver={selectedRacer} onDeselectDriver={handleDeselectDriver} />
            ) : (
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    {racers.map((racer) => (
                        <div key={racer.driverId} onClick={() => handleSelectDriver(racer)}>
                            <RacerComponent
                                headshot_url={racer.headshot_url}
                                full_name={racer.full_name}
                                driver_number={racer.driver_number}
                                team_colour={racer.team_colour}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RacerDashboard;
