import React, { useState, useEffect } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import AminEditGatepass from './AminEditGatepass';
import ROLE from '../common/role';
import { useSelector } from 'react-redux';

const AdminGatepassCard = ({ data }) => {
    const [editGatepass, setEditGatepass] = useState(false);
    const [remainingTime, setRemainingTime] = useState(null);
    const user = useSelector(state => state?.user?.user);

    const getBackgroundColor = () => {
        if (data.type === 'AWL') {
            return 'bg-gradient-to-r from-blue-100 to-blue-300 hover:from-blue-300 hover:to-blue-500';
        } else {
            return 'bg-gradient-to-r from-green-100 to-green-300 hover:from-green-300 hover:to-green-500';
        }
    };

    const calculateRemainingTime = () => {
        const creationTime = new Date(data.createdAt);
        const currentTime = new Date();
        const diffInMilliseconds = creationTime.getTime() + (3 * 60 * 60 * 1000) - currentTime.getTime();
        
        if (diffInMilliseconds > 0) {
            const hours = Math.floor((diffInMilliseconds / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diffInMilliseconds / (1000 * 60)) % 60);
            const seconds = Math.floor((diffInMilliseconds / 1000) % 60);
            return `${hours}h ${minutes}m ${seconds}s`;
        }
        
        return null; // Time's up
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const time = calculateRemainingTime();
            setRemainingTime(time);
            if (!time) {
                clearInterval(timer); // Clear the timer when time's up
            }
        }, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, [data.createdAt]);

    const shouldShowEditButton = () => {
        if (user?.role === ROLE.ADMIN) {
            return true;
        }
        if (user?.role === ROLE.COADMIN) {
            return remainingTime !== null;
        }
        return false;
    };

    const handleCardClick =async () => {
    }

    return (
        <div
            className={`bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out p-4 m-2 flex-shrink-0 w-64 ${getBackgroundColor()}`}
            onClick={handleCardClick}
        >
            <div className="flex items-center justify-between">
                <div><h1 className="text-lg font-semibold text-gray-800 truncate">Gatepass No. : {data.gatepassNumber}</h1></div>
                
                {shouldShowEditButton() && (
                    <div
                        className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-green-100 to-green-300 hover:from-green-300 hover:to-green-500 rounded-full cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            setEditGatepass(true);
                        }}
                    >
                        <MdModeEditOutline className="text-green-600" size={20} />
                    </div>
                )}
            </div>
            
            {/* Remaining Time Display */}
            {user?.role === ROLE.COADMIN && remainingTime && (
                <div className="mt-2 text-sm text-red-600">
                    Time remaining to edit: {remainingTime}
                </div>
            )}

            {/* Additional details or actions */}
            <div className="mt-2">
                <p className="text-sm text-gray-600">Party Name: {data.partyName}</p>
                <p className="text-sm text-gray-600">Truck Number: {data.trucknumber}</p>
                <p className="text-sm text-gray-600 font-semibold">Total Amount: Rs. {data.totalValue} /-</p>
                <p className="text-sm text-gray-600">Total Weight: {data.totalWeight / 100} Qtl.</p>
            </div>

            {/* Edit gatepass modal */}
            {editGatepass && (
                <AminEditGatepass gatepassData={data} onClose={() => setEditGatepass(false)} />
            )}
        </div>
    );
};

export default AdminGatepassCard;
