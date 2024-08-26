const Awl = () => {
    const [type, settype] = useState('');
    const [partyName, setPartyName] = useState('');
    const [batchnumber, setBatchNumber] = useState('');
    const [trucknumber, settrucknumber] = useState('');
    const [totalWeight11, setTotalWeight11] = useState('');
    const [totalamount1, settotalamount1] = useState('');
    const [category1, setCategory1] = useState('');
    const [subcategories1, setSubcategories1] = useState('');
    const [subsubcategories1, setSubsubcategories1] = useState('');
    const [isMaida_BulkerSelected1, setIsMaida_BulkerSelected1] = useState(false);
    const [otherSubsubcategories1, setOtherSubsubcategories1] = useState('');
    const [numberOfBags1, setNumberOfBags1] = useState('');
    const [perbagprice1, setPerbagprice1] = useState('');
    const [productValue1, setProductValue1] = useState('');
    const [perKgRate1, setPerKgRate1] = useState('');
    const [weight1OfTruck1, setWeight1OfTruck1] = useState('');
    const [loadingCharger1, setLoadingCharger1] = useState('0');
    const [cgst1, setCgst1] = useState('0');
    const [sgst1, setSgst1] = useState('0');
    const [totalValue1, setTotalValue1] = useState('');
    const [weight1, setweight1] = useState('');
    const [perqtlrate1, setperqtlrate1] = useState('');
    const navigate = useNavigate();

    const [selectedCategory1, setSelectedCategory1] = useState('');
    const [selectedSubcategory1, setSelectedSubcategory1] = useState('');

    const awlCategories1 = {
        Maida: {
            unit: 'KG',
            subcategories1: {
                "10": []
            }
        },
        "Atta Chakki": {
            unit: 'KG',
            subcategories1: {
                "5": ['Normal MRP', 'High MRP'],
                "10": ['Normal MRP', 'High MRP'],
                "30": ['Normal MRP', 'High MRP'],
                "50": []
            }
        },
        Suji: {
            unit: 'KG',
            subcategories1: {
                "10": []
            }
        },
        "Atta Scheme": {
            unit: 'KG',
            subcategories1: {
                "10": []
            }
        }
    };

    const crfmCategories1 = {
        Maida: {
            unit: 'KG',
            subcategories1: {
                Maida_Regular: ['10', '20', '25', '30', '40', '45', '50', 'Others'],
                Maida_Bulker: ['others']
            }
        },
        "Chakki aata and bajra jo maize": {
            unit: 'KG',
            subcategories1: {
                Regular: ['5', '10', '26', '30', '40', '50 ', 'Others'],
                Jute: ['10', '5'],
                LD: ['10', '5'],
            }
        },
        "MILL ATTA": {
            unit: 'KG',
            subcategories1: {
                Regular: ['10', '30', '40', '50', 'Others']
            }
        },
        Bran: {
            unit: 'KG',
            subcategories1: {
                Coarse: ['20', '25', '28 ', '30', '35', '43', '44', '48', '49', '50', 'Others'],
                Fine: ['20', '25', '28 ', '30', '35', '43', '44', '48', '49', '50', 'Others']
            }
        },
        "Rawa Suji": {
            unit: 'KG',
            subcategories1: {
                Regular: ['25', '50', 'Others']
            }
        },
        Refraction: {
            unit: 'Qtl.',
            subcategories1: {
                Murgidana: ['Others'],
                Kala_Beej: ['Others'],
                Danthal: ['Others'],
                Mitti: ['Others'],
                Others: ['Others'],
            }
        },
        Bardana: {
            unit: 'Bags',
            subcategories1: {
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

    const categories1 = type === 'CRFM' ? crfmCategories1 : awlCategories1;



    const handleTypeChange = (e) => {
        settype(e.target.value);
        setSelectedCategory1('');
        setSelectedSubcategory1('');
    }
    const handlePartyNameChange = (e) => {
        setPartyName(e.target.value);
    };

    const handleBatchNumberChange = (e) => {
        setBatchNumber(e.target.value);
    };
    const handletrucknumberChange = (e) => {
        settrucknumber(e.target.value);
    };
    const handleNumberOfBags1Change = (e) => {
        const newNumberOfBags1 = e.target.value;
        setNumberOfBags1(newNumberOfBags1);
        calculateProductValue(numberOfBags1, perbagprice1);
        calculateTotalWeight11(numberOfBags1, subsubcategories1); // Calculate total weight1
        console.log("no.of bags near handle",numberOfBags1)
    };
    console.log("number of bags1", numberOfBags1)

    const handleWeight1OfTruck1Change = (e) => {
        const weight1 = e.target.value;
        setWeight1OfTruck1(weight1);
        calculateTotalPrice(weight1, perKgRate1);
        if (isMaida_BulkerSelected1) {
            setTotalWeight11(weight1);
        }
    };



    const handleGenerateGatepass = async () => {
        const AwlformData = {
            type,
            partyName,
            batchnumber,
            trucknumber,
            weight1,
            category1,
            subcategories1,
            subsubcategories1,
            otherSubsubcategories1,
            numberOfBags1,
            perbagprice1,
            productValue1,
            perKgRate1,
            loadingCharger1,
            cgst1,
            sgst1,
            weight1OfTruck1,
            totalValue1,
            totalWeight11,
            perqtlrate1,
            totalamount1
        };

        
        console.log("AwlformData", AwlformData)

        const response = await fetch(SummaryApi.AwlformData.url, {
            method: SummaryApi.AwlformData.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(AwlformData)
        })

        const responseData = await response.json()

        if (responseData.success) {
            toast.success(responseData?.message)
        }
        if (responseData.error) {
            toast.error(responseData?.message)
        }

        if (type === 'AWL') {
            navigate(`/awlgatepass?${new URLSearchParams(AwlformData).toString()}`);
        } else {
            navigate(`/crfmgatepass?${new URLSearchParams(AwlformData).toString()}`);
        }

    }


    const handleCategory1Change = (e) => {
        const selectedCategory1 = e.target.value;
        setCategory1(selectedCategory1);
        setSubcategories1('');
        setSubsubcategories1('');
        setOtherSubsubcategories1('');
        setNumberOfBags1('');
        setPerbagprice1('');
        setProductValue1('');
        setPerKgRate1('');
    };

    const handleSubcategories1Change = (e) => {
        const selectedSubcategories1 = e.target.value;
        setSubcategories1(selectedSubcategories1);
        setSubsubcategories1('');
        setOtherSubsubcategories1('');
        setProductValue1('');
        setWeight1OfTruck1('');
        setPerKgRate1('');
        setIsMaida_BulkerSelected1(selectedSubcategories1 === 'Maida_Bulker');
        // calculateTotalWeight11(numberOfBags1, selectedSubcategories1);
    }
    const handleSubsubcategories1Change = (e) => {
        const selectedSubsubcategories1 = e.target.value;
        setSubsubcategories1(selectedSubsubcategories1);
        setOtherSubsubcategories1('');
        calculateProductValue(numberOfBags1, perbagprice1);
        calculateTotalWeight11(numberOfBags1, selectedSubsubcategories1, otherSubsubcategories1);
    };

    const handleOtherSubsubcategories1Change = (e) => {
        const otherSubsubcat = e.target.value;
        setOtherSubsubcategories1(otherSubsubcat);
        calculateProductValue(numberOfBags1, perbagprice1);
        calculateTotalWeight11(subsubcategories1, numberOfBags1, otherSubsubcat);
    };


    const handlePerbagprice1Change = (e) => {
        const newPrice = e.target.value;
        setPerbagprice1(newPrice);
        calculateProductValue(numberOfBags1, newPrice);
    };

    const handleLoadingCharger1Change = (e) => {
        const charger = e.target.value;
        setLoadingCharger1(charger);
        calculateTotalValue1(productValue1, charger, cgst1, sgst1);
    };

    const handleCgst1Change = (e) => {
        const selectedCgst1 = e.target.value;
        setCgst1(selectedCgst1);
        calculateTotalValue1(productValue1, loadingCharger1, selectedCgst1, sgst1);
    };

    const handleSgst1Change = (e) => {
        const selectedSgst1 = e.target.value;
        setSgst1(selectedSgst1);
        calculateTotalValue1(productValue1, loadingCharger1, cgst1, selectedSgst1);
    };

    const handleweight1Change = (e) => {
        setweight1(e.target.value);

    };
    const handleperqtlrate1Change = (e) => {
        setperqtlrate1(e.target.value);
        calculateTotalPrice(weight1OfTruck1, perqtlrate1);
    };

    const calculateTotalPrice = (weight1OfTruck1, perKgRate1) => {
        if (weight1OfTruck1 && perKgRate1) {
            const totalPrice = parseFloat(weight1OfTruck1) * parseFloat(perqtlrate1);
            setProductValue1(totalPrice.toFixed(2));
        } else {
            setProductValue1('');
        }
    };

    const calculateProductValue = (numberOfBags1, perbagprice1) => {
        if (numberOfBags1 && perbagprice1) {
            const product = parseFloat(numberOfBags1) * parseFloat(perbagprice1);
            setProductValue1(product.toFixed(2));
            calculatePerKgRate1(product, subsubcategories1 === 'Others' ? otherSubsubcategories1 : subsubcategories1, numberOfBags1);
        } else {
            setProductValue1('');
            setPerKgRate1('');
        }
    };

    useEffect(() => {
        calculateTotalValue1(productValue1, loadingCharger1, cgst1, sgst1);
    }, [productValue1, loadingCharger1, cgst1, sgst1]);

    const calculatetotalamount1 = (weight1, perqtlrate1) => {
        if (weight1 && perqtlrate1) {
            const amount = parseFloat(weight1) * parseFloat(perqtlrate1);
            settotalamount1(amount.toFixed(2));
        }
    }

    useEffect(() => {
        calculatetotalamount1(weight1, perqtlrate1);
    }, [weight1, perqtlrate1]);

    const calculateTotalValue1 = (productValue1, loadingCharger1, cgst1, sgst1) => {
        if (productValue1 && loadingCharger1 && cgst1 && sgst1) {
            const totalValue1 = parseFloat(productValue1) + parseFloat(loadingCharger1);
            const cgst1Amount = parseFloat(totalValue1) * parseFloat(cgst1) / 100;
            const sgst1Amount = parseFloat(totalValue1) * parseFloat(sgst1) / 100;
            const finalValue = totalValue1 + cgst1Amount + sgst1Amount;

            setTotalValue1(finalValue.toFixed(2));
        } else {
            setTotalValue1('');
        }
    };


    const calculatePerKgRate1 = (totalValue1, selectedSubsubcategories1, selectedNumberOfBags1) => {
        if (totalValue1 && selectedSubsubcategories1 && selectedNumberOfBags1) {
            const perKg = parseFloat(totalValue1) / (parseFloat(selectedSubsubcategories1) * parseFloat(selectedNumberOfBags1));
            setPerKgRate1(perKg.toFixed(2));
        } else {
            setPerKgRate1('');
        }
    };

    const calculateTotalWeight11 = (numberOfBags1, subsubcategories1, otherSubsubcategories1) => {
        console.log("newnewew-", numberOfBags1)
        if (isMaida_BulkerSelected1) {
            setTotalWeight11(weight1OfTruck1);
        }
        else if(type === 'AWL'){
            const weight1OfBag = subcategories1
            const total = numberOfBags1 && weight1OfBag ? parseFloat(numberOfBags1) * weight1OfBag : '';
            console.log("newData - ", weight1OfBag, numberOfBags1, total)
            setTotalWeight11(total ? total.toFixed(2) : '');

        } 
        
        else {
            const weight1OfBag = subsubcategories1 === 'Others' ? parseFloat(otherSubsubcategories1) : parseFloat(subsubcategories1);
            const total = numberOfBags1 && weight1OfBag ? parseFloat(numberOfBags1) * weight1OfBag : '';
            console.log("newData - ", weight1OfBag, numberOfBags1, total)
            setTotalWeight11(total ? total.toFixed(2) : '');
        }
    };



    const selectedUnit = category1 ? categories1[category1]?.unit : '';
    const availableSubcategories1 = category1 ? Object.keys(categories[category1]?.subcategories1) : [];
    const availableSubsubcategories1 = subcategories1 && categories[category1]?.subcategories1[subcategories1]
        ? categories[category1].subcategories1[subcategories1]
        : [];

    return (
        <section className="bg-gradient-to-br from-blue-500 to-purple-500">



            <form className="max-w-lg mx-auto mt-10 p-6 bg-slate-100 shadow-md rounded-lg">
                <div className="mb-4">
                    <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Type:</label>
                    <select
                        id="type"
                        value={type}
                        onChange={handleTypeChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select Type</option>
                        <option value="AWL">AWL</option>
                        <option value="CRFM">CRFM</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                {type === "AWL" && (<>
                    <div className="mb-4">
                        <label htmlFor="partyName" className="block text-gray-700 text-sm font-bold mb-2">Party Name:</label>
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
                        <label htmlFor="batchnumber" className="block text-gray-700 text-sm font-bold mb-2">Batch Number:</label>
                        <input
                            type="text"
                            id="batchnumber"
                            value={batchnumber}
                            onChange={handleBatchNumberChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter batch number"
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
                        <label htmlFor="category1" className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
                        <select
                            id="category1"
                            value={category1}
                            onChange={handleCategory1Change}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select Product Name</option>
                            {Object.keys(categories).map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    {category1 && (
                        <div className="mb-4">
                            <label htmlFor="subcategories1" className="block text-gray-700 text-sm font-bold mb-2">Weight1 of Bag:</label>
                            <select
                                id="subcategories1"
                                value={subcategories1}
                                onChange={handleSubcategories1Change}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Select Weight1 of Bag</option>
                                {availableSubcategories1.map((subcat) => (
                                    <option key={subcat} value={subcat}>{subcat}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {category1 && (
                        <div className="mb-4">
                            <label htmlFor="subsubcategories1" className="block text-gray-700 text-sm font-bold mb-2">Type of Product:</label>
                            <select
                                id="subsubcategories1"
                                value={subsubcategories1}
                                onChange={handleSubsubcategories1Change}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Select Type of Product</option>
                                {availableSubsubcategories1.map((subsubcat) => (
                                    <option key={subsubcat} value={subsubcat}>{subsubcat}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {subsubcategories1 === 'Others' && (
                        <div className="mb-4">
                            <label htmlFor="otherSubsubcategories1" className="block text-gray-700 text-sm font-bold mb-2">Type of Product:</label>
                            <input
                                type="number"
                                id="otherSubsubcategories1"
                                value={otherSubsubcategories1}
                                onChange={handleOtherSubsubcategories1Change}
                                placeholder="Enter Weight1"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    )}

                    <div className="mb-4">
                        <label htmlFor="numberOfBags1" className="block text-gray-700 text-sm font-bold mb-2">Number of Bags:</label>
                        <input
                            type="number"
                            id="numberOfBags1"
                            value={numberOfBags1}
                            onChange={handleNumberOfBags1Change}
                            placeholder="Number of Bags"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="perbagprice1" className="block text-gray-700 text-sm font-bold mb-2">Rate per Bag:</label>
                        <input
                            type="number"
                            id="perbagprice1"
                            value={perbagprice1}
                            onChange={handlePerbagprice1Change}
                            placeholder="Rate per Bag"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="loadingCharger1" className="block text-gray-700 text-sm font-bold mb-2">Loading Charger:</label>
                        <input
                            type="number"
                            id="loadingCharger1"
                            value={loadingCharger1}
                            onChange={handleLoadingCharger1Change}
                            placeholder="Loading Charger"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cgst1" className="block text-gray-700 text-sm font-bold mb-2">CGST1:</label>
                        <select
                            id="cgst1"
                            value={cgst1}
                            onChange={handleCgst1Change}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="0">Select CGST1</option>
                            <option value="2.5">2.5%</option>
                            <option value="5">5%</option>
                            <option value="6">6%</option>
                            <option value="9">9%</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="sgst1" className="block text-gray-700 text-sm font-bold mb-2">SGST1:</label>
                        <select
                            id="sgst1"
                            value={sgst1}
                            onChange={handleSgst1Change}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="0">Select SGST1</option>
                            <option value="2.5">2.5%</option>
                            <option value="6">6%</option>
                            <option value="9">9%</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="totalValue1" className="block text-gray-700 text-sm font-bold mb-2">Total Value:</label>
                        <input
                            type="text"
                            id="totalValue1"
                            value={totalValue1}
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                        />
                    </div>


                    {category1 && selectedUnit && (
                        <p className="text-gray-700 text-sm mt-2">
                            Selected category1 unit: {selectedUnit}
                        </p>
                    )}

                    <div className="mb-4">
                        <label htmlFor="totalWeight11" className="block text-gray-700 text-sm font-bold mb-2">Total Weight1:</label>
                        <input
                            type="text"
                            id="totalWeight11"
                            value={totalWeight11}
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                        />
                    </div>
                </>)}
                {type === "CRFM" && (<>
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
                        <label htmlFor="category1" className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
                        <select
                            id="category1"
                            value={category1}
                            onChange={handleCategory1Change}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select Product Name</option>
                            {Object.keys(categories1).map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    {category1 && (
                        <div className="mb-4">
                            <label htmlFor="subcategories1" className="block text-gray-700 text-sm font-bold mb-2">Type of Product:</label>
                            <select
                                id="subcategories1"
                                value={subcategories1}
                                onChange={handleSubcategories1Change}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Select type of Product</option>
                                {availableSubcategories1.map((subcat) => (
                                    <option key={subcat} value={subcat}>
                                        {subcat.charAt(0).toUpperCase() + subcat.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {category1 === "Refraction" && (
                        <>
                            <div className="mb-4">
                                <label htmlFor="weight1" className="block text-gray-700 text-sm font-bold mb-2">
                                    Weight1 :
                                </label>
                                <input
                                    type="number"
                                    id="weight1"
                                    value={weight1}
                                    onChange={handleweight1Change}
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter Weight1"
                                /><> Qtl.</>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="perqtlrate1" className="block text-gray-700 text-sm font-bold mb-2">
                                    Per Qtl. Rate:
                                </label>
                                <input
                                    type="number"
                                    id="perqtlrate1"
                                    value={perqtlrate1}
                                    onChange={handleperqtlrate1Change}
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter Per Qtl. Rate:"
                                /><> RS./Qtl.</>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="totalamount1" className="block text-gray-700 text-sm font-bold mb-2">Total Amount:</label>
                                <LuIndianRupee /><input
                                    type="text"
                                    id="totalamount1"
                                    value={totalamount1}
                                    readOnly
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                />
                            </div>
                        </>
                    )}




                    {category1 !== "Refraction" && !isMaida_BulkerSelected1 && (
                        <>
                            <div className="mb-4">
                                <label htmlFor="subsubcategories1" className="block text-gray-700 text-sm font-bold mb-2">Weight1 of Bag:</label>
                                <select
                                    id="subsubcategories1"
                                    value={subsubcategories1}
                                    onChange={handleSubsubcategories1Change}
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">Weight1 of Bag</option>
                                    {availableSubsubcategories1.map((subsubcat) => (
                                        <option key={subsubcat} value={subsubcat}>
                                            {subsubcat}
                                        </option>
                                    ))}
                                </select><> kg</>
                            </div>

                            {subsubcategories1 === 'Others' && (
                                <div className="mb-4">
                                    <label htmlFor="otherSubsubcategories1" className="block text-gray-700 text-sm font-bold mb-2">Weight1 of Bag:</label>
                                    <input
                                        type="number"
                                        id="otherSubsubcategories1"
                                        value={otherSubsubcategories1}
                                        onChange={handleOtherSubsubcategories1Change}
                                        placeholder="Enter weight1"
                                        className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    /><> KG</>
                                </div>
                            )}

                            <div className="mb-4">
                                <label htmlFor="numberOfBags1" className="block text-gray-700 text-sm font-bold mb-2">Number of Bags:</label>
                                <input
                                    type="number"
                                    id="numberOfBags1"
                                    value={numberOfBags1}
                                    onChange={handleNumberOfBags1Change}
                                    placeholder="Number of Bags"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="perbagprice1" className="block text-gray-700 text-sm font-bold mb-2">Rate per bag:</label>
                                <input
                                    type="number"
                                    id="perbagprice1"
                                    value={perbagprice1}
                                    onChange={handlePerbagprice1Change}
                                    placeholder="Rate per bag"
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                /><> Rs./Bag</>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="loadingCharger1" className="block text-gray-700 text-sm font-bold mb-2">Loading Charger:</label>
                                <input
                                    type="number"
                                    id="loadingCharger1"
                                    value={loadingCharger1}
                                    onChange={handleLoadingCharger1Change}
                                    placeholder="Loading Charger"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cgst1" className="block text-gray-700 text-sm font-bold mb-2">CGST1:</label>
                                <select
                                    id="cgst1"
                                    value={cgst1}
                                    onChange={handleCgst1Change}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="0">Total CGST1</option>
                                    <option value="2.5">2.5%</option>
                                    <option value="5">5%</option>
                                    <option value="6">6%</option>
                                    <option value="9">9%</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="sgst1" className="block text-gray-700 text-sm font-bold mb-2">SGST1:</label>
                                <select
                                    id="sgst1"
                                    value={sgst1}
                                    onChange={handleSgst1Change}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="0">Total CGST1</option>
                                    <option value="2.5">2.5%</option>
                                    <option value="6">6%</option>
                                    <option value="9">9%</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="totalValue1" className="block text-gray-700 text-sm font-bold mb-2">Total Value:</label>
                                <> Rs.</><input
                                    type="text"
                                    id="totalValue1"
                                    value={totalValue1}
                                    readOnly
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="perKgRate1" className="block text-gray-700 text-sm font-bold mb-2">Per KG Rate:</label>
                                <input
                                    type="text"
                                    id="perKgRate1"
                                    value={perKgRate1}
                                    readOnly
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                /><> Rs./kg</>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="totalWeight11" className="block text-gray-700 text-sm font-bold mb-2">Total Weight1:</label>
                                <input
                                    type="text"
                                    id="totalWeight11"
                                    value={totalWeight11}
                                    readOnly
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                /><> {selectedUnit}</>
                            </div>
                        </>
                    )}

                    {subcategories1 && isMaida_BulkerSelected1 && (
                        <>
                            <div className="mb-4">
                                <label htmlFor="weight1OfTruck1" className="block text-gray-700 text-sm font-bold mb-2">Weight1 of Truck:</label>
                                <input
                                    type="number"
                                    id="weight1OfTruck1"
                                    value={weight1OfTruck1}
                                    onChange={handleWeight1OfTruck1Change}
                                    placeholder="Weight1 of Truck"
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                /><> Qtl.</>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="perqtlrate1" className="block text-gray-700 text-sm font-bold mb-2">Per Qtl. Rate:</label>
                                <input
                                    type="number"
                                    id="perqtlrate1"
                                    value={perqtlrate1}
                                    onChange={handleperqtlrate1Change}
                                    placeholder="Per qtl. Rate"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="productValue1" className="block text-gray-700 text-sm font-bold mb-2">Total Price:</label>
                                <input
                                    type="text"
                                    id="productValue1"
                                    value={productValue1}
                                    readOnly
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="totalWeight11" className="block text-gray-700 text-sm font-bold mb-2">Total Weight1:</label>
                                <input
                                    type="text"
                                    id="totalWeight11"
                                    value={totalWeight11}
                                    readOnly
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                />
                            </div>
                        </>
                    )}


                    {category1 && selectedUnit && (
                        <p className="text-gray-700 text-sm mt-2">
                            Selected category1 unit: {selectedUnit}
                        </p>
                    )}
                </>
                )}









                <button
                    type="button"
                    onClick={handleGenerateGatepass}
                    className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[350px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 text-center"
                >
                    Generate Gatepass
                </button>
            </form>
        </section>
    );
};