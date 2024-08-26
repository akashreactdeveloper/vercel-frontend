import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { CgClose } from "react-icons/cg";
import { LuIndianRupee } from "react-icons/lu";

const AminEditGatepass = ({ onClose, gatepassData }) => {
  const [type, settype] = useState("");
  const [partyName, setPartyName] = useState("");
  const [batchnumber, setBatchNumber] = useState("");
  const [trucknumber, settrucknumber] = useState("");
  const [totalWeight, setTotalWeight] = useState("");
  const [totalamount, settotalamount] = useState("");
  const [category, setCategory] = useState("");
  const [subcategories, setSubcategories] = useState("");
  const [subsubcategories, setSubsubcategories] = useState("");
  const [isMaida_BulkerSelected, setIsMaida_BulkerSelected] = useState(false);
  const [otherSubsubcategories, setOtherSubsubcategories] = useState("");
  const [numberOfBags, setNumberOfBags] = useState("");
  const [perbagprice, setPerbagprice] = useState("");
  const [productValue, setProductValue] = useState("");
  const [perKgRate, setPerKgRate] = useState("");
  const [weightOfTruck, setWeightOfTruck] = useState("");
  const [loadingCharger, setLoadingCharger] = useState("0");
  const [cgst, setCgst] = useState("0");
  const [sgst, setSgst] = useState("0");
  const [totalValue, setTotalValue] = useState("");
  const [weight, setweight] = useState("");
  const [perqtlrate, setperqtlrate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [totalWeight11, setTotalWeight11] = useState("");
  const [totalamount1, settotalamount1] = useState("");
  const [category1, setCategory1] = useState("");
  const [subcategories1, setSubcategories1] = useState("");
  const [subsubcategories1, setSubsubcategories1] = useState("");
  const [isMaida_BulkerSelected1, setIsMaida_BulkerSelected1] = useState(false);
  const [otherSubsubcategories1, setOtherSubsubcategories1] = useState("");
  const [numberOfBags1, setNumberOfBags1] = useState("");
  const [perbagprice1, setPerbagprice1] = useState("");
  const [productValue1, setProductValue1] = useState("");
  const [perKgRate1, setPerKgRate1] = useState("");
  const [weight1OfTruck1, setWeight1OfTruck1] = useState("");
  const [loadingCharger1, setLoadingCharger1] = useState("0");
  const [cgst1, setCgst1] = useState("0");
  const [sgst1, setSgst1] = useState("0");
  const [totalValue1, setTotalValue1] = useState("");
  const [weight1, setweight1] = useState("");
  const [perqtlrate1, setperqtlrate1] = useState("");
  const [selectedCategory1, setSelectedCategory1] = useState("");
  const [selectedSubcategory1, setSelectedSubcategory1] = useState("");
  const [showAdditionalColumns, setShowAdditionalColumns] = useState(false);
  const [showOneMoreAdditionalColumns, setShowOneMoreAdditionalColumns] =
    useState(false);
  const [showTwoMoreAdditionalColumns, setshowTwoMoreAdditionalColumns] =
    useState(false);
  const [TotalGatepassAmount, setTotalGatepassAmount] = useState("");
  const [TotalGatepassWeight, setTotalGatepassWeight] = useState("");
  const [totalWeight2, setTotalWeight2] = useState("");
  const [totalamount2, settotalamount2] = useState("");
  const [category2, setCategory2] = useState("");
  const [subcategories2, setSubcategories2] = useState("");
  const [subsubcategories2, setSubsubcategories2] = useState("");
  const [isMaida_BulkerSelected2, setIsMaida_BulkerSelected2] = useState(false);
  const [otherSubsubcategories2, setOtherSubsubcategories2] = useState("");
  const [numberOfBags2, setNumberOfBags2] = useState("");
  const [perbagprice2, setPerbagprice2] = useState("");
  const [productValue2, setProductValue2] = useState("");
  const [perKgRate2, setPerKgRate2] = useState("");
  const [weight2OfTruck2, setWeight2OfTruck2] = useState("");
  const [loadingCharger2, setLoadingCharger2] = useState("0");
  const [cgst2, setCgst2] = useState("0");
  const [sgst2, setSgst2] = useState("0");
  const [totalValue2, setTotalValue2] = useState("");
  const [weight2, setweight2] = useState("");
  const [perqtlrate2, setperqtlrate2] = useState("");
  const [selectedCategory2, setSelectedCategory2] = useState("");
  const [selectedSubcategory2, setSelectedSubcategory2] = useState("");
  const [totalWeight3, setTotalWeight3] = useState("");
  const [totalamount3, settotalamount3] = useState("");
  const [category3, setCategory3] = useState("");
  const [subcategories3, setSubcategories3] = useState("");
  const [subsubcategories3, setSubsubcategories3] = useState("");
  const [isMaida_BulkerSelected3, setIsMaida_BulkerSelected3] = useState(false);
  const [otherSubsubcategories3, setOtherSubsubcategories3] = useState("");
  const [numberOfBags3, setNumberOfBags3] = useState("");
  const [perbagprice3, setPerbagprice3] = useState("");
  const [productValue3, setProductValue3] = useState("");
  const [perKgRate3, setPerKgRate3] = useState("");
  const [weight3OfTruck3, setWeight3OfTruck3] = useState("");
  const [loadingCharger3, setLoadingCharger3] = useState("0");
  const [cgst3, setCgst3] = useState("0");
  const [sgst3, setSgst3] = useState("0");
  const [totalValue3, setTotalValue3] = useState("");
  const [weight3, setweight3] = useState("");
  const [perqtlrate3, setperqtlrate3] = useState("");
  const [selectedCategory3, setSelectedCategory3] = useState("");
  const [selectedSubcategory3, setSelectedSubcategory3] = useState("");
  const [UpdateGatepass, setUpdateGatepass] = useState(gatepassData);
  const [TotalTruckWeight, setTotalTruckWeight] = useState("");
  const [TotalTruckWeight1, setTotalTruckWeight1] = useState("");
  const [TotalTruckWeight2, setTotalTruckWeight2] = useState("");
  const [TotalTruckWeight3, setTotalTruckWeight3] = useState("");
  const [TotalGatepassTruckWeight, setTotalGatepassTruckWeight] = useState('');
  const [typeofsale, settypeofsale] = useState("");
  const [loadingDoneBy, setloadingDoneBy] = useState("");
  const [verified, setverified] = useState("No");
  const [kandaWeight, setkandaWeight] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (gatepassData) {
      setPerKgRate(gatepassData.perKgRate || "");
      settype(gatepassData.type || "");
      setPartyName(gatepassData.partyName || "");
      setBatchNumber(gatepassData.batchnumber || "");
      settrucknumber(gatepassData.trucknumber || "");
      setTotalWeight(gatepassData.totalWeight || "");
      settotalamount(gatepassData.totalamount || "");
      setCategory(gatepassData.category || "");
      setSubcategories(gatepassData.subcategories || "");
      setSubsubcategories(gatepassData.subsubcategories || "");
      setIsMaida_BulkerSelected(gatepassData.isMaida_BulkerSelected || "false");
      setOtherSubsubcategories(gatepassData.otherSubsubcategories || "");
      setNumberOfBags(gatepassData.numberOfBags || "");
      setPerbagprice(gatepassData.perbagprice || "");
      setProductValue(gatepassData.productValue || "");
      setPerKgRate(gatepassData.perKgRate || "");
      setWeightOfTruck(gatepassData.weightOfTruck || "");
      setLoadingCharger(gatepassData.loadingCharger || "0");
      setCgst(gatepassData.cgst || "0");
      setSgst(gatepassData.sgst || "0");
      setTotalValue(gatepassData.totalValue || "");
      setweight(gatepassData.weight || "");
      setperqtlrate(gatepassData.perqtlrate || "");
      setSelectedCategory(gatepassData.selectedCategory || "");
      setSelectedSubcategory(gatepassData.selectedSubcategory || "");
      setTotalWeight11(gatepassData.totalWeight11 || "");
      settotalamount1(gatepassData.totalamount1 || "");
      setCategory1(gatepassData.category1 || "");
      setSubcategories1(gatepassData.subcategories1 || "");
      setSubsubcategories1(gatepassData.subsubcategories1 || "");
      setIsMaida_BulkerSelected1(
        gatepassData.isMaida_BulkerSelected1 || "false"
      );
      setOtherSubsubcategories1(gatepassData.otherSubsubcategories1 || "");
      setNumberOfBags1(gatepassData.numberOfBags1 || "");
      setPerbagprice1(gatepassData.perbagprice1 || "");
      setProductValue1(gatepassData.productValue1 || "");
      setPerKgRate1(gatepassData.perKgRate1 || "");
      setWeight1OfTruck1(gatepassData.weight1OfTruck1 || "");
      setLoadingCharger1(gatepassData.loadingCharger1 || "0");
      setCgst1(gatepassData.cgst1 || "0");
      setSgst1(gatepassData.sgst1 || "0");
      setTotalValue1(gatepassData.totalValue1 || "");
      setweight1(gatepassData.weight1 || "");
      setperqtlrate1(gatepassData.perqtlrate1 || "");
      setSelectedCategory1(gatepassData.selectedCategory1 || "");
      setSelectedSubcategory1(gatepassData.selectedSubcategory1 || "");
      setShowAdditionalColumns(gatepassData.showAdditionalColumns || "false");
      setShowOneMoreAdditionalColumns(
        gatepassData.showOneMoreAdditionalColumns || "false"
      );
      setshowTwoMoreAdditionalColumns(
        gatepassData.showTwoMoreAdditionalColumns || "false"
      );
      setTotalGatepassAmount(gatepassData.TotalGatepassAmount || "");
      setTotalGatepassWeight(gatepassData.TotalGatepassWeight || "");
      setTotalWeight2(gatepassData.totalWeight2 || "");
      settotalamount2(gatepassData.totalamount2 || "");
      setCategory2(gatepassData.category2 || "");
      setSubcategories2(gatepassData.subcategories2 || "");
      setSubsubcategories2(gatepassData.subsubcategories2 || "");
      setIsMaida_BulkerSelected2(
        gatepassData.isMaida_BulkerSelected2 || "false"
      );
      setOtherSubsubcategories2(gatepassData.otherSubsubcategories2 || "");
      setNumberOfBags2(gatepassData.numberOfBags2 || "");
      setPerbagprice2(gatepassData.perbagprice2 || "");
      setProductValue2(gatepassData.productValue2 || "");
      setPerKgRate2(gatepassData.perKgRate2 || "");
      setWeight2OfTruck2(gatepassData.weight2OfTruck2 || "");
      setLoadingCharger2(gatepassData.loadingCharger2 || "0");
      setCgst2(gatepassData.cgst2 || "0");
      setSgst2(gatepassData.sgst2 || "0");
      setTotalValue2(gatepassData.totalValue2 || "");
      setweight2(gatepassData.weight2 || "");
      setperqtlrate2(gatepassData.perqtlrate2 || "");
      setSelectedCategory2(gatepassData.selectedCategory2 || "");
      setSelectedSubcategory2(gatepassData.selectedSubcategory2 || "");
      setTotalWeight3(gatepassData.totalWeight3 || "");
      settotalamount3(gatepassData.totalamount3 || "");
      setCategory3(gatepassData.category3 || "");
      setSubcategories3(gatepassData.subcategories3 || "");
      setSubsubcategories3(gatepassData.subsubcategories3 || "");
      setIsMaida_BulkerSelected3(
        gatepassData.isMaida_BulkerSelected3 || "false"
      );
      setOtherSubsubcategories3(gatepassData.otherSubsubcategories3 || "");
      setNumberOfBags3(gatepassData.numberOfBags3 || "");
      setPerbagprice3(gatepassData.perbagprice3 || "");
      setProductValue3(gatepassData.productValue3 || "");
      setPerKgRate3(gatepassData.perKgRate3 || "");
      setWeight3OfTruck3(gatepassData.weight3OfTruck3 || "");
      setLoadingCharger3(gatepassData.loadingCharger3 || "0");
      setCgst3(gatepassData.cgst3 || "0");
      setSgst3(gatepassData.sgst3 || "0");
      setTotalValue3(gatepassData.totalValue3 || "");
      setweight3(gatepassData.weight3 || "");
      setperqtlrate3(gatepassData.perqtlrate3 || "");
      setSelectedCategory3(gatepassData.selectedCategory3 || "");
      setSelectedSubcategory3(gatepassData.selectedSubcategory3 || "");
      setTotalTruckWeight(gatepassData.TotalTruckWeight || "")
      setTotalTruckWeight1(gatepassData.TotalTruckWeight1 || "")
      setTotalTruckWeight2(gatepassData.TotalTruckWeight2 || "")
      setTotalTruckWeight3(gatepassData.TotalTruckWeight3 || "")
      settypeofsale(gatepassData.typeofsale || "")
      setloadingDoneBy(gatepassData.loadingDoneBy || "")
      setverified(gatepassData.verified || "")
      setkandaWeight(gatepassData.kandaWeight || "")
      setTotalGatepassTruckWeight(gatepassData.TotalGatepassTruckWeight || "")
    }
  }, [gatepassData]);

  const updateGatepass = () => {
    fetch(SummaryApi.UpdateGatepass.url, {
      method: SummaryApi.UpdateGatepass.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateGatepass),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
        } else {
          alert("Error updating gatepass: " + data.message);
        }
      })
      .catch((error) => {
        alert("Error updating gatepass.");
      });
  };

  const awlCategories = {
    Maida: {
      unit: "KG",
      subcategories: {
        10: [],
      },
    },
    "Atta Chakki": {
      unit: "KG",
      subcategories: {
        5: ["Normal MRP", "High MRP"],
        10: ["Normal MRP", "High MRP"],
        30: ["Normal MRP", "High MRP"],
        50: [],
      },
    },
    Suji: {
      unit: "KG",
      subcategories: {
        10: [],
      },
    },
    "Atta Scheme": {
      unit: "KG",
      subcategories: {
        10: [],
      },
    },
  };

  const crfmCategories = {
    Maida: {
      unit: "KG",
      subcategories: {
        Maida_Regular: ["10", "20", "25", "30", "40", "45", "50", "Others"],
        Maida_Bulker: ["others"],
      },
    },
    "Chakki aata and bajra jo maize": {
      unit: "KG",
      subcategories: {
        Regular: ["5", "10", "26", "30", "40", "50 ", "Others"],
        Jute: ["10", "5"],
        LD: ["10", "5"],
      },
    },
    "MILL ATTA": {
      unit: "KG",
      subcategories: {
        Regular: ["10", "30", "40", "50", "Others"],
      },
    },
    Bran: {
      unit: "KG",
      subcategories: {
        Coarse: [
          "20",
          "25",
          "28 ",
          "30",
          "35",
          "43",
          "44",
          "48",
          "49",
          "50",
          "Others",
        ],
        Fine: [
          "20",
          "25",
          "28 ",
          "30",
          "35",
          "43",
          "44",
          "48",
          "49",
          "50",
          "Others",
        ],
      },
    },
    "Rawa Suji": {
      unit: "KG",
      subcategories: {
        Regular: ["25", "50", "Others"],
      },
    },
    Refraction: {
      unit: "Qtl.",
      subcategories: {
        Murgidana: ["Others"],
        Kala_Beej: ["Others"],
        Danthal: ["Others"],
        Mitti: ["Others"],
        Others: ["Others"],
      },
    },
    Bardana: {
      unit: "Bags",
      subcategories: {
        C_Quality: ["Others"],
        F_Quality: ["Others"],
        M_Quality: ["Others"],
        X_Quality: ["Others"],
        Plastic_Best_Quality: ["Others"],
        Plastic_Medium_Quality: ["Others"],
        Plastic_Low_Quality: ["Others"],
        Others: ["Others"],
      },
    },
  };

  const awlCategories1 = {
    Maida: {
      unit: "KG",
      subcategories1: {
        10: [],
      },
    },
    "Atta Chakki": {
      unit: "KG",
      subcategories1: {
        5: ["Normal MRP", "High MRP"],
        10: ["Normal MRP", "High MRP"],
        30: ["Normal MRP", "High MRP"],
        50: [],
      },
    },
    Suji: {
      unit: "KG",
      subcategories1: {
        10: [],
      },
    },
    "Atta Scheme": {
      unit: "KG",
      subcategories1: {
        10: [],
      },
    },
  };

  const crfmCategories1 = {
    Maida: {
      unit: "KG",
      subcategories1: {
        Maida_Regular: ["10", "20", "25", "30", "40", "45", "50", "Others"],
        Maida_Bulker: ["others"],
      },
    },
    "Chakki aata and bajra jo maize": {
      unit: "KG",
      subcategories1: {
        Regular: ["5", "10", "26", "30", "40", "50 ", "Others"],
        Jute: ["10", "5"],
        LD: ["10", "5"],
      },
    },
    "MILL ATTA": {
      unit: "KG",
      subcategories1: {
        Regular: ["10", "30", "40", "50", "Others"],
      },
    },
    Bran: {
      unit: "KG",
      subcategories1: {
        Coarse: [
          "20",
          "25",
          "28 ",
          "30",
          "35",
          "43",
          "44",
          "48",
          "49",
          "50",
          "Others",
        ],
        Fine: [
          "20",
          "25",
          "28 ",
          "30",
          "35",
          "43",
          "44",
          "48",
          "49",
          "50",
          "Others",
        ],
      },
    },
    "Rawa Suji": {
      unit: "KG",
      subcategories1: {
        Regular: ["25", "50", "Others"],
      },
    },
    Refraction: {
      unit: "Qtl.",
      subcategories1: {
        Murgidana: ["Others"],
        Kala_Beej: ["Others"],
        Danthal: ["Others"],
        Mitti: ["Others"],
        Others: ["Others"],
      },
    },
    Bardana: {
      unit: "Bags",
      subcategories1: {
        C_Quality: ["Others"],
        F_Quality: ["Others"],
        M_Quality: ["Others"],
        X_Quality: ["Others"],
        Plastic_Best_Quality: ["Others"],
        Plastic_Medium_Quality: ["Others"],
        Plastic_Low_Quality: ["Others"],
        Others: ["Others"],
      },
    },
  };

  const awlCategories2 = {
    Maida: {
      unit: "KG",
      subcategories2: {
        10: [],
      },
    },
    "Atta Chakki": {
      unit: "KG",
      subcategories2: {
        5: ["Normal MRP", "High MRP"],
        10: ["Normal MRP", "High MRP"],
        30: ["Normal MRP", "High MRP"],
        50: [],
      },
    },
    Suji: {
      unit: "KG",
      subcategories2: {
        10: [],
      },
    },
    "Atta Scheme": {
      unit: "KG",
      subcategories2: {
        10: [],
      },
    },
  };

  const crfmCategories2 = {
    Maida: {
      unit: "KG",
      subcategories2: {
        Maida_Regular: ["10", "20", "25", "30", "40", "45", "50", "Others"],
        Maida_Bulker: ["others"],
      },
    },
    "Chakki aata and bajra jo maize": {
      unit: "KG",
      subcategories2: {
        Regular: ["5", "10", "26", "30", "40", "50 ", "Others"],
        Jute: ["10", "5"],
        LD: ["10", "5"],
      },
    },
    "MILL ATTA": {
      unit: "KG",
      subcategories2: {
        Regular: ["10", "30", "40", "50", "Others"],
      },
    },
    Bran: {
      unit: "KG",
      subcategories2: {
        Coarse: [
          "20",
          "25",
          "28 ",
          "30",
          "35",
          "43",
          "44",
          "48",
          "49",
          "50",
          "Others",
        ],
        Fine: [
          "20",
          "25",
          "28 ",
          "30",
          "35",
          "43",
          "44",
          "48",
          "49",
          "50",
          "Others",
        ],
      },
    },
    "Rawa Suji": {
      unit: "KG",
      subcategories2: {
        Regular: ["25", "50", "Others"],
      },
    },
    Refraction: {
      unit: "Qtl.",
      subcategories2: {
        Murgidana: ["Others"],
        Kala_Beej: ["Others"],
        Danthal: ["Others"],
        Mitti: ["Others"],
        Others: ["Others"],
      },
    },
    Bardana: {
      unit: "Bags",
      subcategories2: {
        C_Quality: ["Others"],
        F_Quality: ["Others"],
        M_Quality: ["Others"],
        X_Quality: ["Others"],
        Plastic_Best_Quality: ["Others"],
        Plastic_Medium_Quality: ["Others"],
        Plastic_Low_Quality: ["Others"],
        Others: ["Others"],
      },
    },
  };

  const awlCategories3 = {
    Maida: {
      unit: "KG",
      subcategories3: {
        10: [],
      },
    },
    "Atta Chakki": {
      unit: "KG",
      subcategories3: {
        5: ["Normal MRP", "High MRP"],
        10: ["Normal MRP", "High MRP"],
        30: ["Normal MRP", "High MRP"],
        50: [],
      },
    },
    Suji: {
      unit: "KG",
      subcategories3: {
        10: [],
      },
    },
    "Atta Scheme": {
      unit: "KG",
      subcategories3: {
        10: [],
      },
    },
  };

  const crfmCategories3 = {
    Maida: {
      unit: "KG",
      subcategories3: {
        Maida_Regular: ["10", "20", "25", "30", "40", "45", "50", "Others"],
        Maida_Bulker: ["others"],
      },
    },
    "Chakki aata and bajra jo maize": {
      unit: "KG",
      subcategories3: {
        Regular: ["5", "10", "26", "30", "40", "50 ", "Others"],
        Jute: ["10", "5"],
        LD: ["10", "5"],
      },
    },
    "MILL ATTA": {
      unit: "KG",
      subcategories3: {
        Regular: ["10", "30", "40", "50", "Others"],
      },
    },
    Bran: {
      unit: "KG",
      subcategories3: {
        Coarse: [
          "20",
          "25",
          "28 ",
          "30",
          "35",
          "43",
          "44",
          "48",
          "49",
          "50",
          "Others",
        ],
        Fine: [
          "20",
          "25",
          "28 ",
          "30",
          "35",
          "43",
          "44",
          "48",
          "49",
          "50",
          "Others",
        ],
      },
    },
    "Rawa Suji": {
      unit: "KG",
      subcategories3: {
        Regular: ["25", "50", "Others"],
      },
    },
    Refraction: {
      unit: "Qtl.",
      subcategories3: {
        Murgidana: ["Others"],
        Kala_Beej: ["Others"],
        Danthal: ["Others"],
        Mitti: ["Others"],
        Others: ["Others"],
      },
    },
    Bardana: {
      unit: "Bags",
      subcategories3: {
        C_Quality: ["Others"],
        F_Quality: ["Others"],
        M_Quality: ["Others"],
        X_Quality: ["Others"],
        Plastic_Best_Quality: ["Others"],
        Plastic_Medium_Quality: ["Others"],
        Plastic_Low_Quality: ["Others"],
        Others: ["Others"],
      },
    },
  };

  const categories = type === "CRFM" ? crfmCategories : awlCategories;
  const categories1 = type === "CRFM" ? crfmCategories1 : awlCategories1;
  const categories2 = type === "CRFM" ? crfmCategories2 : awlCategories2;
  const categories3 = type === "CRFM" ? crfmCategories3 : awlCategories3;

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    settype(newType);
    setSelectedCategory("");
    setSelectedSubcategory("");
    setUpdateGatepass((prevState) => ({
      ...prevState,
      type: newType,
      selectedCategory: "",
      selectedSubcategory: "",
    }));
  };

  const handlePartyNameChange = (e) => {
    const newPartyName = e.target.value;
    setPartyName(newPartyName);
    setUpdateGatepass((prevState) => ({
      ...prevState,
      partyName: newPartyName,
    }));
  };

  const handleBatchNumberChange = (e) => {
    const newBatchNumber = e.target.value;
    setBatchNumber(newBatchNumber);
    setUpdateGatepass((prevState) => ({
      ...prevState,
      batchnumber: newBatchNumber,
    }));
  };

  const handletrucknumberChange = (e) => {
    const newTruckNumber = e.target.value;
    settrucknumber(newTruckNumber);
    setUpdateGatepass((prevState) => ({
      ...prevState,
      trucknumber: newTruckNumber,
    }));
  };

  const handleNumberOfBagsChange = (e) => {
    const newNumberOfBags = e.target.value;
    setNumberOfBags(newNumberOfBags);
    calculateProductValue(newNumberOfBags, perbagprice);
    calculateTotalWeight(newNumberOfBags, subsubcategories);
    setUpdateGatepass((prevState) => ({
      ...prevState,
      numberOfBags: newNumberOfBags,
    }));
  };

  const handleWeightOfTruckChange = (e) => {
    const newWeight = e.target.value;
    setWeightOfTruck(newWeight);
    calculateTotalPrice(newWeight, perKgRate);
    if (isMaida_BulkerSelected) {
      setTotalWeight(newWeight);
    }
    setUpdateGatepass((prevState) => ({
      ...prevState,
      weightOfTruck: newWeight,
      totalWeight: isMaida_BulkerSelected ? newWeight : prevState.totalWeight,
    }));
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setSubcategories("");
    setSubsubcategories("");
    setOtherSubsubcategories("");
    setPerbagprice("");
    setProductValue("");
    setPerKgRate("");
    setUpdateGatepass((prevState) => ({
      ...prevState,
      category: newCategory,
      subcategories: "",
      subsubcategories: "",
      otherSubsubcategories: "",
      perbagprice: "",
      productValue: "",
      perKgRate: "",
    }));
  };

  const handleSubcategoriesChange = (e) => {
    const newSubcategories = e.target.value;
    setSubcategories(newSubcategories);
    setSubsubcategories("");
    setOtherSubsubcategories("");
    setProductValue("");
    setWeightOfTruck("");
    setPerKgRate("");
    setIsMaida_BulkerSelected(newSubcategories === "Maida_Bulker");

    if (type === "AWL") {
      calculateTotalWeight(numberOfBags, newSubcategories);
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      subcategories: newSubcategories,
      subsubcategories: "", // Ensure subsubcategories is reset as needed
      otherSubsubcategories: "", // Ensure otherSubsubcategories is reset as needed
    }));
  };

  const handleSubsubcategoriesChange = (e) => {
    const newSubsubcategories = e.target.value;
    setSubsubcategories(newSubsubcategories);
    setOtherSubsubcategories("");
    calculateProductValue(numberOfBags, perbagprice);

    if (type === "CRFM") {
      calculateTotalWeight(
        numberOfBags,
        subcategories,
        newSubsubcategories,
        otherSubsubcategories
      );
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      subsubcategories: newSubsubcategories,
      otherSubsubcategories: "", // Ensure otherSubsubcategories is reset as needed
    }));
  };

  const handleOtherSubsubcategoriesChange = (e) => {
    const newOtherSubsubcategories = e.target.value;
    setOtherSubsubcategories(newOtherSubsubcategories);
    calculateProductValue(numberOfBags, perbagprice);

    if (type === "CRFM") {
      calculateTotalWeight(
        subcategories,
        numberOfBags,
        newOtherSubsubcategories
      );
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      otherSubsubcategories: newOtherSubsubcategories,
    }));
  };

  const handlePerbagpriceChange = (e) => {
    const newPrice = e.target.value;
    setPerbagprice(newPrice);
    calculateProductValue(numberOfBags, newPrice);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      perbagprice: newPrice,
    }));
  };

  const handleLoadingChargerChange = (e) => {
    const charger = e.target.value;
    setLoadingCharger(charger);
    calculateTotalValue(productValue, charger, cgst, sgst);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      loadingCharger: charger,
    }));
  };

  const handleCgstChange = (e) => {
    const selectedCgst = e.target.value;
    setCgst(selectedCgst);
    calculateTotalValue(productValue, loadingCharger, selectedCgst, sgst);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      cgst: selectedCgst,
    }));
  };
  const handleSgstChange = (e) => {
    const selectedSgst = e.target.value;
    setSgst(selectedSgst);
    calculateTotalValue(productValue, loadingCharger, cgst, selectedSgst);
    setUpdateGatepass((prevState) => ({
      ...prevState,
      cgst: selectedSgst,
    }));
  };
  const handleweightChange = (e) => {
    const newWeight = e.target.value;
    setweight(newWeight);
    setUpdateGatepass((prevState) => ({
      ...prevState,
      weight: newWeight,
    }));
  };
  const handleperqtlrateChange = (e) => {
    const newPerQtlRate = e.target.value;
    setperqtlrate(newPerQtlRate);
    calculateTotalPrice(weightOfTruck, perqtlrate);
    setUpdateGatepass((prevState) => ({
      ...prevState,
      perqtlrate: newPerQtlRate,
    }));
  };
  const calculateTotalPrice = (weightOfTruck, perKgRate) => {
    if (weightOfTruck && perKgRate) {
      const totalPrice = parseFloat(weightOfTruck) * parseFloat(perqtlrate);
      const newproductValue = totalPrice.toFixed(2);
      setUpdateGatepass((prevState) => ({
        ...prevState,
        productValue: newproductValue,
      }));
    } else {
      const newproductValue = "";
      setUpdateGatepass((prevState) => ({
        ...prevState,
        productValue: newproductValue,
      }));
    }
  };
  const calculateProductValue = (numberOfBags, perbagprice) => {
    if (numberOfBags && perbagprice) {
      const product = parseFloat(numberOfBags) * parseFloat(perbagprice);
      const newproductValue = product.toFixed(2);
      setUpdateGatepass((prevState) => ({
        ...prevState,
        productValue: newproductValue,
      }));
    } else {
      const newproductValue = "";
      setUpdateGatepass((prevState) => ({
        ...prevState,
        productValue: newproductValue,
      }));
      setPerKgRate("");
    }
  };
  useEffect(() => {
    calculateTotalValue(productValue, loadingCharger, cgst, sgst);
  }, [productValue, loadingCharger, cgst, sgst]);
  const calculatetotalamount = (weight, perqtlrate) => {
    if (weight && perqtlrate) {
      const amount = parseFloat(weight) * parseFloat(perqtlrate);
      setUpdateGatepass((prevState) => ({
        ...prevState,
        totalamount: amount,
      }));
    }
  };
  useEffect(() => {
    calculatetotalamount(weight, perqtlrate);
  }, [weight, perqtlrate]);
  const calculateTotalValue = (productValue, loadingCharger, cgst, sgst) => {
    if (productValue && loadingCharger && cgst && sgst) {
      const totalValue = parseFloat(productValue) + parseFloat(loadingCharger);
      const cgstAmount = (parseFloat(totalValue) * parseFloat(cgst)) / 100;
      const sgstAmount = (parseFloat(totalValue) * parseFloat(sgst)) / 100;
      const finalValue = totalValue + cgstAmount + sgstAmount;

      const newtotalValue = finalValue;
      setUpdateGatepass((prevState) => ({
        ...prevState,
        totalValue: newtotalValue,
      }));
    } else {
      const newtotalValue = "";
      setUpdateGatepass((prevState) => ({
        ...prevState,
        totalValue: newtotalValue,
      }));
    }
  };
  const calculatePerKgRate = (
    totalValue,
    subcategories,
    subsubcategories,
    otherSubsubcategories,
    numberOfBags
  ) => {
    if (type === "CRFM") {
      if (totalValue && subsubcategories && numberOfBags) {
        const perKg =
          parseFloat(totalValue) /
          (parseFloat(subsubcategories) * parseFloat(numberOfBags));
        setPerKgRate(perKg.toFixed(2));
      } else {
        setPerKgRate("");
      }
    } else if (type === "AWL") {
      if (totalValue && subcategories && numberOfBags) {
        const perKg =
          parseFloat(totalValue) /
          (parseFloat(subcategories) * parseFloat(numberOfBags));
        setPerKgRate(perKg.toFixed(2));
      } else {
        setPerKgRate("");
      }
    }
  };
  useEffect(() => {
    calculatePerKgRate(
      totalValue,
      subcategories,
      subsubcategories,
      otherSubsubcategories,
      numberOfBags
    );
  }, [
    totalValue,
    subcategories,
    subsubcategories,
    otherSubsubcategories,
    numberOfBags,
  ]);

  const calculateTotalWeight = (
    numberOfBags,
    subcategories,
    subsubcategories,
    otherSubsubcategories
  ) => {
    if (type === "AWL") {
      if (category === "Maida") {
        const total = 0;
        const newtotalWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight: newtotalWeight,
        }));
      } else if (category === "Suji") {
        const total = 0;
        const newtotalWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight: newtotalWeight,
        }));
      } else if (category === "Mill Atta (R-Atta)" && subcategories === "50") {
        const total = 0;
        const newtotalWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight: newtotalWeight,
        }));
      } else if (category === "Atta Chakki") {
        if (subcategories === "5") {
          const NumberofTotalBags = numberOfBags * 6;
          const weightOfBag = subcategories;
          const total =
            NumberofTotalBags && weightOfBag
              ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag)
              : "";
          const newtotalWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            totalWeight: newtotalWeight,
          }));
        } else if (subcategories === "10") {
          const NumberofTotalBags = numberOfBags * 3;
          const weightOfBag = subcategories;
          const total =
            NumberofTotalBags && weightOfBag
              ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag)
              : "";
          const newtotalWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            totalWeight: newtotalWeight,
          }));
        } else {
          const weightOfBag = subcategories;
          const total =
            numberOfBags && weightOfBag
              ? parseFloat(numberOfBags) * parseFloat(weightOfBag)
              : "";
          const newtotalWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            totalWeight: newtotalWeight,
          }));
        }
      } else if (category === "Atta Scheme") {
        if (subcategories === "10") {
          const NumberofTotalBags = numberOfBags * 3;
          const weightOfBag = subcategories;
          const total =
            NumberofTotalBags && weightOfBag
              ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag)
              : "";
          const newtotalWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            totalWeight: newtotalWeight,
          }));
        }
      } else {
        const weightOfBag = subcategories;
        const total =
          numberOfBags && weightOfBag
            ? parseFloat(numberOfBags) * parseFloat(weightOfBag)
            : "";
        const newtotalWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight: newtotalWeight,
        }));
      }
    } else if (type === "CRFM") {
      if (
        category === "Chakki aata and bajra jo maize" &&
        subcategories === "Regular"
      ) {
        if (subsubcategories === "5") {
          const NumberofTotalBags = numberOfBags * 6;
          const weightOfBag = subcategories;
          const total =
            NumberofTotalBags && weightOfBag
              ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag)
              : "";
          const newtotalWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            totalWeight: newtotalWeight,
          }));
        } else if (subsubcategories === "10") {
          const NumberofTotalBags = numberOfBags * 3;
          const weightOfBag = subcategories;
          const total =
            NumberofTotalBags && weightOfBag
              ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag)
              : "";
          const newtotalWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            totalWeight: newtotalWeight,
          }));
        } else {
          const weightOfBag =
            subsubcategories === "Others"
              ? parseFloat(otherSubsubcategories)
              : parseFloat(subsubcategories);
          const total =
            numberOfBags && weightOfBag
              ? parseFloat(numberOfBags) * weightOfBag
              : "";
          const newtotalWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            totalWeight: newtotalWeight,
          }));
        }
      } else {
        const weightOfBag =
          subsubcategories === "Others"
            ? parseFloat(otherSubsubcategories)
            : parseFloat(subsubcategories);
        const total =
          numberOfBags && weightOfBag
            ? parseFloat(numberOfBags) * weightOfBag
            : "";
        const newtotalWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight: newtotalWeight,
        }));
      }
    } else if (isMaida_BulkerSelected) {
      const newtotalWeight = weightOfTruck;
      setUpdateGatepass((prevState) => ({
        ...prevState,
        totalWeight: newtotalWeight,
      }));
    }
  };

  useEffect(() => {
    calculateTotalWeight(
      numberOfBags,
      subcategories,
      subsubcategories,
      otherSubsubcategories
    );
  }, [numberOfBags, subcategories, subsubcategories, otherSubsubcategories]);

  const calculateTotalTruckWeight = (
    numberOfBags,
    subcategories,
    subsubcategories,
    otherSubsubcategories
  ) => {
    if (type === "AWL") {
      if (category === "Maida" && subcategories === "30") {
        const weightOfBag = 30.09;
        const total =
          numberOfBags && weightOfBag
            ? parseFloat(numberOfBags) * parseFloat(weightOfBag)
            : "";
        const newTotalTruckWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          TotalTruckWeight: newTotalTruckWeight,
        }));
      } else if (category === "Maida" && subcategories === "50") {
        const weightOfBag = 50.12;
        const total =
          numberOfBags && weightOfBag
            ? parseFloat(numberOfBags) * parseFloat(weightOfBag)
            : "";
        const newTotalTruckWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          TotalTruckWeight: newTotalTruckWeight,
        }));
      } else if (category === "Mill Atta (R-Atta)" && subcategories === "50") {
        const weightOfBag = 50.12;
        const total =
          numberOfBags && weightOfBag
            ? parseFloat(numberOfBags) * parseFloat(weightOfBag)
            : "";
        const newTotalTruckWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          TotalTruckWeight: newTotalTruckWeight,
        }));
      } else if (category === "Atta Chakki") {
        if (subcategories === "10") {
          const WeightofMasterBags = numberOfBags * 0.075;
          const NumberofTotalBags = numberOfBags * 3;
          const weightOfBag = 10.07;
          const total =
            NumberofTotalBags && weightOfBag && WeightofMasterBags
              ? parseFloat(NumberofTotalBags * weightOfBag) +
                parseFloat(WeightofMasterBags)
              : "";
          console.log("weightofMasterBag", total);
          const newTotalTruckWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight: newTotalTruckWeight,
          }));
        } else if (subcategories === "5") {
          const WeightofMasterBags = numberOfBags * 0.075;
          const NumberofTotalBags = numberOfBags * 6;
          const weightOfBag = 5.05;
          const total =
            NumberofTotalBags && weightOfBag && WeightofMasterBags
              ? parseFloat(NumberofTotalBags * weightOfBag) +
                parseFloat(WeightofMasterBags)
              : "";
          console.log("weightofMasterBag", total);
          const newTotalTruckWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight: newTotalTruckWeight,
          }));
        } else if (subcategories === "30") {
          const weightOfBag = 30.09;
          const total =
            numberOfBags && weightOfBag
              ? parseFloat(numberOfBags) * parseFloat(weightOfBag)
              : "";
          const newTotalTruckWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight: newTotalTruckWeight,
          }));
        } else if (subcategories === "50") {
          const weightOfBag = 50.12;
          const total =
            numberOfBags && weightOfBag
              ? parseFloat(numberOfBags) * parseFloat(weightOfBag)
              : "";
          const newTotalTruckWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight: newTotalTruckWeight,
          }));
        }
      } else if (category === "Maida" && subcategories === "10") {
        const WeightofMasterBags = numberOfBags * 0.075;
        const NumberofTotalBags = numberOfBags * 3;
        const weightOfBag = 10.15;
        const total =
          NumberofTotalBags && weightOfBag && WeightofMasterBags
            ? parseFloat(NumberofTotalBags * weightOfBag) +
              parseFloat(WeightofMasterBags)
            : "";
        console.log("weightofMasterBag", total);
        const newTotalTruckWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          TotalTruckWeight: newTotalTruckWeight,
        }));
      } else if (category === "Suji" && subcategories === "10") {
        const NumberofTotalBags = numberOfBags;
        const weightOfBag = 10.15;
        const total =
          NumberofTotalBags && weightOfBag
            ? parseFloat(NumberofTotalBags * weightOfBag)
            : "";
        console.log("weightofMasterBag", total);
        const newTotalTruckWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          TotalTruckWeight: newTotalTruckWeight,
        }));
      } else if (category === "Atta Scheme" && subcategories === "10") {
        const WeightofMasterBags = numberOfBags * 0.075;
        const WeightofBesanMasterBag =
          numberOfBags >= 10 ? Math.floor(numberOfBags / 10) * 12.235 : 0;
        const NumberofTotalBags = numberOfBags * 3;
        const weightOfBag = 10.07;
        const total =
          NumberofTotalBags &&
          weightOfBag &&
          WeightofMasterBags &&
          WeightofBesanMasterBag
            ? parseFloat(NumberofTotalBags * weightOfBag) +
              parseFloat(WeightofMasterBags) +
              parseFloat(WeightofBesanMasterBag)
            : "";
        console.log("weightofMasterBag", total);
        const newTotalTruckWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          TotalTruckWeight: newTotalTruckWeight,
        }));
      } else {
        const weightOfBag = subcategories;
        const total =
          numberOfBags && weightOfBag
            ? parseFloat(numberOfBags) * parseFloat(weightOfBag)
            : "";
        const newTotalTruckWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          TotalTruckWeight: newTotalTruckWeight,
        }));
      }
    } else if (type === "CRFM") {
      if (
        category === "Chakki aata and bajra jo maize" &&
        subcategories === "Regular"
      ) {
        if (subsubcategories === "5") {
          const WeightofMasterBags = numberOfBags * 0.075;
          const NumberofTotalBags = numberOfBags * 6;
          const weightOfBag = 5.05;
          const total =
            NumberofTotalBags && weightOfBag && WeightofMasterBags
              ? parseFloat(NumberofTotalBags * weightOfBag) +
                parseFloat(WeightofMasterBags)
              : "";
          console.log("weightofMasterBag", total);
          const newTotalTruckWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight: newTotalTruckWeight,
          }));
        } else if (subsubcategories === "10") {
          const WeightofMasterBags = numberOfBags * 0.075;
          const NumberofTotalBags = numberOfBags * 3;
          const weightOfBag = 10.07;
          const total =
            NumberofTotalBags && weightOfBag && WeightofMasterBags
              ? parseFloat(NumberofTotalBags * weightOfBag) +
                parseFloat(WeightofMasterBags)
              : "";
          console.log("weightofMasterBag", total);
          const newTotalTruckWeight = total ? total.toFixed(2) : "";
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight: newTotalTruckWeight,
          }));
        }
      } else {
        const weightOfBag =
          subsubcategories === "Others"
            ? parseFloat(otherSubsubcategories)
            : parseFloat(subsubcategories);
        const total =
          numberOfBags && weightOfBag
            ? parseFloat(numberOfBags) * weightOfBag
            : "";
        const newTotalTruckWeight = total ? total.toFixed(2) : "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          TotalTruckWeight: newTotalTruckWeight,
        }));
      }
    } else if (isMaida_BulkerSelected) {
      const newTotalTruckWeight = weightOfTruck;
      setUpdateGatepass((prevState) => ({
        ...prevState,
        TotalTruckWeight: newTotalTruckWeight,
      }));
    }
  };

  useEffect(() => {
    calculateTotalTruckWeight(
      numberOfBags,
      subcategories,
      subsubcategories,
      otherSubsubcategories
    );
  }, [numberOfBags, subcategories, subsubcategories, otherSubsubcategories]);

  const selectedUnit = category ? categories[category]?.unit : "";
  const availableSubcategories = category
    ? Object.keys(categories[category]?.subcategories)
    : [];
  const availableSubsubcategories =
    subcategories && categories[category]?.subcategories[subcategories]
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

  // Handler for number of bags input change
  const handleNumberOfBags1Change = (e) => {
    const newNumberOfBags1 = e.target.value;
    setNumberOfBags1(newNumberOfBags1);
    calculateProductValue1(newNumberOfBags1, perbagprice1);
    calculateTotalWeight11(newNumberOfBags1, subsubcategories1);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      numberOfBags1: newNumberOfBags1,
    }));
  };

  // Handler for weight of truck input change
  const handleWeight1OfTruck1Change = (e) => {
    const weight1 = e.target.value;
    setWeight1OfTruck1(weight1);
    calculateTotalPrice1(weight1, perKgRate1);
    if (isMaida_BulkerSelected1) {
      setTotalWeight11(weight1);
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      weight1OfTruck1: weight1,
      totalWeight11: isMaida_BulkerSelected1
        ? weight1
        : prevState.totalWeight11,
    }));
  };

  // Handler for category change
  const handleCategory1Change = (e) => {
    const selectedCategory1 = e.target.value;
    setCategory1(selectedCategory1);
    setSubcategories1("");
    setSubsubcategories1("");
    setOtherSubsubcategories1("");
    setPerbagprice1("");
    setProductValue1("");
    setPerKgRate1("");

    setUpdateGatepass((prevState) => ({
      ...prevState,
      category1: selectedCategory1,
      subcategories1: "",
      subsubcategories1: "",
      otherSubsubcategories1: "",
      perbagprice1: "",
      productValue1: "",
      perKgRate1: "",
    }));
  };

  // Handler for subcategories change
  const handleSubcategories1Change = (e) => {
    const selectedSubcategories1 = e.target.value;
    setSubcategories1(selectedSubcategories1);
    setSubsubcategories1("");
    setOtherSubsubcategories1("");
    setProductValue1("");
    setWeight1OfTruck1("");
    setPerKgRate1("");
    setIsMaida_BulkerSelected1(selectedSubcategories1 === "Maida_Bulker");

    if (type === "AWL") {
      calculateTotalWeight11(numberOfBags1, selectedSubcategories1);
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      subcategories1: selectedSubcategories1,
      subsubcategories1: "",
      otherSubsubcategories1: "",
      weight1OfTruck1: "",
      perKgRate1: "",
    }));
  };

  // Handler for subsubcategories change
  const handleSubsubcategories1Change = (e) => {
    const newSubsubcategories1 = e.target.value;
    setSubsubcategories1(newSubsubcategories1);
    setOtherSubsubcategories1("");
    calculateProductValue1(numberOfBags1, perbagprice1);

    if (type === "CRFM") {
      calculateTotalWeight11(
        numberOfBags1,
        newSubsubcategories1,
        otherSubsubcategories1
      );
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      subsubcategories1: newSubsubcategories1,
      otherSubsubcategories1: "",
    }));
  };

  // Handler for other subsubcategories change
  const handleOtherSubsubcategories1Change = (e) => {
    const newOtherSubsubcategories1 = e.target.value;
    setOtherSubsubcategories1(newOtherSubsubcategories1);
    calculateProductValue1(numberOfBags1, perbagprice1);

    if (type === "CRFM") {
      calculateTotalWeight11(
        subsubcategories1,
        numberOfBags1,
        newOtherSubsubcategories1
      );
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      otherSubsubcategories1: newOtherSubsubcategories1,
    }));
  };

  // Handler for perbagprice input change
  const handlePerbagprice1Change = (e) => {
    const newPrice = e.target.value;
    setPerbagprice1(newPrice);
    calculateProductValue1(numberOfBags1, newPrice);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      perbagprice1: newPrice,
    }));
  };

  // Handler for loading charger input change
  const handleLoadingCharger1Change = (e) => {
    const charger = e.target.value;
    setLoadingCharger1(charger);
    calculateTotalValue1(productValue1, charger, cgst1, sgst1);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      loadingCharger1: charger,
    }));
  };

  // Handler for CGST input change
  const handleCgst1Change = (e) => {
    const selectedCgst1 = e.target.value;
    setCgst1(selectedCgst1);
    calculateTotalValue1(productValue1, loadingCharger1, selectedCgst1, sgst1);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      cgst1: selectedCgst1,
    }));
  };

  // Handler for SGST input change
  const handleSgst1Change = (e) => {
    const selectedSgst1 = e.target.value;
    setSgst1(selectedSgst1);
    calculateTotalValue1(productValue1, loadingCharger1, cgst1, selectedSgst1);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      sgst1: selectedSgst1,
    }));
  };

  // Handler for weight input change
  const handleweight1Change = (e) => {
    const newWeight1 = e.target.value;
    setweight1(newWeight1);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      weight1: newWeight1,
    }));
  };

  // Handler for per qtl rate input change
  const handleperqtlrate1Change = (e) => {
    const newPerQtlRate1 = e.target.value;
    setperqtlrate1(newPerQtlRate1);
    calculateTotalPrice1(weight1OfTruck1, newPerQtlRate1);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      perqtlrate1: newPerQtlRate1,
    }));
  };

  const calculateTotalPrice1 = (weight1OfTruck1, perKgRate1) => {
    if (weight1OfTruck1 && perKgRate1) {
      const totalPrice = parseFloat(weight1OfTruck1) * parseFloat(perqtlrate1);
      const newproductValue1 = totalPrice.toFixed(2);
      setUpdateGatepass((prevState) => ({
        ...prevState,
        productValue1: newproductValue1,
      }));
    } else {
        const newproductValue1 = "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          productValue1: newproductValue1,
        }));
    }
  };
  const calculateProductValue1 = (numberOfBags1, perbagprice1) => {
    if (numberOfBags1 && perbagprice1) {
      const product = parseFloat(numberOfBags1) * parseFloat(perbagprice1);
      const newproductValue1 = product.toFixed(2);
      setUpdateGatepass((prevState) => ({
        ...prevState,
        productValue1: newproductValue1,
      }));
    } else {
        const newproductValue1 = "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          productValue1: newproductValue1,
        }));
      setPerKgRate1("");
    }
  };
  useEffect(() => {
    calculateTotalValue1(productValue1, loadingCharger1, cgst1, sgst1);
  }, [productValue1, loadingCharger1, cgst1, sgst1]);
  const calculatetotalamount1 = (weight1, perqtlrate1) => {
    if (weight1 && perqtlrate1) {
      const amount = parseFloat(weight1) * parseFloat(perqtlrate1);
      setUpdateGatepass((prevState) => ({
        ...prevState,
        totalamount1: amount,
      }));
    }
  };
  useEffect(() => {
    calculatetotalamount1(weight1, perqtlrate1);
  }, [weight1, perqtlrate1]);

  const calculateTotalValue1 = (
    productValue1,
    loadingCharger1,
    cgst1,
    sgst1
  ) => {
    if (productValue1 && loadingCharger1 && cgst1 && sgst1) {
      const totalValue1 =
        parseFloat(productValue1) + parseFloat(loadingCharger1);
      const cgst1Amount = (parseFloat(totalValue1) * parseFloat(cgst1)) / 100;
      const sgst1Amount = (parseFloat(totalValue1) * parseFloat(sgst1)) / 100;
      const finalValue1 = totalValue1 + cgst1Amount + sgst1Amount;

      
    const newtotalValue1 = finalValue1;
      setUpdateGatepass((prevState) => ({
        ...prevState,
        totalValue1: newtotalValue1,
      }));
        } else {
            const newtotalValue1 = '';
      setUpdateGatepass((prevState) => ({
        ...prevState,
        totalValue1: newtotalValue1,
      }));
        }

  };
  const calculatePerKgRate1 = (
    totalValue1,
    subsubcategories1,
    subcategories1,
    numberOfBags1
  ) => {
    if (type === "CRFM") {
      if (totalValue1 && subsubcategories1 && numberOfBags1) {
        const perKg =
          parseFloat(totalValue1) /
          (parseFloat(subsubcategories1) * parseFloat(numberOfBags1));
        setPerKgRate1(perKg.toFixed(2));
      } else {
        setPerKgRate1("");
      }
    } else if (type === "AWL") {
      if (totalValue1 && subcategories1 && numberOfBags1) {
        const perKg =
          parseFloat(totalValue1) /
          (parseFloat(subcategories1) * parseFloat(numberOfBags1));
        setPerKgRate1(perKg.toFixed(2));
      } else {
        setPerKgRate1("");
      }
    }
  };
  useEffect(() => {
    calculatePerKgRate1(
      totalValue1,
      subsubcategories1,
      subcategories1,
      numberOfBags1
    );
  }, [totalValue1, subsubcategories1, subcategories1, numberOfBags1]);

  const calculateTotalWeight11 = (numberOfBags1, subcategories1, subsubcategories1, otherSubsubcategories1) => {
    if (type === 'AWL') {
        if (category1 === 'Maida') {

            const total = 0;
            const newtotalWeight11 = total ? total.toFixed(2) : '';
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));


        } else if (category1 === 'Suji') {
            const total = 0;
            const newtotalWeight11 = total ? total.toFixed(2) : '';
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));

        } else if (category1 === 'Mill Atta (R-Atta)' && subcategories1 === '50') {
            const total = 0;
            const newtotalWeight11 = total ? total.toFixed(2) : '';
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));

        } else if (category1 === 'Atta Chakki') {
            if (subcategories1 === '5') {
                const NumberofTotalBags = numberOfBags1 * 6
                const weightOfBag = subcategories1
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                const newtotalWeight11 = total ? total.toFixed(2) : '';
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));

            } else if (subcategories1 === '10') {
                const NumberofTotalBags = numberOfBags1 * 3
                const weightOfBag = subcategories1
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                const newtotalWeight11 = total ? total.toFixed(2) : '';
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));

            } else {
                const weightOfBag = subcategories1
                const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
                const newtotalWeight11 = total ? total.toFixed(2) : '';
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));
            }

        } else if (category1 === 'Atta Scheme') {
            if (subcategories1 === '10') {
                const NumberofTotalBags = numberOfBags1 * 3
                const weightOfBag = subcategories1
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                const newtotalWeight11 = total ? total.toFixed(2) : '';
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));
            }
        }

        else {
            const weightOfBag = subcategories1
            const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
            const newtotalWeight11 = total ? total.toFixed(2) : '';
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));
        }
    }
    else if (type === 'CRFM') {
        if (category1 === 'Chakki aata and bajra jo maize' && subcategories1 === 'Regular') {
            if (subsubcategories1 === '5') {
                const NumberofTotalBags = numberOfBags1 * 6
                const weightOfBag = subcategories1
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                const newtotalWeight11 = total ? total.toFixed(2) : '';
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));
            } else if (subsubcategories1 === '10') {
                const NumberofTotalBags = numberOfBags1 * 3
                const weightOfBag = subcategories1
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                const newtotalWeight11 = total ? total.toFixed(2) : '';
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));
            } else {
                const weightOfBag = subsubcategories1 === 'Others' ? parseFloat(otherSubsubcategories1) : parseFloat(subsubcategories1);
                const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * weightOfBag : '';
                const newtotalWeight11 = total ? total.toFixed(2) : '';
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));
            }
        } else {
            const weightOfBag = subsubcategories1 === 'Others' ? parseFloat(otherSubsubcategories1) : parseFloat(subsubcategories1);
            const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * weightOfBag : '';
            const newtotalWeight11 = total ? total.toFixed(2) : '';
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));
        }
    }
    else if (isMaida_BulkerSelected) {
        const newtotalWeight11 = weightOfTruck;
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalWeight11: newtotalWeight11,
        }));
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
            
            const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));

        } else if (category1 === 'Maida' && subcategories1 === '50') {
            const weightOfBag = 50.12
            const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
            const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));

        } else if (category1 === 'Mill Atta (R-Atta)' && subcategories1 === '50') {
            const weightOfBag = 50.12
            const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
            const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));

        } else if (category1 === 'Atta Chakki') {

            if (subcategories1 === '10') {
                const WeightofMasterBags = numberOfBags1 * 0.075;
                const NumberofTotalBags = numberOfBags1 * 3
                const weightOfBag = 10.07
                const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                console.log("weightofMasterBag", total)
                const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));

            } else if (subcategories1 === '5') {
                const WeightofMasterBags = numberOfBags1 * 0.075;
                const NumberofTotalBags = numberOfBags1 * 6
                const weightOfBag = 5.05
                const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                console.log("weightofMasterBag", total)
                const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));

            } else if (subcategories1 === '30') {
                const weightOfBag = 30.090
                const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
                const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));

            } else if (subcategories1 === '50') {
                const weightOfBag = 50.12
                const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
                const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));
            }

        } else if (category1 === 'Maida' && subcategories1 === '10') {

            const WeightofMasterBags = numberOfBags1 * 0.075;
            const NumberofTotalBags = numberOfBags1 * 3
            const weightOfBag = 10.07
            const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
            console.log("weightofMasterBag", total)
            const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));

        } else if (category1 === 'Suji' && subcategories1 === '10') {

            const NumberofTotalBags = numberOfBags1
            const weightOfBag = 10.17
            const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
            console.log("weightofMasterBag", total)
            const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));

        } else if (category1 === 'Atta Scheme' && subcategories1 === '10') {

            const WeightofMasterBags = numberOfBags1 * 0.075;
            const WeightofBesanMasterBag = numberOfBags1 >= 10 ? (Math.floor(numberOfBags1 / 10) * 12.235) : 0;
            const NumberofTotalBags = numberOfBags1 * 3
            const weightOfBag = 10.07
            const total = NumberofTotalBags && weightOfBag && WeightofMasterBags && WeightofBesanMasterBag ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) + parseFloat(WeightofBesanMasterBag) : '';
            console.log("weightofMasterBag", total)
            const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));

        } else {
            const weightOfBag = subcategories1
            const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * parseFloat(weightOfBag) : '';
            const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));
        }
    }
    else if (type === 'CRFM') {

        if (category1 === 'Chakki aata and bajra jo maize' && subcategories1 === 'Regular') {
            if (subsubcategories1 === '5') {
                const WeightofMasterBags = numberOfBags1 * 0.075;
                const NumberofTotalBags = numberOfBags1 * 6
                const weightOfBag = 5.05
                const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                console.log("weightofMasterBag", total)
                const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));

            } else if (subsubcategories1 === '10') {
                const WeightofMasterBags = numberOfBags1 * 0.075;
                const NumberofTotalBags = numberOfBags1 * 3
                const weightOfBag = 10.07
                const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                console.log("weightofMasterBag", total)
                const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));
            }
        } else {
            const weightOfBag = subsubcategories1 === 'Others' ? parseFloat(otherSubsubcategories1) : parseFloat(subsubcategories1);
            const total = numberOfBags1 && weightOfBag ? parseFloat(numberOfBags1) * weightOfBag : '';
            const newTotalTruckWeight1 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight1: newTotalTruckWeight1,
          }));
        }
    }
    else if (isMaida_BulkerSelected) {
        setTotalTruckWeight1(weightOfTruck);
    }
};

