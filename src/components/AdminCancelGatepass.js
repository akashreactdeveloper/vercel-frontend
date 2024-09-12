import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import SummaryApi from '../common';

const AdminCancelGatepass = ({ onClose, gatepassData }) => {
    const [reason, setReason] = useState('');

    const updateGatepass = () => {
        const updatedGatepass = {
            ...gatepassData,
            trucknumber: "Cancel",
            verified: "Yes",
            partyName: "Cancel",
            batchnumber: "Cancel",
            reason: reason,
            status: "Cancel",
            weight: "0",
            category: "0",
            subcategories: "0",
            subsubcategories: "0",
            otherSubsubcategories: "0",
            numberOfBags: "0",
            perbagprice: "0",
            perkgrateScrap: "0",
            typeOfScrap: "0",
            productValue: "0",
            perKgRate: "0",
            loadingCharger: "0",
            cgst: "0",
            sgst: "0",
            weightOfTruck: "0",
            totalValue: "0",
            totalWeight: "0",
            perqtlrate: "0",
            totalamount: "0",
            weight1: "0",
            category1: "0",
            subcategories1: "0",
            subsubcategories1: "0",
            otherSubsubcategories1: "0",
            numberOfBags1: "0",
            perbagprice1: "0",
            productValue1: "0",
            perKgRate1: "0",
            loadingCharger1: "0",
            cgst1: "0",
            sgst1: "0",
            weight1OfTruck1: "0",
            totalValue1: "0",
            totalWeight11: "0",
            perqtlrate1: "0",
            totalamount1: "0",
            weight2: "0",
            category2: "0",
            subcategories2: "0",
            subsubcategories2: "0",
            otherSubsubcategories2: "0",
            numberOfBags2: "0",
            perbagprice2: "0",
            productValue2: "0",
            perKgRate2: "0",
            loadingCharger2: "0",
            cgst2: "0",
            sgst2: "0",
            weight2OfTruck2: "0",
            totalValue2: "0",
            totalWeight2: "0",
            perqtlrate2: "0",
            totalamount2: "0",
            weight3: "0",
            category3: "0",
            subcategories3: "0",
            subsubcategories3: "0",
            otherSubsubcategories3: "0",
            numberOfBags3: "0",
            perbagprice3: "0",
            productValue3: "0",
            perKgRate3: "0",
            loadingCharger3: "0",
            cgst3: "0",
            sgst3: "0",
            weight3OfTruck3: "0",
            totalValue3: "0",
            totalWeight3: "0",
            perqtlrate3: "0",
            totalamount3: "0",
            TotalGatepassWeight: "0",
            TotalGatepassAmount: "0",
            TotalGatepassTruckWeight: "0",
            TotalTruckWeight: "0",
            TotalTruckWeight1: "0",
            TotalTruckWeight2: "0",
            TotalTruckWeight3: "0",
            typeofsale: "0",
            loadingDoneBy: "0",
            kandaWeight: "0",
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

    const handleReason = (e) => {
        const reasonForCancel = e.target.value;
        setReason(reasonForCancel)
    }

    return (
        <div className="fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[60%] overflow-y-auto">
                <div className="p-4">
                    <h2 className="font-bold text-2xl text-center">Do you want to Cancel?</h2>
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
                        <h2 className="text-gray-700 text-lg font-bold mb-2">Enter Reason for Cancellation</h2>
                        <input
                            className="shadow appearance-none border rounded w-3/4 max-w-lg py-2 px-3 my-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="reason"
                            value={reason}
                            type="text"
                            onChange={handleReason}
                            placeholder="Enter Reason Here"
                            required
                        />
                    </div>
                    <div className='flex justify-center space-x-20'>
                        <button
                            className='bg-red-600 px-8 py-2 text-white border-2 border-black hover:scale-110 transition-all'
                            type="button"
                            onClick={updateGatepass}>
                            Yes
                        </button>
                        <button
                            className='bg-green-600 px-8 py-2 text-white border-2 border-black hover:scale-110 transition-all'
                            type="button"
                            onClick={onClose}>
                            No
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminCancelGatepass;
