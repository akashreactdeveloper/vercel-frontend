import React, { useEffect, useState } from 'react';
import { CgClose } from "react-icons/cg";
import SummaryApi from '../common';
import { useSelector } from 'react-redux';

const VerifyKandaWeight = ({ onClose, gatepassData }) => {
    const [gateKandaWeight, setgateKandaWeight] = useState('0');
    const [gateKandaWeightDifference, setgateKandaWeightDifference] = useState('');
    const truckWeight = gatepassData.TotalGatepassTruckWeight;
    const user = useSelector(state => state?.user?.user);
    console.log("user",user.name)

    const updateGatepass = () => {
        const updatedGatepass = {
            ...gatepassData,
            kwverified: "Yes",
            kandaWeight: gateKandaWeight,
            kandaWeightVerifiedBy: user.name,
            weightDifference : gateKandaWeightDifference,
            status : "Verified"
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

    const handlegateKandaWeight = (e) => {
        const newGateKandaWeight = e.target.value;
        setgateKandaWeight(newGateKandaWeight)
    }

    const calculateKandaWeightDifference = (gateKandaWeight,truckWeight) =>{
        const newDifference = parseFloat(gateKandaWeight) - parseFloat(truckWeight)
        setgateKandaWeightDifference((newDifference).toFixed(2))
    }

    useEffect(()=>{
        calculateKandaWeightDifference(gateKandaWeight,truckWeight);
    },[gateKandaWeight,truckWeight]);


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
                        <h2 className="text-gray-700 text-lg font-bold mb-2">Enter Kanda Weight in KG.</h2>
                        <input
                            className="shadow appearance-none border rounded w-3/4 max-w-lg py-2 px-3 my-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="gateKandaWeight"
                            value={gateKandaWeight}
                            type="number"
                            onChange={handlegateKandaWeight}
                            placeholder="Enter Kanda Weight Here"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="truckWeight" className="block text-gray-700 text-sm font-bold mb-2">Truck Weight:</label>
                        <input
                            type="text"
                            id="truckWeight"
                            value={truckWeight}
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gateKandaWeightDifference" className="block text-gray-700 text-sm font-bold mb-2">Weight Differnce :</label>
                        <input
                            type="text"
                            id="gateKandaWeightDifference"
                            value={gateKandaWeightDifference}
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                        />
                    </div>
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

export default VerifyKandaWeight



