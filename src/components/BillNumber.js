import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import SummaryApi from '../common';
import { useSelector } from 'react-redux';

const BillNumber = ({ onClose, gatepassData }) => {
    const [gateBillNumber, setgateBillNumber] = useState('');
    const user = useSelector(state => state?.user?.user);

    const updateGatepass = () => {
        const updatedGatepass = {
            ...gatepassData,
            bnverified: "Yes",
            billNumber: gateBillNumber,
            billNumberVerifiedBy: user.name,
        };

        fetch(SummaryApi.UpdateGatepass.url, {
            method: SummaryApi.UpdateGatepass.method,
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedGatepass),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert(data.message);
                    onClose(); // Close the modal after successful update
                } else {
                    alert("Error updating gatepass: " + data.message);
                }
            })
            .catch((error) => {
                alert("Error updating gatepass.");
                console.error("Error:", error);
            });
    };

    const handlegateBillNumber = (e) => {
        const newGateBillNumber = e.target.value;
        setgateBillNumber(newGateBillNumber)
    }


    return (
        <div className="fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[60%] overflow-y-auto">
                <div className="p-4">
                    <h2 className="font-bold text-2xl text-center">GP no. {gatepassData.gatepassNumber}</h2>
                    <div
                        className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer"
                        onClick={onClose}
                    >
                        <CgClose />
                    </div>
                </div>
                <form className=''>
                    <div className="flex flex-col items-center justify-center w-full">
                        <h2 className="text-gray-700 text-lg font-bold mb-2">Enter Bill Number</h2>
                        <input
                            className="shadow appearance-none border rounded w-3/4 max-w-lg py-2 px-3 my-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="gateBillNumber"
                            value={gateBillNumber}
                            type="number"
                            onChange={handlegateBillNumber}
                            placeholder="Enter Bill Number Here"
                            required
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label htmlFor="truckWeight" className="block text-gray-700 text-sm font-bold mb-2">Truck Weight:</label>
                        <input
                            type="text"
                            id="truckWeight"
                            value={truckWeight}
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                        />
                    </div> */}
                    <div className='flex justify-center space-x-20'>
                        <button
                            className='bg-red-600 px-8 py-2 text-white border-2 border-black hover:scale-110 transition-all'
                            type="button"
                            onClick={updateGatepass}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BillNumber






