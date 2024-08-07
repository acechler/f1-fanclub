import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import OpenF1 from "../Utilities/OpenF1"; // Import the OpenF1 class

const PositionTable = ({ session_key }) => {
    const [laps, setLaps] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [positions, setPositions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const openF1Instance = new OpenF1(); // Create an instance of OpenF1

        const fetchData = async () => {
            try {
                const lapResponse = await openF1Instance.getLaps({ session_key, lap_number: 44 });
                const driverResponse = await openF1Instance.getDrivers({ session_key });
                const positionResponse = await openF1Instance.getPositions({ session_key });
                setLaps(lapResponse);
                setDrivers(driverResponse);
                setPositions(positionResponse);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [session_key]);

    const driverMap = useMemo(() => {
        return drivers.reduce((acc, driver) => {
            acc[driver.driver_number] = driver;
            return acc;
        }, {});
    }, [drivers]);

    const positionMap = useMemo(() => {
        return positions.reduce((acc, position) => {
            acc[position.driver_number] = position;
            return acc;
        }, {});
    }, [positions]);

    const getDriverName = (driverNumber) => {
        return driverMap[driverNumber]?.full_name || "Unknown Driver";
    };

    const getDriverLapTime = (driverNumber) => {
        const lap = laps.find(lap => lap.driver_number === driverNumber);
        return lap ? lap.lap_duration : "Unknown Lap Time";
    };

    const getDriverTeam = (driverNumber) => {
        return driverMap[driverNumber]?.team_name || "Unknown Team";
    };

    const getDriverPosition = (driverNumber) => {
        return positionMap[driverNumber]?.position || "Unknown Position";
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
                        <TableRow
                            key={index}
                            driverNumber={lap.driver_number}
                            getDriverName={getDriverName}
                            getDriverLapTime={getDriverLapTime}
                            getDriverTeam={getDriverTeam}
                            getDriverPosition={getDriverPosition}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const TableRow = ({ driverNumber, getDriverName, getDriverLapTime, getDriverTeam, getDriverPosition }) => (
    <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{getDriverPosition(driverNumber)}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{driverNumber}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{getDriverName(driverNumber)}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{getDriverTeam(driverNumber)}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{getDriverLapTime(driverNumber)}</td>
    </tr>
);

TableRow.propTypes = {
    driverNumber: PropTypes.number.isRequired,
    getDriverName: PropTypes.func.isRequired,
    getDriverLapTime: PropTypes.func.isRequired,
    getDriverTeam: PropTypes.func.isRequired,
    getDriverPosition: PropTypes.func.isRequired,
};

PositionTable.propTypes = {
    session_key: PropTypes.string.isRequired,
};

export default PositionTable;
