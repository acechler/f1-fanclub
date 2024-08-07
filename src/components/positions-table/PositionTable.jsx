import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { OPENF1_LAPS_API, OPENF1_DRIVERS_WILD_API, OPENF1_POSITIONS_API } from "../../config";

const PositionTable = ({ session_key }) => {
    const [laps, setLaps] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [positions, setPositions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lapResponse = await axios.get(`${OPENF1_LAPS_API}session_key=${session_key}&lap_number=44`);
                const driverResponse = await axios.get(`${OPENF1_DRIVERS_WILD_API}${session_key}`);
                const positionResponse = await axios.get(`${OPENF1_POSITIONS_API}session_key=${session_key}`);
                setLaps(lapResponse.data);
                setDrivers(driverResponse.data);
                setPositions(positionResponse.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [session_key]);

    const getDriverName = (driverNumber) => {
        const driver = drivers.find(d => d.driver_number === driverNumber);
        return driver ? driver.full_name : "Unknown Driver";
    };

    const getDriverLapTime = (driverNumber) => {
        const lap = laps.find(lap => lap.driver_number === driverNumber);
        return lap ? lap.lap_duration : "Unknown Lap Time";
    };

    const getDriverTeam = (driverNumber) => {
        const driver = drivers.find(d => d.driver_number === driverNumber);
        return driver ? driver.team_name : "Unknown Team";
    };

    const getDriverPosition = (driverNumber) => {
        const position = positions.find(p => p.driver_number === driverNumber);
        return position ? position.position : "Unknown Position";
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="mt-4">
            <h3 className="font-semibold text-lg text-center mb-4">Racers Positions on Last Lap</h3>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Position
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Driver Number
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Driver Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Team
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Lap Time
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {laps.map((lap, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{getDriverPosition(lap.driver_number)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lap.driver_number}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{getDriverName(lap.driver_number)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{getDriverTeam(lap.driver_number)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{getDriverLapTime(lap.driver_number)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

PositionTable.propTypes = {
    session_key: PropTypes.string.isRequired,
};

export default PositionTable;
