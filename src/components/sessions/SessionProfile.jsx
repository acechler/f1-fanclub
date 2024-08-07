import React from 'react';
import PropTypes from 'prop-types';
import PositionTable from '../positions-table/PositionTable';

const SessionProfile = ({ session, onDeselectSession }) => {
    return (
        <div className="flow-root p-4 mt-5 rounded-lg">
            <dl className="-my-3 mt-20 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Country</dt>
                    <dd className="text-gray-700 sm:col-span-2">{session.country_name}</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Year</dt>
                    <dd className="text-gray-700 sm:col-span-2">{session.year}</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Circuit</dt>
                    <dd className="text-gray-700 sm:col-span-2">{session.circuit_short_name}</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Bio</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis
                        debitis explicabo doloremque impedit nesciunt dolorem facere, dolor
                        quasi veritatis quia fugit aperiam aspernatur neque molestiae labore
                        aliquam soluta architecto?
                    </dd>
                </div>
            </dl>
           <PositionTable session_key={session.session_key} />
            <button 
                onClick={onDeselectSession} 
                aria-label="Select another racer" 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Select Another Session
            </button>
        </div>
    );
};

SessionProfile.propTypes = {
    session: PropTypes.object.isRequired,
    onDeselectSession: PropTypes.func.isRequired
};

export default SessionProfile;
