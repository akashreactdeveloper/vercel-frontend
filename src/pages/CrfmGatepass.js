import React, { useState, useEffect, useRef } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const CrfmGatepass = () => {
    const [AwlformData, setAwlformData] = useState({
        partyName: '',
        trucknumber: '',
        category: '',
        subcategories: '',
        subsubcategories: '',
        otherSubsubcategories: '',
        numberOfBags: '',
        perbagprice: '',
        productValue: '',
        perKgRate: '',
        weightOfTruck: '',
        isMaida_BulkerSelected: false,
        loadingCharger: '0',
        cgst: '0',
        sgst: '0',
        totalValue: '',
        totalWeight: '',
        perqtlrate: '',
        weight: '',
        totalamount: '',
        weight1: '',
        category1: '',
        subcategories1: '',
        subsubcategories1: '',
        otherSubsubcategories1: '',
        numberOfBags1: '',
        perbagprice1: '',
        productValue1: '',
        perKgRate1: '',
        loadingCharger1: '',
        cgst1: '',
        sgst1: '',
        weight1OfTruck1: '',
        totalValue1: '',
        totalWeight11: '',
        perqtlrate1: '',
        totalamount1: '',
        weight2: '',
        category2: '',
        subcategories2: '',
        subsubcategories2: '',
        otherSubsubcategories2: '',
        numberOfBags2: '',
        perbagprice2: '',
        productValue2: '',
        perKgRate2: '',
        loadingCharger2: '',
        cgst2: '',
        sgst2: '',
        weight2OfTruck2: '',
        totalValue2: '',
        totalWeight2: '',
        perqtlrate2: '',
        totalamount2: '',
        weight3: '',
        category3: '',
        subcategories3: '',
        subsubcategories3: '',
        otherSubsubcategories3: '',
        numberOfBags3: '',
        perbagprice3: '',
        productValue3: '',
        perKgRate3: '',
        loadingCharger3: '',
        cgst3: '',
        sgst3: '',
        weight3OfTruck3: '',
        totalValue3: '',
        totalWeight3: '',
        perqtlrate3: '',
        totalamount3: '',
        TotalnumberOfBagsInGatepass: '',
        TotalGatepassAmount: '',
        typeofsale: '',
        loadingDoneBy: '',
    });

    const [gatepassNumberList, setGatepassNumberList] = useState([]);
    const [selectedGatepass, setSelectedGatepass] = useState(null);
    const gatepassRef = useRef(null);

    const fetchGatepassNumber = async () => {
        const fetchData = await fetch(SummaryApi.AllAwlGatepass.url, {
            method: SummaryApi.AllAwlGatepass.method,
        });

        const dataResponse = await fetchData.json();

        if (dataResponse.success) {
            const filteredData = dataResponse.data.filter(entry => entry.type === 'CRFM');
            setGatepassNumberList(filteredData);
            if (filteredData.length > 0) {
                setSelectedGatepass(filteredData[0].gatepassNumber); // Automatically select the first gatepass
            }
        }

        if (dataResponse.error) {
            toast.error(dataResponse.message);
        }
    };

    useEffect(() => {
        fetchGatepassNumber();
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const newAwlformData = {};
        for (let [key, value] of searchParams.entries()) {
            newAwlformData[key] = value === 'true' ? true : value === 'false' ? false : value;
        }
        setAwlformData(newAwlformData);
    }, []);

    const getCurrentDateTime = () => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = now.getFullYear();
        const date = `${day}/${month}/${year}`;
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Exclude seconds
        return { date, time };
    };
    

    const handlePrint = () => {
        if (gatepassRef.current) {
            const printContents = gatepassRef.current.innerHTML;
            const originalContents = document.body.innerHTML;

            document.body.innerHTML = `
                <div style="width: 48%; float: left;">
                    ${printContents}
                </div>
                <div style="width: 48%; float: right;">
                    ${printContents}
                </div>
                <div style="clear: both;"></div>
            `;
            window.print();
            document.body.innerHTML = originalContents;
            window.location.reload(); // Reload to restore the original state
        } else {
            console.error('gatepassRef is not defined');
        }
    };

    const MAX_ROWS = 4;

    const items = [
        {
            category: AwlformData.category,
            subcategories: AwlformData.subcategories,
            numberOfBags: AwlformData.numberOfBags,
            perbagprice: AwlformData.perbagprice,
            productValue: AwlformData.productValue,
            weight: AwlformData.weight,
            perqtlrate: AwlformData.perqtlrate,
            totalamount: AwlformData.totalamount
        },
        {
            category: AwlformData.category1,
            subcategories: AwlformData.subcategories1,
            numberOfBags: AwlformData.numberOfBags1,
            perbagprice: AwlformData.perbagprice1,
            productValue: AwlformData.productValue1,
            weight: AwlformData.weight1,
            perqtlrate: AwlformData.perqtlrate1,
            totalamount: AwlformData.totalamount1
        },
        {
            category: AwlformData.category2,
            subcategories: AwlformData.subcategories2,
            numberOfBags: AwlformData.numberOfBags2,
            perbagprice: AwlformData.perbagprice2,
            productValue: AwlformData.productValue2,
            weight: AwlformData.weight2,
            perqtlrate: AwlformData.perqtlrate2,
            totalamount: AwlformData.totalamount2
        },
        {
            category: AwlformData.category3,
            subcategories: AwlformData.subcategories3,
            numberOfBags: AwlformData.numberOfBags3,
            perbagprice: AwlformData.perbagprice3,
            productValue: AwlformData.productValue3,
            weight: AwlformData.weight3,
            perqtlrate: AwlformData.perqtlrate3,
            totalamount: AwlformData.totalamount3
        }
    ];

    const selectedGatepassData = gatepassNumberList.find(el => el.gatepassNumber === selectedGatepass);

    return (
        <div>
            {selectedGatepassData && (
                <div ref={gatepassRef}>
                    {AwlformData.category === "Refraction" ? (
                        <table className='border-2 border-black'>
                            <thead>
                                <tr className="border">
                                    <th colSpan="5" className='text-2xl'>GATE PASS</th>
                                </tr>
                                <tr className="border">
                                    <th colSpan="4">Chandigarh Roller Flour Mills Pvt. Ltd.</th>
                                </tr>
                                <tr className="border">
                                    <th>No. C-{selectedGatepassData?.gatepassNumber-1000}</th>
                                    <th>Date : {getCurrentDateTime().date}</th>
                                    <td></td>
                                    <th>Time : {getCurrentDateTime().time}</th>
                                </tr>
                                <tr>
                                    <th colSpan={2} className='p-4'>Name of Party : {AwlformData.partyName}</th>
                                    <th colSpan={2}>Truck Number : {AwlformData.trucknumber}</th>
                                </tr>
                                <tr className='border-2 border-black'>
                                    <th className="px-1 py-3 border border-black">Name of Product</th>
                                    <th className="px-1 border border-black">Weight</th>
                                    <th className="px-1 border border-black">Per Qtl. Rate</th>
                                    <th className="px-1 border border-black">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="border border-black">
                                {items.map((item, index) => (
                                    <tr key={index} className="h-10">
                                        <td className="px-1 text-center border border-black">
                                            {item.category} <br /> {item.subcategories}
                                        </td>
                                        <td className="px-1 text-center border border-black">{item.weight}</td>
                                        <td className="px-1 text-center border border-black">{item.perqtlrate}</td>
                                        <td className="px-1 text-center border border-black">{item.totalamount}</td>
                                    </tr>
                                ))}
                                {Array.from({ length: MAX_ROWS - items.length }).map((_, index) => (
                                    <tr key={`placeholder-${index}`} className="h-10">
                                        <td className="px-1 text-center border border-black">&nbsp;</td>
                                        <td className="px-1 text-center border border-black">&nbsp;</td>
                                        <td className="px-1 text-center border border-black">&nbsp;</td>
                                        <td className="px-1 text-center border border-black">&nbsp;</td>
                                    </tr>
                                ))}
                                <tr>
                                    <th className="px-1 text-center border border-black">Total</th>
                                    <td className="px-1 text-center border border-black">{AwlformData.TotalGatepassWeight} Qtl.</td>
                                    <td className="px-1 text-center border border-black"></td>
                                    <td className="px-1 text-center border border-black">{AwlformData.TotalGatepassAmount}</td>
                                </tr>
                                <tr className="h-8"> {/* Adjust the height here */}
                                    <th colSpan={2}>Total Atta Weight : {(AwlformData.TotalGatepassWeight / 100).toFixed(2)} <></> Qtl.</th>
                                    <th colSpan={2}>Total Truck Weight : {(AwlformData.TotalGatepassTruckWeight / 100).toFixed(2)} <></> Qtl.</th>
                                </tr>
                            </tbody>
                            <tr>
                                <th className='pt-6 pb-1' colSpan={2}>Loading Done By</th>
                                <th className='pt-6 pb-1' colSpan={2}>Authorized Signatory</th>
                            </tr>
                        </table>
                    ) : (
                        <table className='border-2 border-black'>
                            <thead>
                                <tr className="border">
                                    <th colSpan="5" className='text-2xl'>GATE PASS</th>
                                </tr>
                                <tr className="border">
                                    <th colSpan="4">Chandigarh Roller Flour Mills Pvt. Ltd.</th>
                                </tr>
                                <tr className="border">
                                    <th>No. C-{selectedGatepassData?.gatepassNumber}</th>
                                    <th>Date : {getCurrentDateTime().date}</th>
                                    <td></td>
                                    <th>Time : {getCurrentDateTime().time}</th>
                                </tr>
                                <tr>
                                    <th colSpan={2} className='p-4'>Name of Party : {AwlformData.partyName}</th>
                                    <th colSpan={2}>Truck Number : {AwlformData.trucknumber}</th>
                                </tr>
                                <tr className='border-2 border-black'>
                                    <th className="px-1 py-3 border border-black">Name of Product</th>
                                    <th className="px-1 border border-black">No. of Bags</th>
                                    <th className="px-1 border border-black">Per Bag Rate</th>
                                    <th className="px-1 border border-black">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="border border-black">
                                {items.map((item, index) => (
                                    <tr key={index} className="h-10">
                                        <td className="px-1 text-center border border-black">
                                            {item.category} <br /> {item.subcategories}
                                        </td>
                                        <td className="px-1 text-center border border-black">{item.numberOfBags}</td>
                                        <td className="px-1 text-center border border-black">{item.perbagprice}</td>
                                        <td className="px-1 text-center border border-black">{item.productValue}</td>
                                    </tr>
                                ))}
                                {Array.from({ length: MAX_ROWS - items.length }).map((_, index) => (
                                    <tr key={`placeholder-${index}`} className="h-10">
                                        <td className="px-1 text-center border border-black">&nbsp;</td>
                                        <td className="px-1 text-center border border-black">&nbsp;</td>
                                        <td className="px-1 text-center border border-black">&nbsp;</td>
                                        <td className="px-1 text-center border border-black">&nbsp;</td>
                                    </tr>
                                ))}
                                <tr>
                                    <th className="px-1 text-center border border-black">Total</th>
                                    <td className="px-1 text-center border border-black">{AwlformData.TotalnumberOfBagsInGatepass}</td>
                                    <td className="px-1 text-center border border-black"></td>
                                    <td className="px-1 text-center border border-black">{AwlformData.TotalGatepassAmount}</td>
                                </tr>
                                <tr className="h-8"> {/* Adjust the height here */}
                                    <th colSpan={2}>Total Atta Weight : {(AwlformData.TotalGatepassWeight / 100).toFixed(2)} <></> Qtl.</th>
                                    <th colSpan={2}>Total Truck Weight : {(AwlformData.TotalGatepassTruckWeight / 100).toFixed(2)} <></> Qtl.</th>
                                </tr>
                            </tbody>
                            <tr>
                                <th className='pt-6 pb-1' colSpan={2}>Loading Done By</th>
                                <th className='pt-6 pb-1' colSpan={2}>Authorized Signatory</th>
                            </tr>
                        </table>
                    )}
                </div>
            )}
            <button onClick={handlePrint} className='btn btn-primary'>
                Print Gatepass
            </button>
        </div>
    );
};

export default CrfmGatepass;