useEffect(() => {
    calculateTotalTruckWeight1(numberOfBags1, subcategories1, subsubcategories1, otherSubsubcategories1);
}, [numberOfBags1, subcategories1, subsubcategories1, otherSubsubcategories1]);

  const selectedUnit1 = category1 ? categories1[category1]?.unit : "";
  const availableSubcategories1 = category1
    ? Object.keys(categories1[category1]?.subcategories1)
    : [];
  const availableSubsubcategories1 =
    subcategories1 && categories1[category1]?.subcategories1[subcategories1]
      ? categories1[category1].subcategories1[subcategories1]
      : [];

  // Handler for number of bags input change
  const handleNumberOfBags2Change = (e) => {
    const newNumberOfBags2 = e.target.value;
    setNumberOfBags2(newNumberOfBags2);
    calculateProductValue2(newNumberOfBags2, perbagprice2);
    calculateTotalWeight2(newNumberOfBags2, subsubcategories2);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      numberOfBags2: newNumberOfBags2,
    }));
  };

  // Handler for weight of truck input change
  const handleWeight2OfTruck2Change = (e) => {
    const weight2 = e.target.value;
    setWeight2OfTruck2(weight2);
    calculateTotalPrice1(weight2, perKgRate2);
    if (isMaida_BulkerSelected2) {
      setTotalWeight2(weight2);
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      weight2OfTruck2: weight2,
      totalWeight2: isMaida_BulkerSelected2 ? weight2 : prevState.totalWeight2,
    }));
  };

  // Handler for category change
  const handleCategory2Change = (e) => {
    const selectedCategory2 = e.target.value;
    setCategory2(selectedCategory2);
    setSubcategories2("");
    setSubsubcategories2("");
    setOtherSubsubcategories2("");
    setPerbagprice2("");
    setProductValue2("");
    setPerKgRate2("");

    setUpdateGatepass((prevState) => ({
      ...prevState,
      category2: selectedCategory2,
      subcategories2: "",
      subsubcategories2: "",
      otherSubsubcategories2: "",
      perbagprice2: "",
      productValue2: "",
      perKgRate2: "",
    }));
  };

  // Handler for subcategories change
  const handleSubcategories2Change = (e) => {
    const selectedSubcategories2 = e.target.value;
    setSubcategories2(selectedSubcategories2);
    setSubsubcategories2("");
    setOtherSubsubcategories2("");
    setProductValue2("");
    setWeight2OfTruck2("");
    setPerKgRate2("");
    setIsMaida_BulkerSelected2(selectedSubcategories2 === "Maida_Bulker");

    if (type === "AWL") {
      calculateTotalWeight2(numberOfBags2, selectedSubcategories2);
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      subcategories2: selectedSubcategories2,
      subsubcategories2: "",
      otherSubsubcategories2: "",
      weight2OfTruck2: "",
      perKgRate2: "",
    }));
  };

  // Handler for subsubcategories change
  const handleSubsubcategories2Change = (e) => {
    const newSubsubcategories2 = e.target.value;
    setSubsubcategories2(newSubsubcategories2);
    setOtherSubsubcategories2("");
    calculateProductValue2(numberOfBags2, perbagprice2);

    if (type === "CRFM") {
      calculateTotalWeight2(
        numberOfBags2,
        newSubsubcategories2,
        otherSubsubcategories2
      );
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      subsubcategories2: newSubsubcategories2,
      otherSubsubcategories2: "",
    }));
  };

  // Handler for other subsubcategories change
  const handleOtherSubsubcategories2Change = (e) => {
    const newOtherSubsubcategories2 = e.target.value;
    setOtherSubsubcategories2(newOtherSubsubcategories2);
    calculateProductValue2(numberOfBags2, perbagprice2);

    if (type === "CRFM") {
      calculateTotalWeight2(
        subsubcategories2,
        numberOfBags2,
        newOtherSubsubcategories2
      );
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      otherSubsubcategories2: newOtherSubsubcategories2,
    }));
  };

  // Handler for perbagprice input change
  const handlePerbagprice2Change = (e) => {
    const newPrice = e.target.value;
    setPerbagprice2(newPrice);
    calculateProductValue2(numberOfBags2, newPrice);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      perbagprice2: newPrice,
    }));
  };

  // Handler for loading charger input change
  const handleLoadingCharger2Change = (e) => {
    const charger = e.target.value;
    setLoadingCharger2(charger);
    calculateTotalValue2(productValue2, charger, cgst2, sgst2);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      loadingCharger2: charger,
    }));
  };

  // Handler for CGST input change
  const handleCgst2Change = (e) => {
    const selectedCgst2 = e.target.value;
    setCgst2(selectedCgst2);
    calculateTotalValue2(productValue2, loadingCharger2, selectedCgst2, sgst2);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      cgst2: selectedCgst2,
    }));
  };

  // Handler for SGST input change
  const handleSgst2Change = (e) => {
    const selectedSgst2 = e.target.value;
    setSgst2(selectedSgst2);
    calculateTotalValue2(productValue2, loadingCharger2, cgst2, selectedSgst2);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      sgst2: selectedSgst2,
    }));
  };

  // Handler for weight input change
  const handleweight2Change = (e) => {
    const newWeight2 = e.target.value;
    setweight2(newWeight2);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      weight2: newWeight2,
    }));
  };

  // Handler for per qtl rate input change
  const handleperqtlrate2Change = (e) => {
    const newPerQtlRate2 = e.target.value;
    setperqtlrate2(newPerQtlRate2);
    calculateTotalPrice1(weight2OfTruck2, newPerQtlRate2);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      perqtlrate2: newPerQtlRate2,
    }));
  };

  const calculateTotalPrice2 = (weight2OfTruck2, perKgRate2) => {
    if (weight2OfTruck2 && perKgRate2) {
      const totalPrice = parseFloat(weight2OfTruck2) * parseFloat(perqtlrate2);
      const newproductValue2 = totalPrice.toFixed(2);
      setUpdateGatepass((prevState) => ({
        ...prevState,
        productValue2: newproductValue2,
      }));
    } else {
        const newproductValue2 = "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          productValue2: newproductValue2,
        }));
    }
  };
  const calculateProductValue2 = (numberOfBags2, perbagprice2) => {
    if (numberOfBags2 && perbagprice2) {
      const product = parseFloat(numberOfBags2) * parseFloat(perbagprice2);
      const newproductValue2 = product.toFixed(2);
      setUpdateGatepass((prevState) => ({
        ...prevState,
        productValue2: newproductValue2,
      }));
    } else {
        const newproductValue = "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          productValue: newproductValue,
        }));
      setPerKgRate2("");
    }
  };
  useEffect(() => {
    calculateTotalValue2(productValue2, loadingCharger2, cgst2, sgst2);
  }, [productValue2, loadingCharger2, cgst2, sgst2]);
  const calculatetotalamount2 = (weight2, perqtlrate2) => {
    if (weight2 && perqtlrate2) {
      const amount = parseFloat(weight2) * parseFloat(perqtlrate2);
      setUpdateGatepass((prevState) => ({
        ...prevState,
        totalamount2: amount,
      }));
    }
  };
  useEffect(() => {
    calculatetotalamount2(weight2, perqtlrate2);
  }, [weight2, perqtlrate2]);

  const calculateTotalValue2 = (
    productValue2,
    loadingCharger2,
    cgst2,
    sgst2
  ) => {
    if (productValue2 && loadingCharger2 && cgst2 && sgst2) {
      const totalValue2 =
        parseFloat(productValue2) + parseFloat(loadingCharger2);
      const cgst2Amount = (parseFloat(totalValue2) * parseFloat(cgst2)) / 100;
      const sgst2Amount = (parseFloat(totalValue2) * parseFloat(sgst2)) / 100;
      const finalValue1 = totalValue2 + cgst2Amount + sgst2Amount;

      const newtotalValue2 = finalValue1;
      setUpdateGatepass((prevState) => ({
        ...prevState,
        totalValue2: newtotalValue2,
      }));
    } else {
        const newtotalValue2 = "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalValue2: newtotalValue2,
        }));
    }
  };
  const calculatePerKgRate2 = (
    totalValue2,
    subcategories2,
    subsubcategories2,
    numberOfBags2
  ) => {
    if (type === "CRFM") {
      if (totalValue2 && subsubcategories2 && numberOfBags2) {
        const perKg =
          parseFloat(totalValue2) /
          (parseFloat(subsubcategories2) * parseFloat(numberOfBags2));
        setPerKgRate2(perKg.toFixed(2));
      } else {
        setPerKgRate2("");
      }
    } else if (type === "AWL") {
      if (totalValue2 && subcategories2 && numberOfBags2) {
        const perKg =
          parseFloat(totalValue2) /
          (parseFloat(subcategories2) * parseFloat(numberOfBags2));
        setPerKgRate2(perKg.toFixed(2));
      } else {
        setPerKgRate2("");
      }
    }
  };
  useEffect(() => {
    calculatePerKgRate2(
      totalValue2,
      subcategories2,
      subsubcategories2,
      numberOfBags2
    );
  }, [totalValue2, subcategories2, subsubcategories2, numberOfBags2]);
  

          const calculateTotalWeight2 = (numberOfBags2, subcategories2, subsubcategories2, otherSubsubcategories2) => {
            if (type === 'AWL') {
                if (category2 === 'Maida') {
    
                    const total = 0;
                    const newTotalWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight2: newTotalWeight2,
          }));
    
    
                } else if (category2 === 'Suji') {
                    const total = 0;
                    const newTotalWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight2: newTotalWeight2,
          }));
    
                } else if (category2 === 'Mill Atta (R-Atta)' && subcategories2 === '50') {
                    const total = 0;
                    const newTotalWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight2: newTotalWeight2,
          }));
    
                } else if (category2 === 'Atta Chakki') {
                    if (subcategories2 === '5') {
                        const NumberofTotalBags = numberOfBags2 * 6
                        const weightOfBag = subcategories2
                        const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                        const newTotalWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight2: newTotalWeight2,
          }));
    
                    } else if (subcategories2 === '10') {
                        const NumberofTotalBags = numberOfBags2 * 3
                        const weightOfBag = subcategories2
                        const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                        const newTotalWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight2: newTotalWeight2,
          }));
    
                    } else {
                        const weightOfBag = subcategories2
                        const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                        const newTotalWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight2: newTotalWeight2,
          }));
                    }
    
                } else if (category2 === 'Atta Scheme') {
                    if (subcategories2 === '10') {
                        const NumberofTotalBags = numberOfBags2 * 3
                        const weightOfBag = subcategories2
                        const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                        const newTotalWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight2: newTotalWeight2,
          }));
                    }
                }
    
                else {
                    const weightOfBag = subcategories2
                    const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                    const newTotalWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight2: newTotalWeight2,
          }));
                }
            }
            else if (type === 'CRFM') {
                if (category2 === 'Chakki aata and bajra jo maize' && subcategories2 === 'Regular') {
                    if (subsubcategories2 === '5') {
                        const NumberofTotalBags = numberOfBags2 * 6
                        const weightOfBag = subcategories2
                        const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                        const newTotalWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight2: newTotalWeight2,
          }));
                    } else if (subsubcategories2 === '10') {
                        const NumberofTotalBags = numberOfBags2 * 3
                        const weightOfBag = subcategories2
                        const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                        const newTotalWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight2: newTotalWeight2,
          }));
                    } else {
                        const weightOfBag = subsubcategories2 === 'Others' ? parseFloat(otherSubsubcategories2) : parseFloat(subsubcategories2);
                        const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * weightOfBag : '';
                        const newTotalWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight2: newTotalWeight2,
          }));
                    }
                } else {
                    const weightOfBag = subsubcategories2 === 'Others' ? parseFloat(otherSubsubcategories2) : parseFloat(subsubcategories2);
                    const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * weightOfBag : '';
                    const newTotalWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight2: newTotalWeight2,
          }));
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
                    const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
    
                } else if (category2 === 'Maida' && subcategories2 === '50') {
                    const weightOfBag = 50.12
                    const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                    const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
    
                } else if (category2 === 'Mill Atta (R-Atta)' && subcategories2 === '50') {
                    const weightOfBag = 50.12
                    const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                    const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
    
                } else if (category2 === 'Atta Chakki') {
    
                    if (subcategories2 === '10') {
                        const WeightofMasterBags = numberOfBags2 * 0.075;
                        const NumberofTotalBags = numberOfBags2 * 3
                        const weightOfBag = 10.07
                        const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                        console.log("weightofMasterBag", total)
                        const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
    
                    } else if (subcategories2 === '5') {
                        const WeightofMasterBags = numberOfBags2 * 0.075;
                        const NumberofTotalBags = numberOfBags2 * 6
                        const weightOfBag = 5.05
                        const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                        console.log("weightofMasterBag", total)
                        const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
    
                    } else if (subcategories2 === '30') {
                        const weightOfBag = 30.090
                        const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                        const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
    
                    } else if (subcategories2 === '50') {
                        const weightOfBag = 50.12
                        const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                        const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
                    }
    
                } else if (category2 === 'Maida' && subcategories2 === '10') {
    
                    const WeightofMasterBags = numberOfBags2 * 0.075;
                    const NumberofTotalBags = numberOfBags2 * 3
                    const weightOfBag = 10.07
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
    
                } else if (category2 === 'Suji' && subcategories2 === '10') {
    
                    const NumberofTotalBags = numberOfBags2
                    const weightOfBag = 10.17
                    const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags * weightOfBag) : '';
                    console.log("weightofMasterBag", total)
                    const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
    
                } else if (category2 === 'Atta Scheme' && subcategories2 === '10') {
    
                    const WeightofMasterBags = numberOfBags2 * 0.075;
                    const NumberofTotalBags = numberOfBags * 3
                    const weightOfBag = 10.07
                    const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                    console.log("weightofMasterBag", total)
                    const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
    
                } else {
                    const weightOfBag = subcategories2
                    const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * parseFloat(weightOfBag) : '';
                    const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
                }
            }
            else if (type === 'CRFM') {
    
                if (category2 === 'Chakki aata and bajra jo maize' && subcategories2 === 'Regular') {
                    if (subsubcategories2 === '5') {
                        const WeightofMasterBags = numberOfBags2 * 0.075;
                        const NumberofTotalBags = numberOfBags2 * 6
                        const weightOfBag = 5.05
                        const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                        console.log("weightofMasterBag", total)
                        const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
    
                    } else if (subsubcategories2 === '10') {
                        const WeightofMasterBags = numberOfBags2 * 0.075;
                        const NumberofTotalBags = numberOfBags2 * 3
                        const weightOfBag = 10.07
                        const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                        console.log("weightofMasterBag", total)
                        const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
                    }
                } else {
                    const weightOfBag = subsubcategories2 === 'Others' ? parseFloat(otherSubsubcategories2) : parseFloat(subsubcategories2);
                    const total = numberOfBags2 && weightOfBag ? parseFloat(numberOfBags2) * weightOfBag : '';
                    const newTotalTruckWeight2 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
                }
            }
            else if (isMaida_BulkerSelected) {
                const newTotalTruckWeight2 = weightOfTruck;
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight2: newTotalTruckWeight2,
          }));
            }
        };
    
        useEffect(() => {
            calculateTotalTruckWeight2(numberOfBags2, subcategories2, subsubcategories2, otherSubsubcategories2);
        }, [numberOfBags2, subcategories2, subsubcategories2, otherSubsubcategories2]);

  const selectedUnit2 = category2 ? categories2[category2]?.unit : "";
  const availableSubcategories2 = category2
    ? Object.keys(categories2[category2]?.subcategories2)
    : [];
  const availableSubsubcategories2 =
    subcategories2 && categories2[category2]?.subcategories2[subcategories2]
      ? categories2[category2].subcategories2[subcategories2]
      : [];

  // Handler for number of bags input change
  const handleNumberOfBags3Change = (e) => {
    const newNumberOfBags3 = e.target.value;
    setNumberOfBags3(newNumberOfBags3);
    calculateProductValue3(newNumberOfBags3, perbagprice3);
    calculateTotalWeight3(newNumberOfBags3, subsubcategories3);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      numberOfBags3: newNumberOfBags3,
    }));
  };

  // Handler for weight of truck input change
  const handleWeight3OfTruck3Change = (e) => {
    const weight3 = e.target.value;
    setWeight3OfTruck3(weight3);
    calculateTotalPrice1(weight3, perKgRate3);
    if (isMaida_BulkerSelected3) {
      setTotalWeight3(weight3);
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      weight3OfTruck3: weight3,
      totalWeight3: isMaida_BulkerSelected3 ? weight3 : prevState.totalWeight3,
    }));
  };

  // Handler for category change
  const handleCategory3Change = (e) => {
    const selectedCategory3 = e.target.value;
    setCategory3(selectedCategory3);
    setSubcategories3("");
    setSubsubcategories3("");
    setOtherSubsubcategories3("");
    setPerbagprice3("");
    setProductValue3("");
    setPerKgRate3("");

    setUpdateGatepass((prevState) => ({
      ...prevState,
      category3: selectedCategory3,
      subcategories3: "",
      subsubcategories3: "",
      otherSubsubcategories3: "",
      perbagprice3: "",
      productValue3: "",
      perKgRate3: "",
    }));
  };

  // Handler for subcategories change
  const handleSubcategories3Change = (e) => {
    const selectedSubcategories3 = e.target.value;
    setSubcategories3(selectedSubcategories3);
    setSubsubcategories3("");
    setOtherSubsubcategories3("");
    setProductValue3("");
    setWeight3OfTruck3("");
    setPerKgRate3("");
    setIsMaida_BulkerSelected3(selectedSubcategories3 === "Maida_Bulker");

    if (type === "AWL") {
      calculateTotalWeight3(numberOfBags3, selectedSubcategories3);
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      subcategories3: selectedSubcategories3,
      subsubcategories3: "",
      otherSubsubcategories3: "",
      weight3OfTruck3: "",
      perKgRate3: "",
    }));
  };

  // Handler for subsubcategories change
  const handleSubsubcategories3Change = (e) => {
    const newSubsubcategories3 = e.target.value;
    setSubsubcategories3(newSubsubcategories3);
    setOtherSubsubcategories3("");
    calculateProductValue3(numberOfBags3, perbagprice3);

    if (type === "CRFM") {
      calculateTotalWeight3(
        numberOfBags3,
        newSubsubcategories3,
        otherSubsubcategories3
      );
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      subsubcategories3: newSubsubcategories3,
      otherSubsubcategories3: "",
    }));
  };

  // Handler for other subsubcategories change
  const handleOtherSubsubcategories3Change = (e) => {
    const newOtherSubsubcategories3 = e.target.value;
    setOtherSubsubcategories3(newOtherSubsubcategories3);
    calculateProductValue3(numberOfBags3, perbagprice3);

    if (type === "CRFM") {
      calculateTotalWeight3(
        subsubcategories3,
        numberOfBags3,
        newOtherSubsubcategories3
      );
    }

    setUpdateGatepass((prevState) => ({
      ...prevState,
      otherSubsubcategories3: newOtherSubsubcategories3,
    }));
  };

  // Handler for perbagprice input change
  const handlePerbagprice3Change = (e) => {
    const newPrice = e.target.value;
    setPerbagprice3(newPrice);
    calculateProductValue3(numberOfBags3, newPrice);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      perbagprice3: newPrice,
    }));
  };

  // Handler for loading charger input change
  const handleLoadingCharger3Change = (e) => {
    const charger = e.target.value;
    setLoadingCharger3(charger);
    calculateTotalValue3(productValue3, charger, cgst3, sgst3);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      loadingCharger3: charger,
    }));
  };

  // Handler for CGST input change
  const handleCgst3Change = (e) => {
    const selectedCgst3 = e.target.value;
    setCgst3(selectedCgst3);
    calculateTotalValue3(productValue3, loadingCharger3, selectedCgst3, sgst3);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      cgst3: selectedCgst3,
    }));
  };

  // Handler for SGST input change
  const handleSgst3Change = (e) => {
    const selectedSgst3 = e.target.value;
    setSgst3(selectedSgst3);
    calculateTotalValue3(productValue3, loadingCharger3, cgst3, selectedSgst3);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      sgst3: selectedSgst3,
    }));
  };

  // Handler for weight input change
  const handleweight3Change = (e) => {
    const newWeight3 = e.target.value;
    setweight3(newWeight3);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      weight3: newWeight3,
    }));
  };

  // Handler for per qtl rate input change
  const handleperqtlrate3Change = (e) => {
    const newPerQtlRate3 = e.target.value;
    setperqtlrate3(newPerQtlRate3);
    calculateTotalPrice1(weight3OfTruck3, newPerQtlRate3);

    setUpdateGatepass((prevState) => ({
      ...prevState,
      perqtlrate3: newPerQtlRate3,
    }));
  };

  const calculateTotalPrice3 = (weight3OfTruck3, perKgRate3) => {
    if (weight3OfTruck3 && perKgRate3) {
      const totalPrice = parseFloat(weight3OfTruck3) * parseFloat(perqtlrate3);
      const newproductValue3 = totalPrice.toFixed(2);
      setUpdateGatepass((prevState) => ({
        ...prevState,
        productValue3: newproductValue3,
      }));
    } else {
        const newproductValue3 = "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          productValue3: newproductValue3,
        }));
    }
  };
  const calculateProductValue3 = (numberOfBags3, perbagprice3) => {
    if (numberOfBags3 && perbagprice3) {
      const product = parseFloat(numberOfBags3) * parseFloat(perbagprice3);
      const newproductValue3 = product.toFixed(2);
      setUpdateGatepass((prevState) => ({
        ...prevState,
        productValue3: newproductValue3,
      }));
    } else {
        const newproductValue3 = "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          productValue3: newproductValue3,
        }));
      setPerKgRate3("");
    }
  };
  useEffect(() => {
    calculateTotalValue3(productValue3, loadingCharger3, cgst3, sgst3);
  }, [productValue3, loadingCharger3, cgst3, sgst3]);
  const calculatetotalamount3 = (weight3, perqtlrate3) => {
    if (weight3 && perqtlrate3) {
      const amount = parseFloat(weight3) * parseFloat(perqtlrate3);
      setUpdateGatepass((prevState) => ({
        ...prevState,
        totalamount3: amount,
      }));
    }
  };
  useEffect(() => {
    calculatetotalamount3(weight3, perqtlrate3);
  }, [weight3, perqtlrate3]);

  const calculateTotalValue3 = (
    productValue3,
    loadingCharger3,
    cgst3,
    sgst3
  ) => {
    if (productValue3 && loadingCharger3 && cgst3 && sgst3) {
      const totalValue3 =
        parseFloat(productValue3) + parseFloat(loadingCharger3);
      const cgst3Amount = (parseFloat(totalValue3) * parseFloat(cgst3)) / 100;
      const sgst3Amount = (parseFloat(totalValue3) * parseFloat(sgst3)) / 100;
      const finalValue1 = totalValue3 + cgst3Amount + sgst3Amount;

      const newtotalValue3 = finalValue1;
      setUpdateGatepass((prevState) => ({
        ...prevState,
        totalValue3: newtotalValue3,
      }));
    } else {
        const newtotalValue3 = "";
        setUpdateGatepass((prevState) => ({
          ...prevState,
          totalValue3: newtotalValue3,
        }));
    }
  };
  const calculatePerKgRate3 = (
    totalValue3,
    subsubcategories3,
    subcategories3,
    numberOfBags3
  ) => {
    if (type === "CRFM") {
      if (totalValue3 && subsubcategories3 && numberOfBags3) {
        const perKg =
          parseFloat(totalValue3) /
          (parseFloat(subsubcategories3) * parseFloat(numberOfBags3));
        setPerKgRate3(perKg.toFixed(2));
      } else {
        setPerKgRate3("");
      }
    } else if (type === "AWL") {
      if (totalValue3 && subcategories3 && numberOfBags3) {
        const perKg =
          parseFloat(totalValue3) /
          (parseFloat(subcategories3) * parseFloat(numberOfBags3));
        setPerKgRate3(perKg.toFixed(2));
      } else {
        setPerKgRate3("");
      }
    }
  };
  useEffect(() => {
    calculatePerKgRate3(
      totalValue3,
      subsubcategories3,
      subcategories3,
      numberOfBags3
    );
  }, [totalValue3, subsubcategories3, subcategories3, numberOfBags3]);
  

  const calculateTotalWeight3 = (numberOfBags3, subcategories3, subsubcategories3, otherSubsubcategories3) => {
    if (type === 'AWL') {
        if (category3 === 'Maida') {

            const total = 0;
            const newTotalWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));


        } else if (category3 === 'Suji') {
            const total = 0;
            const newTotalWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));

        } else if (category3 === 'Mill Atta (R-Atta)' && subcategories3 === '50') {
            const total = 0;
            const newTotalWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));

        } else if (category3 === 'Atta Chakki') {
            if (subcategories3 === '5') {
                const NumberofTotalBags = numberOfBags3 * 6
                const weightOfBag = subcategories3
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                const newTotalWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));

            } else if (subcategories3 === '10') {
                const NumberofTotalBags = numberOfBags3 * 3
                const weightOfBag = subcategories3
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                const newTotalWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));

            } else {
                const weightOfBag = subcategories3
                const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
                const newTotalWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));
            }

        } else if (category3 === 'Atta Scheme') {
            if (subcategories3 === '10') {
                const NumberofTotalBags = numberOfBags3 * 3
                const weightOfBag = subcategories3
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                const newTotalWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));
            }
        }

        else {
            const weightOfBag = subcategories3
            const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
            const newTotalWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));
        }
    }
    else if (type === 'CRFM') {
        if (category3 === 'Chakki aata and bajra jo maize' && subcategories3 === 'Regular') {
            if (subsubcategories3 === '5') {
                const NumberofTotalBags = numberOfBags3 * 6
                const weightOfBag = subcategories3
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                const newTotalWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));
            } else if (subsubcategories3 === '10') {
                const NumberofTotalBags = numberOfBags3 * 3
                const weightOfBag = subcategories3
                const total = NumberofTotalBags && weightOfBag ? parseFloat(NumberofTotalBags) * parseFloat(weightOfBag) : '';
                const newTotalWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));
            } else {
                const weightOfBag = subsubcategories3 === 'Others' ? parseFloat(otherSubsubcategories3) : parseFloat(subsubcategories3);
                const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * weightOfBag : '';
                const newTotalWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));
            }
        } else {
            const weightOfBag = subsubcategories3 === 'Others' ? parseFloat(otherSubsubcategories3) : parseFloat(subsubcategories3);
            const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * weightOfBag : '';
            const newTotalWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));
        }
    }
    else if (isMaida_BulkerSelected) {
        const newTotalWeight3 = weightOfTruck;
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalWeight3: newTotalWeight3,
          }));
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
            const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));

        } else if (category3 === 'Maida' && subcategories3 === '50') {
            const weightOfBag = 50.12
            const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
            const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));

        } else if (category3 === 'Mill Atta (R-Atta)' && subcategories3 === '50') {
            const weightOfBag = 50.12
            const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
            const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));

        } else if (category3 === 'Atta Chakki') {

            if (subcategories3 === '10') {
                const WeightofMasterBags = numberOfBags3 * 0.075;
                const NumberofTotalBags = numberOfBags3 * 3
                const weightOfBag = 10.07
                const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                console.log("weightofMasterBag", total)
                const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));

            } else if (subcategories3 === '5') {
                const WeightofMasterBags = numberOfBags3 * 0.075;
                const NumberofTotalBags = numberOfBags3 * 6
                const weightOfBag = 5.05
                const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                console.log("weightofMasterBag", total)
                const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));

            } else if (subcategories3 === '30') {
                const weightOfBag = 30.090
                const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
                const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));

            } else if (subcategories3 === '50') {
                const weightOfBag = 50.12
                const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
                const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));
            }

        } else if (category3 === 'Maida' && subcategories3 === '10') {

            const WeightofMasterBags = numberOfBags3 * 0.075;
            const NumberofTotalBags = numberOfBags3 * 3
            const weightOfBag = 10.07
            const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
            console.log("weightofMasterBag", total)
            const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));

        } else if (category3 === 'Suji' && subcategories3 === '10') {

            const NumberofTotalBags = numberOfBags3
            const weightOfBag = 10.17
            const total = NumberofTotalBags && weightOfBag? parseFloat(NumberofTotalBags * weightOfBag) : '';
            console.log("weightofMasterBag", total)
            const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));

        } else if (category3 === 'Atta Scheme' && subcategories3 === '10') {

            const WeightofMasterBags = numberOfBags3 * 0.075;
            const NumberofTotalBags = numberOfBags * 3
            const weightOfBag = 10.07
            const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
            console.log("weightofMasterBag", total)
            const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));

        } else {
            const weightOfBag = subcategories3
            const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * parseFloat(weightOfBag) : '';
            const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));
        }
    }
    else if (type === 'CRFM') {

        if (category3 === 'Chakki aata and bajra jo maize' && subcategories3 === 'Regular') {
            if (subsubcategories3 === '5') {
                const WeightofMasterBags = numberOfBags3 * 0.075;
                const NumberofTotalBags = numberOfBags3 * 6
                const weightOfBag = 5.05
                const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                console.log("weightofMasterBag", total)
                const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));

            } else if (subsubcategories3 === '10') {
                const WeightofMasterBags = numberOfBags3 * 0.075;
                const NumberofTotalBags = numberOfBags3 * 3
                const weightOfBag = 10.07
                const total = NumberofTotalBags && weightOfBag && WeightofMasterBags ? parseFloat(NumberofTotalBags * weightOfBag) + parseFloat(WeightofMasterBags) : '';
                console.log("weightofMasterBag", total)
                const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));
            }
        } else {
            const weightOfBag = subsubcategories3 === 'Others' ? parseFloat(otherSubsubcategories3) : parseFloat(subsubcategories3);
            const total = numberOfBags3 && weightOfBag ? parseFloat(numberOfBags3) * weightOfBag : '';
            const newTotalTruckWeight3 = total ? total.toFixed(2) : '';
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));
        }
    }
    else if (isMaida_BulkerSelected) {
        const newTotalTruckWeight3 = weightOfTruck;
          setUpdateGatepass((prevState) => ({
            ...prevState,
            TotalTruckWeight3: newTotalTruckWeight3,
          }));
    }
};

