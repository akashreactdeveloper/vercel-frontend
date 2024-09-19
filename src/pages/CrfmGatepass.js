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
        perkgrateScrap: '',
        typeOfScrap: '',
        typeOfScrap1: '',
        typeOfScrap2: '',
        typeOfScrap3: '',
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
        kandaWeight: '',
        verified: '',
        remarks: '',
        weightDifference: '',
        difference: '',
        reason: '',
        weightOfScrap: '',
        perkgrateScrap: '',
        weightOfScrap1: '',
        perkgrateScrap1: '',
        weightOfScrap2: '',
        perkgrateScrap2: '',
        weightOfScrap3: '',
        perkgrateScrap3: '',
    });

    console.log("latest", AwlformData.subcategories)

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
                setSelectedGatepass(filteredData[0].gatepassNumber);
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
        const originalTitle = document.title; // Save the original title
        document.title = ''; // Clear the title

        if (gatepassRef.current) {
            const printContents = gatepassRef.current.innerHTML;
            const originalContents = document.body.innerHTML;

            document.body.innerHTML = `
                <div style="width: 49.5%; float: left;">
                    ${printContents}
                </div>
                <div style="width: 49.5%; float: right;">
                    ${printContents}
                </div>
                <div style="clear: both;"></div>
            `;
            window.print();
            document.body.innerHTML = originalContents;
            document.title = originalTitle;
        } else {
            console.error('gatepassRef is not defined');
        }
    };

    const MAX_ROWS = 4;

    const items = [
        {
            category: AwlformData.category,
            subcategories: AwlformData.subcategories,
            subsubcategories: AwlformData.subsubcategories,
            otherSubsubcategories: AwlformData.otherSubsubcategories,
            totalWeight: AwlformData.totalWeight,
            productValue: AwlformData.productValue,
            numberOfBags: AwlformData.numberOfBags,
            perbagprice: AwlformData.perbagprice,
            productValue: AwlformData.productValue,
            weight: AwlformData.weight,
            perqtlrate: AwlformData.perqtlrate,
            perkgrateScrap: AwlformData.perkgrateScrap,
            typeOfScrap: AwlformData.typeOfScrap,
            totalamount: AwlformData.totalamount,
            perKgRate: AwlformData.perKgRate
        },
        {
            category: AwlformData.category1,
            subcategories: AwlformData.subcategories1,
            subsubcategories: AwlformData.subsubcategories1,
            otherSubsubcategories: AwlformData.otherSubsubcategories1,
            totalWeight: AwlformData.totalWeight11,
            productValue: AwlformData.productValue1,
            numberOfBags: AwlformData.numberOfBags1,
            perbagprice: AwlformData.perbagprice1,
            productValue: AwlformData.productValue1,
            weight: AwlformData.weight1,
            perqtlrate: AwlformData.perqtlrate1,
            typeOfScrap: AwlformData.typeOfScrap1,
            totalamount: AwlformData.totalamount1,
            perKgRate: AwlformData.perKgRate1
        },
        {
            category: AwlformData.category2,
            subcategories: AwlformData.subcategories2,
            subsubcategories: AwlformData.subsubcategories2,
            otherSubsubcategories: AwlformData.otherSubsubcategories2,
            totalWeight: AwlformData.totalWeight2,
            productValue: AwlformData.productValue3,
            numberOfBags: AwlformData.numberOfBags2,
            perbagprice: AwlformData.perbagprice2,
            productValue: AwlformData.productValue2,
            weight: AwlformData.weight2,
            perqtlrate: AwlformData.perqtlrate2,
            typeOfScrap: AwlformData.typeOfScrap2,
            totalamount: AwlformData.totalamount2,
            perKgRate: AwlformData.perKgRate2
        },
        {
            category: AwlformData.category3,
            subcategories: AwlformData.subcategories3,
            subsubcategories: AwlformData.subsubcategories3,
            otherSubsubcategories: AwlformData.otherSubsubcategories3,
            totalWeight: AwlformData.totalWeight3,
            productValue: AwlformData.productValue3,
            numberOfBags: AwlformData.numberOfBags3,
            perbagprice: AwlformData.perbagprice3,
            productValue: AwlformData.productValue3,
            weight: AwlformData.weight3,
            perqtlrate: AwlformData.perqtlrate3,
            typeOfScrap: AwlformData.typeOfScrap3,
            totalamount: AwlformData.totalamount3,
            perKgRate: AwlformData.perKgRate3
        }
    ];

    const selectedGatepassData = gatepassNumberList.find(el => el.gatepassNumber === selectedGatepass);

    return (
        <div>
            {selectedGatepassData && (
                <div ref={gatepassRef}>
                    {AwlformData.category === 'Maida' && AwlformData.subcategories === 'Maida_Bulker' ? (
                        <table className='border-2 border-black'>
                            <thead>
                                <tr className="border">
                                    <th colSpan="4" className='text-lg'>GATE PASS</th>
                                </tr>
                                <tr className="border">
                                    <th colSpan="4" className='text-lg'>Chandigarh Roller Flour Mills Pvt. Ltd.</th>
                                </tr>
                                <tr className="border">
                                    <th>No. {selectedGatepassData?.gatepassNumber}</th>
                                    <th>Date : {getCurrentDateTime().date}</th>
                                    <td></td>
                                    <th>Time : {getCurrentDateTime().time}</th>
                                </tr>
                                <tr className='h-10'>
                                    <th colSpan={2} className=''>Name of Party : {AwlformData.partyName}</th>
                                    <th colSpan={2}>Truck Number : {AwlformData.trucknumber}</th>
                                </tr>
                                <tr className='border-2 border-black'>
                                    <th className="px-1 py-1 border border-black">Name of Product</th>
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
                                        <td className="px-1 text-center border border-black">{item.totalWeight}</td>
                                        <td className="px-1 text-center border border-black">{item.perqtlrate}</td>
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
                                    <td className="px-1 text-center border border-black">{AwlformData.TotalGatepassWeight} Qtl.</td>
                                    <td className="px-1 text-center border border-black"></td>
                                    <td className="px-1 text-center border border-black">Rs. {AwlformData.TotalGatepassAmount}</td>
                                </tr>
                                <tr className="h-8"> {/* Adjust the height here */}
                                    <th colSpan={4}>Total Truck Weight : {(parseFloat(AwlformData.TotalGatepassWeight) || 0).toFixed(2)} Qtl.</th>
                                </tr>
                            </tbody>
                            <tr>
                                <th className='pt-6 pb-1' colSpan={2}>Loading Done By</th>
                                <th className='pt-6 pb-1' colSpan={2}>Authorized Signatory</th>
                            </tr>
                            <tr>
                                <th className='pb-2' colSpan={2}>{AwlformData.loadingDoneBy}</th>
                                <th className='pb-2' colSpan={2}>{AwlformData.gatepassGeneratedBy}</th>
                            </tr>
                        </table>
                    ) : AwlformData.category === 'scrap' || AwlformData.category === 'Wheat' ? (
                        <table className='border-2 border-black'>
                            <thead>
                                <tr className="border">
                                    <th colSpan="4" className='text-lg'>GATE PASS</th>
                                </tr>
                                <tr className="border">
                                    <th colSpan="4" className='text-lg'>Chandigarh Roller Flour Mills Pvt. Ltd.</th>
                                </tr>
                                <tr className="border">
                                    <th>No. {selectedGatepassData?.gatepassNumber}</th>
                                    <th>Date : {getCurrentDateTime().date}</th>
                                    <td></td>
                                    <th>Time : {getCurrentDateTime().time}</th>
                                </tr>
                                <tr className='h-10'>
                                    <th colSpan={2} className=''>Name of Party : {AwlformData.partyName}</th>
                                    <th colSpan={2}>Truck Number : {AwlformData.trucknumber}</th>
                                </tr>
                                <tr className='border-2 border-black'>
                                    <th className="px-1 py-1 border border-black">Name of Product</th>
                                    <th className="px-1 border border-black">Weight</th>
                                    <th className="px-1 border border-black">Per Kg. Rate</th>
                                    <th className="px-1 border border-black">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="border border-black">
                                {items.map((item, index) => (
                                    <tr key={index} className="h-10">
                                        <td className="px-1 text-center border border-black">
                                            {item.category} <br /> {item.typeOfScrap}
                                        </td>
                                        <td className="px-1 text-center border border-black">{item.totalWeight}</td>
                                        <td className="px-1 text-center border border-black">{item.perkgrateScrap}</td>
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
                                    <td className="px-1 text-center border border-black">{(AwlformData.TotalGatepassWeight/100).toFixed(2)} Qtl.</td>
                                    <td className="px-1 text-center border border-black"></td>
                                    <td className="px-1 text-center border border-black">Rs. {AwlformData.TotalGatepassAmount}</td>
                                </tr>
                                <tr className="h-8"> {/* Adjust the height here */}
                                    <th colSpan={4}>Total Truck Weight : {(parseFloat(AwlformData.TotalGatepassWeight)/100).toFixed(2)} Qtl.</th>
                                </tr>
                            </tbody>
                            <tr>
                                <th className='pt-6 pb-1' colSpan={2}>Loading Done By</th>
                                <th className='pt-6 pb-1' colSpan={2}>Authorized Signatory</th>
                            </tr>
                            <tr>
                                <th className='pb-2' colSpan={2}>{AwlformData.loadingDoneBy}</th>
                                <th className='pb-2' colSpan={2}>{AwlformData.gatepassGeneratedBy}</th>
                            </tr>
                        </table>
                    ) : (
                        <table className='border-2 border-black'>
                            <thead>
                                <tr className="border">
                                    <th colSpan="4" className='text-lg'>GATE PASS</th>
                                </tr>
                                <tr className="border">
                                    <th colSpan="4" className='text-lg'>Chandigarh Roller Flour Mills Pvt. Ltd.</th>
                                </tr>
                                <tr className="border">
                                    <th>No. {selectedGatepassData?.gatepassNumber}</th>
                                    <th colSpan={3}>Date : {getCurrentDateTime().date}<> Time : {getCurrentDateTime().time}</></th>
                                </tr>
                                <tr className='h-10'>
                                    <th colSpan={2} className='px-1'>Name of Party : {AwlformData.partyName} </th>
                                    <th colSpan={2} className='px-1'>Truck Number : {AwlformData.trucknumber}</th>
                                </tr>
                                <tr className='border-2 border-black'>
                                    <th className="px-1 py-1 border border-black">Name of Product</th>
                                    <th className="px-1 border border-black">No. of Bags</th>
                                    <th className="px-1 border border-black">Per Bag Rate</th>
                                    <th className="px-1 border border-black">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="border border-black">
                                {items.map((item, index) => (
                                    <tr key={index} className="h-10">
                                        <td className="px-1 text-center border border-black">
                                            {item.category} {item.category !== 'Refraction' && item.subsubcategories !== 'Others' ? item.subsubcategories : '' || item.subsubcategories === 'Others' ? `${item.otherSubsubcategories * 1000} gm` : ''} <br /> {item.subcategories}<br />{item.category === 'Refraction' ? `Total Weight - ${item.weight} KG` : ''}
                                        </td>
                                        <td className="px-1 text-center border border-black">{item.numberOfBags}</td>
                                        <td className="px-1 text-center border border-black">{item.perbagprice}<br/>{item.category !== 'Refraction' ? `Rs ${item.perKgRate}/kg` : ''}</td>
                                        <td className="px-1 text-center border border-black">{item.category === 'Refraction' ? item.totalamount : item.productValue}</td>
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
                                    <td className="px-1 text-center border border-black">Rs. {AwlformData.TotalGatepassAmount}</td>
                                </tr>
                                <tr className="h-8"> {/* Adjust the height here */}
                                    <th colSpan={4}>Total Weight : {(AwlformData.TotalGatepassWeight / 100).toFixed(2)} <></> Qtl.</th>
                                </tr>
                            </tbody>
                            <tr>
                                <th className='pt-6 pb-1' colSpan={2}>Loading Done By</th>
                                <th className='pt-6 pb-1' colSpan={2}>Authorized Signatory</th>
                            </tr>
                            <tr>
                                <th className='pb-2' colSpan={2}>{AwlformData.loadingDoneBy}</th>
                                <th className='pb-2' colSpan={2}>{AwlformData.gatepassGeneratedBy}</th>
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
