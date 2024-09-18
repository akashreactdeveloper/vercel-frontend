import React, { useState, useEffect, useRef } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const AwlGatepass = () => {
    const [AwlformData, setAwlFormData] = useState({
        gatepassNumber: '',
        partyName: '',
        batchnumber: '',
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
        loadingCharger1: '0',
        cgst1: '0',
        sgst1: '0',
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
        TotalGatepassWeight: '0',
        TotalGatepassAmount: '',
        TotalGatepassTruckWeight: '',
        TotalTruckWeight: '',
        TotalTruckWeight1: '',
        TotalTruckWeight2: '',
        TotalTruckWeight3: '',
        selectedUnit: '',
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
            const filteredData = dataResponse.data.filter(entry => entry.type === 'AWL');
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
        const newAwlFormData = {};
        for (let [key, value] of searchParams.entries()) {
            newAwlFormData[key] = value === 'true' ? true : value === 'false' ? false : value;
        }
        setAwlFormData(newAwlFormData);
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
        { category: AwlformData.category, subcategories: AwlformData.subcategories, subsubcategories: AwlformData.subsubcategories, batchnumber: AwlformData.batchnumber, numberOfBags: AwlformData.numberOfBags, totalValue: AwlformData.totalValue , perKgRate : AwlformData.perKgRate},
        { category: AwlformData.category1, subcategories: AwlformData.subcategories1, subsubcategories: AwlformData.subsubcategories1, batchnumber: AwlformData.batchnumber, numberOfBags: AwlformData.numberOfBags1, totalValue: AwlformData.totalValue1 , perKgRate : AwlformData.perKgRate1},
        { category: AwlformData.category2, subcategories: AwlformData.subcategories2, subsubcategories: AwlformData.subsubcategories2, batchnumber: AwlformData.batchnumber, numberOfBags: AwlformData.numberOfBags2, totalValue: AwlformData.totalValue2 , perKgRate : AwlformData.perKgRate2},
        { category: AwlformData.category3, subcategories: AwlformData.subcategories3, subsubcategories: AwlformData.subsubcategories3, batchnumber: AwlformData.batchnumber, numberOfBags: AwlformData.numberOfBags3, totalValue: AwlformData.totalValue3 , perKgRate : AwlformData.perKgRate3}
    ];

    const selectedGatepassData = gatepassNumberList.find(el => el.gatepassNumber === selectedGatepass);

    return (
        <div>
            {selectedGatepassData && (
                <div ref={gatepassRef}>
                    <table className='border-2 border-black'>
                        <thead>
                            <tr className="border">
                                <th colSpan="4" className='text-lg'>GATE PASS</th>
                            </tr>
                            <tr className="border">
                                <th colSpan="4" className='text-lg'>ADANI WILMAR LTD.</th>
                            </tr>
                            <tr>
                                <td colSpan={4} className='text-center text-xs text-gray-700 font-bold'>Kheri Gurna, Banur-Tepla-Ambala Highway, Kheri Gurna Patiala
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='text-center text-xs text-gray-700 font-bold'>Punjab India 140417,
                                </td>
                                <td colSpan={2} className='text-center text-xs text-black font-bold'>GSTINNo. : 03AABCA8056G1ZZ</td>
                            </tr>
                            <tr className="border">
                                <th>No. {selectedGatepassData?.gatepassNumber}</th>
                                <th colSpan={2}>Date : {getCurrentDateTime().date}</th>
                                <th>Time : {getCurrentDateTime().time}</th>

                            </tr>
                            <tr className='h-10'>
                                <th colSpan={2}>Truck Number :</th>
                                <td colSpan={2}>{AwlformData.trucknumber}</td>
                            </tr>
                            <tr className='border-2 border-black'>
                                <th className="px-1 py-1 border border-black">Name of Product</th>
                                <th className="px-1 border border-black">Batch No.</th>
                                <th className="px-1 border border-black">Total Bags</th>
                                <th className="px-1 border border-black">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="border border-black">
                            {items.map((item, index) => (
                                <tr key={index} className="h-10">
                                    <td className="px-1 text-center border border-black">
                                        {item.category}
                                        {' '}
                                        {item.subcategories}
                                        {item.category === 'Atta Chakki' && item.subcategories === '5' ? ' X 6' : ''}
                                        {item.category === 'Atta Chakki' && item.subcategories === '10' ? ' X 3' : ''}
                                        {item.category === 'Atta Scheme' && item.subcategories === '10' ? ' X 3' : ''}
                                        {item.selectedUnit}
                                        <br />
                                        {item.subsubcategories}
                                    </td>
                                    <td className="px-1 text-center border border-black">{item.batchnumber}</td>
                                    <td className="px-1 text-center border border-black">{item.numberOfBags}</td>
                                    <td className="px-1 text-center border border-black">{item.totalValue}</td>
                                </tr>
                            ))}
                            {Array.from({ length: MAX_ROWS - items.length }).map((_, index) => (
                                <tr key={`placeholder-${index}`} className="h-10"> {/* Adjust the height here */}
                                    <td className="px-1 text-center border border-black">&nbsp;</td>
                                    <td className="px-1 text-center border border-black">&nbsp;</td>
                                    <td className="px-1 text-center border border-black">&nbsp;</td>
                                    <td className="px-1 text-center border border-black">&nbsp;</td>
                                </tr>
                            ))}
                            <tr className="h-5"> {/* Adjust the height here */}
                                <td className="px-1 text-center border border-black">
                                    {AwlformData.category === 'Atta Scheme' ? 'Besan' : ''}
                                    {AwlformData.category1 === 'Atta Scheme' ? 'Besan' : ''}
                                    {AwlformData.category2 === 'Atta Scheme' ? 'Besan' : ''}
                                    {AwlformData.category3 === 'Atta Scheme' ? 'Besan' : ''}
                                </td>
                                <td className="px-1 text-center border border-black">-</td>
                                <td className="px-1 text-center border border-black">
                                    {AwlformData.category === 'Atta Scheme' ? AwlformData.numberOfBags / 10 : ''}
                                    {AwlformData.category1 === 'Atta Scheme' ? AwlformData.numberOfBags1 / 10 : ''}
                                    {AwlformData.category2 === 'Atta Scheme' ? AwlformData.numberOfBags2 / 10 : ''}
                                    {AwlformData.category3 === 'Atta Scheme' ? AwlformData.numberOfBags3 / 10 : ''}
                                </td>
                                <td className="px-1 text-center border border-black">
                                    {AwlformData.category === 'Atta Scheme' ? 'F.O.C' : ''}
                                    {AwlformData.category1 === 'Atta Scheme' ? 'F.O.C' : ''}
                                    {AwlformData.category2 === 'Atta Scheme' ? 'F.O.C' : ''}
                                    {AwlformData.category3 === 'Atta Scheme' ? 'F.O.C' : ''}
                                </td>
                            </tr>
                            <tr className=""> {/* Adjust the height here */}
                                <th className="px-1 text-center border border-black">Total</th>
                                <td className="px-1 text-center border border-black"></td>
                                <td className="px-1 text-center border border-black">{AwlformData.TotalnumberOfBagsInGatepass}</td>
                                <td className="px-1 text-center border border-black">{AwlformData.TotalGatepassAmount}</td>
                            </tr>
                            <tr className="h-8"> {/* Adjust the height here */}
                                <th colSpan={4}>Total Truck Weight : {(AwlformData.TotalGatepassTruckWeight / 100).toFixed(2)} <></> Qtl.</th>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th className='pt-6' colSpan={2}>Loading Done By :</th>
                                <th className='pt-6' colSpan={2}>Authorized Signatory</th>
                            </tr>
                            <tr>
                                <th className='pb-2' colSpan={2}>{AwlformData.loadingDoneBy}</th>
                                <th className='' colSpan={2}></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}

            {/* Print button */}
            <button
                type="button"
                onClick={handlePrint}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full mt-4"
            >
                Print Gatepass
            </button>
        </div>
    );
};

export default AwlGatepass;
