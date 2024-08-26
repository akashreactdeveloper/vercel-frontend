import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuIndianRupee } from "react-icons/lu";

const Crfm = () => {
    const [partyName, setPartyName] = useState('');
    const [trucknumber, settrucknumber] = useState('');
    const [totalWeight, setTotalWeight] = useState('');
    const [category, setCategory] = useState('');
    const [subcategories, setSubcategories] = useState('');
    const [subsubcategories, setSubsubcategories] = useState('');
    const [otherSubsubcategories, setOtherSubsubcategories] = useState('');
    const [numberOfBags, setNumberOfBags] = useState('');
    const [perbagprice, setPerbagprice] = useState('');
    const [productValue, setproductValue] = useState('');
    const [perKgRate, setPerKgRate] = useState('');
    const [weightOfTruck, setWeightOfTruck] = useState('');
    const [isMaida_BulkerSelected, setIsMaida_BulkerSelected] = useState(false);
    const [loadingCharger, setLoadingCharger] = useState('0');
    const [cgst, setCgst] = useState('0');
    const [sgst, setSgst] = useState('0');
    const [totalValue, setTotalValue] = useState('');
    const [totalamount, settotalamount] = useState('');
    const [weight, setweight] = useState('');
    const [perqtlrate, setperqtlrate] = useState('');
    const navigate = useNavigate();



    const categories = {
        Maida: {
            unit: 'KG',
            subcategories: {
                Maida_Regular: ['10', '20', '25', '30', '40', '45', '50', 'Others'],
                Maida_Bulker: ['others']
            }
        },
        "Chakki aata and bajra jo maize": {
            unit: 'KG',
            subcategories: {
                Regular: ['5', '10', '26', '30', '40', '50 ', 'Others'],
                Jute: ['10', '5'],
                LD: ['10', '5'],
            }
        },
        "MILL ATTA": {
            unit: 'KG',
            subcategories: {
                Regular: ['10', '30', '40', '50', 'Others']
            }
        },
        Bran: {
            unit: 'KG',
            subcategories: {
                Coarse: ['20', '25', '28 ', '30', '35', '43', '44', '48', '49', '50', 'Others'],
                Fine: ['20', '25', '28 ', '30', '35', '43', '44', '48', '49', '50', 'Others']
            }
        },
        "Rawa Suji": {
            unit: 'KG',
            subcategories: {
                Regular: ['25', '50', 'Others']
            }
        },
        Refraction: {
            unit: 'Qtl.',
            subcategories: {
                Murgidana: ['Others'],
                Kala_Beej: ['Others'],
                Danthal: ['Others'],
                Mitti: ['Others'],
                Others: ['Others'],
            }
        },
        Bardana: {
            unit: 'Bags',
            subcategories: {
                C_Quality: ['Others'],
                F_Quality: ['Others'],
                M_Quality: ['Others'],
                X_Quality: ['Others'],
                Plastic_Best_Quality: ['Others'],
                Plastic_Medium_Quality: ['Others'],
                Plastic_Low_Quality: ['Others'],
                Others: ['Others'],
            }
        },
    };

    

    const handleGenerateGatepass = () => {
        const queryParams = new URLSearchParams({
            partyName,
            trucknumber,
            category,
            subcategories,
            subsubcategories,
            otherSubsubcategories,
            numberOfBags,
            perbagprice,
            productValue,
            perKgRate,
            weightOfTruck,
            isMaida_BulkerSelected,
            loadingCharger,
            cgst,
            sgst,
            totalValue,
            totalWeight,
            perqtlrate,
            weight,
            weightOfTruck,
            totalamount
        });

        navigate(`/crfmgatepass?${queryParams.toString()}`);
    };
    const handlePartyNameChange = (e) => {
        setPartyName(e.target.value);

    };

    const handletrucknumberChange = (e) => {
        settrucknumber(e.target.value);
    }

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setSubcategories('');
        setSubsubcategories('');
        setOtherSubsubcategories('');
        setNumberOfBags('');
        setPerbagprice('');
        setproductValue('');
        setPerKgRate('');
    };

    const handleSubcategoriesChange = (e) => {
        const selectedSubcategories = e.target.value;
        setSubcategories(selectedSubcategories);
        setSubsubcategories('');
        setOtherSubsubcategories('');
        setproductValue('');
        setPerKgRate('');
        setWeightOfTruck('');
        setIsMaida_BulkerSelected(selectedSubcategories === 'Maida_Bulker');
    };

    const handleSubsubcategoriesChange = (e) => {
        const selectedSubsubcategories = e.target.value;
        setSubsubcategories(selectedSubsubcategories);
        setOtherSubsubcategories('');
        calculateproductValue(numberOfBags, perbagprice);
        calculateTotalWeight(numberOfBags, selectedSubsubcategories, otherSubsubcategories);
    };

    const handleOtherSubsubcategoriesChange = (e) => {
        const otherSubsubcat = e.target.value;
        setOtherSubsubcategories(otherSubsubcat);
        calculateproductValue(numberOfBags, perbagprice);
        calculateTotalWeight(numberOfBags, subsubcategories, otherSubsubcat);
    };

    const handleNumberOfBagsChange = (e) => {
        const info = e.target.value;
        setNumberOfBags(info);
        calculateproductValue(info, perbagprice);
        calculateTotalWeight(info, subsubcategories, otherSubsubcategories);
    };


    const handlePerbagpriceChange = (e) => {
        const newPrice = e.target.value;
        setPerbagprice(newPrice);
        calculateproductValue(numberOfBags, newPrice);
    };

    const handleLoadingChargerChange = (e) => {
        const charger = e.target.value;
        setLoadingCharger(charger);
        calculateTotalValue(productValue, charger, cgst, sgst);
    };

    const handleCgstChange = (e) => {
        const selectedCgst = e.target.value;
        setCgst(selectedCgst);
        calculateTotalValue(productValue, loadingCharger, selectedCgst, sgst);
    };

    const handleSgstChange = (e) => {
        const selectedSgst = e.target.value;
        setSgst(selectedSgst);
        calculateTotalValue(productValue, loadingCharger, cgst, selectedSgst);
    };
    const handleweightChange = (e) => {
        setweight(e.target.value);

    };

    const handleperqtlrateChange = (e) => {
        setperqtlrate(e.target.value);
        calculateTotalPrice(weightOfTruck, perqtlrate);
    };

    const calculateproductValue = (numberOfBags, perbagprice) => {
        if (numberOfBags && perbagprice) {
            const product = parseFloat(numberOfBags) * parseFloat(perbagprice);
            setproductValue(product.toFixed(2));
            calculatePerKgRate(product, subsubcategories === 'Others' ? otherSubsubcategories : subsubcategories, numberOfBags);
        } else {
            setproductValue('');
            setPerKgRate('');
        }
    };

    useEffect(() => {
        calculateTotalValue(productValue, loadingCharger, cgst, sgst);
    }, [productValue, loadingCharger, cgst, sgst]);

    const calculatetotalamount = (weight, perqtlrate) => {
        if (weight && perqtlrate) {
            const amount = parseFloat(weight) * parseFloat(perqtlrate);
            settotalamount(amount.toFixed(2));
        }
    }

    useEffect(() => {
        calculatetotalamount(weight, perqtlrate);
    }, [weight, perqtlrate]);


    const calculateTotalValue = (productValue, loadingCharger, cgst, sgst) => {
        if (productValue && loadingCharger && cgst && sgst) {
            const totalValue = parseFloat(productValue) + parseFloat(loadingCharger);
            const cgstAmount = parseFloat(totalValue) * parseFloat(cgst) / 100;
            const sgstAmount = parseFloat(totalValue) * parseFloat(sgst) / 100;;
            const finalValue = totalValue + cgstAmount + sgstAmount;

            setTotalValue(finalValue.toFixed(2));
        } else {
            setTotalValue('');
        }
    };


    const calculatePerKgRate = (totalValue, selectedSubsubcategories, selectedNumberOfBags) => {
        if (totalValue && selectedSubsubcategories && selectedNumberOfBags) {
            const perKg = parseFloat(totalValue) / (parseFloat(selectedSubsubcategories) * parseFloat(selectedNumberOfBags));
            setPerKgRate(perKg.toFixed(2));
        } else {
            setPerKgRate('');
        }
    };
    const handleWeightOfTruckChange = (e) => {
        const weight = e.target.value;
        setWeightOfTruck(weight);
        calculateTotalPrice(weight, perKgRate);
        if (isMaida_BulkerSelected) {
            setTotalWeight(weight);
        }
    };

    const handlePerKgRateChange = (e) => {
        const rate = e.target.value;
        setPerKgRate(rate);
        calculateTotalPrice(weightOfTruck, rate);
    };

    const calculateTotalPrice = (weightOfTruck, perKgRate) => {
        if (weightOfTruck && perKgRate) {
            const totalPrice = parseFloat(weightOfTruck) * parseFloat(perqtlrate);
            setproductValue(totalPrice.toFixed(2));
        } else {
            setproductValue('');
        }
    };

    const calculateTotalWeight = (numberOfBags, subsubcategories, otherSubsubcategories) => {
        if (isMaida_BulkerSelected) {
            setTotalWeight(weightOfTruck);
        } else {
            const weightOfBag = subsubcategories === 'Others' ? parseFloat(otherSubsubcategories) : parseFloat(subsubcategories);
            const total = numberOfBags && weightOfBag ? parseFloat(numberOfBags) * weightOfBag : '';
            setTotalWeight(total ? total.toFixed(2) : '');
        }
    };


    const selectedUnit = category ? categories[category]?.unit : '';
    const availableSubcategories = category ? Object.keys(categories[category]?.subcategories) : [];
    const availableSubsubcategories = subcategories ? categories[category]?.subcategories[subcategories] : [];

    return (
        <div>
            <form className="max-w-lg mx-auto mt-10 p-6 bg-slate-100 shadow-md rounded-lg">
                <div className="mb-4">
                    <label htmlFor="partyName" className="block text-gray-700 text-sm font-bold mb-2">
                        Party Name:
                    </label>
                    <input
                        type="text"
                        id="partyName"
                        value={partyName}
                        onChange={handlePartyNameChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter party name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="trucknumber" className="block text-gray-700 text-sm font-bold mb-2">
                        Truck Number :
                    </label>
                    <input
                        type="text"
                        id="trucknumber"
                        value={trucknumber}
                        onChange={handletrucknumberChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter Truck Number"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select Product Name</option>
                        {Object.keys(categories).map((cat) => (
                            <option key={cat} value={cat}>
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {category && (
                    <div className="mb-4">
                        <label htmlFor="subcategories" className="block text-gray-700 text-sm font-bold mb-2">Type of Product:</label>
                        <select
                            id="subcategories"
                            value={subcategories}
                            onChange={handleSubcategoriesChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select type of Product</option>
                            {availableSubcategories.map((subcat) => (
                                <option key={subcat} value={subcat}>
                                    {subcat.charAt(0).toUpperCase() + subcat.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {category === "Refraction" && (
                    <>
                        <div className="mb-4">
                            <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">
                                Weight :
                            </label>
                            <input
                                type="number"
                                id="weight"
                                value={weight}
                                onChange={handleweightChange}
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter Weight"
                            /><> Qtl.</>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="perqtlrate" className="block text-gray-700 text-sm font-bold mb-2">
                                Per Qtl. Rate:
                            </label>
                            <input
                                type="number"
                                id="perqtlrate"
                                value={perqtlrate}
                                onChange={handleperqtlrateChange}
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter Per Qtl. Rate:"
                            /><> RS./Qtl.</>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="totalamount" className="block text-gray-700 text-sm font-bold mb-2">Total Amount:</label>
                            <LuIndianRupee /><input
                                type="text"
                                id="totalamount"
                                value={totalamount}
                                readOnly
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                            />
                        </div>
                    </>
                )}




                {category !== "Refraction" && !isMaida_BulkerSelected && (
                    <>
                        <div className="mb-4">
                            <label htmlFor="subsubcategories" className="block text-gray-700 text-sm font-bold mb-2">Weight of Bag:</label>
                            <select
                                id="subsubcategories"
                                value={subsubcategories}
                                onChange={handleSubsubcategoriesChange}
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Weight of Bag</option>
                                {availableSubsubcategories.map((subsubcat) => (
                                    <option key={subsubcat} value={subsubcat}>
                                        {subsubcat}
                                    </option>
                                ))}
                            </select><> kg</>
                        </div>

                        {subsubcategories === 'Others' && (
                            <div className="mb-4">
                                <label htmlFor="otherSubsubcategories" className="block text-gray-700 text-sm font-bold mb-2">Weight of Bag:</label>
                                <input
                                    type="number"
                                    id="otherSubsubcategories"
                                    value={otherSubsubcategories}
                                    onChange={handleOtherSubsubcategoriesChange}
                                    placeholder="Enter weight"
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                /><> KG</>
                            </div>
                        )}

                        <div className="mb-4">
                            <label htmlFor="numberOfBags" className="block text-gray-700 text-sm font-bold mb-2">Number of Bags:</label>
                            <input
                                type="number"
                                id="numberOfBags"
                                value={numberOfBags}
                                onChange={handleNumberOfBagsChange}
                                placeholder="Number of Bags"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="perbagprice" className="block text-gray-700 text-sm font-bold mb-2">Rate per bag:</label>
                            <input
                                type="number"
                                id="perbagprice"
                                value={perbagprice}
                                onChange={handlePerbagpriceChange}
                                placeholder="Rate per bag"
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            /><> Rs./Bag</>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="loadingCharger" className="block text-gray-700 text-sm font-bold mb-2">Loading Charger:</label>
                            <input
                                type="number"
                                id="loadingCharger"
                                value={loadingCharger}
                                onChange={handleLoadingChargerChange}
                                placeholder="Loading Charger"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cgst" className="block text-gray-700 text-sm font-bold mb-2">CGST:</label>
                            <select
                                id="cgst"
                                value={cgst}
                                onChange={handleCgstChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="0">Total CGST</option>
                                <option value="2.5">2.5%</option>
                                <option value="5">5%</option>
                                <option value="6">6%</option>
                                <option value="9">9%</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="sgst" className="block text-gray-700 text-sm font-bold mb-2">SGST:</label>
                            <select
                                id="sgst"
                                value={sgst}
                                onChange={handleSgstChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="0">Total CGST</option>
                                <option value="2.5">2.5%</option>
                                <option value="6">6%</option>
                                <option value="9">9%</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="totalValue" className="block text-gray-700 text-sm font-bold mb-2">Total Value:</label>
                            <> Rs.</><input
                                type="text"
                                id="totalValue"
                                value={totalValue}
                                readOnly
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="perKgRate" className="block text-gray-700 text-sm font-bold mb-2">Per KG Rate:</label>
                            <input
                                type="text"
                                id="perKgRate"
                                value={perKgRate}
                                readOnly
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                            /><> Rs./kg</>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="totalWeight" className="block text-gray-700 text-sm font-bold mb-2">Total Weight:</label>
                            <input
                                type="text"
                                id="totalWeight"
                                value={totalWeight}
                                readOnly
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                            /><> {selectedUnit}</>
                        </div>
                    </>
                )}

                {subcategories && isMaida_BulkerSelected && (
                    <>
                        <div className="mb-4">
                            <label htmlFor="weightOfTruck" className="block text-gray-700 text-sm font-bold mb-2">Weight of Truck:</label>
                            <input
                                type="number"
                                id="weightOfTruck"
                                value={weightOfTruck}
                                onChange={handleWeightOfTruckChange}
                                placeholder="Weight of Truck"
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            /><> Qtl.</>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="perqtlrate" className="block text-gray-700 text-sm font-bold mb-2">Per Qtl. Rate:</label>
                            <input
                                type="number"
                                id="perqtlrate"
                                value={perqtlrate}
                                onChange={handleperqtlrateChange}
                                placeholder="Per qtl. Rate"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="productValue" className="block text-gray-700 text-sm font-bold mb-2">Total Price:</label>
                            <input
                                type="text"
                                id="productValue"
                                value={productValue}
                                readOnly
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="totalWeight" className="block text-gray-700 text-sm font-bold mb-2">Total Weight:</label>
                            <input
                                type="text"
                                id="totalWeight"
                                value={totalWeight}
                                readOnly
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                            />
                        </div>
                    </>
                )}


                {category && selectedUnit && (
                    <p className="text-gray-700 text-sm mt-2">
                        Selected category unit: {selectedUnit}
                    </p>
                )}


                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[350px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 text-center"
                >
                    Add New Item
                </button>
                <button
                    type="button"
                    onClick={handleGenerateGatepass}
                    className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[350px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 text-center"
                >
                    Generate Gatepass
                </button>
            </form>
        </div>
    );
};

export default Crfm;
