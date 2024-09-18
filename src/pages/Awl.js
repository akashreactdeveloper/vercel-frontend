import React, { useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify'
import { LuIndianRupee } from "react-icons/lu";

const Awl = () => {
    const [type, settype] = useState('');
    const [remarks, setremarks] = useState('');
    const [partyName, setPartyName] = useState('');
    const [billNumber, setBillNumber] = useState('');
    const [billNumberVerifiedBy, setBillNumberVerifiedBy] = useState('')
    const [kandaWeightVerifiedBy, setKandaWeightVerifiedBy] = useState('')
    const [gatepassGeneratedBy, setGatepassGeneratedBy] = useState('')
    const [canceledBy, setCanceledBy] = useState('')
    const [batchnumber, setBatchNumber] = useState('');
    const [trucknumber, settrucknumber] = useState('');
    const [totalWeight, setTotalWeight] = useState('');
    const [totalamount, settotalamount] = useState('');
    const [category, setCategory] = useState('');
    const [subcategories, setSubcategories] = useState('');
    const [subsubcategories, setSubsubcategories] = useState('');
    const [isMaida_BulkerSelected, setIsMaida_BulkerSelected] = useState(false);
    const [otherSubsubcategories, setOtherSubsubcategories] = useState('');
    const [numberOfBags, setNumberOfBags] = useState('');
    const [typeOfScrap, settypeOfScrap] = useState('');
    const [typeOfScrap1, settypeOfScrap1] = useState('');
    const [typeOfScrap2, settypeOfScrap2] = useState('');
    const [typeOfScrap3, settypeOfScrap3] = useState('');
    const [perbagprice, setPerbagprice] = useState('');
    const [productValue, setProductValue] = useState('0');
    const [perKgRate, setPerKgRate] = useState('0');
    const [weightOfTruck, setWeightOfTruck] = useState('');
    const [loadingCharger, setLoadingCharger] = useState('0');
    const [cgst, setCgst] = useState('0');
    const [sgst, setSgst] = useState('0');
    const [totalValue, setTotalValue] = useState('0');
    const [weight, setweight] = useState('');
    const [perqtlrate, setperqtlrate] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
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
    const [perKgRate1, setPerKgRate1] = useState('0');
    const [weight1OfTruck1, setWeight1OfTruck1] = useState('');
    const [loadingCharger1, setLoadingCharger1] = useState('0');
    const [cgst1, setCgst1] = useState('0');
    const [sgst1, setSgst1] = useState('0');
    const [totalValue1, setTotalValue1] = useState('0');
    const [weight1, setweight1] = useState('');
    const [perqtlrate1, setperqtlrate1] = useState('');
    const [selectedCategory1, setSelectedCategory1] = useState('');
    const [selectedSubcategory1, setSelectedSubcategory1] = useState('');
    const [showAdditionalColumns, setShowAdditionalColumns] = useState(false);
    const [showOneMoreAdditionalColumns, setShowOneMoreAdditionalColumns] = useState(false);
    const [showTwoMoreAdditionalColumns, setshowTwoMoreAdditionalColumns] = useState(false);
    const [TotalGatepassAmount, setTotalGatepassAmount] = useState('');
    const [TotalGatepassWeight, setTotalGatepassWeight] = useState('0');
    const [TotalGatepassTruckWeight, setTotalGatepassTruckWeight] = useState('');
    const [totalWeight2, setTotalWeight2] = useState('');
    const [totalamount2, settotalamount2] = useState('');
    const [category2, setCategory2] = useState('');
    const [subcategories2, setSubcategories2] = useState('');
    const [subsubcategories2, setSubsubcategories2] = useState('');
    const [isMaida_BulkerSelected2, setIsMaida_BulkerSelected2] = useState(false);
    const [otherSubsubcategories2, setOtherSubsubcategories2] = useState('');
    const [numberOfBags2, setNumberOfBags2] = useState('');
    const [perbagprice2, setPerbagprice2] = useState('');
    const [productValue2, setProductValue2] = useState('');
    const [perKgRate2, setPerKgRate2] = useState('0');
    const [weight2OfTruck2, setWeight2OfTruck2] = useState('');
    const [loadingCharger2, setLoadingCharger2] = useState('0');
    const [cgst2, setCgst2] = useState('0');
    const [sgst2, setSgst2] = useState('0');
    const [totalValue2, setTotalValue2] = useState('0');
    const [weight2, setweight2] = useState('');
    const [perqtlrate2, setperqtlrate2] = useState('');
    const [selectedCategory2, setSelectedCategory2] = useState('');
    const [selectedSubcategory2, setSelectedSubcategory2] = useState('');
    const [totalWeight3, setTotalWeight3] = useState('');
    const [totalamount3, settotalamount3] = useState('');
    const [category3, setCategory3] = useState('');
    const [subcategories3, setSubcategories3] = useState('');
    const [subsubcategories3, setSubsubcategories3] = useState('');
    const [isMaida_BulkerSelected3, setIsMaida_BulkerSelected3] = useState(false);
    const [otherSubsubcategories3, setOtherSubsubcategories3] = useState('');
    const [numberOfBags3, setNumberOfBags3] = useState('');
    const [perbagprice3, setPerbagprice3] = useState('');
    const [productValue3, setProductValue3] = useState('');
    const [perKgRate3, setPerKgRate3] = useState('0');
    const [weight3OfTruck3, setWeight3OfTruck3] = useState('');
    const [loadingCharger3, setLoadingCharger3] = useState('0');
    const [cgst3, setCgst3] = useState('0');
    const [sgst3, setSgst3] = useState('0');
    const [totalValue3, setTotalValue3] = useState('0');
    const [weight3, setweight3] = useState('');
    const [perqtlrate3, setperqtlrate3] = useState('');
    const [selectedCategory3, setSelectedCategory3] = useState('');
    const [selectedSubcategory3, setSelectedSubcategory3] = useState('');
    const [TotalTruckWeight, setTotalTruckWeight] = useState('');
    const [TotalTruckWeight1, setTotalTruckWeight1] = useState('');
    const [TotalTruckWeight2, setTotalTruckWeight2] = useState('');
    const [TotalTruckWeight3, setTotalTruckWeight3] = useState('');
    const [typeofsale, settypeofsale] = useState('')
    const [loadingDoneBy, setloadingDoneBy] = useState('')
    const [bnverified, setbnverified] = useState('No')
    const [kwverified, setkwverified] = useState('No')
    const [weightDifference, setWeightDifference] = useState('')
    const [status, setStatus] = useState('')
    const [reason, setReason] = useState('')
    const [difference, setDifference] = useState('')
    const [kandaWeight, setkandaWeight] = useState('')
    const [weightOfScrap, setweightOfScrap] = useState('')
    const [perkgrateScrap, setperkgrateScrap] = useState('')
    const [weightOfScrap1, setweightOfScrap1] = useState('')
    const [perkgrateScrap1, setperkgrateScrap1] = useState('')
    const [weightOfScrap2, setweightOfScrap2] = useState('')
    const [perkgrateScrap2, setperkgrateScrap2] = useState('')
    const [weightOfScrap3, setweightOfScrap3] = useState('')
    const [perkgrateScrap3, setperkgrateScrap3] = useState('')


    const navigate = useNavigate();


    const awlCategories = {
        Maida: {
            unit: 'KG',
            subcategories: {
                "10": [],
                "30": ['Super Maida', 'Multipurpose Maida'],
                "50": ['Super Maida', 'Multipurpose Maida']
            }
        },
        "Atta Chakki": {
            unit: 'KG',
            subcategories: {
                "5": ['Normal MRP', 'High MRP'],
                "10": ['Normal MRP', 'High MRP'],
                "11": ['Normal MRP', 'High MRP'],
                "30": ['Normal MRP', 'High MRP'],
                "50": []
            }
        },
        "Mill Atta (R-Atta)": {
            unit: 'KG',
            subcategories: {
                "50": []
            }
        },
        Suji: {
            unit: 'KG',
            subcategories: {
                "10": []
            }
        },
        "Atta Scheme": {
            unit: 'KG',
            subcategories: {
                "10": []
            }
        }
    };

    const crfmCategories = {
        Maida: {
            unit: 'KG',
            subcategories: {
                Maida_Regular: ['10', '20', '25', '30', '40', '45', '50', 'Others'],
                Maida_Bulker: ['others']
            }
        },
        "Chakki aata": {
            unit: 'KG',
            subcategories: {
                Regular: ['5', '10', '26', '30', '40', '50 ', 'Others'],
                Jute: ['10', '5'],
                LD: ['10', '5'],
                'D-Mart Regular': ['5', '10', '26']
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
                Coarse: ['20', '25', '28 ', '30', '34', '35', '43', '44', '48', '49', '50', 'Others'],
                Fine: ['20', '25', '28 ', '30', '34', '35', '43', '44', '48', '49', '50', 'Others']
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
        scrap: {
            unit: 'Kg',
            subcategories: {
                Others: ['Others'],
            }
        },
        Wheat: {
            unit: 'Kg',
            subcategories: {
                Others: ['Others'],
            }
        },
    };

    const awlCategories1 = {
        Maida: {
            unit: 'KG',
            subcategories1: {
                "10": [],
                "30": ['Super Maida', 'Multipurpose Maida'],
                "50": ['Super Maida', 'Multipurpose Maida']
            }
        },
        "Atta Chakki": {
            unit: 'KG',
            subcategories1: {
                "5": ['Normal MRP', 'High MRP'],
                "10": ['Normal MRP', 'High MRP'],
                "11": ['Normal MRP', 'High MRP'],
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
        "Mill Atta (R-Atta)": {
            unit: 'KG',
            subcategories1: {
                "50": []
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
        "Chakki aata": {
            unit: 'KG',
            subcategories1: {
                Regular: ['5', '10', '26', '30', '40', '50 ', 'Others'],
                Jute: ['10', '5'],
                LD: ['10', '5'],
                'D-Mart Regular': ['5', '10', '26']
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
                Coarse: ['20', '25', '28 ', '30', '34', '35', '43', '44', '48', '49', '50', 'Others'],
                Fine: ['20', '25', '28 ', '30', '34', '35', '43', '44', '48', '49', '50', 'Others']
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
        scrap: {
            unit: 'Kg',
            subcategories: {
                Others: ['Others'],
            }
        },
        Wheat: {
            unit: 'Kg',
            subcategories: {
                Others: ['Others'],
            }
        },
    };

    const awlCategories2 = {
        Maida: {
            unit: 'KG',
            subcategories2: {
                "10": [],
                "30": ['Super Maida', 'Multipurpose Maida'],
                "50": ['Super Maida', 'Multipurpose Maida']
            }
        },
        "Atta Chakki": {
            unit: 'KG',
            subcategories2: {
                "5": ['Normal MRP', 'High MRP'],
                "10": ['Normal MRP', 'High MRP'],
                "11": ['Normal MRP', 'High MRP'],
                "30": ['Normal MRP', 'High MRP'],
                "50": []
            }
        },
        Suji: {
            unit: 'KG',
            subcategories2: {
                "10": []
            }
        },
        "Mill Atta (R-Atta)": {
            unit: 'KG',
            subcategories2: {
                "50": []
            }
        },
        "Atta Scheme": {
            unit: 'KG',
            subcategories2: {
                "10": []
            }
        }
    };

    const crfmCategories2 = {
        Maida: {
            unit: 'KG',
            subcategories2: {
                Maida_Regular: ['10', '20', '25', '30', '40', '45', '50', 'Others'],
                Maida_Bulker: ['others']
            }
        },
        "Chakki aata": {
            unit: 'KG',
            subcategories2: {
                Regular: ['5', '10', '26', '30', '40', '50 ', 'Others'],
                Jute: ['10', '5'],
                LD: ['10', '5'],
                'D-Mart Regular': ['5', '10', '26']
            }
        },
        "MILL ATTA": {
            unit: 'KG',
            subcategories2: {
                Regular: ['10', '30', '40', '50', 'Others']
            }
        },
        Bran: {
            unit: 'KG',
            subcategories2: {
                Coarse: ['20', '25', '28 ', '30', '34', '35', '43', '44', '48', '49', '50', 'Others'],
                Fine: ['20', '25', '28 ', '30', '34', '35', '43', '44', '48', '49', '50', 'Others']
            }
        },
        "Rawa Suji": {
            unit: 'KG',
            subcategories2: {
                Regular: ['25', '50', 'Others']
            }
        },
        Refraction: {
            unit: 'Qtl.',
            subcategories2: {
                Murgidana: ['Others'],
                Kala_Beej: ['Others'],
                Danthal: ['Others'],
                Mitti: ['Others'],
                Others: ['Others'],
            }
        },
        Bardana: {
            unit: 'Bags',
            subcategories2: {
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
        scrap: {
            unit: 'Kg',
            subcategories: {
                Others: ['Others'],
            }
        },
        Wheat: {
            unit: 'Kg',
            subcategories: {
                Others: ['Others'],
            }
        },
    };

    const awlCategories3 = {
        Maida: {
            unit: 'KG',
            subcategories3: {
                "10": [],
                "30": ['Super Maida', 'Multipurpose Maida'],
                "50": ['Super Maida', 'Multipurpose Maida']
            }
        },
        "Atta Chakki": {
            unit: 'KG',
            subcategories3: {
                "5": ['Normal MRP', 'High MRP'],
                "10": ['Normal MRP', 'High MRP'],
                "11": ['Normal MRP', 'High MRP'],
                "30": ['Normal MRP', 'High MRP'],
                "50": []
            }
        },
        Suji: {
            unit: 'KG',
            subcategories3: {
                "10": []
            }
        },
        "Mill Atta (R-Atta)": {
            unit: 'KG',
            subcategories3: {
                "50": []
            }
        },
        "Atta Scheme": {
            unit: 'KG',
            subcategories3: {
                "10": []
            }
        }
    };

    const crfmCategories3 = {
        Maida: {
            unit: 'KG',
            subcategories3: {
                Maida_Regular: ['10', '20', '25', '30', '40', '45', '50', 'Others'],
                Maida_Bulker: ['others']
            }
        },
        "Chakki aata": {
            unit: 'KG',
            subcategories3: {
                Regular: ['5', '10', '26', '30', '40', '50 ', 'Others'],
                Jute: ['10', '5'],
                LD: ['10', '5'],
                'D-Mart Regular': ['5', '10', '26']
            }
        },
        "MILL ATTA": {
            unit: 'KG',
            subcategories3: {
                Regular: ['10', '30', '40', '50', 'Others']
            }
        },
        Bran: {
            unit: 'KG',
            subcategories3: {
                Coarse: ['20', '25', '28 ', '30', '34', '35', '43', '44', '48', '49', '50', 'Others'],
                Fine: ['20', '25', '28 ', '30', '34', '35', '43', '44', '48', '49', '50', 'Others']
            }
        },
        "Rawa Suji": {
            unit: 'KG',
            subcategories3: {
                Regular: ['25', '50', 'Others']
            }
        },
        Refraction: {
            unit: 'Qtl.',
            subcategories3: {
                Murgidana: ['Others'],
                Kala_Beej: ['Others'],
                Danthal: ['Others'],
                Mitti: ['Others'],
                Others: ['Others'],
            }
        },
        Bardana: {
            unit: 'Bags',
            subcategories3: {
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
        scrap: {
            unit: 'Kg',
            subcategories: {
                Others: ['Others'],
            }
        },
        Wheat: {
            unit: 'Kg',
            subcategories: {
                Others: ['Others'],
            }
        },
    };

    const categories = type === 'CRFM' ? crfmCategories : awlCategories;
    const categories1 = type === 'CRFM' ? crfmCategories1 : awlCategories1;
    const categories2 = type === 'CRFM' ? crfmCategories2 : awlCategories2;
    const categories3 = type === 'CRFM' ? crfmCategories3 : awlCategories3;


    const handleTypeChange = (e) => {
        settype(e.target.value);
        setSelectedCategory('');
        setSelectedSubcategory('');
    }

    const handleTypeofsaleChange = (e) => {
        settypeofsale(e.target.value)
    }

    const handleremarks = (e) => {
        setremarks(e.target.value);
    };
    const handlePartyNameChange = (e) => {
        setPartyName(e.target.value);
    };


    const handleBatchNumberChange = (e) => {
        setBatchNumber(e.target.value);
    };
    const handletrucknumberChange = (e) => {
        settrucknumber(e.target.value);
    };

    const handleNumberOfBagsChange = (e) => {
        const newNumberOfBags = e.target.value;
        setNumberOfBags(newNumberOfBags);
        calculateProductValue(numberOfBags, perbagprice);
        calculateTotalWeight(numberOfBags, subsubcategories);
    };

    const handleWeightOfTruckChange = (e) => {
        const weight = e.target.value;
        setWeightOfTruck(weight);
        calculateTotalPrice(weight, perKgRate);
        if (isMaida_BulkerSelected) {
            setTotalWeight(weight);
            setTotalTruckWeight(weight);
        }
    };



    const handleGenerateGatepass = async () => {
        const AwlformData = {
            type,
            partyName,
            batchnumber,
            trucknumber,
            weight,
            category,
            subcategories,
            subsubcategories,
            otherSubsubcategories,
            numberOfBags,
            perbagprice,
            productValue,
            perKgRate,
            loadingCharger,
            cgst,
            sgst,
            weightOfTruck,
            perkgrateScrap,
            totalValue,
            typeOfScrap,
            typeOfScrap1,
            typeOfScrap2,
            typeOfScrap3,
            totalWeight,
            perqtlrate,
            totalamount,
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
            totalamount1,
            weight2,
            category2,
            subcategories2,
            subsubcategories2,
            otherSubsubcategories2,
            numberOfBags2,
            perbagprice2,
            productValue2,
            perKgRate2,
            loadingCharger2,
            cgst2,
            sgst2,
            weight2OfTruck2,
            totalValue2,
            totalWeight2,
            perqtlrate2,
            totalamount2,
            weight3,
            category3,
            subcategories3,
            subsubcategories3,
            otherSubsubcategories3,
            numberOfBags3,
            perbagprice3,
            productValue3,
            perKgRate3,
            loadingCharger3,
            cgst3,
            sgst3,
            weight3OfTruck3,
            totalValue3,
            totalWeight3,
            perqtlrate3,
            totalamount3,
            TotalGatepassWeight,
            TotalGatepassAmount,
            TotalGatepassTruckWeight,
            TotalTruckWeight,
            TotalTruckWeight1,
            TotalTruckWeight2,
            TotalTruckWeight3,
            selectedUnit,
            typeofsale,
            loadingDoneBy,
            kandaWeight,
            bnverified,
            kwverified,
            remarks,
            weightDifference,
            difference,
            status,
            reason,
            weightOfScrap,
            perkgrateScrap,
            weightOfScrap1,
            perkgrateScrap1,
            weightOfScrap2,
            perkgrateScrap2,
            weightOfScrap3,
            perkgrateScrap3,
            billNumber,
            billNumberVerifiedBy,
            kandaWeightVerifiedBy,
            gatepassGeneratedBy,
            canceledBy,
        };



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
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setSubcategories('');
        setSubsubcategories('');
        setOtherSubsubcategories('');
        setPerbagprice('');
        setProductValue('');
        setPerKgRate('');
    };

    const handleSubcategoriesChange = (e) => {
        const selectedSubcategories = e.target.value;
        setSubcategories(selectedSubcategories);
        setSubsubcategories('');
        setOtherSubsubcategories('');
        setProductValue('');
        setWeightOfTruck('');
        setPerKgRate('');
        setIsMaida_BulkerSelected(selectedSubcategories === 'Maida_Bulker');
        if (type === 'AWL') {
            calculateTotalWeight(numberOfBags, selectedSubcategories);
        }
    }
    const handleSubsubcategoriesChange = (e) => {
        setSubsubcategories(e.target.value);
        setOtherSubsubcategories('');
        calculateProductValue(numberOfBags, perbagprice);
        if (type === 'CRFM') {
            calculateTotalWeight(numberOfBags, subsubcategories, otherSubsubcategories);
        }
    };
    const handleOtherSubsubcategoriesChange = (e) => {
        setOtherSubsubcategories(e.target.value);
        calculateProductValue(numberOfBags, perbagprice);
        if (type === 'CRFM') {
            calculateTotalWeight(subsubcategories, numberOfBags, otherSubsubcategories);
        }
    };
    const handlePerbagpriceChange = (e) => {
        const newPrice = e.target.value;
        setPerbagprice(newPrice);
        calculateProductValue(numberOfBags, newPrice);
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
        const newperqtlrate = e.target.value;
        setperqtlrate(newperqtlrate);
        calculateTotalPrice(weightOfTruck, newperqtlrate);
    };
    const calculateTotalPrice = (weightOfTruck, newperqtlrate) => {
        if (weightOfTruck && newperqtlrate) {
            console.log("weightoftruck", weightOfTruck)
            console.log("perqtlrate", newperqtlrate)
            const totalPrice = parseFloat(weightOfTruck) * parseFloat(newperqtlrate);
            console.log("total price", totalPrice)
            setProductValue(totalPrice.toFixed(2));


        }
        else {
            setProductValue('');
        }
    };
    const calculateProductValue = (numberOfBags, perbagprice) => {
        if (numberOfBags && perbagprice && category !== 'scrap' && category !== 'Wheat') {
            const product = parseFloat(numberOfBags) * parseFloat(perbagprice);
            setProductValue(product.toFixed(2));
        }
        else {
            setProductValue('');
            setPerKgRate('');
        }
    };
    useEffect(() => {
        calculateTotalValue(productValue, loadingCharger, cgst, sgst);
    }, [productValue, loadingCharger, cgst, sgst]);

    const handleWeightOfScrapChange = (e) => {
        const scrapWeight = e.target.value;
        setweightOfScrap(scrapWeight);
    }
    const handleperkgrateScrapChange = (e) => {
        const scrapPerKgRate = e.target.value;
        setperkgrateScrap(scrapPerKgRate);
    }

    const handletypeOfScrapChange = (e) => {
        const scrapType = e.target.value;
        settypeOfScrap(scrapType)
    }

    const calculateScrapPrice = (weightOfScrap, perkgrateScrap) => {
        const scrapPrice = parseFloat(weightOfScrap) * parseFloat(perkgrateScrap);
        setProductValue(scrapPrice.toFixed(2));
        setTotalWeight(weightOfScrap)
    }

    useEffect(() => {
        calculateScrapPrice(weightOfScrap, perkgrateScrap);
    }, [weightOfScrap, perkgrateScrap]);

    const calculatetotalamount = (weight, perqtlrate) => {
        if (weight && perqtlrate) {
            const amount = parseFloat(weight) * parseFloat(perqtlrate);
            settotalamount(amount);
        }
    }
    useEffect(() => {
        calculatetotalamount(weight, perqtlrate);
    }, [weight, perqtlrate]);
    const calculateTotalValue = (productValue, loadingCharger, cgst, sgst) => {
        if (productValue && loadingCharger && cgst && sgst) {
            const totalValue = parseFloat(productValue) + parseFloat(loadingCharger);
            const cgstAmount = parseFloat(totalValue) * parseFloat(cgst) / 100;
            const sgstAmount = parseFloat(totalValue) * parseFloat(sgst) / 100;
            const finalValue = totalValue + cgstAmount + sgstAmount;

            setTotalValue(finalValue);
        } else {
            setTotalValue('');
        }
    };
    const calculatePerKgRate = (totalValue, subcategories, subsubcategories, otherSubsubcategories, numberOfBags) => {
        if (type === 'CRFM') {
            if (category === 'Refraction' || category === 'scrap' || category === 'Bardana' || category === 'Wheat' || subcategories === 'Maida_Bulker') {
                setPerKgRate(0)
            }
            else if (totalValue && subsubcategories !== 'Others' && numberOfBags) {
                console.log("total value - ", totalValue)
                console.log("subsubcategories - ", subsubcategories)
                console.log("numberOfBags - ", numberOfBags)
                const perKg = parseFloat(totalValue) / (parseFloat(subsubcategories) * parseFloat(numberOfBags));
                setPerKgRate(perKg.toFixed(2));
            } else if (totalValue && otherSubsubcategories && numberOfBags) {
                const perKg = parseFloat(totalValue) / (parseFloat(otherSubsubcategories) * parseFloat(numberOfBags));
                setPerKgRate(perKg.toFixed(2));
            } else {
                setPerKgRate('');
            }
        } else if (type === 'AWL') {
            if (totalValue && subcategories && numberOfBags) {
                const perKg = parseFloat(totalValue) / (parseFloat(subcategories) * parseFloat(numberOfBags));
                setPerKgRate(perKg.toFixed(2));
            } else {
                setPerKgRate('');
            }
        }
    };
    useEffect(() => {
        calculatePerKgRate(totalValue, subcategories, subsubcategories, otherSubsubcategories, numberOfBags);
    }, [totalValue, subcategories, subsubcategories, otherSubsubcategories, numberOfBags]);

    const calculateTotalWeight = (numberOfBags, subcategories, subsubcategories, otherSubsubcategories) => {
        if (type === 'AWL') {
            if (category === 'Maida') {

                const total = 0;
                setTotalWeight(total ? total.toFixed(2) : '');


            } else if (category === 'Suji') {
                const total = 0;
                setTotalWeight(total ? total.toFixed(2) : '');

            } else if (category === 'Mill Atta (R-Atta)' && subcategories === '50') {
                const total = 0;
                setTotalWeight(total ? total.toFixed(2) : '');

            } else if (category === 'Atta Chakki') {
                if (subcategories === '5') {
                    const NumberofTotalBags = numberOfBags * 6
                    const weightOfBag = subcategories
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight(total ? total.toFixed(2) : '');

                } else if (subcategories === '10') {
                    const NumberofTotalBags = numberOfBags * 3
                    const weightOfBag = subcategories
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight(total ? total.toFixed(2) : '');

                } else {
                    const weightOfBag = subcategories
                    const total = numberOfBags && weightOfBag ? parseFloat(numberOfBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight(total ? total.toFixed(2) : '');
                }

            } else if (category === 'Atta Scheme') {
                if (subcategories === '10') {
                    const NumberofTotalBags = numberOfBags * 3
                    const weightOfBag = subcategories
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight(total ? total.toFixed(2) : '');
                }
            }

            else {
                const weightOfBag = subcategories
                const total = numberOfBags && weightOfBag ? parseFloat(numberOfBags) * parseFloat(weightOfBag) : '';
                setTotalWeight(total ? total.toFixed(2) : '');
            }
        }
        else if (type === 'CRFM') {
            if (category === 'Chakki aata' && subcategories === 'D-Mart Regular') {
                if (subsubcategories === '5') {
                    const NumberofTotalBags = numberOfBags * 6
                    const weightOfBag = subcategories
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight(total ? total.toFixed(2) : '');
                } else if (subsubcategories === '10') {
                    const NumberofTotalBags = numberOfBags * 3;
                    const weightOfBag = subsubcategories
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    console.log("Dmart", total)
                    setTotalWeight(total ? total.toFixed(2) : '');
                } else {
                    const weightOfBag = subsubcategories === 'Others' ? parseFloat(otherSubsubcategories) : parseFloat(subsubcategories);
                    const total = numberOfBags && weightOfBag ? parseFloat(numberOfBags) * weightOfBag : '';
                    setTotalWeight(total ? total.toFixed(2) : '');
                }
            }
            else if (category === 'scrap' || category === 'Wheat') {
                setTotalWeight(weightOfScrap);
                console.log("total scrap weight", totalWeight)
            }
            else {
                const weightOfBag = subsubcategories === 'Others' ? parseFloat(otherSubsubcategories) : parseFloat(subsubcategories);
                const total = numberOfBags && weightOfBag ? parseFloat(numberOfBags) * weightOfBag : '';
                setTotalWeight(total ? total.toFixed(2) : '');
            }
        }
        else if (isMaida_BulkerSelected) {
            setTotalWeight(weightOfTruck);
            console.log("total weight", totalWeight)
        }

    };

    useEffect(() => {
        calculateTotalWeight(numberOfBags, subcategories, subsubcategories, otherSubsubcategories);
    }, [numberOfBags, subcategories, subsubcategories, otherSubsubcategories]);

    const calculateTotalTruckWeight = (numberOfBags, subcategories, subsubcategories, otherSubsubcategories) => {
        if (type === 'AWL') {
            if (category === 'Maida' && subcategories === '30') {
                const weightOfBag = 30.090
                const total = numberOfBags && weightOfBag ? parseFloat(numberOfBags) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight(total ? total.toFixed(2) : '');

            } else if (category === 'Maida' && subcategories === '50') {
                const weightOfBag = 50.12
                const total = numberOfBags && weightOfBag ? parseFloat(numberOfBags) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight(total ? total.toFixed(2) : '');

            } else if (category === 'Mill Atta (R-Atta)' && subcategories === '50') {
                const weightOfBag = 50.12
                const total = numberOfBags && weightOfBag ? parseFloat(numberOfBags) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight(total ? total.toFixed(2) : '');

            } else if (category === 'Atta Chakki') {

                if (subcategories === '10') {
                    const WeightofMasterBags = numberOfBags * 0.075;
                    const NumberofTotalBags = numberOfBags * 3
                    const weightOfBag = 10.07
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight(total ? total.toFixed(2) : '');

                } else if (subcategories === '5') {
                    const WeightofMasterBags = numberOfBags * 0.075;
                    const NumberofTotalBags = numberOfBags * 6
                    const weightOfBag = 5.05
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight(total ? total.toFixed(2) : '');

                } else if (subcategories === '30') {
                    const weightOfBag = 30.090
                    const total = numberOfBags && weightOfBag ? parseFloat(numberOfBags) * parseFloat(weightOfBag) : '';
                    setTotalTruckWeight(total ? total.toFixed(2) : '');

                } else if (subcategories === '50') {
                    const weightOfBag = 50.12
                    const total = numberOfBags && weightOfBag ? parseFloat(numberOfBags) * parseFloat(weightOfBag) : '';
                    setTotalTruckWeight(total ? total.toFixed(2) : '');
                }

            } else if (category === 'Maida' && subcategories === '10') {

                const NumberofTotalBags = numberOfBags
                const weightOfBag = 10.15
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight(total ? total.toFixed(2) : '');

            } else if (category === 'Suji' && subcategories === '10') {

                const NumberofTotalBags = numberOfBags
                const weightOfBag = 10.17
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight(total ? total.toFixed(2) : '');

            } else if (category === 'Besan') {

                const NumberofTotalBags = numberOfBags;
                const weightOfBag = 12.235;
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight(total ? total.toFixed(2) : '');

            } else if (category === 'Atta Scheme' && subcategories === '10') {

                const WeightofMasterBags = numberOfBags * 0.075;
                const WeightofBesanMasterBag = numberOfBags >= 10 ? (Math.floor(numberOfBags / 10) * 12.235) : 0;
                const NumberofTotalBags = numberOfBags * 3
                const weightOfBag = 10.07
                const total = NumberofTotalBags && weightOfBag && WeightofMasterBags && WeightofBesanMasterBag ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) + parseFloat(WeightofBesanMasterBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight(total ? total.toFixed(2) : '');

            } else {
                const weightOfBag = subcategories
                const total = numberOfBags && weightOfBag ? parseFloat(numberOfBags) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight(total ? total.toFixed(2) : '');
            }
        }
        else if (type === 'CRFM') {

            if (category === 'Chakki aata' && subcategories === 'D-Mart Regular') {
                if (subsubcategories === '5') {
                    const WeightofMasterBags = numberOfBags * 0.075;
                    const NumberofTotalBags = numberOfBags * 6
                    const weightOfBag = 5.05
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight(total ? total.toFixed(2) : '');

                } else if (subsubcategories === '10') {
                    const WeightofMasterBags = numberOfBags * 0.075;
                    const NumberofTotalBags = numberOfBags * 3
                    const weightOfBag = 10.07
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight(total ? total.toFixed(2) : '');
                }
            }
            else if (category === 'Maida' && subcategories === 'Maida_Bulker') {
                console.log("inside", weightOfTruck)
                setTotalTruckWeight(weightOfTruck);
                console.log("truck weight", TotalTruckWeight)
            }

            else {
                const weightOfBag = subsubcategories === 'Others' ? parseFloat(otherSubsubcategories) : parseFloat(subsubcategories);
                const total = numberOfBags && weightOfBag ? parseFloat(numberOfBags) * weightOfBag : '';
                setTotalTruckWeight(total ? total.toFixed(2) : '');
            }
        }

    };

    useEffect(() => {
        calculateTotalTruckWeight(numberOfBags, subcategories, subsubcategories, otherSubsubcategories);
    }, [numberOfBags, subcategories, subsubcategories, otherSubsubcategories]);


    const selectedUnit = category ? categories[category]?.unit : '';
    const availableSubcategories = category ? Object.keys(categories[category]?.subcategories) : [];
    const availableSubsubcategories = subcategories && categories[category]?.subcategories[subcategories]
        ? categories[category].subcategories[subcategories]
        : [];

    const handleButtonClick = () => {
        setShowAdditionalColumns(!showAdditionalColumns);
    };
    const handleButtonClick1 = () => {
        setShowOneMoreAdditionalColumns(!showOneMoreAdditionalColumns);
    };
    const handleButtonClick2 = () => {
        setshowTwoMoreAdditionalColumns(!showTwoMoreAdditionalColumns);
    };


    const handleNumberOfBags1Change = (e) => {
        const newNumberOfBags1 = e.target.value;
        setNumberOfBags1(newNumberOfBags1);
        calculateProductValue1(numberOfBags1, perbagprice1);
        calculateTotalWeight11(numberOfBags1, subsubcategories1); // Calculate total weight1
    };

    const handleWeight1OfTruck1Change = (e) => {
        const weight1 = e.target.value;
        setWeight1OfTruck1(weight1);
        calculateTotalPrice1(weight1, perKgRate1);
        if (isMaida_BulkerSelected1) {
            setTotalWeight11(weight1);
        }
    };





    const handleCategory1Change = (e) => {
        const selectedCategory1 = e.target.value;
        setCategory1(selectedCategory1);
        setSubcategories1('');
        setSubsubcategories1('');
        setOtherSubsubcategories1('');
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
        if (type === 'AWL') {
            calculateTotalWeight11(numberOfBags1, selectedSubcategories1);
        }
    }
    const handleSubsubcategories1Change = (e) => {
        setSubsubcategories1(e.target.value);
        setOtherSubsubcategories1('');
        calculateProductValue1(numberOfBags1, perbagprice1);
        if (type === 'CRFM') {
            calculateTotalWeight11(numberOfBags1, subsubcategories1, otherSubsubcategories1);
        }
    };
    const handleOtherSubsubcategories1Change = (e) => {
        setOtherSubsubcategories1(e.target.value);
        calculateProductValue1(numberOfBags1, perbagprice1);
        if (type === 'CRFM') {
            calculateTotalWeight11(subsubcategories1, numberOfBags1, otherSubsubcategories1);
        }
    };
    const handlePerbagprice1Change = (e) => {
        const newPrice = e.target.value;
        setPerbagprice1(newPrice);
        calculateProductValue1(numberOfBags1, newPrice);
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
        calculateTotalPrice1(weight1OfTruck1, perqtlrate1);
    };

    const handleWeightOfScrap1Change = (e) => {
        const scrapWeight1 = e.target.value;
        setweightOfScrap1(scrapWeight1);
    }
    const handleperkgrateScrap1Change = (e) => {
        const scrapPerKgRate1 = e.target.value;
        setperkgrateScrap1(scrapPerKgRate1);
    }

    const handletypeOfScrap1Change = (e) => {
        const scrapType1 = e.target.value;
        settypeOfScrap1(scrapType1)
    }

    const calculateScrapPrice1 = (weightOfScrap1, perkgrateScrap1) => {
        const scrapPrice1 = parseFloat(weightOfScrap1) * parseFloat(perkgrateScrap1);
        setProductValue(scrapPrice1.toFixed(2));
        setTotalWeight(weightOfScrap1)
    }

    useEffect(() => {
        calculateScrapPrice1(weightOfScrap1, perkgrateScrap1);
    }, [weightOfScrap1, perkgrateScrap1]);


    const calculateTotalPrice1 = (weight1OfTruck1, perKgRate1) => {
        if (weight1OfTruck1 && perKgRate1) {
            const totalPrice = parseFloat(weight1OfTruck1) * parseFloat(perqtlrate1);
            setProductValue1(totalPrice.toFixed(2));
        } else {
            setProductValue1('');
        }
    };
    const calculateProductValue1 = (numberOfBags1, perbagprice1) => {
        if (numberOfBags1 && perbagprice1) {
            const product = parseFloat(numberOfBags1) * parseFloat(perbagprice1);
            setProductValue1(product.toFixed(2));
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
            settotalamount1(amount);
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
            const finalValue1 = totalValue1 + cgst1Amount + sgst1Amount;

            setTotalValue1(finalValue1);
        } else {
            setTotalValue1("");
        }
    };
    const calculatePerKgRate1 = (totalValue1, subsubcategories1, subcategories1, numberOfBags1) => {
        if (type === 'CRFM') {
            if (category1 === 'Refraction' || category1 === 'scrap' || category1 === 'Bardana' || category1 === 'Wheat' || subcategories1 === 'Maida_Bulker') {
                setPerKgRate1(0)
            }
            else if (totalValue1 && subsubcategories1 && numberOfBags1) {
                const perKg = parseFloat(totalValue1) / (parseFloat(subsubcategories1) * parseFloat(numberOfBags1));
                setPerKgRate1(perKg.toFixed(2));
            } else {
                setPerKgRate1('');
            }
        } else if (type === 'AWL') {
            if (totalValue1 && subcategories1 && numberOfBags1) {
                const perKg = parseFloat(totalValue1) / (parseFloat(subcategories1) * parseFloat(numberOfBags1));
                setPerKgRate1(perKg.toFixed(2));
            } else {
                setPerKgRate1('');
            }
        }
    };
    useEffect(() => {
        calculatePerKgRate1(totalValue1, subsubcategories1, subcategories1, numberOfBags1);
    }, [totalValue1, subsubcategories1, subcategories1, numberOfBags1]);


    const calculateTotalWeight11 = (numberOfBags1, subcategories1, subsubcategories1, otherSubsubcategories1) => {
        if (type === 'AWL') {
            if (category1 === 'Maida') {

                const total = 0;
                setTotalWeight11(total ? total.toFixed(2) : '');


            } else if (category1 === 'Suji') {
                const total = 0;
                setTotalWeight11(total ? total.toFixed(2) : '');

            } else if (category1 === 'Mill Atta (R-Atta)' && subcategories1 === '50') {
                const total = 0;
                setTotalWeight11(total ? total.toFixed(2) : '');

            } else if (category1 === 'Atta Chakki') {
                if (subcategories1 === '5') {
                    const NumberofTotalBags = numberOfBags1 * 6
                    const weightOfBag = subcategories1
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight11(total ? total.toFixed(2) : '');

                } else if (subcategories1 === '10') {
                    const NumberofTotalBags = numberOfBags1 * 3
                    const weightOfBag = subcategories1
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight11(total ? total.toFixed(2) : '');

                } else {
                    const weightOfBag = subcategories1
                    const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
                    setTotalWeight11(total ? total.toFixed(2) : '');
                }

            } else if (category1 === 'Atta Scheme') {
                if (subcategories1 === '10') {
                    const NumberofTotalBags = numberOfBags1 * 3
                    const weightOfBag = subcategories1
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight11(total ? total.toFixed(2) : '');
                }
            }

            else {
                const weightOfBag = subcategories1
                const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
                setTotalWeight11(total ? total.toFixed(2) : '');
            }
        }
        else if (type === 'CRFM') {
            if (category1 === 'Chakki aata' && subcategories1 === 'D-Mart Regular') {
                if (subsubcategories1 === '5') {
                    const NumberofTotalBags = numberOfBags1 * 6
                    const weightOfBag = subcategories1
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight11(total ? total.toFixed(2) : '');
                } else if (subsubcategories1 === '10') {
                    const NumberofTotalBags = numberOfBags1 * 3
                    const weightOfBag = subcategories1
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight11(total ? total.toFixed(2) : '');
                } else {
                    const weightOfBag = subsubcategories1 === 'Others' ? parseFloat(otherSubsubcategories1) : parseFloat(subsubcategories1);
                    const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * weightOfBag : '';
                    setTotalWeight11(total ? total.toFixed(2) : '');
                }
            } else if (category1 === 'scrap' || category1 === 'Wheat') {
                setTotalWeight11(weightOfScrap1);
                console.log("total scrap weight", totalWeight11)
            } else {
                const weightOfBag = subsubcategories1 === 'Others' ? parseFloat(otherSubsubcategories1) : parseFloat(subsubcategories1);
                const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * weightOfBag : '';
                setTotalWeight11(total ? total.toFixed(2) : '');
            }
        }
        else if (isMaida_BulkerSelected) {
            setTotalWeight11(weightOfTruck);
        }
    };

    useEffect(() => {
        calculateTotalWeight11(numberOfBags1, subcategories1, subsubcategories1, otherSubsubcategories1);
    }, [numberOfBags1, subcategories1, subsubcategories1, otherSubsubcategories1]);

    const calculateTotalTruckWeight1 = (numberOfBags1, subcategories1, subsubcategories1, otherSubsubcategories1) => {
        if (type === 'AWL') {
            if (category1 === 'Maida' && subcategories1 === '30') {
                const weightOfBag = 30.090
                const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight1(total ? total.toFixed(2) : '');

            } else if (category1 === 'Maida' && subcategories1 === '50') {
                const weightOfBag = 50.12
                const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight1(total ? total.toFixed(2) : '');

            } else if (category1 === 'Mill Atta (R-Atta)' && subcategories1 === '50') {
                const weightOfBag = 50.12
                const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight1(total ? total.toFixed(2) : '');

            } else if (category1 === 'Atta Chakki') {

                if (subcategories1 === '10') {
                    const WeightofMasterBags = numberOfBags1 * 0.075;
                    const NumberofTotalBags = numberOfBags1 * 3
                    const weightOfBag = 10.07
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight1(total ? total.toFixed(2) : '');

                } else if (subcategories1 === '5') {
                    const WeightofMasterBags = numberOfBags1 * 0.075;
                    const NumberofTotalBags = numberOfBags1 * 6
                    const weightOfBag = 5.05
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight1(total ? total.toFixed(2) : '');

                } else if (subcategories1 === '30') {
                    const weightOfBag = 30.090
                    const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
                    setTotalTruckWeight1(total ? total.toFixed(2) : '');

                } else if (subcategories1 === '50') {
                    const weightOfBag = 50.12
                    const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
                    setTotalTruckWeight1(total ? total.toFixed(2) : '');
                }

            } else if (category1 === 'Maida' && subcategories1 === '10') {

                const NumberofTotalBags = numberOfBags1
                const weightOfBag = 10.15
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight1(total ? total.toFixed(2) : '');

            } else if (category1 === 'Suji' && subcategories1 === '10') {

                const NumberofTotalBags = numberOfBags1
                const weightOfBag = 10.17
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight1(total ? total.toFixed(2) : '');

            } else if (category1 === 'Besan') {

                const NumberofTotalBags = numberOfBags1;
                const weightOfBag = 12.235;
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight1(total ? total.toFixed(2) : '');

            } else if (category1 === 'Atta Scheme' && subcategories1 === '10') {

                const WeightofMasterBags = numberOfBags1 * 0.075;
                const WeightofBesanMasterBag = numberOfBags1 >= 10 ? (Math.floor(numberOfBags1 / 10) * 12.235) : 0;
                const NumberofTotalBags = numberOfBags1 * 3
                const weightOfBag = 10.07
                const total = NumberofTotalBags && weightOfBag && WeightofMasterBags && WeightofBesanMasterBag ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) + parseFloat(WeightofBesanMasterBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight1(total ? total.toFixed(2) : '');



            } else {
                const weightOfBag = subcategories1
                const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight1(total ? total.toFixed(2) : '');
            }
        }
        else if (type === 'CRFM') {

            if (category1 === 'Chakki aata' && subcategories1 === 'D-Mart Regular') {
                if (subsubcategories1 === '5') {
                    const WeightofMasterBags = numberOfBags1 * 0.075;
                    const NumberofTotalBags = numberOfBags1 * 6
                    const weightOfBag = 5.05
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight1(total ? total.toFixed(2) : '');

                } else if (subsubcategories1 === '10') {
                    const WeightofMasterBags = numberOfBags1 * 0.075;
                    const NumberofTotalBags = numberOfBags1 * 3
                    const weightOfBag = 10.07
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight1(total ? total.toFixed(2) : '');
                }
            } else {
                const weightOfBag = subsubcategories1 === 'Others' ? parseFloat(otherSubsubcategories1) : parseFloat(subsubcategories1);
                const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * weightOfBag : '';
                setTotalTruckWeight1(total ? total.toFixed(2) : '');
            }
        }
        else if (isMaida_BulkerSelected) {
            setTotalTruckWeight1(weightOfTruck);
        }
    };

    useEffect(() => {
        calculateTotalTruckWeight1(numberOfBags1, subcategories1, subsubcategories1, otherSubsubcategories1);
    }, [numberOfBags1, subcategories1, subsubcategories1, otherSubsubcategories1]);

    const selectedUnit1 = category1 ? categories1[category1]?.unit : '';
    const availableSubcategories1 = category1 ? Object.keys(categories1[category1]?.subcategories1) : [];
    const availableSubsubcategories1 = subcategories1 && categories1[category1]?.subcategories1[subcategories1]
        ? categories1[category1].subcategories1[subcategories1]
        : [];

    const handleNumberOfBags2Change = (e) => {
        const newNumberOfBags2 = e.target.value;
        setNumberOfBags2(newNumberOfBags2);
        calculateProductValue2(numberOfBags2, perbagprice2);
        calculateTotalWeight2(numberOfBags2, subsubcategories2); // Calculate total weight2
    };

    const handleWeight2OfTruck2Change = (e) => {
        const weight2 = e.target.value;
        setWeight2OfTruck2(weight2);
        calculateTotalPrice1(weight2, perKgRate2);
        if (isMaida_BulkerSelected2) {
            setTotalWeight2(weight2);
        }
    };

    const handleCategory2Change = (e) => {
        const selectedCategory2 = e.target.value;
        setCategory2(selectedCategory2);
        setSubcategories2('');
        setSubsubcategories2('');
        setOtherSubsubcategories2('');
        setPerbagprice2('');
        setProductValue2('');
        setPerKgRate2('');
    };

    const handleSubcategories2Change = (e) => {
        const selectedSubcategories2 = e.target.value;
        setSubcategories2(selectedSubcategories2);
        setSubsubcategories2('');
        setOtherSubsubcategories2('');
        setProductValue2('');
        setWeight2OfTruck2('');
        setPerKgRate2('');
        setIsMaida_BulkerSelected2(selectedSubcategories2 === 'Maida_Bulker');
        if (type === 'AWL') {
            calculateTotalWeight2(numberOfBags2, selectedSubcategories2);
        }
    }
    const handleSubsubcategories2Change = (e) => {
        setSubsubcategories2(e.target.value);
        setOtherSubsubcategories2('');
        calculateProductValue2(numberOfBags2, perbagprice2);
        if (type === 'CRFM') {
            calculateTotalWeight2(numberOfBags2, subsubcategories2, otherSubsubcategories2);
        }
    };
    const handleOtherSubsubcategories2Change = (e) => {
        setOtherSubsubcategories2(e.target.value);
        calculateProductValue2(numberOfBags2, perbagprice2);
        if (type === 'CRFM') {
            calculateTotalWeight2(subsubcategories2, numberOfBags2, otherSubsubcategories2);
        }
    };
    const handlePerbagprice2Change = (e) => {
        const newPrice = e.target.value;
        setPerbagprice2(newPrice);
        calculateProductValue2(numberOfBags2, newPrice);
    };
    const handleLoadingCharger2Change = (e) => {
        const charger = e.target.value;
        setLoadingCharger2(charger);
        calculateTotalValue2(productValue2, charger, cgst2, sgst2);
    };
    const handleCgst2Change = (e) => {
        const selectedCgst2 = e.target.value;
        setCgst2(selectedCgst2);
        calculateTotalValue2(productValue2, loadingCharger2, selectedCgst2, sgst2);
    };
    const handleSgst2Change = (e) => {
        const selectedSgst2 = e.target.value;
        setSgst2(selectedSgst2);
        calculateTotalValue2(productValue2, loadingCharger2, cgst2, selectedSgst2);
    };
    const handleweight2Change = (e) => {
        setweight2(e.target.value);

    };
    const handleperqtlrate2Change = (e) => {
        setperqtlrate2(e.target.value);
        calculateTotalPrice2(weight2OfTruck2, perqtlrate2);
    };

    const handleWeightOfScrap2Change = (e) => {
        const scrapWeight2 = e.target.value;
        setweightOfScrap2(scrapWeight2);
    }
    const handleperkgrateScrap2Change = (e) => {
        const scrapPerKgRate2 = e.target.value;
        setperkgrateScrap2(scrapPerKgRate2);
    }

    const handletypeOfScrap2Change = (e) => {
        const scrapType2 = e.target.value;
        settypeOfScrap2(scrapType2)
    }

    const calculateScrapPrice2 = (weightOfScrap2, perkgrateScrap2) => {
        const scrapPrice2 = parseFloat(weightOfScrap2) * parseFloat(perkgrateScrap2);
        setProductValue(scrapPrice2.toFixed(2));
        setTotalWeight(weightOfScrap2)
    }

    useEffect(() => {
        calculateScrapPrice2(weightOfScrap2, perkgrateScrap2);
    }, [weightOfScrap2, perkgrateScrap2]);



    const calculateTotalPrice2 = (weight2OfTruck2, perKgRate2) => {
        if (weight2OfTruck2 && perKgRate2) {
            const totalPrice = parseFloat(weight2OfTruck2) * parseFloat(perqtlrate2);
            setProductValue2(totalPrice.toFixed(2));
        } else {
            setProductValue2('');
        }
    };
    const calculateProductValue2 = (numberOfBags2, perbagprice2) => {
        if (numberOfBags2 && perbagprice2) {
            const product = parseFloat(numberOfBags2) * parseFloat(perbagprice2);
            setProductValue2(product.toFixed(2));
        } else {
            setProductValue2('');
            setPerKgRate2('');
        }
    };
    useEffect(() => {
        calculateTotalValue2(productValue2, loadingCharger2, cgst2, sgst2);
    }, [productValue2, loadingCharger2, cgst2, sgst2]);
    const calculatetotalamount2 = (weight2, perqtlrate2) => {
        if (weight2 && perqtlrate2) {
            const amount = parseFloat(weight2) * parseFloat(perqtlrate2);
            settotalamount2(amount);
        }
    }
    useEffect(() => {
        calculatetotalamount2(weight2, perqtlrate2);
    }, [weight2, perqtlrate2]);

    const calculateTotalValue2 = (productValue2, loadingCharger2, cgst2, sgst2) => {
        if (productValue2 && loadingCharger2 && cgst2 && sgst2) {
            const totalValue2 = parseFloat(productValue2) + parseFloat(loadingCharger2);
            const cgst2Amount = parseFloat(totalValue2) * parseFloat(cgst2) / 100;
            const sgst2Amount = parseFloat(totalValue2) * parseFloat(sgst2) / 100;
            const finalValue1 = totalValue2 + cgst2Amount + sgst2Amount;

            setTotalValue2(finalValue1);
        } else {
            setTotalValue2('');
        }
    };
    const calculatePerKgRate2 = (totalValue2, subcategories2, subsubcategories2, numberOfBags2) => {
        if (type === 'CRFM') {
            if (category2 === 'Refraction' || category2 === 'scrap' || category2 === 'Bardana' || category2 === 'Wheat' || subcategories2 === 'Maida_Bulker') {
                setPerKgRate2(0)
            }
            else if (totalValue2 && subsubcategories2 && numberOfBags2) {
                const perKg = parseFloat(totalValue2) / (parseFloat(subsubcategories2) * parseFloat(numberOfBags2));
                setPerKgRate2(perKg.toFixed(2));
            } else {
                setPerKgRate2('');
            }
        } else if (type === 'AWL') {
            if (totalValue2 && subcategories2 && numberOfBags2) {
                const perKg = parseFloat(totalValue2) / (parseFloat(subcategories2) * parseFloat(numberOfBags2));
                setPerKgRate2(perKg.toFixed(2));
            } else {
                setPerKgRate2('');
            }
        }
    };
    useEffect(() => {
        calculatePerKgRate2(totalValue2, subcategories2, subsubcategories2, numberOfBags2);
    }, [totalValue2, subcategories2, subsubcategories2, numberOfBags2]);

    const calculateTotalWeight2 = (numberOfBags2, subcategories2, subsubcategories2, otherSubsubcategories2) => {
        if (type === 'AWL') {
            if (category2 === 'Maida') {

                const total = 0;
                setTotalWeight2(total ? total.toFixed(2) : '');


            } else if (category2 === 'Suji') {
                const total = 0;
                setTotalWeight2(total ? total.toFixed(2) : '');

            } else if (category2 === 'Mill Atta (R-Atta)' && subcategories2 === '50') {
                const total = 0;
                setTotalWeight2(total ? total.toFixed(2) : '');

            } else if (category2 === 'Atta Chakki') {
                if (subcategories2 === '5') {
                    const NumberofTotalBags = numberOfBags2 * 6
                    const weightOfBag = subcategories2
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight2(total ? total.toFixed(2) : '');

                } else if (subcategories2 === '10') {
                    const NumberofTotalBags = numberOfBags2 * 3
                    const weightOfBag = subcategories2
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight2(total ? total.toFixed(2) : '');

                } else {
                    const weightOfBag = subcategories2
                    const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                    setTotalWeight2(total ? total.toFixed(2) : '');
                }

            } else if (category2 === 'Atta Scheme') {
                if (subcategories2 === '10') {
                    const NumberofTotalBags = numberOfBags2 * 3
                    const weightOfBag = subcategories2
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight2(total ? total.toFixed(2) : '');
                }
            }

            else {
                const weightOfBag = subcategories2
                const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                setTotalWeight2(total ? total.toFixed(2) : '');
            }
        }
        else if (type === 'CRFM') {
            if (category2 === 'Chakki aata' && subcategories2 === 'D-Mart Regular') {
                if (subsubcategories2 === '5') {
                    const NumberofTotalBags = numberOfBags2 * 6
                    const weightOfBag = subcategories2
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight2(total ? total.toFixed(2) : '');
                } else if (subsubcategories2 === '10') {
                    const NumberofTotalBags = numberOfBags2 * 3
                    const weightOfBag = subcategories2
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight2(total ? total.toFixed(2) : '');
                } else {
                    const weightOfBag = subsubcategories2 === 'Others' ? parseFloat(otherSubsubcategories2) : parseFloat(subsubcategories2);
                    const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * weightOfBag : '';
                    setTotalWeight2(total ? total.toFixed(2) : '');
                }
            } else if (category2 === 'scrap' || category2 === 'Wheat') {
                setTotalWeight2(weightOfScrap2);
                console.log("total scrap weight", totalWeight2)
            }
            else {
                const weightOfBag = subsubcategories2 === 'Others' ? parseFloat(otherSubsubcategories2) : parseFloat(subsubcategories2);
                const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * weightOfBag : '';
                setTotalWeight2(total ? total.toFixed(2) : '');
            }
        }
        else if (isMaida_BulkerSelected) {
            setTotalWeight2(weightOfTruck);
        }
    };

    useEffect(() => {
        calculateTotalWeight2(numberOfBags2, subcategories2, subsubcategories2, otherSubsubcategories2);
    }, [numberOfBags2, subcategories2, subsubcategories2, otherSubsubcategories2]);

    const calculateTotalTruckWeight2 = (numberOfBags2, subcategories2, subsubcategories2, otherSubsubcategories2) => {
        if (type === 'AWL') {
            if (category2 === 'Maida' && subcategories2 === '30') {
                const weightOfBag = 30.090
                const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight2(total ? total.toFixed(2) : '');

            } else if (category2 === 'Maida' && subcategories2 === '50') {
                const weightOfBag = 50.12
                const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight2(total ? total.toFixed(2) : '');

            } else if (category2 === 'Mill Atta (R-Atta)' && subcategories2 === '50') {
                const weightOfBag = 50.12
                const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight2(total ? total.toFixed(2) : '');

            } else if (category2 === 'Atta Chakki') {

                if (subcategories2 === '10') {
                    const WeightofMasterBags = numberOfBags2 * 0.075;
                    const NumberofTotalBags = numberOfBags2 * 3
                    const weightOfBag = 10.07
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight2(total ? total.toFixed(2) : '');

                } else if (subcategories2 === '5') {
                    const WeightofMasterBags = numberOfBags2 * 0.075;
                    const NumberofTotalBags = numberOfBags2 * 6
                    const weightOfBag = 5.05
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight2(total ? total.toFixed(2) : '');

                } else if (subcategories2 === '30') {
                    const weightOfBag = 30.090
                    const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                    setTotalTruckWeight2(total ? total.toFixed(2) : '');

                } else if (subcategories2 === '50') {
                    const weightOfBag = 50.12
                    const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                    setTotalTruckWeight2(total ? total.toFixed(2) : '');
                }

            } else if (category2 === 'Maida' && subcategories2 === '10') {

                const NumberofTotalBags = numberOfBags2
                const weightOfBag = 10.15
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight2(total ? total.toFixed(2) : '');

            } else if (category2 === 'Suji' && subcategories2 === '10') {

                const NumberofTotalBags = numberOfBags2
                const weightOfBag = 10.17
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight2(total ? total.toFixed(2) : '');

            } else if (category2 === 'Besan') {

                const NumberofTotalBags = numberOfBags2;
                const weightOfBag = 12.235;
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight2(total ? total.toFixed(2) : '');

            } else if (category2 === 'Atta Scheme' && subcategories2 === '10') {

                const WeightofMasterBags = numberOfBags2 * 0.075;
                const WeightofBesanMasterBag = numberOfBags2 >= 10 ? (Math.floor(numberOfBags2 / 10) * 12.235) : 0;
                const NumberofTotalBags = numberOfBags2 * 3
                const weightOfBag = 10.07
                const total = NumberofTotalBags && weightOfBag && WeightofMasterBags && WeightofBesanMasterBag ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) + parseFloat(WeightofBesanMasterBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight2(total ? total.toFixed(2) : '');

            } else {
                const weightOfBag = subcategories2
                const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight2(total ? total.toFixed(2) : '');
            }
        }
        else if (type === 'CRFM') {

            if (category2 === 'Chakki aata' && subcategories2 === 'D-Mart Regular') {
                if (subsubcategories2 === '5') {
                    const WeightofMasterBags = numberOfBags2 * 0.075;
                    const NumberofTotalBags = numberOfBags2 * 6
                    const weightOfBag = 5.05
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight2(total ? total.toFixed(2) : '');

                } else if (subsubcategories2 === '10') {
                    const WeightofMasterBags = numberOfBags2 * 0.075;
                    const NumberofTotalBags = numberOfBags2 * 3
                    const weightOfBag = 10.07
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight2(total ? total.toFixed(2) : '');
                }
            } else {
                const weightOfBag = subsubcategories2 === 'Others' ? parseFloat(otherSubsubcategories2) : parseFloat(subsubcategories2);
                const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * weightOfBag : '';
                setTotalTruckWeight2(total ? total.toFixed(2) : '');
            }
        }
        else if (isMaida_BulkerSelected) {
            setTotalTruckWeight2(weightOfTruck);
        }
    };

    useEffect(() => {
        calculateTotalTruckWeight2(numberOfBags2, subcategories2, subsubcategories2, otherSubsubcategories2);
    }, [numberOfBags2, subcategories2, subsubcategories2, otherSubsubcategories2]);

    const selectedUnit2 = category2 ? categories2[category2]?.unit : '';
    const availableSubcategories2 = category2 ? Object.keys(categories2[category2]?.subcategories2) : [];
    const availableSubsubcategories2 = subcategories2 && categories2[category2]?.subcategories2[subcategories2]
        ? categories2[category2].subcategories2[subcategories2]
        : [];

    const handleNumberOfBags3Change = (e) => {
        const newNumberOfBags3 = e.target.value;
        setNumberOfBags3(newNumberOfBags3);
        calculateProductValue3(numberOfBags3, perbagprice3);
        calculateTotalWeight3(numberOfBags3, subsubcategories3); // Calculate total weight3
    };

    const handleWeight3OfTruck3Change = (e) => {
        const weight3 = e.target.value;
        setWeight3OfTruck3(weight3);
        calculateTotalPrice1(weight3, perKgRate3);
        if (isMaida_BulkerSelected3) {
            setTotalWeight3(weight3);
        }
    };

    const handleCategory3Change = (e) => {
        const selectedCategory3 = e.target.value;
        setCategory3(selectedCategory3);
        setSubcategories3('');
        setSubsubcategories3('');
        setOtherSubsubcategories3('');
        setPerbagprice3('');
        setProductValue3('');
        setPerKgRate3('');
    };

    const handleSubcategories3Change = (e) => {
        const selectedSubcategories3 = e.target.value;
        setSubcategories3(selectedSubcategories3);
        setSubsubcategories3('');
        setOtherSubsubcategories3('');
        setProductValue3('');
        setWeight3OfTruck3('');
        setPerKgRate3('');
        setIsMaida_BulkerSelected3(selectedSubcategories3 === 'Maida_Bulker');
        if (type === 'AWL') {
            calculateTotalWeight3(numberOfBags3, selectedSubcategories3);
        }
    }
    const handleSubsubcategories3Change = (e) => {
        setSubsubcategories3(e.target.value);
        setOtherSubsubcategories3('');
        calculateProductValue3(numberOfBags3, perbagprice3);
        if (type === 'CRFM') {
            calculateTotalWeight3(numberOfBags3, subsubcategories3, otherSubsubcategories3);
        }
    };
    const handleOtherSubsubcategories3Change = (e) => {
        setOtherSubsubcategories3(e.target.value);
        calculateProductValue3(numberOfBags3, perbagprice3);
        if (type === 'CRFM') {
            calculateTotalWeight3(subsubcategories3, numberOfBags3, otherSubsubcategories3);
        }
    };
    const handlePerbagprice3Change = (e) => {
        const newPrice = e.target.value;
        setPerbagprice3(newPrice);
        calculateProductValue3(numberOfBags3, newPrice);
    };
    const handleLoadingCharger3Change = (e) => {
        const charger = e.target.value;
        setLoadingCharger3(charger);
        calculateTotalValue3(productValue3, charger, cgst3, sgst3);
    };
    const handleCgst3Change = (e) => {
        const selectedCgst3 = e.target.value;
        setCgst3(selectedCgst3);
        calculateTotalValue3(productValue3, loadingCharger3, selectedCgst3, sgst3);
    };
    const handleSgst3Change = (e) => {
        const selectedSgst3 = e.target.value;
        setSgst3(selectedSgst3);
        calculateTotalValue3(productValue3, loadingCharger3, cgst3, selectedSgst3);
    };
    const handleweight3Change = (e) => {
        setweight3(e.target.value);

    };
    const handleperqtlrate3Change = (e) => {
        setperqtlrate3(e.target.value);
        calculateTotalPrice3(weight3OfTruck3, perqtlrate3);
    };

    const handleWeightOfScrap3Change = (e) => {
        const scrapWeight3 = e.target.value;
        setweightOfScrap3(scrapWeight3);
    }
    const handleperkgrateScrap3Change = (e) => {
        const scrapPerKgRate3 = e.target.value;
        setperkgrateScrap3(scrapPerKgRate3);
    }

    const handletypeOfScrap3Change = (e) => {
        const scrapType3 = e.target.value;
        settypeOfScrap3(scrapType3)
    }

    const calculateScrapPrice3 = (weightOfScrap3, perkgrateScrap3) => {
        const scrapPrice3 = parseFloat(weightOfScrap3) * parseFloat(perkgrateScrap3);
        setProductValue(scrapPrice3.toFixed(2));
        setTotalWeight(weightOfScrap3)
    }

    useEffect(() => {
        calculateScrapPrice3(weightOfScrap3, perkgrateScrap3);
    }, [weightOfScrap3, perkgrateScrap3]);


    const calculateTotalPrice3 = (weight3OfTruck3, perKgRate3) => {
        if (weight3OfTruck3 && perKgRate3) {
            const totalPrice = parseFloat(weight3OfTruck3) * parseFloat(perqtlrate3);
            setProductValue3(totalPrice.toFixed(2));
        } else {
            setProductValue3('');
        }
    };
    const calculateProductValue3 = (numberOfBags3, perbagprice3) => {
        if (numberOfBags3 && perbagprice3) {
            const product = parseFloat(numberOfBags3) * parseFloat(perbagprice3);
            setProductValue3(product.toFixed(2));
        } else {
            setProductValue3('');
            setPerKgRate3('');
        }
    };
    useEffect(() => {
        calculateTotalValue3(productValue3, loadingCharger3, cgst3, sgst3);
    }, [productValue3, loadingCharger3, cgst3, sgst3]);
    const calculatetotalamount3 = (weight3, perqtlrate3) => {
        if (weight3 && perqtlrate3) {
            const amount = parseFloat(weight3) * parseFloat(perqtlrate3);
            settotalamount3(amount);
        }
    }
    useEffect(() => {
        calculatetotalamount3(weight3, perqtlrate3);
    }, [weight3, perqtlrate3]);

    const calculateTotalValue3 = (productValue3, loadingCharger3, cgst3, sgst3) => {
        if (productValue3 && loadingCharger3 && cgst3 && sgst3) {
            const totalValue3 = parseFloat(productValue3) + parseFloat(loadingCharger3);
            const cgst3Amount = parseFloat(totalValue3) * parseFloat(cgst3) / 100;
            const sgst3Amount = parseFloat(totalValue3) * parseFloat(sgst3) / 100;
            const finalValue1 = totalValue3 + cgst3Amount + sgst3Amount;

            setTotalValue3(finalValue1);
        } else {
            setTotalValue3('');
        }
    };
    const calculatePerKgRate3 = (totalValue3, subsubcategories3, subcategories3, numberOfBags3) => {
        if (type === 'CRFM') {
            if (category3 === 'Refraction' || category3 === 'scrap' || category3 === 'Bardana' || category3 === 'Wheat' || subcategories3 === 'Maida_Bulker') {
                setPerKgRate3(0)
            }
            else if (totalValue3 && subsubcategories3 && numberOfBags3) {
                const perKg = parseFloat(totalValue3) / (parseFloat(subsubcategories3) * parseFloat(numberOfBags3));
                setPerKgRate3(perKg.toFixed(2));
            } else {
                setPerKgRate3('');
            }
        } else if (type === 'AWL') {
            if (totalValue3 && subcategories3 && numberOfBags3) {
                const perKg = parseFloat(totalValue3) / (parseFloat(subcategories3) * parseFloat(numberOfBags3));
                setPerKgRate3(perKg.toFixed(2));
            } else {
                setPerKgRate3('');
            }
        }
    };
    useEffect(() => {
        calculatePerKgRate3(totalValue3, subsubcategories3, subcategories3, numberOfBags3);
    }, [totalValue3, subsubcategories3, subcategories3, numberOfBags3]);


    const calculateTotalWeight3 = (numberOfBags3, subcategories3, subsubcategories3, otherSubsubcategories3) => {
        if (type === 'AWL') {
            if (category3 === 'Maida') {

                const total = 0;
                setTotalWeight3(total ? total.toFixed(2) : '');


            } else if (category3 === 'Suji') {
                const total = 0;
                setTotalWeight3(total ? total.toFixed(2) : '');

            } else if (category3 === 'Mill Atta (R-Atta)' && subcategories3 === '50') {
                const total = 0;
                setTotalWeight3(total ? total.toFixed(2) : '');

            } else if (category3 === 'Atta Chakki') {
                if (subcategories3 === '5') {
                    const NumberofTotalBags = numberOfBags3 * 6
                    const weightOfBag = subcategories3
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight3(total ? total.toFixed(2) : '');

                } else if (subcategories3 === '10') {
                    const NumberofTotalBags = numberOfBags3 * 3
                    const weightOfBag = subcategories3
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight3(total ? total.toFixed(2) : '');

                } else {
                    const weightOfBag = subcategories3
                    const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
                    setTotalWeight3(total ? total.toFixed(2) : '');
                }

            } else if (category3 === 'Atta Scheme') {
                if (subcategories3 === '10') {
                    const NumberofTotalBags = numberOfBags3 * 3
                    const weightOfBag = subcategories3
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight3(total ? total.toFixed(2) : '');
                }
            }

            else {
                const weightOfBag = subcategories3
                const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
                setTotalWeight3(total ? total.toFixed(2) : '');
            }
        }
        else if (type === 'CRFM') {
            if (category3 === 'Chakki aata' && subcategories3 === 'D-Mart Regular') {
                if (subsubcategories3 === '5') {
                    const NumberofTotalBags = numberOfBags3 * 6
                    const weightOfBag = subcategories3
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight3(total ? total.toFixed(2) : '');
                } else if (subsubcategories3 === '10') {
                    const NumberofTotalBags = numberOfBags3 * 3
                    const weightOfBag = subcategories3
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                    setTotalWeight3(total ? total.toFixed(2) : '');
                } else {
                    const weightOfBag = subsubcategories3 === 'Others' ? parseFloat(otherSubsubcategories3) : parseFloat(subsubcategories3);
                    const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * weightOfBag : '';
                    setTotalWeight3(total ? total.toFixed(2) : '');
                }

            } else if (category3 === 'scrap' || category3 === 'Wheat') {
                setTotalWeight3(weightOfScrap3);
                console.log("total scrap weight", totalWeight3)
            } else {
                const weightOfBag = subsubcategories3 === 'Others' ? parseFloat(otherSubsubcategories3) : parseFloat(subsubcategories3);
                const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * weightOfBag : '';
                setTotalWeight3(total ? total.toFixed(2) : '');
            }
        }
        else if (isMaida_BulkerSelected) {
            setTotalWeight3(weightOfTruck);
        }
    };

    useEffect(() => {
        calculateTotalWeight3(numberOfBags3, subcategories3, subsubcategories3, otherSubsubcategories3);
    }, [numberOfBags3, subcategories3, subsubcategories3, otherSubsubcategories3]);

    const calculateTotalTruckWeight3 = (numberOfBags3, subcategories3, subsubcategories3, otherSubsubcategories3) => {
        if (type === 'AWL') {
            if (category3 === 'Maida' && subcategories3 === '30') {
                const weightOfBag = 30.090
                const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight3(total ? total.toFixed(2) : '');

            } else if (category3 === 'Maida' && subcategories3 === '50') {
                const weightOfBag = 50.12
                const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight3(total ? total.toFixed(2) : '');

            } else if (category3 === 'Mill Atta (R-Atta)' && subcategories3 === '50') {
                const weightOfBag = 50.12
                const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight3(total ? total.toFixed(2) : '');

            } else if (category3 === 'Atta Chakki') {

                if (subcategories3 === '10') {
                    const WeightofMasterBags = numberOfBags3 * 0.075;
                    const NumberofTotalBags = numberOfBags3 * 3
                    const weightOfBag = 10.07
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight3(total ? total.toFixed(2) : '');

                } else if (subcategories3 === '5') {
                    const WeightofMasterBags = numberOfBags3 * 0.075;
                    const NumberofTotalBags = numberOfBags3 * 6
                    const weightOfBag = 5.05
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight3(total ? total.toFixed(2) : '');

                } else if (subcategories3 === '30') {
                    const weightOfBag = 30.090
                    const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
                    setTotalTruckWeight3(total ? total.toFixed(2) : '');

                } else if (subcategories3 === '50') {
                    const weightOfBag = 50.12
                    const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
                    setTotalTruckWeight3(total ? total.toFixed(2) : '');
                }

            } else if (category3 === 'Maida' && subcategories3 === '10') {

                const NumberofTotalBags = numberOfBags3
                const weightOfBag = 10.15
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight3(total ? total.toFixed(2) : '');

            } else if (category3 === 'Suji' && subcategories3 === '10') {

                const NumberofTotalBags = numberOfBags3
                const weightOfBag = 10.17
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight3(total ? total.toFixed(2) : '');

            } else if (category3 === 'Besan') {

                const NumberofTotalBags = numberOfBags3;
                const weightOfBag = 12.235;
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight3(total ? total.toFixed(2) : '');

            } else if (category3 === 'Atta Scheme' && subcategories3 === '10') {

                const WeightofMasterBags = numberOfBags3 * 0.075;
                const WeightofBesanMasterBag = numberOfBags3 >= 10 ? (Math.floor(numberOfBags3 / 10) * 12.235) : 0;
                const NumberofTotalBags = numberOfBags3 * 3
                const weightOfBag = 10.07
                const total = NumberofTotalBags && weightOfBag && WeightofMasterBags && WeightofBesanMasterBag ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) + parseFloat(WeightofBesanMasterBag) : '';
                console.log("weightofMasterBag", total)
                setTotalTruckWeight3(total ? total.toFixed(2) : '');


            } else {
                const weightOfBag = subcategories3
                const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
                setTotalTruckWeight3(total ? total.toFixed(2) : '');
            }
        }
        else if (type === 'CRFM') {

            if (category3 === 'Chakki aata' && subcategories3 === 'D-Mart Regular') {
                if (subsubcategories3 === '5') {
                    const WeightofMasterBags = numberOfBags3 * 0.075;
                    const NumberofTotalBags = numberOfBags3 * 6
                    const weightOfBag = 5.05
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight3(total ? total.toFixed(2) : '');

                } else if (subsubcategories3 === '10') {
                    const WeightofMasterBags = numberOfBags3 * 0.075;
                    const NumberofTotalBags = numberOfBags3 * 3
                    const weightOfBag = 10.07
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    setTotalTruckWeight3(total ? total.toFixed(2) : '');
                }
            } else {
                const weightOfBag = subsubcategories3 === 'Others' ? parseFloat(otherSubsubcategories3) : parseFloat(subsubcategories3);
                const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * weightOfBag : '';
                setTotalTruckWeight3(total ? total.toFixed(2) : '');
            }
        }
        else if (isMaida_BulkerSelected) {
            setTotalTruckWeight3(weightOfTruck);
        }
    };

    useEffect(() => {
        calculateTotalTruckWeight3(numberOfBags3, subcategories3, subsubcategories3, otherSubsubcategories3);
    }, [numberOfBags3, subcategories3, subsubcategories3, otherSubsubcategories3]);


    const selectedUnit3 = category3 ? categories3[category3]?.unit : '';
    const availableSubcategories3 = category3 ? Object.keys(categories3[category3]?.subcategories3) : [];
    const availableSubsubcategories3 = subcategories3 && categories3[category3]?.subcategories3[subcategories3]
        ? categories3[category3].subcategories3[subcategories3]
        : [];

    const calculateTotalGatepassAmount = (totalValue, totalamount, totalValue1, totalamount1, totalValue2, totalamount2, totalValue3, totalamount3) => {
        let total = 0;

        if (totalValue) total += totalValue;
        if (totalamount) total += totalamount;
        if (totalValue1) total += totalValue1;
        if (totalamount1) total += totalamount1;
        if (totalValue2) total += totalValue2;
        if (totalamount2) total += totalamount2;
        if (totalValue3) total += totalValue3;
        if (totalamount3) total += totalamount3;

        setTotalGatepassAmount(total);
    }

    useEffect(() => {
        calculateTotalGatepassAmount(totalValue, totalamount, totalValue1, totalamount1, totalValue2, totalamount2, totalValue3, totalamount3);
    }, [totalValue, totalamount, totalValue1, totalamount1, totalValue2, totalamount2, totalValue3, totalamount3]);

    const calculateTotalGatepassWeight = (totalWeight, totalWeight11, totalWeight2, totalWeight3, weight, weight1, weight2, weight3) => {
        let totalgweight = 0;

        if (totalWeight) totalgweight += parseFloat(totalWeight);
        if (weight) totalgweight += parseFloat(weight);
        if (totalWeight11) totalgweight += parseFloat(totalWeight11);
        if (weight1) totalgweight += parseFloat(weight1);
        if (totalWeight2) totalgweight += parseFloat(totalWeight2);
        if (weight2) totalgweight += parseFloat(weight2);
        if (totalWeight3) totalgweight += parseFloat(totalWeight3);
        if (weight3) totalgweight += parseFloat(weight3);

        setTotalGatepassWeight(totalgweight ? totalgweight.toFixed(2) : '');
    }


    useEffect(() => {
        calculateTotalGatepassWeight(totalWeight, totalWeight11, totalWeight2, totalWeight3, weight, weight1, weight2, weight3);
    }, [totalWeight, totalWeight11, totalWeight2, totalWeight3, weight, weight1, weight2, weight3]);

    const handleloadingDoneBy = (e) => {
        setloadingDoneBy(e.target.value)
    }

    const calculateTotalGatepassTruckWeight = (TotalTruckWeight, TotalTruckWeight1, TotalTruckWeight2, TotalTruckWeight3) => {
        let totaltweight = 0;

        if (TotalTruckWeight) totaltweight += parseFloat(TotalTruckWeight);
        if (weight) totaltweight += parseFloat(weight);
        if (TotalTruckWeight1) totaltweight += parseFloat(TotalTruckWeight1);
        if (weight1) totaltweight += parseFloat(weight1);
        if (TotalTruckWeight2) totaltweight += parseFloat(TotalTruckWeight2);
        if (weight2) totaltweight += parseFloat(weight2);
        if (TotalTruckWeight3) totaltweight += parseFloat(TotalTruckWeight3);
        if (weight3) totaltweight += parseFloat(weight3);

        setTotalGatepassTruckWeight(totaltweight ? totaltweight.toFixed(2) : '');
    }


    useEffect(() => {
        calculateTotalGatepassTruckWeight(TotalTruckWeight, TotalTruckWeight1, TotalTruckWeight2, TotalTruckWeight3);
    }, [TotalTruckWeight, TotalTruckWeight1, TotalTruckWeight2, TotalTruckWeight3]);



    return (
        <section className="bg-gradient-to-br from-blue-500 to-purple-500">
            <form className="max-w-lg mx-auto mt-10 p-6 bg-slate-100 shadow-md rounded-lg">
                <h1 className='text text-center font-bold bg-black text-cyan-200 py-3'>ITEM 1</h1>
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
                <div className="mb-4">
                    <label htmlFor="typeofsale" className="block text-gray-700 text-sm font-bold mb-2">Type of Sale :</label>
                    <select
                        id="typeofsale"
                        value={typeofsale}
                        onChange={handleTypeofsaleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select Type</option>
                        <option value="cash">Cash</option>
                        <option value="virtual">Virtual</option>
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
                        <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
                        <select
                            id="category"
                            value={category}
                            onChange={handleCategoryChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select Product Name</option>
                            {Object.keys(categories).map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    {category && (
                        <div className="mb-4">
                            <label htmlFor="subcategories" className="block text-gray-700 text-sm font-bold mb-2">Weight of Bag:</label>
                            <select
                                id="subcategories"
                                value={subcategories}
                                onChange={handleSubcategoriesChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Select Weight of Bag</option>
                                {availableSubcategories.map((subcat) => (
                                    <option key={subcat} value={subcat}>{subcat}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {category && (
                        <div className="mb-4">
                            <label htmlFor="subsubcategories" className="block text-gray-700 text-sm font-bold mb-2">Type of Product:</label>
                            <select
                                id="subsubcategories"
                                value={subsubcategories}
                                onChange={handleSubsubcategoriesChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Select Type of Product</option>
                                {availableSubsubcategories.map((subsubcat) => (
                                    <option key={subsubcat} value={subsubcat}>{subsubcat}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {subsubcategories === 'Others' && (
                        <div className="mb-4">
                            <label htmlFor="otherSubsubcategories" className="block text-gray-700 text-sm font-bold mb-2">Type of Product:</label>
                            <input
                                type="number"
                                id="otherSubsubcategories"
                                value={otherSubsubcategories}
                                onChange={handleOtherSubsubcategoriesChange}
                                placeholder="Enter Weight"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    )}



                    <div className="mb-4">
                        <label htmlFor="perbagprice" className="block text-gray-700 text-sm font-bold mb-2">Rate per Bag:</label>
                        <input
                            type="number"
                            id="perbagprice"
                            value={perbagprice}
                            onChange={handlePerbagpriceChange}
                            placeholder="Rate per Bag"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
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
                            <option value="0">Select CGST</option>
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
                            <option value="0">Select SGST</option>
                            <option value="2.5">2.5%</option>
                            <option value="6">6%</option>
                            <option value="9">9%</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="totalValue" className="block text-gray-700 text-sm font-bold mb-2">Total Value:</label>
                        <input
                            type="text"
                            id="totalValue"
                            value={totalValue}
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                        />
                    </div>


                    {category && selectedUnit && (
                        <p className="text-gray-700 text-sm mt-2">
                            Selected category unit: {selectedUnit}
                        </p>
                    )}

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
                    {category === "Refraction" && category !== "scrap" && category !== "Wheat" && (
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
                                    placeholder="Enter Weight in Kg"
                                /><> kg</>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="perqtlrate" className="block text-gray-700 text-sm font-bold mb-2">
                                    Per kg. Rate:
                                </label>
                                <input
                                    type="number"
                                    id="perqtlrate"
                                    value={perqtlrate}
                                    onChange={handleperqtlrateChange}
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter Per Kg. Rate:"
                                /><> RS./Kg.</>
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

                    {category === 'scrap' && category !== 'Wheat' && (
                        <>

                            <div className="mb-4">
                                <label htmlFor="typeOfScrap" className="block text-gray-700 text-sm font-bold mb-2">type of Scrap :</label>
                                <input
                                    type="text"
                                    id="typeOfScrap"
                                    value={typeOfScrap}
                                    onChange={handletypeOfScrapChange}
                                    placeholder="type of Scrap"
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="weightOfScrap" className="block text-gray-700 text-sm font-bold mb-2">Weight of Scrap :</label>
                                <input
                                    type="number"
                                    id="weightOfScrap"
                                    value={weightOfScrap}
                                    onChange={handleWeightOfScrapChange}
                                    placeholder="Weight of Scrap"
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                /><> Kg.</>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="perkgrateScrap" className="block text-gray-700 text-sm font-bold mb-2">Per Kg. Rate:</label>
                                <input
                                    type="number"
                                    id="perkgrateScrap"
                                    value={perkgrateScrap}
                                    onChange={handleperkgrateScrapChange}
                                    placeholder="Per kg. Rate"
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
                    {category === 'Wheat' && category !== 'scrap' && (
                        <>


                            <div className="mb-4">
                                <label htmlFor="weightOfScrap" className="block text-gray-700 text-sm font-bold mb-2">Weight of Wheat :</label>
                                <input
                                    type="number"
                                    id="weightOfScrap"
                                    value={weightOfScrap}
                                    onChange={handleWeightOfScrapChange}
                                    placeholder="Weight of Wheat"
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                /><> Kg.</>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="perkgrateScrap" className="block text-gray-700 text-sm font-bold mb-2">Per Kg. Rate:</label>
                                <input
                                    type="number"
                                    id="perkgrateScrap"
                                    value={perkgrateScrap}
                                    onChange={handleperkgrateScrapChange}
                                    placeholder="Per kg. Rate"
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




                    {category !== "Refraction" && category !== "scrap" && category !== "Wheat" && !isMaida_BulkerSelected && (
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


                    {category && selectedUnit1 && (
                        <p className="text-gray-700 text-sm mt-2">
                            Selected category unit: {selectedUnit1}
                        </p>
                    )}
                </>
                )}

                <button type='button' onClick={handleButtonClick} className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[350px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 text-center mb-4">Add new Item</button>

                {showAdditionalColumns && (
                    <>



                        <h1 className='text text-center font-bold bg-black text-cyan-200 py-3'>ITEM 2</h1>

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
                            {category1 === "Refraction" && category1 !== "scrap" && category1 !== "Wheat" && (
                                <>
                                    <div className="mb-4">
                                        <label htmlFor="weight1" className="block text-gray-700 text-sm font-bold mb-2">
                                            Weight :
                                        </label>
                                        <input
                                            type="number"
                                            id="weight1"
                                            value={weight1}
                                            onChange={handleweight1Change}
                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="Enter Weight in Kg"
                                        /><> Kg.</>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="perqtlrate1" className="block text-gray-700 text-sm font-bold mb-2">
                                            Per Kg. Rate:
                                        </label>
                                        <input
                                            type="number"
                                            id="perqtlrate1"
                                            value={perqtlrate1}
                                            onChange={handleperqtlrate1Change}
                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="Enter Per Kg. Rate:"
                                        /><> RS./Kg.</>
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

                            {category1 === 'scrap' && category1 !== 'Wheat' && (
                                <>

                                    <div className="mb-4">
                                        <label htmlFor="typeOfScrap1" className="block text-gray-700 text-sm font-bold mb-2">type of Scrap :</label>
                                        <input
                                            type="text"
                                            id="typeOfScrap1"
                                            value={typeOfScrap1}
                                            onChange={handletypeOfScrap1Change}
                                            placeholder="type of Scrap"
                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="weightOfScrap1" className="block text-gray-700 text-sm font-bold mb-2">Weight of Scrap :</label>
                                        <input
                                            type="number"
                                            id="weightOfScrap1"
                                            value={weightOfScrap1}
                                            onChange={handleWeightOfScrap1Change}
                                            placeholder="Weight of Scrap"
                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        /><> Kg.</>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="perkgrateScrap1" className="block text-gray-700 text-sm font-bold mb-2">Per Kg. Rate:</label>
                                        <input
                                            type="number"
                                            id="perkgrateScrap1"
                                            value={perkgrateScrap1}
                                            onChange={handleperkgrateScrap1Change}
                                            placeholder="Per kg. Rate"
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
                                        <label htmlFor="totalWeight11" className="block text-gray-700 text-sm font-bold mb-2">Total Weight:</label>
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
                            {category1 === 'Wheat' && category1 !== 'scrap' && (
                                <>


                                    <div className="mb-4">
                                        <label htmlFor="weightOfScrap1" className="block text-gray-700 text-sm font-bold mb-2">Weight of Wheat :</label>
                                        <input
                                            type="number"
                                            id="weightOfScrap1"
                                            value={weightOfScrap1}
                                            onChange={handleWeightOfScrap1Change}
                                            placeholder="Weight of Wheat"
                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        /><> Kg.</>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="perkgrateScrap1" className="block text-gray-700 text-sm font-bold mb-2">Per Kg. Rate:</label>
                                        <input
                                            type="number"
                                            id="perkgrateScrap1"
                                            value={perkgrateScrap1}
                                            onChange={handleperkgrateScrap1Change}
                                            placeholder="Per kg. Rate"
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
                                        <label htmlFor="totalWeight11" className="block text-gray-700 text-sm font-bold mb-2">Total Weight:</label>
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
                        <button type='button' onClick={handleButtonClick1} className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[350px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 text-center mb-4">Add new Item</button>
                        {showOneMoreAdditionalColumns && (
                            <>
                                <h1 className='text text-center font-bold bg-black text-cyan-200 py-3'>ITEM 3</h1>

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
                                        <label htmlFor="numberOfBags2" className="block text-gray-700 text-sm font-bold mb-2">Number of Bags:</label>
                                        <input
                                            type="number"
                                            id="numberOfBags2"
                                            value={numberOfBags2}
                                            onChange={handleNumberOfBags2Change}
                                            placeholder="Number of Bags"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="category2" className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
                                        <select
                                            id="category2"
                                            value={category2}
                                            onChange={handleCategory2Change}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option value="">Select Product Name</option>
                                            {Object.keys(categories2).map((cat) => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {category2 && (
                                        <div className="mb-4">
                                            <label htmlFor="subcategories2" className="block text-gray-700 text-sm font-bold mb-2">Weight2 of Bag:</label>
                                            <select
                                                id="subcategories2"
                                                value={subcategories2}
                                                onChange={handleSubcategories2Change}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            >
                                                <option value="">Select Weight2 of Bag</option>
                                                {availableSubcategories2.map((subcat) => (
                                                    <option key={subcat} value={subcat}>{subcat}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}

                                    {category2 && (
                                        <div className="mb-4">
                                            <label htmlFor="subsubcategories2" className="block text-gray-700 text-sm font-bold mb-2">Type of Product:</label>
                                            <select
                                                id="subsubcategories2"
                                                value={subsubcategories2}
                                                onChange={handleSubsubcategories2Change}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            >
                                                <option value="">Select Type of Product</option>
                                                {availableSubsubcategories2.map((subsubcat) => (
                                                    <option key={subsubcat} value={subsubcat}>{subsubcat}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}

                                    {subsubcategories2 === 'Others' && (
                                        <div className="mb-4">
                                            <label htmlFor="otherSubsubcategories2" className="block text-gray-700 text-sm font-bold mb-2">Type of Product:</label>
                                            <input
                                                type="number"
                                                id="otherSubsubcategories2"
                                                value={otherSubsubcategories2}
                                                onChange={handleOtherSubsubcategories2Change}
                                                placeholder="Enter Weight2"
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                    )}



                                    <div className="mb-4">
                                        <label htmlFor="perbagprice2" className="block text-gray-700 text-sm font-bold mb-2">Rate per Bag:</label>
                                        <input
                                            type="number"
                                            id="perbagprice2"
                                            value={perbagprice2}
                                            onChange={handlePerbagprice2Change}
                                            placeholder="Rate per Bag"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="loadingCharger2" className="block text-gray-700 text-sm font-bold mb-2">Loading Charger:</label>
                                        <input
                                            type="number"
                                            id="loadingCharger2"
                                            value={loadingCharger2}
                                            onChange={handleLoadingCharger2Change}
                                            placeholder="Loading Charger"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="cgst2" className="block text-gray-700 text-sm font-bold mb-2">CGST2:</label>
                                        <select
                                            id="cgst2"
                                            value={cgst2}
                                            onChange={handleCgst2Change}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option value="0">Select CGST2</option>
                                            <option value="2.5">2.5%</option>
                                            <option value="5">5%</option>
                                            <option value="6">6%</option>
                                            <option value="9">9%</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="sgst2" className="block text-gray-700 text-sm font-bold mb-2">SGST2:</label>
                                        <select
                                            id="sgst2"
                                            value={sgst2}
                                            onChange={handleSgst2Change}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option value="0">Select SGST2</option>
                                            <option value="2.5">2.5%</option>
                                            <option value="6">6%</option>
                                            <option value="9">9%</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="totalValue2" className="block text-gray-700 text-sm font-bold mb-2">Total Value:</label>
                                        <input
                                            type="text"
                                            id="totalValue2"
                                            value={totalValue2}
                                            readOnly
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                        />
                                    </div>


                                    {category2 && selectedUnit1 && (
                                        <p className="text-gray-700 text-sm mt-2">
                                            Selected category2 unit: {selectedUnit1}
                                        </p>
                                    )}

                                    <div className="mb-4">
                                        <label htmlFor="totalWeight2" className="block text-gray-700 text-sm font-bold mb-2">Total Weight2:</label>
                                        <input
                                            type="text"
                                            id="totalWeight2"
                                            value={totalWeight2}
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
                                        <label htmlFor="category2" className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
                                        <select
                                            id="category2"
                                            value={category2}
                                            onChange={handleCategory2Change}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option value="">Select Product Name</option>
                                            {Object.keys(categories2).map((cat) => (
                                                <option key={cat} value={cat}>
                                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {category2 && (
                                        <div className="mb-4">
                                            <label htmlFor="subcategories2" className="block text-gray-700 text-sm font-bold mb-2">Type of Product:</label>
                                            <select
                                                id="subcategories2"
                                                value={subcategories2}
                                                onChange={handleSubcategories2Change}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            >
                                                <option value="">Select type of Product</option>
                                                {availableSubcategories2.map((subcat) => (
                                                    <option key={subcat} value={subcat}>
                                                        {subcat.charAt(0).toUpperCase() + subcat.slice(1)}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                    {category2 === "Refraction" && category2 !== "scrap" && category2 !== "Wheat" && (
                                        <>
                                            <div className="mb-4">
                                                <label htmlFor="weight2" className="block text-gray-700 text-sm font-bold mb-2">
                                                    Weight :
                                                </label>
                                                <input
                                                    type="number"
                                                    id="weight2"
                                                    value={weight2}
                                                    onChange={handleweight2Change}
                                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    placeholder="Enter Weight in Kg"
                                                /><> Kg.</>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="perqtlrate2" className="block text-gray-700 text-sm font-bold mb-2">
                                                    Per Kg. Rate:
                                                </label>
                                                <input
                                                    type="number"
                                                    id="perqtlrate2"
                                                    value={perqtlrate2}
                                                    onChange={handleperqtlrate2Change}
                                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    placeholder="Enter Per Kg. Rate:"
                                                /><> RS./Kg.</>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="totalamount2" className="block text-gray-700 text-sm font-bold mb-2">Total Amount:</label>
                                                <LuIndianRupee /><input
                                                    type="text"
                                                    id="totalamount2"
                                                    value={totalamount2}
                                                    readOnly
                                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                />
                                            </div>
                                        </>
                                    )}

                                    {category2 === 'scrap' && category2 !== 'Wheat' && (
                                        <>

                                            <div className="mb-4">
                                                <label htmlFor="typeOfScrap2" className="block text-gray-700 text-sm font-bold mb-2">type of Scrap :</label>
                                                <input
                                                    type="text"
                                                    id="typeOfScrap2"
                                                    value={typeOfScrap2}
                                                    onChange={handletypeOfScrap2Change}
                                                    placeholder="type of Scrap"
                                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="weightOfScrap2" className="block text-gray-700 text-sm font-bold mb-2">Weight of Scrap :</label>
                                                <input
                                                    type="number"
                                                    id="weightOfScrap2"
                                                    value={weightOfScrap2}
                                                    onChange={handleWeightOfScrap2Change}
                                                    placeholder="Weight of Scrap"
                                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                /><> Kg.</>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="perkgrateScrap2" className="block text-gray-700 text-sm font-bold mb-2">Per Kg. Rate:</label>
                                                <input
                                                    type="number"
                                                    id="perkgrateScrap2"
                                                    value={perkgrateScrap2}
                                                    onChange={handleperkgrateScrap2Change}
                                                    placeholder="Per kg. Rate"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="productValue2" className="block text-gray-700 text-sm font-bold mb-2">Total Price:</label>
                                                <input
                                                    type="text"
                                                    id="productValue2"
                                                    value={productValue2}
                                                    readOnly
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="totalWeight2" className="block text-gray-700 text-sm font-bold mb-2">Total Weight:</label>
                                                <input
                                                    type="text"
                                                    id="totalWeight2"
                                                    value={totalWeight2}
                                                    readOnly
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                />
                                            </div>
                                        </>
                                    )}
                                    {category2 === 'Wheat' && category2 !== 'scrap' && (
                                        <>


                                            <div className="mb-4">
                                                <label htmlFor="weightOfScrap2" className="block text-gray-700 text-sm font-bold mb-2">Weight of Wheat :</label>
                                                <input
                                                    type="number"
                                                    id="weightOfScrap2"
                                                    value={weightOfScrap2}
                                                    onChange={handleWeightOfScrap2Change}
                                                    placeholder="Weight of Wheat"
                                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                /><> Kg.</>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="perkgrateScrap2" className="block text-gray-700 text-sm font-bold mb-2">Per Kg. Rate:</label>
                                                <input
                                                    type="number"
                                                    id="perkgrateScrap2"
                                                    value={perkgrateScrap2}
                                                    onChange={handleperkgrateScrap2Change}
                                                    placeholder="Per kg. Rate"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="productValue2" className="block text-gray-700 text-sm font-bold mb-2">Total Price:</label>
                                                <input
                                                    type="text"
                                                    id="productValue2"
                                                    value={productValue2}
                                                    readOnly
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="totalWeight2" className="block text-gray-700 text-sm font-bold mb-2">Total Weight:</label>
                                                <input
                                                    type="text"
                                                    id="totalWeight2"
                                                    value={totalWeight2}
                                                    readOnly
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                />
                                            </div>
                                        </>
                                    )}


                                    {category2 !== "Refraction" && category2 !== "scrap" && category2 !== "Wheat" && !isMaida_BulkerSelected2 && (
                                        <>
                                            <div className="mb-4">
                                                <label htmlFor="subsubcategories2" className="block text-gray-700 text-sm font-bold mb-2">Weight2 of Bag:</label>
                                                <select
                                                    id="subsubcategories2"
                                                    value={subsubcategories2}
                                                    onChange={handleSubsubcategories2Change}
                                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                >
                                                    <option value="">Weight2 of Bag</option>
                                                    {availableSubsubcategories2.map((subsubcat) => (
                                                        <option key={subsubcat} value={subsubcat}>
                                                            {subsubcat}
                                                        </option>
                                                    ))}
                                                </select><> kg</>
                                            </div>

                                            {subsubcategories2 === 'Others' && (
                                                <div className="mb-4">
                                                    <label htmlFor="otherSubsubcategories2" className="block text-gray-700 text-sm font-bold mb-2">Weight2 of Bag:</label>
                                                    <input
                                                        type="number"
                                                        id="otherSubsubcategories2"
                                                        value={otherSubsubcategories2}
                                                        onChange={handleOtherSubsubcategories2Change}
                                                        placeholder="Enter weight2"
                                                        className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    /><> KG</>
                                                </div>
                                            )}

                                            <div className="mb-4">
                                                <label htmlFor="numberOfBags2" className="block text-gray-700 text-sm font-bold mb-2">Number of Bags:</label>
                                                <input
                                                    type="number"
                                                    id="numberOfBags2"
                                                    value={numberOfBags2}
                                                    onChange={handleNumberOfBags2Change}
                                                    placeholder="Number of Bags"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="perbagprice2" className="block text-gray-700 text-sm font-bold mb-2">Rate per bag:</label>
                                                <input
                                                    type="number"
                                                    id="perbagprice2"
                                                    value={perbagprice2}
                                                    onChange={handlePerbagprice2Change}
                                                    placeholder="Rate per bag"
                                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                /><> Rs./Bag</>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="loadingCharger2" className="block text-gray-700 text-sm font-bold mb-2">Loading Charger:</label>
                                                <input
                                                    type="number"
                                                    id="loadingCharger2"
                                                    value={loadingCharger2}
                                                    onChange={handleLoadingCharger2Change}
                                                    placeholder="Loading Charger"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="cgst2" className="block text-gray-700 text-sm font-bold mb-2">CGST2:</label>
                                                <select
                                                    id="cgst2"
                                                    value={cgst2}
                                                    onChange={handleCgst2Change}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                >
                                                    <option value="0">Total CGST2</option>
                                                    <option value="2.5">2.5%</option>
                                                    <option value="5">5%</option>
                                                    <option value="6">6%</option>
                                                    <option value="9">9%</option>
                                                </select>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="sgst2" className="block text-gray-700 text-sm font-bold mb-2">SGST2:</label>
                                                <select
                                                    id="sgst2"
                                                    value={sgst2}
                                                    onChange={handleSgst2Change}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                >
                                                    <option value="0">Total CGST2</option>
                                                    <option value="2.5">2.5%</option>
                                                    <option value="6">6%</option>
                                                    <option value="9">9%</option>
                                                </select>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="totalValue2" className="block text-gray-700 text-sm font-bold mb-2">Total Value:</label>
                                                <> Rs.</><input
                                                    type="text"
                                                    id="totalValue2"
                                                    value={totalValue2}
                                                    readOnly
                                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="perKgRate2" className="block text-gray-700 text-sm font-bold mb-2">Per KG Rate:</label>
                                                <input
                                                    type="text"
                                                    id="perKgRate2"
                                                    value={perKgRate2}
                                                    readOnly
                                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                /><> Rs./kg</>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="totalWeight2" className="block text-gray-700 text-sm font-bold mb-2">Total Weight2:</label>
                                                <input
                                                    type="text"
                                                    id="totalWeight2"
                                                    value={totalWeight2}
                                                    readOnly
                                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                /><> {selectedUnit1}</>
                                            </div>
                                        </>
                                    )}

                                    {subcategories2 && isMaida_BulkerSelected2 && (
                                        <>
                                            <div className="mb-4">
                                                <label htmlFor="weight2OfTruck2" className="block text-gray-700 text-sm font-bold mb-2">Weight2 of Truck:</label>
                                                <input
                                                    type="number"
                                                    id="weight2OfTruck2"
                                                    value={weight2OfTruck2}
                                                    onChange={handleWeight2OfTruck2Change}
                                                    placeholder="Weight2 of Truck"
                                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                /><> Qtl.</>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="perqtlrate2" className="block text-gray-700 text-sm font-bold mb-2">Per Qtl. Rate:</label>
                                                <input
                                                    type="number"
                                                    id="perqtlrate2"
                                                    value={perqtlrate2}
                                                    onChange={handleperqtlrate2Change}
                                                    placeholder="Per qtl. Rate"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="productValue2" className="block text-gray-700 text-sm font-bold mb-2">Total Price:</label>
                                                <input
                                                    type="text"
                                                    id="productValue2"
                                                    value={productValue2}
                                                    readOnly
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="totalWeight2" className="block text-gray-700 text-sm font-bold mb-2">Total Weight2:</label>
                                                <input
                                                    type="text"
                                                    id="totalWeight2"
                                                    value={totalWeight2}
                                                    readOnly
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                />
                                            </div>
                                        </>
                                    )}
                                </>
                                )}
                                <button type='button' onClick={handleButtonClick2} className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[350px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 text-center mb-4">Add new Item</button>
                                {showTwoMoreAdditionalColumns && (
                                    <>
                                        <h1 className='text text-center font-bold bg-black text-cyan-200 py-3'>ITEM 4</h1>

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
                                                <label htmlFor="numberOfBags3" className="block text-gray-700 text-sm font-bold mb-2">Number of Bags:</label>
                                                <input
                                                    type="number"
                                                    id="numberOfBags3"
                                                    value={numberOfBags3}
                                                    onChange={handleNumberOfBags3Change}
                                                    placeholder="Number of Bags"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="category3" className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
                                                <select
                                                    id="category3"
                                                    value={category3}
                                                    onChange={handleCategory3Change}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                >
                                                    <option value="">Select Product Name</option>
                                                    {Object.keys(categories3).map((cat) => (
                                                        <option key={cat} value={cat}>{cat}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            {category3 && (
                                                <div className="mb-4">
                                                    <label htmlFor="subcategories3" className="block text-gray-700 text-sm font-bold mb-2">Weight3 of Bag:</label>
                                                    <select
                                                        id="subcategories3"
                                                        value={subcategories3}
                                                        onChange={handleSubcategories3Change}
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    >
                                                        <option value="">Select Weight3 of Bag</option>
                                                        {availableSubcategories3.map((subcat) => (
                                                            <option key={subcat} value={subcat}>{subcat}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            )}

                                            {category3 && (
                                                <div className="mb-4">
                                                    <label htmlFor="subsubcategories3" className="block text-gray-700 text-sm font-bold mb-2">Type of Product:</label>
                                                    <select
                                                        id="subsubcategories3"
                                                        value={subsubcategories3}
                                                        onChange={handleSubsubcategories3Change}
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    >
                                                        <option value="">Select Type of Product</option>
                                                        {availableSubsubcategories3.map((subsubcat) => (
                                                            <option key={subsubcat} value={subsubcat}>{subsubcat}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            )}

                                            {subsubcategories3 === 'Others' && (
                                                <div className="mb-4">
                                                    <label htmlFor="otherSubsubcategories3" className="block text-gray-700 text-sm font-bold mb-2">Type of Product:</label>
                                                    <input
                                                        type="number"
                                                        id="otherSubsubcategories3"
                                                        value={otherSubsubcategories3}
                                                        onChange={handleOtherSubsubcategories3Change}
                                                        placeholder="Enter Weight3"
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    />
                                                </div>
                                            )}



                                            <div className="mb-4">
                                                <label htmlFor="perbagprice3" className="block text-gray-700 text-sm font-bold mb-2">Rate per Bag:</label>
                                                <input
                                                    type="number"
                                                    id="perbagprice3"
                                                    value={perbagprice3}
                                                    onChange={handlePerbagprice3Change}
                                                    placeholder="Rate per Bag"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="loadingCharger3" className="block text-gray-700 text-sm font-bold mb-2">Loading Charger:</label>
                                                <input
                                                    type="number"
                                                    id="loadingCharger3"
                                                    value={loadingCharger3}
                                                    onChange={handleLoadingCharger3Change}
                                                    placeholder="Loading Charger"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="cgst3" className="block text-gray-700 text-sm font-bold mb-2">CGST3:</label>
                                                <select
                                                    id="cgst3"
                                                    value={cgst3}
                                                    onChange={handleCgst3Change}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                >
                                                    <option value="0">Select CGST3</option>
                                                    <option value="2.5">2.5%</option>
                                                    <option value="5">5%</option>
                                                    <option value="6">6%</option>
                                                    <option value="9">9%</option>
                                                </select>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="sgst3" className="block text-gray-700 text-sm font-bold mb-2">SGST3:</label>
                                                <select
                                                    id="sgst3"
                                                    value={sgst3}
                                                    onChange={handleSgst3Change}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                >
                                                    <option value="0">Select SGST3</option>
                                                    <option value="2.5">2.5%</option>
                                                    <option value="6">6%</option>
                                                    <option value="9">9%</option>
                                                </select>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="totalValue3" className="block text-gray-700 text-sm font-bold mb-2">Total Value:</label>
                                                <input
                                                    type="text"
                                                    id="totalValue3"
                                                    value={totalValue3}
                                                    readOnly
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                />
                                            </div>


                                            {category3 && selectedUnit3 && (
                                                <p className="text-gray-700 text-sm mt-2">
                                                    Selected category3 unit: {selectedUnit3}
                                                </p>
                                            )}

                                            <div className="mb-4">
                                                <label htmlFor="totalWeight3" className="block text-gray-700 text-sm font-bold mb-2">Total Weight3:</label>
                                                <input
                                                    type="text"
                                                    id="totalWeight3"
                                                    value={totalWeight3}
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
                                                <label htmlFor="category3" className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
                                                <select
                                                    id="category3"
                                                    value={category3}
                                                    onChange={handleCategory3Change}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                >
                                                    <option value="">Select Product Name</option>
                                                    {Object.keys(categories3).map((cat) => (
                                                        <option key={cat} value={cat}>
                                                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {category3 && (
                                                <div className="mb-4">
                                                    <label htmlFor="subcategories3" className="block text-gray-700 text-sm font-bold mb-2">Type of Product:</label>
                                                    <select
                                                        id="subcategories3"
                                                        value={subcategories3}
                                                        onChange={handleSubcategories3Change}
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    >
                                                        <option value="">Select type of Product</option>
                                                        {availableSubcategories3.map((subcat) => (
                                                            <option key={subcat} value={subcat}>
                                                                {subcat.charAt(0).toUpperCase() + subcat.slice(1)}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            )}
                                            {category3 === "Refraction" && category3 !== "scrap" && category3 !== "Wheat" && (
                                                <>
                                                    <div className="mb-4">
                                                        <label htmlFor="weight3" className="block text-gray-700 text-sm font-bold mb-2">
                                                            Weight :
                                                        </label>
                                                        <input
                                                            type="number"
                                                            id="weight3"
                                                            value={weight3}
                                                            onChange={handleweight3Change}
                                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                            placeholder="Enter Weight in Kg"
                                                        /><> Kg.</>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="perqtlrate3" className="block text-gray-700 text-sm font-bold mb-2">
                                                            Per Kg. Rate:
                                                        </label>
                                                        <input
                                                            type="number"
                                                            id="perqtlrate3"
                                                            value={perqtlrate3}
                                                            onChange={handleperqtlrate3Change}
                                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                            placeholder="Enter Per Kg. Rate:"
                                                        /><> RS./Kg.</>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="totalamount3" className="block text-gray-700 text-sm font-bold mb-2">Total Amount:</label>
                                                        <LuIndianRupee /><input
                                                            type="text"
                                                            id="totalamount3"
                                                            value={totalamount3}
                                                            readOnly
                                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                        />
                                                    </div>
                                                </>
                                            )}

                                            {category3 === 'scrap' && category3 !== 'Wheat' && (
                                                <>

                                                    <div className="mb-4">
                                                        <label htmlFor="typeOfScrap3" className="block text-gray-700 text-sm font-bold mb-2">type of Scrap :</label>
                                                        <input
                                                            type="text"
                                                            id="typeOfScrap3"
                                                            value={typeOfScrap3}
                                                            onChange={handletypeOfScrap3Change}
                                                            placeholder="type of Scrap"
                                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="weightOfScrap3" className="block text-gray-700 text-sm font-bold mb-2">Weight of Scrap :</label>
                                                        <input
                                                            type="number"
                                                            id="weightOfScrap3"
                                                            value={weightOfScrap3}
                                                            onChange={handleWeightOfScrap3Change}
                                                            placeholder="Weight of Scrap"
                                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        /><> Kg.</>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="perkgrateScrap3" className="block text-gray-700 text-sm font-bold mb-2">Per Kg. Rate:</label>
                                                        <input
                                                            type="number"
                                                            id="perkgrateScrap3"
                                                            value={perkgrateScrap3}
                                                            onChange={handleperkgrateScrap3Change}
                                                            placeholder="Per kg. Rate"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="productValue3" className="block text-gray-700 text-sm font-bold mb-2">Total Price:</label>
                                                        <input
                                                            type="text"
                                                            id="productValue3"
                                                            value={productValue3}
                                                            readOnly
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="totalWeight3" className="block text-gray-700 text-sm font-bold mb-2">Total Weight:</label>
                                                        <input
                                                            type="text"
                                                            id="totalWeight3"
                                                            value={totalWeight3}
                                                            readOnly
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                        />
                                                    </div>
                                                </>
                                            )}
                                            {category3 === 'Wheat' && category3 !== 'scrap' && (
                                                <>


                                                    <div className="mb-4">
                                                        <label htmlFor="weightOfScrap3" className="block text-gray-700 text-sm font-bold mb-2">Weight of Wheat :</label>
                                                        <input
                                                            type="number"
                                                            id="weightOfScrap3"
                                                            value={weightOfScrap3}
                                                            onChange={handleWeightOfScrap3Change}
                                                            placeholder="Weight of Wheat"
                                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        /><> Kg.</>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="perkgrateScrap3" className="block text-gray-700 text-sm font-bold mb-2">Per Kg. Rate:</label>
                                                        <input
                                                            type="number"
                                                            id="perkgrateScrap3"
                                                            value={perkgrateScrap3}
                                                            onChange={handleperkgrateScrap3Change}
                                                            placeholder="Per kg. Rate"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="productValue3" className="block text-gray-700 text-sm font-bold mb-2">Total Price:</label>
                                                        <input
                                                            type="text"
                                                            id="productValue3"
                                                            value={productValue3}
                                                            readOnly
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="totalWeight3" className="block text-gray-700 text-sm font-bold mb-2">Total Weight:</label>
                                                        <input
                                                            type="text"
                                                            id="totalWeight3"
                                                            value={totalWeight3}
                                                            readOnly
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                        />
                                                    </div>
                                                </>
                                            )}




                                            {category3 !== "Refraction" && category3 !== "scrap" && category3 !== "Wheat" && !isMaida_BulkerSelected3 && (
                                                <>
                                                    <div className="mb-4">
                                                        <label htmlFor="subsubcategories3" className="block text-gray-700 text-sm font-bold mb-2">Weight3 of Bag:</label>
                                                        <select
                                                            id="subsubcategories3"
                                                            value={subsubcategories3}
                                                            onChange={handleSubsubcategories3Change}
                                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        >
                                                            <option value="">Weight3 of Bag</option>
                                                            {availableSubsubcategories3.map((subsubcat) => (
                                                                <option key={subsubcat} value={subsubcat}>
                                                                    {subsubcat}
                                                                </option>
                                                            ))}
                                                        </select><> kg</>
                                                    </div>

                                                    {subsubcategories3 === 'Others' && (
                                                        <div className="mb-4">
                                                            <label htmlFor="otherSubsubcategories3" className="block text-gray-700 text-sm font-bold mb-2">Weight3 of Bag:</label>
                                                            <input
                                                                type="number"
                                                                id="otherSubsubcategories3"
                                                                value={otherSubsubcategories3}
                                                                onChange={handleOtherSubsubcategories3Change}
                                                                placeholder="Enter weight3"
                                                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                            /><> KG</>
                                                        </div>
                                                    )}

                                                    <div className="mb-4">
                                                        <label htmlFor="numberOfBags3" className="block text-gray-700 text-sm font-bold mb-2">Number of Bags:</label>
                                                        <input
                                                            type="number"
                                                            id="numberOfBags3"
                                                            value={numberOfBags3}
                                                            onChange={handleNumberOfBags3Change}
                                                            placeholder="Number of Bags"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <label htmlFor="perbagprice3" className="block text-gray-700 text-sm font-bold mb-2">Rate per bag:</label>
                                                        <input
                                                            type="number"
                                                            id="perbagprice3"
                                                            value={perbagprice3}
                                                            onChange={handlePerbagprice3Change}
                                                            placeholder="Rate per bag"
                                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        /><> Rs./Bag</>
                                                    </div>

                                                    <div className="mb-4">
                                                        <label htmlFor="loadingCharger3" className="block text-gray-700 text-sm font-bold mb-2">Loading Charger:</label>
                                                        <input
                                                            type="number"
                                                            id="loadingCharger3"
                                                            value={loadingCharger3}
                                                            onChange={handleLoadingCharger3Change}
                                                            placeholder="Loading Charger"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="cgst3" className="block text-gray-700 text-sm font-bold mb-2">CGST3:</label>
                                                        <select
                                                            id="cgst3"
                                                            value={cgst3}
                                                            onChange={handleCgst3Change}
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        >
                                                            <option value="0">Total CGST3</option>
                                                            <option value="2.5">2.5%</option>
                                                            <option value="5">5%</option>
                                                            <option value="6">6%</option>
                                                            <option value="9">9%</option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="sgst3" className="block text-gray-700 text-sm font-bold mb-2">SGST3:</label>
                                                        <select
                                                            id="sgst3"
                                                            value={sgst3}
                                                            onChange={handleSgst3Change}
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        >
                                                            <option value="0">Total CGST3</option>
                                                            <option value="2.5">2.5%</option>
                                                            <option value="6">6%</option>
                                                            <option value="9">9%</option>
                                                        </select>
                                                    </div>

                                                    <div className="mb-4">
                                                        <label htmlFor="totalValue3" className="block text-gray-700 text-sm font-bold mb-2">Total Value:</label>
                                                        <> Rs.</><input
                                                            type="text"
                                                            id="totalValue3"
                                                            value={totalValue3}
                                                            readOnly
                                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <label htmlFor="perKgRate3" className="block text-gray-700 text-sm font-bold mb-2">Per KG Rate:</label>
                                                        <input
                                                            type="text"
                                                            id="perKgRate3"
                                                            value={perKgRate3}
                                                            readOnly
                                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                        /><> Rs./kg</>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="totalWeight3" className="block text-gray-700 text-sm font-bold mb-2">Total Weight3:</label>
                                                        <input
                                                            type="text"
                                                            id="totalWeight3"
                                                            value={totalWeight3}
                                                            readOnly
                                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                        /><> {selectedUnit3}</>
                                                    </div>
                                                </>
                                            )}

                                            {subcategories3 && isMaida_BulkerSelected3 && (
                                                <>
                                                    <div className="mb-4">
                                                        <label htmlFor="weight3OfTruck3" className="block text-gray-700 text-sm font-bold mb-2">Weight3 of Truck:</label>
                                                        <input
                                                            type="number"
                                                            id="weight3OfTruck3"
                                                            value={weight3OfTruck3}
                                                            onChange={handleWeight3OfTruck3Change}
                                                            placeholder="Weight3 of Truck"
                                                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        /><> Qtl.</>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="perqtlrate3" className="block text-gray-700 text-sm font-bold mb-2">Per Qtl. Rate:</label>
                                                        <input
                                                            type="number"
                                                            id="perqtlrate3"
                                                            value={perqtlrate3}
                                                            onChange={handleperqtlrate3Change}
                                                            placeholder="Per qtl. Rate"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="productValue3" className="block text-gray-700 text-sm font-bold mb-2">Total Price:</label>
                                                        <input
                                                            type="text"
                                                            id="productValue3"
                                                            value={productValue3}
                                                            readOnly
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="totalWeight3" className="block text-gray-700 text-sm font-bold mb-2">Total Weight3:</label>
                                                        <input
                                                            type="text"
                                                            id="totalWeight3"
                                                            value={totalWeight3}
                                                            readOnly
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </>
                                        )}

                                    </>)}
                            </>
                        )}

                    </>)}
                <div className="mb-4">
                    <label htmlFor="loadingDoneBy" className="block text-gray-700 text-sm font-bold mb-2">Loading Done By:</label>
                    <input
                        type="text"
                        id="loadingDoneBy"
                        value={loadingDoneBy}
                        onChange={handleloadingDoneBy}
                        placeholder="Loading Done by"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="remarks" className="block text-gray-700 text-sm font-bold mb-2">Any Remarks :</label>
                    <input
                        type="text"
                        id="remarks"
                        value={remarks}
                        onChange={handleremarks}
                        placeholder="Enter Remarks Here"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>


                <div className="mb-4">
                    <label htmlFor="TotalGatepassAmount" className="block text-gray-700 text-sm font-bold mb-2">Total Gatepass Amount:</label>
                    <input
                        type="text"
                        id="TotalGatepassAmount"
                        value={TotalGatepassAmount}
                        readOnly
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="TotalGatepassWeight" className="block text-gray-700 text-sm font-bold mb-2">Total Gatepass Weight:</label>
                    <input
                        type="text"
                        id="TotalGatepassWeight"
                        value={TotalGatepassWeight}
                        readOnly
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="TotalGatepassTruckWeight" className="block text-gray-700 text-sm font-bold mb-2">Total Truck Weight:</label>
                    <input
                        type="text"
                        id="TotalGatepassTruckWeight"
                        value={TotalGatepassTruckWeight}
                        readOnly
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                    />
                </div>

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

export default Awl;
