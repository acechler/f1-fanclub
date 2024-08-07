import React, { useState, useEffect } from "react";
import SessionsComponent from "./SessionsComponent";
import SessionProfile from "./SessionProfile";
import OpenF1 from "../Utilities/OpenF1"; // Import the OpenF1 class

const SessionsDashboard = () => {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSession, setSelectedSession] = useState(null);

    useEffect(() => {
        const openF1Instance = new OpenF1();

        const fetchSessions = async () => {
            try {
                const response = await openF1Instance.getSessions({ year: 2024, session_name: 'Race' });
                setSessions(response);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchSessions();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleSelectSession = (session) => {
        setSelectedSession(session);
    };

    const handleDeselectSession = () => {
        setSelectedSession(null);
    };

    return (
        <div>
            {selectedSession ? (
                <SessionProfile session={selectedSession} onDeselectSession={handleDeselectSession} />
            ) : (
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    {sessions.map((session) => (
                        <div key={session.session_key} onClick={() => handleSelectSession(session)}>
                            <SessionsComponent
                                country_name={session.country_name}
                                circuit_short_name={session.circuit_short_name}
                                year={session.year}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SessionsDashboard;
