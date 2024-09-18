import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import VerifyKandaWeight from './VerifyKandaWeight';

const VerficationCard = ({ data }) => {
    const [verifyKandaWeight, setVerifyKandaWeight] = useState(false);

    const getBackgroundColor = () => {
        if (data.type === 'AWL') {
            return 'bg-gradient-to-r from-blue-100 to-blue-300 hover:from-blue-300 hover:to-blue-500';
        } else {
            return 'bg-gradient-to-r from-green-100 to-green-300 hover:from-green-300 hover:to-green-500';
        }
    };

    const handleCardClick = async () => {
    }

    return (
        <div className={` bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out p-4 m-2 flex-shrink-0 w-64  ${getBackgroundColor()}`} onClick={handleCardClick}>
            <div className="flex items-center justify-between">
                <div><h1 className="text-lg font-semibold text-gray-800 truncate">Gatepass No. : {data.gatepassNumber}</h1></div>
            </div>

            {/* Additional details or actions */}
            <div className="mt-2">
                {data.type === 'CRFM' && (
                    <p className="text-sm text-gray-600">Party Name : {data.partyName}</p>
                )}
                <p className="text-sm text-gray-600">Truck Number: {data.trucknumber}</p>
                <p className="text-sm text-gray-600 font-semibold">Total Amount: Rs. {data.totalValue} /-</p>
                <p className="text-sm text-gray-600">Total Truck Weight: {(data.TotalGatepassTruckWeight / 100).toFixed(2)} Qtl.</p>
                <button className='flex justify-center items-center text-center bg-red-600 border-2 border-red-50 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 hover:border-red-200 transition duration-300 ease-in-out' onClick={(e) => {
                    e.stopPropagation();
                    setVerifyKandaWeight(true);
                }}>
                    Verify
                </button>
                {/* You can add more details or actions here */}
            </div>

            {/* Edit gatepass modal */}
            {verifyKandaWeight && (
                <VerifyKandaWeight gatepassData={data} onClose={() => setVerifyKandaWeight(false)} />
            )}
        </div>
    );
};

export default VerficationCard