useEffect(() => {
    calculateTotalTruckWeight3(numberOfBags3, subcategories3, subsubcategories3, otherSubsubcategories3);
}, [numberOfBags3, subcategories3, subsubcategories3, otherSubsubcategories3]);

  const selectedUnit3 = category3 ? categories3[category3]?.unit : "";
  const availableSubcategories3 = category3
    ? Object.keys(categories3[category3]?.subcategories3)
    : [];
  const availableSubsubcategories3 =
    subcategories3 && categories3[category3]?.subcategories3[subcategories3]
      ? categories3[category3].subcategories3[subcategories3]
      : [];

  const calculateTotalGatepassAmount = (
    totalValue,
    totalamount,
    totalValue1,
    totalamount1,
    totalValue2,
    totalamount2,
    totalValue3,
    totalamount3
  ) => {
    let total = 0;

    if (totalValue) total += totalValue;
    if (totalamount) total += totalamount;
    if (totalValue1) total += totalValue1;
    if (totalamount1) total += totalamount1;
    if (totalValue2) total += totalValue2;
    if (totalamount2) total += totalamount2;
    if (totalValue3) total += totalValue3;
    if (totalamount3) total += totalamount3;

    const newTotalGatepassAmount = total;
    setUpdateGatepass((prevState) => ({
      ...prevState,
      TotalGatepassAmount: newTotalGatepassAmount,
    }));
  };

  useEffect(() => {
    calculateTotalGatepassAmount(
      totalValue,
      totalamount,
      totalValue1,
      totalamount1,
      totalValue2,
      totalamount2,
      totalValue3,
      totalamount3
    );
  }, [
    totalValue,
    totalamount,
    totalValue1,
    totalamount1,
    totalValue2,
    totalamount2,
    totalValue3,
    totalamount3,
  ]);

  const calculateTotalGatepassWeight = (
    totalWeight,
    totalWeight11,
    totalWeight2,
    totalWeight3,
    weight,
    weight1,
    weight2,
    weight3
  ) => {
    let totalgweight = 0;

    if (totalWeight) totalgweight += parseFloat(totalWeight);
    if (weight) totalgweight += parseFloat(weight);
    if (totalWeight11) totalgweight += parseFloat(totalWeight11);
    if (weight1) totalgweight += parseFloat(weight1);
    if (totalWeight2) totalgweight += parseFloat(totalWeight2);
    if (weight2) totalgweight += parseFloat(weight2);
    if (totalWeight3) totalgweight += parseFloat(totalWeight3);
    if (weight3) totalgweight += parseFloat(weight3);

    const newTotalGatepassWeight = totalgweight ? totalgweight.toFixed(2) : "";
    setUpdateGatepass((prevState) => ({
      ...prevState,
      TotalGatepassWeight: newTotalGatepassWeight,
    }));
  };

  useEffect(() => {
    calculateTotalGatepassWeight(
      totalWeight,
      totalWeight11,
      totalWeight2,
      totalWeight3,
      weight,
      weight1,
      weight2,
      weight3
    );
  }, [
    totalWeight,
    totalWeight11,
    totalWeight2,
    totalWeight3,
    weight,
    weight1,
    weight2,
    weight3,
  ]);

  const calculateTotalGatepassTruckWeight = (
    TotalTruckWeight,
    TotalTruckWeight1,
    TotalTruckWeight2,
    TotalTruckWeight3
  ) => {
    let totaltweight = 0;

    if (TotalTruckWeight) totaltweight += parseFloat(TotalTruckWeight);
    if (weight) totaltweight += parseFloat(weight);
    if (TotalTruckWeight1) totaltweight += parseFloat(TotalTruckWeight1);
    if (weight1) totaltweight += parseFloat(weight1);
    if (TotalTruckWeight2) totaltweight += parseFloat(TotalTruckWeight2);
    if (weight2) totaltweight += parseFloat(weight2);
    if (TotalTruckWeight3) totaltweight += parseFloat(TotalTruckWeight3);
    if (weight3) totaltweight += parseFloat(weight3);

    const newTotalGatepassTruckWeight = totaltweight
      ? totaltweight.toFixed(2)
      : "";
    setUpdateGatepass((prevState) => ({
      ...prevState,
      TotalGatepassTruckWeight: newTotalGatepassTruckWeight,
    }));
  };

  useEffect(() => {
    calculateTotalGatepassTruckWeight(
      TotalTruckWeight,
      TotalTruckWeight1,
      TotalTruckWeight2,
      TotalTruckWeight3
    );
  }, [
    TotalTruckWeight,
    TotalTruckWeight1,
    TotalTruckWeight2,
    TotalTruckWeight3,
  ]);

  return (
    <div className="fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-y-auto">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg">Edit Product</h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <CgClose />
          </div>
        </div>
        <form className="max-w-lg mx-auto mt-10 p-6 bg-slate-100 shadow-md rounded-lg">
          <h1 className="text text-center font-bold bg-black text-cyan-200 py-3">
            ITEM 1
          </h1>
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Type:
            </label>
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

          {type === "AWL" && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="partyName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
                <label
                  htmlFor="batchnumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Batch Number:
                </label>
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
                <label
                  htmlFor="trucknumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
                <label
                  htmlFor="numberOfBags"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Number of Bags:
                </label>
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
                <label
                  htmlFor="category"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Product Name:
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={handleCategoryChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Product Name</option>
                  {Object.keys(categories).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {category && (
                <div className="mb-4">
                  <label
                    htmlFor="subcategories"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Weight of Bag:
                  </label>
                  <select
                    id="subcategories"
                    value={subcategories}
                    onChange={handleSubcategoriesChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Weight of Bag</option>
                    {availableSubcategories.map((subcat) => (
                      <option key={subcat} value={subcat}>
                        {subcat}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {category && (
                <div className="mb-4">
                  <label
                    htmlFor="subsubcategories"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Type of Product:
                  </label>
                  <select
                    id="subsubcategories"
                    value={subsubcategories}
                    onChange={handleSubsubcategoriesChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Type of Product</option>
                    {availableSubsubcategories.map((subsubcat) => (
                      <option key={subsubcat} value={subsubcat}>
                        {subsubcat}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {subsubcategories === "Others" && (
                <div className="mb-4">
                  <label
                    htmlFor="otherSubsubcategories"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Type of Product:
                  </label>
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
                <label
                  htmlFor="perbagprice"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Rate per Bag:
                </label>
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
                <label
                  htmlFor="loadingCharger"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Loading Charger:
                </label>
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
                <label
                  htmlFor="cgst"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  CGST:
                </label>
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
                <label
                  htmlFor="sgst"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  SGST:
                </label>
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
                <label
                  htmlFor="totalValue"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Total Value:
                </label>
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
                <label
                  htmlFor="totalWeight"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Total Weight:
                </label>
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
          {type === "CRFM" && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="partyName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
                <label
                  htmlFor="trucknumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
                <label
                  htmlFor="category"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Product Name:
                </label>
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
                  <label
                    htmlFor="subcategories"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Type of Product:
                  </label>
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
                    <label
                      htmlFor="weight"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Weight :
                    </label>
                    <input
                      type="number"
                      id="weight"
                      value={weight}
                      onChange={handleweightChange}
                      className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Weight"
                    />
                    <> Qtl.</>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="perqtlrate"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Per Qtl. Rate:
                    </label>
                    <input
                      type="number"
                      id="perqtlrate"
                      value={perqtlrate}
                      onChange={handleperqtlrateChange}
                      className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Per Qtl. Rate:"
                    />
                    <> RS./Qtl.</>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="totalamount"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Total Amount:
                    </label>
                    <LuIndianRupee />
                    <input
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
                    <label
                      htmlFor="subsubcategories"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Weight of Bag:
                    </label>
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
                    </select>
                    <> kg</>
                  </div>

                  {subsubcategories === "Others" && (
                    <div className="mb-4">
                      <label
                        htmlFor="otherSubsubcategories"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Weight of Bag:
                      </label>
                      <input
                        type="number"
                        id="otherSubsubcategories"
                        value={otherSubsubcategories}
                        onChange={handleOtherSubsubcategoriesChange}
                        placeholder="Enter weight"
                        className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <> KG</>
                    </div>
                  )}

                  <div className="mb-4">
                    <label
                      htmlFor="numberOfBags"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Number of Bags:
                    </label>
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
                    <label
                      htmlFor="perbagprice"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Rate per bag:
                    </label>
                    <input
                      type="number"
                      id="perbagprice"
                      value={perbagprice}
                      onChange={handlePerbagpriceChange}
                      placeholder="Rate per bag"
                      className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <> Rs./Bag</>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="loadingCharger"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Loading Charger:
                    </label>
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
                    <label
                      htmlFor="cgst"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      CGST:
                    </label>
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
                    <label
                      htmlFor="sgst"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      SGST:
                    </label>
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
                    <label
                      htmlFor="totalValue"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Total Value:
                    </label>
                    <> Rs.</>
                    <input
                      type="text"
                      id="totalValue"
                      value={totalValue}
                      readOnly
                      className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="perKgRate"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Per KG Rate:
                    </label>
                    <input
                      type="text"
                      id="perKgRate"
                      value={perKgRate}
                      readOnly
                      className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                    />
                    <> Rs./kg</>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="totalWeight"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Total Weight:
                    </label>
                    <input
                      type="text"
                      id="totalWeight"
                      value={totalWeight}
                      readOnly
                      className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                    />
                    <> {selectedUnit}</>
                  </div>
                </>
              )}

              {subcategories && isMaida_BulkerSelected && (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="weightOfTruck"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Weight of Truck:
                    </label>
                    <input
                      type="number"
                      id="weightOfTruck"
                      value={weightOfTruck}
                      onChange={handleWeightOfTruckChange}
                      placeholder="Weight of Truck"
                      className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <> Qtl.</>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="perqtlrate"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Per Qtl. Rate:
                    </label>
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
                    <label
                      htmlFor="productValue"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Total Price:
                    </label>
                    <input
                      type="text"
                      id="productValue"
                      value={productValue}
                      readOnly
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="totalWeight"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Total Weight:
                    </label>
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

          <button
            type="button"
            onClick={handleButtonClick}
            className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[350px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 text-center mb-4"
          >
            Add new Item
          </button>

          {showAdditionalColumns && (
            <>
              <h1 className="text text-center font-bold bg-black text-cyan-200 py-3">
                ITEM 2
              </h1>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Type:
                </label>
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

              {type === "AWL" && (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="partyName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
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
                    <label
                      htmlFor="batchnumber"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Batch Number:
                    </label>
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
                    <label
                      htmlFor="trucknumber"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
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
                    <label
                      htmlFor="numberOfBags1"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Number of Bags:
                    </label>
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
                    <label
                      htmlFor="category1"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Product Name:
                    </label>
                    <select
                      id="category1"
                      value={category1}
                      onChange={handleCategory1Change}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">Select Product Name</option>
                      {Object.keys(categories).map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {category1 && (
                    <div className="mb-4">
                      <label
                        htmlFor="subcategories1"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Weight1 of Bag:
                      </label>
                      <select
                        id="subcategories1"
                        value={subcategories1}
                        onChange={handleSubcategories1Change}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="">Select Weight1 of Bag</option>
                        {availableSubcategories1.map((subcat) => (
                          <option key={subcat} value={subcat}>
                            {subcat}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {category1 && (
                    <div className="mb-4">
                      <label
                        htmlFor="subsubcategories1"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Type of Product:
                      </label>
                      <select
                        id="subsubcategories1"
                        value={subsubcategories1}
                        onChange={handleSubsubcategories1Change}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="">Select Type of Product</option>
                        {availableSubsubcategories1.map((subsubcat) => (
                          <option key={subsubcat} value={subsubcat}>
                            {subsubcat}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {subsubcategories1 === "Others" && (
                    <div className="mb-4">
                      <label
                        htmlFor="otherSubsubcategories1"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Type of Product:
                      </label>
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
                    <label
                      htmlFor="perbagprice1"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Rate per Bag:
                    </label>
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
                    <label
                      htmlFor="loadingCharger1"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Loading Charger:
                    </label>
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
                    <label
                      htmlFor="cgst1"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      CGST1:
                    </label>
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
                    <label
                      htmlFor="sgst1"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      SGST1:
                    </label>
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
                    <label
                      htmlFor="totalValue1"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Total Value:
                    </label>
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
                    <label
                      htmlFor="totalWeight11"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Total Weight1:
                    </label>
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
              {type === "CRFM" && (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="partyName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
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
                    <label
                      htmlFor="trucknumber"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
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
                    <label
                      htmlFor="category1"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Product Name:
                    </label>
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
                      <label
                        htmlFor="subcategories1"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Type of Product:
                      </label>
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
                        <label
                          htmlFor="weight1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Weight1 :
                        </label>
                        <input
                          type="number"
                          id="weight1"
                          value={weight1}
                          onChange={handleweight1Change}
                          className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter Weight1"
                        />
                        <> Qtl.</>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="perqtlrate1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Per Qtl. Rate:
                        </label>
                        <input
                          type="number"
                          id="perqtlrate1"
                          value={perqtlrate1}
                          onChange={handleperqtlrate1Change}
                          className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter Per Qtl. Rate:"
                        />
                        <> RS./Qtl.</>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="totalamount1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Total Amount:
                        </label>
                        <LuIndianRupee />
                        <input
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
                        <label
                          htmlFor="subsubcategories1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Weight1 of Bag:
                        </label>
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
                        </select>
                        <> kg</>
                      </div>

                      {subsubcategories1 === "Others" && (
                        <div className="mb-4">
                          <label
                            htmlFor="otherSubsubcategories1"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Weight1 of Bag:
                          </label>
                          <input
                            type="number"
                            id="otherSubsubcategories1"
                            value={otherSubsubcategories1}
                            onChange={handleOtherSubsubcategories1Change}
                            placeholder="Enter weight1"
                            className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                          <> KG</>
                        </div>
                      )}

                      <div className="mb-4">
                        <label
                          htmlFor="numberOfBags1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Number of Bags:
                        </label>
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
                        <label
                          htmlFor="perbagprice1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Rate per bag:
                        </label>
                        <input
                          type="number"
                          id="perbagprice1"
                          value={perbagprice1}
                          onChange={handlePerbagprice1Change}
                          placeholder="Rate per bag"
                          className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <> Rs./Bag</>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="loadingCharger1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Loading Charger:
                        </label>
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
                        <label
                          htmlFor="cgst1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          CGST1:
                        </label>
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
                        <label
                          htmlFor="sgst1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          SGST1:
                        </label>
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
                        <label
                          htmlFor="totalValue1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Total Value:
                        </label>
                        <> Rs.</>
                        <input
                          type="text"
                          id="totalValue1"
                          value={totalValue1}
                          readOnly
                          className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="perKgRate1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Per KG Rate:
                        </label>
                        <input
                          type="text"
                          id="perKgRate1"
                          value={perKgRate1}
                          readOnly
                          className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                        />
                        <> Rs./kg</>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="totalWeight11"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Total Weight1:
                        </label>
                        <input
                          type="text"
                          id="totalWeight11"
                          value={totalWeight11}
                          readOnly
                          className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                        />
                        <> {selectedUnit}</>
                      </div>
                    </>
                  )}

                  {subcategories1 && isMaida_BulkerSelected1 && (
                    <>
                      <div className="mb-4">
                        <label
                          htmlFor="weight1OfTruck1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Weight1 of Truck:
                        </label>
                        <input
                          type="number"
                          id="weight1OfTruck1"
                          value={weight1OfTruck1}
                          onChange={handleWeight1OfTruck1Change}
                          placeholder="Weight1 of Truck"
                          className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <> Qtl.</>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="perqtlrate1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Per Qtl. Rate:
                        </label>
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
                        <label
                          htmlFor="productValue1"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Total Price:
                        </label>
                        <input
                          type="text"
                          id="productValue1"
                          value={productValue1}
                          readOnly
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="totalWeight11"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Total Weight1:
                        </label>
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
                onClick={handleButtonClick1}
                className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[350px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 text-center mb-4"
              >
                Add new Item
              </button>
              {showOneMoreAdditionalColumns && (
                <>
                  <h1 className="text text-center font-bold bg-black text-cyan-200 py-3">
                    ITEM 3
                  </h1>

                  <div className="mb-4">
                    <label
                      htmlFor="type"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Type:
                    </label>
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

                  {type === "AWL" && (
                    <>
                      <div className="mb-4">
                        <label
                          htmlFor="partyName"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
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
                        <label
                          htmlFor="batchnumber"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Batch Number:
                        </label>
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
                        <label
                          htmlFor="trucknumber"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
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
                        <label
                          htmlFor="numberOfBags2"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Number of Bags:
                        </label>
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
                        <label
                          htmlFor="category2"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Product Name:
                        </label>
                        <select
                          id="category2"
                          value={category2}
                          onChange={handleCategory2Change}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="">Select Product Name</option>
                          {Object.keys(categories2).map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>

                      {category2 && (
                        <div className="mb-4">
                          <label
                            htmlFor="subcategories2"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Weight2 of Bag:
                          </label>
                          <select
                            id="subcategories2"
                            value={subcategories2}
                            onChange={handleSubcategories2Change}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          >
                            <option value="">Select Weight2 of Bag</option>
                            {availableSubcategories2.map((subcat) => (
                              <option key={subcat} value={subcat}>
                                {subcat}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      {category2 && (
                        <div className="mb-4">
                          <label
                            htmlFor="subsubcategories2"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Type of Product:
                          </label>
                          <select
                            id="subsubcategories2"
                            value={subsubcategories2}
                            onChange={handleSubsubcategories2Change}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          >
                            <option value="">Select Type of Product</option>
                            {availableSubsubcategories2.map((subsubcat) => (
                              <option key={subsubcat} value={subsubcat}>
                                {subsubcat}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      {subsubcategories2 === "Others" && (
                        <div className="mb-4">
                          <label
                            htmlFor="otherSubsubcategories2"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Type of Product:
                          </label>
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
                        <label
                          htmlFor="perbagprice2"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Rate per Bag:
                        </label>
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
                        <label
                          htmlFor="loadingCharger2"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Loading Charger:
                        </label>
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
                        <label
                          htmlFor="cgst2"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          CGST2:
                        </label>
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
                        <label
                          htmlFor="sgst2"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          SGST2:
                        </label>
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
                        <label
                          htmlFor="totalValue2"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Total Value:
                        </label>
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
                        <label
                          htmlFor="totalWeight2"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Total Weight2:
                        </label>
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
                  {type === "CRFM" && (
                    <>
                      <div className="mb-4">
                        <label
                          htmlFor="partyName"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
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
                        <label
                          htmlFor="trucknumber"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
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
                        <label
                          htmlFor="category2"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Product Name:
                        </label>
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
                          <label
                            htmlFor="subcategories2"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Type of Product:
                          </label>
                          <select
                            id="subcategories2"
                            value={subcategories2}
                            onChange={handleSubcategories2Change}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          >
                            <option value="">Select type of Product</option>
                            {availableSubcategories2.map((subcat) => (
                              <option key={subcat} value={subcat}>
                                {subcat.charAt(0).toUpperCase() +
                                  subcat.slice(1)}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                      {category2 === "Refraction" && (
                        <>
                          <div className="mb-4">
                            <label
                              htmlFor="weight2"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Weight2 :
                            </label>
                            <input
                              type="number"
                              id="weight2"
                              value={weight2}
                              onChange={handleweight2Change}
                              className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              placeholder="Enter Weight2"
                            />
                            <> Qtl.</>
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="perqtlrate2"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Per Qtl. Rate:
                            </label>
                            <input
                              type="number"
                              id="perqtlrate2"
                              value={perqtlrate2}
                              onChange={handleperqtlrate2Change}
                              className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              placeholder="Enter Per Qtl. Rate:"
                            />
                            <> RS./Qtl.</>
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="totalamount2"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Total Amount:
                            </label>
                            <LuIndianRupee />
                            <input
                              type="text"
                              id="totalamount2"
                              value={totalamount2}
                              readOnly
                              className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                            />
                          </div>
                        </>
                      )}

                      {category2 !== "Refraction" &&
                        !isMaida_BulkerSelected2 && (
                          <>
                            <div className="mb-4">
                              <label
                                htmlFor="subsubcategories2"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                Weight2 of Bag:
                              </label>
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
                              </select>
                              <> kg</>
                            </div>

                            {subsubcategories2 === "Others" && (
                              <div className="mb-4">
                                <label
                                  htmlFor="otherSubsubcategories2"
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                  Weight2 of Bag:
                                </label>
                                <input
                                  type="number"
                                  id="otherSubsubcategories2"
                                  value={otherSubsubcategories2}
                                  onChange={handleOtherSubsubcategories2Change}
                                  placeholder="Enter weight2"
                                  className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <> KG</>
                              </div>
                            )}

                            <div className="mb-4">
                              <label
                                htmlFor="numberOfBags2"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                Number of Bags:
                              </label>
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
                              <label
                                htmlFor="perbagprice2"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                Rate per bag:
                              </label>
                              <input
                                type="number"
                                id="perbagprice2"
                                value={perbagprice2}
                                onChange={handlePerbagprice2Change}
                                placeholder="Rate per bag"
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                              <> Rs./Bag</>
                            </div>

                            <div className="mb-4">
                              <label
                                htmlFor="loadingCharger2"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                Loading Charger:
                              </label>
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
                              <label
                                htmlFor="cgst2"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                CGST2:
                              </label>
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
                              <label
                                htmlFor="sgst2"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                SGST2:
                              </label>
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
                              <label
                                htmlFor="totalValue2"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                Total Value:
                              </label>
                              <> Rs.</>
                              <input
                                type="text"
                                id="totalValue2"
                                value={totalValue2}
                                readOnly
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                              />
                            </div>

                            <div className="mb-4">
                              <label
                                htmlFor="perKgRate2"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                Per KG Rate:
                              </label>
                              <input
                                type="text"
                                id="perKgRate2"
                                value={perKgRate2}
                                readOnly
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                              />
                              <> Rs./kg</>
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="totalWeight2"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                Total Weight2:
                              </label>
                              <input
                                type="text"
                                id="totalWeight2"
                                value={totalWeight2}
                                readOnly
                                className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                              />
                              <> {selectedUnit1}</>
                            </div>
                          </>
                        )}

                      {subcategories2 && isMaida_BulkerSelected2 && (
                        <>
                          <div className="mb-4">
                            <label
                              htmlFor="weight2OfTruck2"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Weight2 of Truck:
                            </label>
                            <input
                              type="number"
                              id="weight2OfTruck2"
                              value={weight2OfTruck2}
                              onChange={handleWeight2OfTruck2Change}
                              placeholder="Weight2 of Truck"
                              className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <> Qtl.</>
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="perqtlrate2"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Per Qtl. Rate:
                            </label>
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
                            <label
                              htmlFor="productValue2"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Total Price:
                            </label>
                            <input
                              type="text"
                              id="productValue2"
                              value={productValue2}
                              readOnly
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="totalWeight2"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Total Weight2:
                            </label>
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
                  <button
                    type="button"
                    onClick={handleButtonClick2}
                    className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[350px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 text-center mb-4"
                  >
                    Add new Item
                  </button>
                  {showTwoMoreAdditionalColumns && (
                    <>
                      <h1 className="text text-center font-bold bg-black text-cyan-200 py-3">
                        ITEM 4
                      </h1>

                      <div className="mb-4">
                        <label
                          htmlFor="type"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Type:
                        </label>
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

                      {type === "AWL" && (
                        <>
                          <div className="mb-4">
                            <label
                              htmlFor="partyName"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
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
                            <label
                              htmlFor="batchnumber"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Batch Number:
                            </label>
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
                            <label
                              htmlFor="trucknumber"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
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
                            <label
                              htmlFor="numberOfBags3"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Number of Bags:
                            </label>
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
                            <label
                              htmlFor="category3"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Product Name:
                            </label>
                            <select
                              id="category3"
                              value={category3}
                              onChange={handleCategory3Change}
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                              <option value="">Select Product Name</option>
                              {Object.keys(categories3).map((cat) => (
                                <option key={cat} value={cat}>
                                  {cat}
                                </option>
                              ))}
                            </select>
                          </div>

                          {category3 && (
                            <div className="mb-4">
                              <label
                                htmlFor="subcategories3"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                Weight3 of Bag:
                              </label>
                              <select
                                id="subcategories3"
                                value={subcategories3}
                                onChange={handleSubcategories3Change}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              >
                                <option value="">Select Weight3 of Bag</option>
                                {availableSubcategories3.map((subcat) => (
                                  <option key={subcat} value={subcat}>
                                    {subcat}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}

                          {category3 && (
                            <div className="mb-4">
                              <label
                                htmlFor="subsubcategories3"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                Type of Product:
                              </label>
                              <select
                                id="subsubcategories3"
                                value={subsubcategories3}
                                onChange={handleSubsubcategories3Change}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              >
                                <option value="">Select Type of Product</option>
                                {availableSubsubcategories3.map((subsubcat) => (
                                  <option key={subsubcat} value={subsubcat}>
                                    {subsubcat}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}

                          {subsubcategories3 === "Others" && (
                            <div className="mb-4">
                              <label
                                htmlFor="otherSubsubcategories3"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                Type of Product:
                              </label>
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
                            <label
                              htmlFor="perbagprice3"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Rate per Bag:
                            </label>
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
                            <label
                              htmlFor="loadingCharger3"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Loading Charger:
                            </label>
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
                            <label
                              htmlFor="cgst3"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              CGST3:
                            </label>
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
                            <label
                              htmlFor="sgst3"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              SGST3:
                            </label>
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
                            <label
                              htmlFor="totalValue3"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Total Value:
                            </label>
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
                            <label
                              htmlFor="totalWeight3"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Total Weight3:
                            </label>
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
                      {type === "CRFM" && (
                        <>
                          <div className="mb-4">
                            <label
                              htmlFor="partyName"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
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
                            <label
                              htmlFor="trucknumber"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
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
                            <label
                              htmlFor="category3"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Product Name:
                            </label>
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
                              <label
                                htmlFor="subcategories3"
                                className="block text-gray-700 text-sm font-bold mb-2"
                              >
                                Type of Product:
                              </label>
                              <select
                                id="subcategories3"
                                value={subcategories3}
                                onChange={handleSubcategories3Change}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              >
                                <option value="">Select type of Product</option>
                                {availableSubcategories3.map((subcat) => (
                                  <option key={subcat} value={subcat}>
                                    {subcat.charAt(0).toUpperCase() +
                                      subcat.slice(1)}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                          {category3 === "Refraction" && (
                            <>
                              <div className="mb-4">
                                <label
                                  htmlFor="weight3"
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                  Weight3 :
                                </label>
                                <input
                                  type="number"
                                  id="weight3"
                                  value={weight3}
                                  onChange={handleweight3Change}
                                  className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  placeholder="Enter Weight3"
                                />
                                <> Qtl.</>
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="perqtlrate3"
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                  Per Qtl. Rate:
                                </label>
                                <input
                                  type="number"
                                  id="perqtlrate3"
                                  value={perqtlrate3}
                                  onChange={handleperqtlrate3Change}
                                  className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  placeholder="Enter Per Qtl. Rate:"
                                />
                                <> RS./Qtl.</>
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="totalamount3"
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                  Total Amount:
                                </label>
                                <LuIndianRupee />
                                <input
                                  type="text"
                                  id="totalamount3"
                                  value={totalamount3}
                                  readOnly
                                  className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                />
                              </div>
                            </>
                          )}

                          {category3 !== "Refraction" &&
                            !isMaida_BulkerSelected3 && (
                              <>
                                <div className="mb-4">
                                  <label
                                    htmlFor="subsubcategories3"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    Weight3 of Bag:
                                  </label>
                                  <select
                                    id="subsubcategories3"
                                    value={subsubcategories3}
                                    onChange={handleSubsubcategories3Change}
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  >
                                    <option value="">Weight3 of Bag</option>
                                    {availableSubsubcategories3.map(
                                      (subsubcat) => (
                                        <option
                                          key={subsubcat}
                                          value={subsubcat}
                                        >
                                          {subsubcat}
                                        </option>
                                      )
                                    )}
                                  </select>
                                  <> kg</>
                                </div>

                                {subsubcategories3 === "Others" && (
                                  <div className="mb-4">
                                    <label
                                      htmlFor="otherSubsubcategories3"
                                      className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                      Weight3 of Bag:
                                    </label>
                                    <input
                                      type="number"
                                      id="otherSubsubcategories3"
                                      value={otherSubsubcategories3}
                                      onChange={
                                        handleOtherSubsubcategories3Change
                                      }
                                      placeholder="Enter weight3"
                                      className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    <> KG</>
                                  </div>
                                )}

                                <div className="mb-4">
                                  <label
                                    htmlFor="numberOfBags3"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    Number of Bags:
                                  </label>
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
                                  <label
                                    htmlFor="perbagprice3"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    Rate per bag:
                                  </label>
                                  <input
                                    type="number"
                                    id="perbagprice3"
                                    value={perbagprice3}
                                    onChange={handlePerbagprice3Change}
                                    placeholder="Rate per bag"
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  />
                                  <> Rs./Bag</>
                                </div>

                                <div className="mb-4">
                                  <label
                                    htmlFor="loadingCharger3"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    Loading Charger:
                                  </label>
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
                                  <label
                                    htmlFor="cgst3"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    CGST3:
                                  </label>
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
                                  <label
                                    htmlFor="sgst3"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    SGST3:
                                  </label>
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
                                  <label
                                    htmlFor="totalValue3"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    Total Value:
                                  </label>
                                  <> Rs.</>
                                  <input
                                    type="text"
                                    id="totalValue3"
                                    value={totalValue3}
                                    readOnly
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                  />
                                </div>

                                <div className="mb-4">
                                  <label
                                    htmlFor="perKgRate3"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    Per KG Rate:
                                  </label>
                                  <input
                                    type="text"
                                    id="perKgRate3"
                                    value={perKgRate3}
                                    readOnly
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                  />
                                  <> Rs./kg</>
                                </div>
                                <div className="mb-4">
                                  <label
                                    htmlFor="totalWeight3"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    Total Weight3:
                                  </label>
                                  <input
                                    type="text"
                                    id="totalWeight3"
                                    value={totalWeight3}
                                    readOnly
                                    className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                  />
                                  <> {selectedUnit3}</>
                                </div>
                              </>
                            )}

                          {subcategories3 && isMaida_BulkerSelected3 && (
                            <>
                              <div className="mb-4">
                                <label
                                  htmlFor="weight3OfTruck3"
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                  Weight3 of Truck:
                                </label>
                                <input
                                  type="number"
                                  id="weight3OfTruck3"
                                  value={weight3OfTruck3}
                                  onChange={handleWeight3OfTruck3Change}
                                  placeholder="Weight3 of Truck"
                                  className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <> Qtl.</>
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="perqtlrate3"
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                  Per Qtl. Rate:
                                </label>
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
                                <label
                                  htmlFor="productValue3"
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                  Total Price:
                                </label>
                                <input
                                  type="text"
                                  id="productValue3"
                                  value={productValue3}
                                  readOnly
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
                                />
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="totalWeight3"
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                  Total Weight3:
                                </label>
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
                    </>
                  )}
                </>
              )}
            </>
          )}

          <div className="mb-4">
            <label
              htmlFor="TotalGatepassAmount"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Total Gatepass Amount:
            </label>
            <input
              type="text"
              id="TotalGatepassAmount"
              value={TotalGatepassAmount}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="TotalGatepassWeight"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Total Gatepass Weight:
            </label>
            <input
              type="text"
              id="TotalGatepassWeight"
              value={TotalGatepassWeight}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
            />
          </div>

          <button
            type="button"
            onClick={updateGatepass}
            className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[350px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 text-center"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AminEditGatepass;
