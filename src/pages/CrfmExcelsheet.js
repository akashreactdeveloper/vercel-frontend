import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify';
import moment from 'moment'
import ROLE from '../common/role';
import { useSelector } from 'react-redux';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const CrfmExcelsheet = () => {

  const [CrfmExcelsheet, setCrfmExcelsheet] = useState([])
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const user = useSelector(state => state?.user?.user)


  const fetchCrfmExcelsheet = async () => {
    const fetchData = await fetch(SummaryApi.AllAwlGatepass.url, {
      method: SummaryApi.AllAwlGatepass.method,
    })

    const dataResponse = await fetchData.json()

    if (dataResponse.success) {
      const filteredData = dataResponse.data.filter(entry => entry.type === 'CRFM');
      setCrfmExcelsheet(filteredData);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message)
    }

  }
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };



  const getFilteredData = () => {

    let filteredData = CrfmExcelsheet;

    if (startDate && endDate) {
      filteredData = filteredData.filter(entry => {
        const entryDate = moment(entry.createdAt).format('YYYY-MM-DD');
        return entryDate >= startDate && entryDate <= endDate;
      });
    }

    return filteredData.sort((a, b) => b.gatepassNumber - a.gatepassNumber);
  }


  useEffect(() => {
    fetchCrfmExcelsheet()
  }, [])

  const handleExport = () => {
    // Get the table element
    const table = document.getElementById('table-to-xls');

    // Convert table to a worksheet
    const worksheet = XLSX.utils.table_to_sheet(table);

    // Create a new workbook and add the worksheet to it
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Convert the workbook to a binary format
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Save the file using file-saver
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(file, 'table_data.xlsx');
  };

  const computeTotals = () => {
    const totals = {
      'Maida 50kg': 0,
      'Maida 45kg': 0,
      'Maida 40kg': 0,
      'Maida 30kg': 0,
      'Maida 25KG': 0,
      'Chakki Atta 50kg': 0,
      'Chakki Atta 40kg': 0,
      'Chakki Atta 30kg': 0,
      'Chakki Atta 35kg': 0,
      'Chakki Atta LD 5 kg': 0,
      'Chakki Atta LD 10 KG': 0,
      'Chakki Atta 5 kg': 0,
      'Chakki Atta 10 KG': 0,
      'Chakki Atta 26 Kg': 0,
      'Mill Atta 50 KG': 0,
      'Mill Atta 40 kg': 0,
      'Mill Atta 30kg': 0,
      'Mill Atta 10kg': 0,
      'Bran 50kg': 0,
      'Bran 49kg': 0,
      'Bran 48kg': 0,
      'Bran 44kg': 0,
      'Bran 35kg': 0,
      'Bran 34kg': 0,
      'Bran 45kg': 0,
      'Bran 30kg': 0,
      'Bran 28kg': 0,
      'Bran 25kg': 0,
      'Bran 43kg': 0,
      'Rawa/Suji 50kg': 0,
      'Rawa/Suji 25kg': 0,
      'Loose Material': 0,
      'Bulker': 0,
      'Scrap': 0,
      'Scrap Amount': 0,
      'Refraction': 0,
      'Refraction Amount': 0,
      'Bardana': 0,
      'Bardana Amount': 0,
      'FOC': 0,
      'Cash Sale': 0,
      'Total Amount': 0,
      'Total Weight': 0,
      'Difference': 0,
      'Kanda Weight': 0,
      'Kanda Difference': 0,
      'Number of Pending': 0,
      'Number of Cancel': 0,
      'Number of Verified': 0,
    }

    getFilteredData().forEach(el => {
      totals['Maida 50kg'] += (el?.subsubcategories === '50' && el?.category === "Maida" ? parseFloat(el?.numberOfBags) : 0) + (el?.subsubcategories1 === '50' && el?.category1 === "Maida" ? parseFloat(el?.numberOfBags1) : 0) + (el?.subsubcategories2 === '50' && el?.category2 === "Maida" ? parseFloat(el?.numberOfBags2) : 0) + (el?.subsubcategories3 === '50' && el?.category3 === "Maida" ? parseFloat(el?.numberOfBags3) : 0) + (el?.subsubcategories4 === '50' && el?.category4 === "Maida" ? parseFloat(el?.numberOfBags4) : 0);

      totals['Maida 45kg'] += el?.subsubcategories === '45' && el?.category === "Maida" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '45' && el?.category1 === "Maida" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '45' && el?.category2 === "Maida" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '45' && el?.category3 === "Maida" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '45' && el?.category4 === "Maida" ? el?.numberOfBags4 : 0

      totals['Maida 40kg'] += el?.subsubcategories === '40' && el?.category === "Maida" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '40' && el?.category1 === "Maida" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '40' && el?.category2 === "Maida" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '40' && el?.category3 === "Maida" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '40' && el?.category4 === "Maida" ? el?.numberOfBags4 : 0

      totals['Maida 30kg'] += (el?.subsubcategories === '30' && el?.category === "Maida" ? parseFloat(el?.numberOfBags) : 0) + (el?.subsubcategories1 === '30' && el?.category1 === "Maida" ? parseFloat(el?.numberOfBags1) : 0) + (el?.subsubcategories2 === '30' && el?.category2 === "Maida" ? parseFloat(el?.numberOfBags2) : 0) + (el?.subsubcategories3 === '30' && el?.category3 === "Maida" ? parseFloat(el?.numberOfBags3) : 0) + (el?.subsubcategories4 === '30' && el?.category4 === "Maida" ? parseFloat(el?.numberOfBags4) : 0);

      totals['Maida 25KG'] += el?.subsubcategories === '25' && el?.category === "Maida" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '25' && el?.category1 === "Maida" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '25' && el?.category2 === "Maida" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '25' && el?.category3 === "Maida" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '25' && el?.category4 === "Maida" ? el?.numberOfBags4 : 0

      totals['Chakki Atta 50kg'] += el?.subsubcategories === '50' && el?.category === "Chakki aata" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '50' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '50' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '50' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '50' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : 0

      totals['Chakki Atta 40kg'] += el?.subsubcategories === '40' && el?.category === "Chakki aata" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '40' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '40' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '40' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '40' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : 0

      totals['Chakki Atta 30kg'] += el?.subsubcategories === '30' && el?.category === "Chakki aata" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '30' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '30' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '30' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '30' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : 0

      totals['Chakki Atta 35kg'] += el?.subsubcategories === '35' && el?.category === "Chakki aata" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '35' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '35' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '35' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '35' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : 0

      totals['Chakki Atta LD 5 kg'] += el?.subcategories === 'LD' && el?.subsubcategories === '5' && el?.category === "Chakki aata" ? el?.numberOfBags : 0 || el?.subcategories1 === 'LD' && el?.subsubcategories1 === '5' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : 0 || el?.subcategories2 === 'LD' && el?.subsubcategories2 === '5' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : 0 || el?.subcategories3 === 'LD' && el?.subsubcategories3 === '5' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : 0 || el?.subcategories4 === 'LD' && el?.subsubcategories4 === '5' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : 0

      totals['Chakki Atta LD 10 KG'] += el?.subcategories === 'LD' && el?.subsubcategories === '10' && el?.category === "Chakki aata" ? el?.numberOfBags : 0 || el?.subcategories1 === 'LD' && el?.subsubcategories1 === '10' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : 0 || el?.subcategories2 === 'LD' && el?.subsubcategories2 === '10' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : 0 || el?.subcategories3 === 'LD' && el?.subsubcategories3 === '10' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : 0 || el?.subcategories4 === 'LD' && el?.subsubcategories4 === '10' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : 0

      totals['Chakki Atta 5 kg'] += el?.subcategories !== 'LD' && el?.subsubcategories === '5' && el?.category === "Chakki aata" ? el?.numberOfBags : 0 || el?.subcategories1 !== 'LD' && el?.subsubcategories1 === '5' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : 0 || el?.subcategories2 !== 'LD' && el?.subsubcategories2 === '5' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : 0 || el?.subcategories3 !== 'LD' && el?.subsubcategories3 === '5' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : 0 || el?.subcategories4 !== 'LD' && el?.subsubcategories4 === '5' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : 0

      totals['Chakki Atta 10 KG'] += el?.subcategories !== 'LD' && el?.subsubcategories === '10' && el?.category === "Chakki aata" ? el?.numberOfBags : 0 || el?.subcategories1 !== 'LD' && el?.subsubcategories1 === '10' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : 0 || el?.subcategories2 !== 'LD' && el?.subsubcategories2 === '10' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : 0 || el?.subcategories3 !== 'LD' && el?.subsubcategories3 === '10' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : 0 || el?.subcategories4 !== 'LD' && el?.subsubcategories4 === '10' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : 0

      totals['Chakki Atta 26 Kg'] += el?.subsubcategories === '26' && el?.category === "Chakki aata" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '26' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '26' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '26' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '26' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : 0

      totals['Mill Atta 50 KG'] += el?.subsubcategories === '50' && el?.category === "MILL ATTA" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '50' && el?.category1 === "MILL ATTA" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '50' && el?.category2 === "MILL ATTA" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '50' && el?.category3 === "MILL ATTA" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '50' && el?.category4 === "MILL ATTA" ? el?.numberOfBags4 : 0

      totals['Mill Atta 40 kg'] += el?.subsubcategories === '40' && el?.category === "MILL ATTA" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '40' && el?.category1 === "MILL ATTA" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '40' && el?.category2 === "MILL ATTA" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '40' && el?.category3 === "MILL ATTA" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '40' && el?.category4 === "MILL ATTA" ? el?.numberOfBags4 : 0

      totals['Mill Atta 30kg'] += el?.subsubcategories === '30' && el?.category === "MILL ATTA" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '30' && el?.category1 === "MILL ATTA" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '30' && el?.category2 === "MILL ATTA" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '30' && el?.category3 === "MILL ATTA" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '30' && el?.category4 === "MILL ATTA" ? el?.numberOfBags4 : 0

      totals['Mill Atta 10kg'] += el?.subsubcategories === '10' && el?.category === 'MILL ATTA' ? el?.numberOfBags : 0 || el?.subsubcategories1 === '10' && el?.category1 === 'MILL ATTA' ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '10' && el?.category2 === 'MILL ATTA' ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '10' && el?.category3 === 'MILL ATTA' ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '10' && el?.category4 === 'MILL ATTA' ? el?.numberOfBags4 : 0

      totals['Bran 50kg'] += el?.subsubcategories === '50' && el?.category === 'Bran' ? el?.numberOfBags : 0 || el?.subsubcategories1 === '50' && el?.category1 === 'Bran' ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '50' && el?.category2 === 'Bran' ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '50' && el?.category3 === 'Bran' ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '50' && el?.category4 === 'Bran' ? el?.numberOfBags4 : 0

      totals['Bran 49kg'] += el?.subsubcategories === '49' && el?.category === 'Bran' ? el?.numberOfBags : 0 || el?.subsubcategories1 === '49' && el?.category1 === 'Bran' ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '49' && el?.category2 === 'Bran' ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '49' && el?.category3 === 'Bran' ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '49' && el?.category4 === 'Bran' ? el?.numberOfBags4 : 0

      totals['Bran 48kg'] += el?.subsubcategories === '48' && el?.category === 'Bran' ? el?.numberOfBags : 0 || el?.subsubcategories1 === '48' && el?.category1 === 'Bran' ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '48' && el?.category2 === 'Bran' ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '48' && el?.category3 === 'Bran' ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '48' && el?.category4 === 'Bran' ? el?.numberOfBags4 : 0

      totals['Bran 44kg'] += el?.subsubcategories === '44' && el?.category === 'Bran' ? el?.numberOfBags : 0 || el?.subsubcategories1 === '44' && el?.category1 === 'Bran' ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '44' && el?.category2 === 'Bran' ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '44' && el?.category3 === 'Bran' ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '44' && el?.category4 === 'Bran' ? el?.numberOfBags4 : 0

      totals['Bran 35kg'] += el?.subsubcategories === '35' && el?.category === 'Bran' ? el?.numberOfBags : 0 || el?.subsubcategories1 === '35' && el?.category1 === 'Bran' ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '35' && el?.category2 === 'Bran' ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '35' && el?.category3 === 'Bran' ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '35' && el?.category4 === 'Bran' ? el?.numberOfBags4 : 0

      totals['Bran 34kg'] += el?.subsubcategories === '34' && el?.category === 'Bran' ? el?.numberOfBags : 0 || el?.subsubcategories1 === '34' && el?.category1 === 'Bran' ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '34' && el?.category2 === 'Bran' ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '34' && el?.category3 === 'Bran' ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '34' && el?.category4 === 'Bran' ? el?.numberOfBags4 : 0

      totals['Bran 45kg'] += el?.subsubcategories === '45' && el?.category === 'Bran' ? el?.numberOfBags : 0 || el?.subsubcategories1 === '45' && el?.category1 === 'Bran' ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '45' && el?.category2 === 'Bran' ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '45' && el?.category3 === 'Bran' ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '45' && el?.category4 === 'Bran' ? el?.numberOfBags4 : 0

      totals['Bran 30kg'] += el?.subsubcategories === '30' && el?.category === 'Bran' ? el?.numberOfBags : 0 || el?.subsubcategories1 === '30' && el?.category1 === 'Bran' ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '30' && el?.category2 === 'Bran' ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '30' && el?.category3 === 'Bran' ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '30' && el?.category4 === 'Bran' ? el?.numberOfBags4 : 0

      totals['Bran 28kg'] += el?.subsubcategories === '28' && el?.category === 'Bran' ? el?.numberOfBags : 0 || el?.subsubcategories1 === '28' && el?.category1 === 'Bran' ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '28' && el?.category2 === 'Bran' ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '28' && el?.category3 === 'Bran' ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '28' && el?.category4 === 'Bran' ? el?.numberOfBags4 : 0

      totals['Bran 25kg'] += el?.subsubcategories === '25' && el?.category === 'Bran' ? el?.numberOfBags : 0 || el?.subsubcategories1 === '25' && el?.category1 === 'Bran' ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '25' && el?.category2 === 'Bran' ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '25' && el?.category3 === 'Bran' ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '25' && el?.category4 === 'Bran' ? el?.numberOfBags4 : 0

      totals['Bran 43kg'] += el?.subsubcategories === '43' && el?.category === 'Bran' ? el?.numberOfBags : 0 || el?.subsubcategories1 === '43' && el?.category1 === 'Bran' ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '43' && el?.category2 === 'Bran' ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '43' && el?.category3 === 'Bran' ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '43' && el?.category4 === 'Bran' ? el?.numberOfBags4 : 0

      totals['Rawa/Suji 50kg'] += el?.subsubcategories === '50' && el?.category === "Rawa Suji" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '50' && el?.category1 === "Rawa Suji" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '50' && el?.category2 === "Rawa Suji" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '50' && el?.category3 === "Rawa Suji" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '50' && el?.category4 === "Rawa Suji" ? el?.numberOfBags4 : 0

      totals['Rawa/Suji 25kg'] += el?.subsubcategories === '25' && el?.category === "Rawa Suji" ? el?.numberOfBags : 0 || el?.subsubcategories1 === '25' && el?.category1 === "Rawa Suji" ? el?.numberOfBags1 : 0 || el?.subsubcategories2 === '25' && el?.category2 === "Rawa Suji" ? el?.numberOfBags2 : 0 || el?.subsubcategories3 === '25' && el?.category3 === "Rawa Suji" ? el?.numberOfBags3 : 0 || el?.subsubcategories4 === '25' && el?.category4 === "Rawa Suji" ? el?.numberOfBags4 : 0

      totals['Loose Material'] += el?.subsubcategories === 'Others' ? el?.otherSubsubcategories * 100 : 0 || el?.subsubcategories1 === 'Others' ? el?.otherSubsubcategories1 * 100 : 0 || el?.subsubcategories2 === 'Others' ? el?.otherSubsubcategories2 * 100 : 0 || el?.subsubcategories3 === 'Others' ? el?.otherSubsubcategories3 * 100 : 0 || el?.subsubcategories4 === 'Others' ? el?.otherSubsubcategories4 * 100 : 0 || el?.category === 'Wheat' ? el?.weightOfScrap * 100 : 0 || el?.category1 === 'Wheat' ? el?.weightOfScrap1 * 100 : 0 || el?.category2 === 'Wheat' ? el?.weightOfScrap2 * 100 : 0 || el?.category3 === 'Wheat' ? el?.weightOfScrap3 * 100 : 0 || el?.category4 === 'Wheat' ? el?.weightOfScrap4 * 100 : 0

      totals['Bulker'] += el?.subcategories === 'Maida_Bulker' && el?.category === 'Maida' ? el?.totalWeight : 0

      totals['Scrap'] += el?.category === 'scrap' ? el?.weightOfScrap * 100 : 0 || el?.category1 === 'scrap' ? el?.weightOfScrap1 * 100 : 0 || el?.category2 === 'scrap' ? el?.weightOfScrap2 * 100 : 0 || el?.category3 === 'scrap' ? el?.weightOfScrap3 * 100 : 0 || el?.category4 === 'scrap' ? el?.weightOfScrap4 * 100 : 0

      totals['Scrap Amount'] += el?.category === 'scrap' ? el?.productValue * 100 : 0 || el?.category1 === 'scrap' ? el?.productValue1 * 100 : 0 || el?.category2 === 'scrap' ? el?.productValue2 * 100 : 0 || el?.category3 === 'scrap' ? el?.productValue3 * 100 : 0 || el?.category4 === 'scrap' ? el?.productValue4 * 100 : 0

      totals['Refraction'] += el?.category === 'Refraction' ? el?.weight : 0 || el?.category1 === 'Refraction' ? el?.weight1 : 0 || el?.category2 === 'Refraction' ? el?.weight2 : 0 || el?.category3 === 'Refraction' ? el?.weight3 : 0 || el?.category4 === 'Refraction' ? el?.weight4 : 0

      totals['Refraction Amount'] += el?.category === 'Refraction' ? el?.totalamount * 100 : 0 || el?.category1 === 'Refraction' ? el?.totalamount1 * 100 : 0 || el?.category2 === 'Refraction' ? el?.totalamount2 * 100 : 0 || el?.category3 === 'Refraction' ? el?.totalamount3 * 100 : 0 || el?.category4 === 'Refraction' ? el?.totalamount4 * 100 : 0

      totals['Bardana'] += el?.category === 'Bardana' ? el?.numberOfBags : 0 || el?.category1 === 'Bardana' ? el?.numberOfBags1 : 0 || el?.category2 === 'Bardana' ? el?.numberOfBags2 : 0 || el?.category3 === 'Bardana' ? el?.numberOfBags3 : 0 || el?.category4 === 'Bardana' ? el?.numberOfBags4 : 0

      totals['Bardana Amount'] += el?.category === 'Bardana' ? el?.totalValue * 100 : 0 || el?.category1 === 'Bardana' ? el?.totalValue1 * 100 : 0 || el?.category2 === 'Bardana' ? el?.totalValue2 * 100 : 0 || el?.category3 === 'Bardana' ? el?.totalValue3 * 100 : 0 || el?.category4 === 'Bardana' ? el?.totalValue4 * 100 : 0

      totals['FOC'] += el?.TotalGatepassAmount === 0 ? el?.TotalGatepassWeight * 100 : 0

      totals['Cash Sale'] += el?.typeofsale === 'cash' ? el?.TotalGatepassAmount : 0

      totals['Total Amount'] += (el?.TotalGatepassAmount * 100) || 0

      totals['Total Weight'] += (el?.subcategories === 'Maida_Bulker' && el?.category === 'Maida' ? el?.TotalGatepassTruckWeight : el?.TotalGatepassTruckWeight) || 0

      totals['Difference'] += (el?.difference) || 0

      totals['Kanda Weight'] += (el?.kandaWeight * 100) || 0

      totals['Kanda Difference'] += (el?.weightDifference * 100) || 0

      totals['Number of Pending'] += el?.status === 'Pending' ? 1 : 0
      totals['Number of Cancel'] += el?.status === 'Cancel' ? 1 : 0
      totals['Number of Verified'] += el?.status === 'Verified' ? 1 : 0


    });

    return totals;
  };




  return (
    <div className='bg-white pb-4'>
      <div className='flex justify-center mb-4'>
        <input
          type='date'
          value={startDate}
          onChange={handleStartDateChange}
          className='border p-2 rounded mx-2'
          placeholder="Start Date"
        />
        <input
          type='date'
          value={endDate}
          onChange={handleEndDateChange}
          className='border p-2 rounded mx-2'
          placeholder="End Date"
        />
      </div>
      <div className='flex justify-center'>
        <button className='bg-green-400 px-10 py-2 mb-5' onClick={handleExport}>Download Excel File</button>
      </div>
      <table id="table-to-xls" className='w-full userTable'>
        <thead>
          <tr className='bg-blue-400 text-black border-black'>
            <th rowSpan={2}>G.P No.</th>
            <th rowSpan={2}>Date</th>
            <th rowSpan={2}>Bill no.</th>
            <th rowSpan={2}>Party Name</th>
            <th rowSpan={2}>Truck No.</th>
            <th colSpan={5}>Maida</th>
            <th colSpan={9}>Chakki Atta</th>
            <th colSpan={4}>MILL ATTA</th>
            <th colSpan={11}>Bran</th>
            <th colSpan={2}>Rawa/Suji</th>
            <th rowSpan={2}>Loose Material (kg)</th>
            <th rowSpan={2}>Remarks for Loose Material</th>
            <th rowSpan={2}>BULKER  Maida (KG)</th>
            <th colSpan={3}>Scrap</th>
            <th colSpan={3}>Refraction</th>
            <th colSpan={3}>Bardana (No. of bags)</th>
            <th rowSpan={2}>F.O.C in (Kg)</th>
            <th rowSpan={2}>Remarks for FOC Material</th>
            <th rowSpan={2}>Cash Sale (Rs.)</th>
            <th rowSpan={2}>Excel Sheet Calculated Amt (Rs.)</th>
            <th rowSpan={2}>Agent Name</th>
            <th rowSpan={2}>Total Weight</th>
            <th rowSpan={2}>Tally Amount (Rs.)</th>
            <th rowSpan={2}>Remarks</th>
            <th rowSpan={2}>Difference</th>
            <th rowSpan={2}>Kanda Weight</th>
            <th rowSpan={2}>Weight Difference</th>
            <th rowSpan={2}>Status</th>
            <th rowSpan={2}>Reason_for_Cancel</th>
          </tr>
          <tr className='bg-blue-400 text-black border-b border-black'>
            <th>50kg</th>
            <th>45kg</th>
            <th>40kg</th>
            <th>30kg</th>
            <th>25KG</th>
            <th>50kg</th>
            <th>40kg</th>
            <th>30kg</th>
            <th>35kg</th>
            <th>LD 5 kg</th>
            <th>LD 10 KG</th>
            <th>5 kg</th>
            <th>10 KG</th>
            <th>26 Kg</th>
            <th>50 KG</th>
            <th>40 kg</th>
            <th>30kg</th>
            <th>10kg</th>
            <th>50kg</th>
            <th>49kg</th>
            <th>48kg</th>
            <th>44kg</th>
            <th>35kg</th>
            <th>34kg</th>
            <th>45kg</th>
            <th>30kg</th>
            <th>28kg</th>
            <th>25kg</th>
            <th>43kg</th>
            <th>50kg</th>
            <th>25kg</th>
            <th>Kg</th>
            <th>Type</th>
            <th>Amt (Rs.)</th>
            <th>Kg</th>
            <th>Type</th>
            <th>Amt (Rs.)</th>
            <th>No. of Bags</th>
            <th>Type</th>
            <th>Amt (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          {
            getFilteredData().slice().reverse().map((el) => {

              console.log("total", el?.subsubcategories)
              console.log("total amount", el?.TotalGatepassAmount)
              return (
                <tr>
                  <td>{el?.gatepassNumber}</td>
                  <td>{moment(el?.createdAt).format('LL')}</td>
                  <td>{el?.billNumber}</td>
                  <td>{el?.partyName}</td>
                  <td>{el?.trucknumber}</td>
                  <td>
                    {(el?.subsubcategories === '50' && el?.category === "Maida" ? parseFloat(el?.numberOfBags) : '') +
                      (el?.subsubcategories1 === '50' && el?.category1 === "Maida" ? parseFloat(el?.numberOfBags1) : '') +
                      (el?.subsubcategories2 === '50' && el?.category2 === "Maida" ? parseFloat(el?.numberOfBags2) : '') +
                      (el?.subsubcategories3 === '50' && el?.category3 === "Maida" ? parseFloat(el?.numberOfBags3) : '') +
                      (el?.subsubcategories4 === '50' && el?.category4 === "Maida" ? parseFloat(el?.numberOfBags4) : '')}
                  </td>

                  <td>{el?.subsubcategories === '45' && el?.category === "Maida" ? el?.numberOfBags : '' || el?.subsubcategories1 === '45' && el?.category1 === "Maida" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '45' && el?.category2 === "Maida" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '45' && el?.category3 === "Maida" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '45' && el?.category4 === "Maida" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '40' && el?.category === "Maida" ? el?.numberOfBags : '' || el?.subsubcategories1 === '40' && el?.category1 === "Maida" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '40' && el?.category2 === "Maida" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '40' && el?.category3 === "Maida" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '40' && el?.category4 === "Maida" ? el?.numberOfBags4 : ''}</td>
                  <td>
                    {(el?.subsubcategories === '30' && el?.category === "Maida" ? parseFloat(el?.numberOfBags) : '') +
                      (el?.subsubcategories1 === '30' && el?.category1 === "Maida" ? parseFloat(el?.numberOfBags1) : '') +
                      (el?.subsubcategories2 === '30' && el?.category2 === "Maida" ? parseFloat(el?.numberOfBags2) : '') +
                      (el?.subsubcategories3 === '30' && el?.category3 === "Maida" ? parseFloat(el?.numberOfBags3) : '') +
                      (el?.subsubcategories4 === '30' && el?.category4 === "Maida" ? parseFloat(el?.numberOfBags4) : '')}
                  </td>
                  <td>{el?.subsubcategories === '25' && el?.category === "Maida" ? el?.numberOfBags : '' || el?.subsubcategories1 === '25' && el?.category1 === "Maida" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '25' && el?.category2 === "Maida" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '25' && el?.category3 === "Maida" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '25' && el?.category4 === "Maida" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '50' && el?.category === "Chakki aata" ? el?.numberOfBags : '' || el?.subsubcategories1 === '50' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '50' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '50' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '50' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '40' && el?.category === "Chakki aata" ? el?.numberOfBags : '' || el?.subsubcategories1 === '40' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '40' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '40' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '40' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : ''}</td>
                  
                  <td>{el?.subsubcategories === '30' && el?.category === "Chakki aata" ? el?.numberOfBags : '' || el?.subsubcategories1 === '30' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '30' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '30' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '30' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '35' && el?.category === "Chakki aata" ? el?.numberOfBags : '' || el?.subsubcategories1 === '35' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '35' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '35' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '35' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === 'LD' && el?.subsubcategories === '5' && el?.category === "Chakki aata" ? el?.numberOfBags : '' || el?.subcategories1 === 'LD' && el?.subsubcategories1 === '5' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : '' || el?.subcategories2 === 'LD' && el?.subsubcategories2 === '5' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : '' || el?.subcategories3 === 'LD' && el?.subsubcategories3 === '5' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : '' || el?.subcategories4 === 'LD' && el?.subsubcategories4 === '5' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === 'LD' && el?.subsubcategories === '10' && el?.category === "Chakki aata" ? el?.numberOfBags : '' || el?.subcategories1 === 'LD' && el?.subsubcategories1 === '10' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : '' || el?.subcategories2 === 'LD' && el?.subsubcategories2 === '10' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : '' || el?.subcategories3 === 'LD' && el?.subsubcategories3 === '10' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : '' || el?.subcategories4 === 'LD' && el?.subsubcategories4 === '10' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories !== 'LD' && el?.subsubcategories === '5' && el?.category === "Chakki aata" ? el?.numberOfBags : '' || el?.subcategories1 !== 'LD' && el?.subsubcategories1 === '5' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : '' || el?.subcategories2 !== 'LD' && el?.subsubcategories2 === '5' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : '' || el?.subcategories3 !== 'LD' && el?.subsubcategories3 === '5' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : '' || el?.subcategories4 !== 'LD' && el?.subsubcategories4 === '5' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories !== 'LD' && el?.subsubcategories === '10' && el?.category === "Chakki aata" ? el?.numberOfBags : '' || el?.subcategories1 !== 'LD' && el?.subsubcategories1 === '10' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : '' || el?.subcategories2 !== 'LD' && el?.subsubcategories2 === '10' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : '' || el?.subcategories3 !== 'LD' && el?.subsubcategories3 === '10' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : '' || el?.subcategories4 !== 'LD' && el?.subsubcategories4 === '10' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '26' && el?.category === "Chakki aata" ? el?.numberOfBags : '' || el?.subsubcategories1 === '26' && el?.category1 === "Chakki aata" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '26' && el?.category2 === "Chakki aata" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '26' && el?.category3 === "Chakki aata" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '26' && el?.category4 === "Chakki aata" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '50' && el?.category === "MILL ATTA" ? el?.numberOfBags : '' || el?.subsubcategories1 === '50' && el?.category1 === "MILL ATTA" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '50' && el?.category2 === "MILL ATTA" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '50' && el?.category3 === "MILL ATTA" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '50' && el?.category4 === "MILL ATTA" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '40' && el?.category === "MILL ATTA" ? el?.numberOfBags : '' || el?.subsubcategories1 === '40' && el?.category1 === "MILL ATTA" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '40' && el?.category2 === "MILL ATTA" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '40' && el?.category3 === "MILL ATTA" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '40' && el?.category4 === "MILL ATTA" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '30' && el?.category === "MILL ATTA" ? el?.numberOfBags : '' || el?.subsubcategories1 === '30' && el?.category1 === "MILL ATTA" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '30' && el?.category2 === "MILL ATTA" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '30' && el?.category3 === "MILL ATTA" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '30' && el?.category4 === "MILL ATTA" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '10' && el?.category === 'MILL ATTA' ? el?.numberOfBags : '' || el?.subsubcategories1 === '10' && el?.category1 === 'MILL ATTA' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '10' && el?.category2 === 'MILL ATTA' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '10' && el?.category3 === 'MILL ATTA' ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '10' && el?.category4 === 'MILL ATTA' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '50' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '50' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '50' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '50' && el?.category3 === 'Bran' ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '50' && el?.category4 === 'Bran' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '49' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '49' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '49' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '49' && el?.category3 === 'Bran' ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '49' && el?.category4 === 'Bran' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '48' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '48' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '48' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '48' && el?.category3 === 'Bran' ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '48' && el?.category4 === 'Bran' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '44' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '44' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '44' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '44' && el?.category3 === 'Bran' ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '44' && el?.category4 === 'Bran' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '35' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '35' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '35' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '35' && el?.category3 === 'Bran' ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '35' && el?.category4 === 'Bran' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '34' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '34' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '34' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '34' && el?.category3 === 'Bran' ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '34' && el?.category4 === 'Bran' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '45' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '45' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '45' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '45' && el?.category3 === 'Bran' ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '45' && el?.category4 === 'Bran' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '30' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '30' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '30' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '30' && el?.category3 === 'Bran' ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '30' && el?.category4 === 'Bran' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '28' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '28' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '28' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '28' && el?.category3 === 'Bran' ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '28' && el?.category4 === 'Bran' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '25' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '25' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '25' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '25' && el?.category3 === 'Bran' ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '25' && el?.category4 === 'Bran' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '43' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '43' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '43' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '43' && el?.category3 === 'Bran' ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '43' && el?.category4 === 'Bran' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '50' && el?.category === "Rawa Suji" ? el?.numberOfBags : '' || el?.subsubcategories1 === '50' && el?.category1 === "Rawa Suji" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '50' && el?.category2 === "Rawa Suji" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '50' && el?.category3 === "Rawa Suji" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '50' && el?.category4 === "Rawa Suji" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === '25' && el?.category === "Rawa Suji" ? el?.numberOfBags : '' || el?.subsubcategories1 === '25' && el?.category1 === "Rawa Suji" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '25' && el?.category2 === "Rawa Suji" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '25' && el?.category3 === "Rawa Suji" ? el?.numberOfBags3 : '' || el?.subsubcategories4 === '25' && el?.category4 === "Rawa Suji" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subsubcategories === 'Others' ? el?.otherSubsubcategories : '' || el?.subsubcategories1 === 'Others' ? el?.otherSubsubcategories1 : '' || el?.subsubcategories2 === 'Others' ? el?.otherSubsubcategories2 : '' || el?.subsubcategories3 === 'Others' ? el?.otherSubsubcategories3 : '' || el?.subsubcategories4 === 'Others' ? el?.otherSubsubcategories4 : '' || el?.category === 'Wheat' ? el?.weightOfScrap : '' || el?.category1 === 'Wheat' ? el?.weightOfScrap1 : '' || el?.category2 === 'Wheat' ? el?.weightOfScrap2 : '' || el?.category3 === 'Wheat' ? el?.weightOfScrap3 : '' || el?.category4 === 'Wheat' ? el?.weightOfScrap4 : ''}</td>

                  <td>{el?.subsubcategories === 'Others' ? el?.category + ' ' + el?.subcategories + ' ' + el?.numberOfBags + ' ' + 'Bags' : '' || el?.subsubcategories1 === 'Others' ? el?.category1 + ' ' + el?.subcategories1 + ' ' + el?.numberOfBags1 + ' ' + 'Bags' : '' || el?.subsubcategories2 === 'Others' ? el?.category2 + ' ' + el?.subcategories2 + ' ' + el?.numberOfBags2 + ' ' + 'Bags' : '' || el?.subsubcategories3 === 'Others' ? el?.category3 + ' ' + el?.subcategories3 + ' ' + el?.numberOfBags3 + ' ' + 'Bags' : '' || el?.subsubcategories4 === 'Others' ? el?.category4 + ' ' + el?.subcategories4 + ' ' + el?.numberOfBags4 + ' ' + 'Bags' : '' || el?.category === 'Wheat' ? el?.category : '' || el?.category1 === 'Wheat' ? el?.category1 : '' || el?.category2 === 'Wheat' ? el?.category2 : '' || el?.category3 === 'Wheat' ? el?.category3 : '' || el?.category4 === 'Wheat' ? el?.category4 : ''}</td>

                  <td>{el?.subcategories === 'Maida_Bulker' && el?.category === 'Maida' ? el?.totalWeight : ''}</td>

                  <td>{el?.category === 'scrap' ? el?.weightOfScrap : ''}<br />{el?.category1 === 'scrap' ? el?.weightOfScrap1 : ''}<br />{el?.category2 === 'scrap' ? el?.weightOfScrap2 : ''}<br />{el?.category3 === 'scrap' ? el?.weightOfScrap3 : ''}<br />{el?.category4 === 'scrap' ? el?.weightOfScrap4 : ''}</td>

                  <td>{el?.category === 'scrap' ? el?.typeOfScrap : ''}<br />{el?.category1 === 'scrap' ? el?.typeOfScrap1 : ''}<br />{el?.category2 === 'scrap' ? el?.typeOfScrap2 : ''}<br />{el?.category3 === 'scrap' ? el?.typeOfScrap3 : ''}<br />{el?.category4 === 'scrap' ? el?.typeOfScrap4 : ''}</td>

                  <td>{el?.category === 'scrap' ? el?.productValue : ''}<br />{el?.category1 === 'scrap' ? el?.productValue1 : ''}<br />{el?.category2 === 'scrap' ? el?.productValue2 : ''}<br />{el?.category3 === 'scrap' ? el?.productValue3 : ''}<br />{el?.category4 === 'scrap' ? el?.productValue4 : ''}</td>

                  <td>{el?.category === 'Refraction' ? el?.weight : ''}<br />{el?.category1 === 'Refraction' ? el?.weight1 : ''}<br />{el?.category2 === 'Refraction' ? el?.weight2 : ''}<br />{el?.category3 === 'Refraction' ? el?.weight3 : ''}<br />{el?.category4 === 'Refraction' ? el?.weight4 : ''}</td>

                  <td>{el?.category === 'Refraction' ? el?.subcategories : ''}<br />{el?.category1 === 'Refraction' ? el?.subcategories1 : ''}<br />{el?.category2 === 'Refraction' ? el?.subcategories2 : ''}<br />{el?.category3 === 'Refraction' ? el?.subcategories3 : ''}<br />{el?.category4 === 'Refraction' ? el?.subcategories4 : ''}</td>

                  <td>{el?.category === 'Refraction' ? (el?.totalamount) : ''}<br />{el?.category1 === 'Refraction' ? (el?.totalamount1) : ''}<br />{el?.category2 === 'Refraction' ? (el?.totalamount2) : ''}<br />{el?.category3 === 'Refraction' ? (el?.totalamount3) : ''}<br />{el?.category4 === 'Refraction' ? (el?.totalamount4) : ''}</td>

                  <td>{el?.category === 'Bardana' ? el?.numberOfBags : ''}<br />{el?.category1 === 'Bardana' ? el?.numberOfBags1 : ''}<br />{el?.category2 === 'Bardana' ? el?.numberOfBags2 : ''}<br />{el?.category3 === 'Bardana' ? el?.numberOfBags3 : ''}<br />{el?.category4 === 'Bardana' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.category === 'Bardana' ? el?.subcategories : ''}<br />{el?.category1 === 'Bardana' ? el?.subcategories1 : ''}<br />{el?.category2 === 'Bardana' ? el?.subcategories2 : ''}<br />{el?.category3 === 'Bardana' ? el?.subcategories3 : ''}<br />{el?.category4 === 'Bardana' ? el?.subcategories4 : ''}</td>

                  <td>{el?.category === 'Bardana' ? el?.totalValue : ''}<br />{el?.category1 === 'Bardana' ? el?.totalValue1 : ''}<br />{el?.category2 === 'Bardana' ? el?.totalValue2 : ''}<br />{el?.category3 === 'Bardana' ? el?.totalValue3 : ''}<br />{el?.category4 === 'Bardana' ? el?.totalValue4 : ''}</td>

                  <td>{el?.TotalGatepassAmount === 0 ? el?.TotalGatepassWeight : ''}</td>

                  <td>{el?.TotalGatepassAmount === 0 ? el?.category + ' ' + el?.subcategories + ' ' + el?.numberOfBags + ' ' + 'Bags' : ''}</td>

                  <td>{el?.typeofsale === 'cash' ? el?.TotalGatepassAmount : ''}</td>
                  <td>{(el?.TotalGatepassAmount).toFixed(2)}</td>
                  <td></td>
                  <td>{el?.subcategories === 'Maida_Bulker' && el?.category === 'Maida' ? el?.TotalGatepassTruckWeight / 100 : el?.TotalGatepassTruckWeight / 100}</td>
                  <td></td>
                  <td>{el?.remarks}</td>
                  <td>{el?.difference}</td>
                  <td>{(el?.kandaWeight / 100).toFixed(2)}</td>
                  <td>{el?.weightDifference}</td>
                  <td className={
                    el?.status === 'Pending'
                      ? 'bg-yellow-500'
                      : el?.status === 'Cancel'
                        ? 'bg-red-600 text-white'
                        : 'bg-blue-500'
                  }>
                    {el?.status}
                  </td>
                  <td>{el?.status === 'Cancel' ? `Cancel By - ${el?.canceledBy} ${el?.reason}` : ''}</td>
                </tr>
              )
            })
          }
          <tr className='bg-gray-200 font-bold border-2 border-black'>
            <td className='border-2 border-black' colSpan={5}>Total</td>
            <td className='border-2 border-black'>{computeTotals()['Maida 50kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Maida 45kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Maida 40kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Maida 30kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Maida 25KG']}</td>
            <td className='border-2 border-black'>{computeTotals()['Chakki Atta 50kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Chakki Atta 40kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Chakki Atta 30kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Chakki Atta 35kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Chakki Atta LD 5 kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Chakki Atta LD 10 KG']}</td>
            <td className='border-2 border-black'>{computeTotals()['Chakki Atta 5 kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Chakki Atta 10 KG']}</td>
            <td className='border-2 border-black'>{computeTotals()['Chakki Atta 26 Kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Mill Atta 50 KG']}</td>
            <td className='border-2 border-black'>{computeTotals()['Mill Atta 40 kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Mill Atta 30kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Mill Atta 10kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Bran 50kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Bran 49kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Bran 48kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Bran 44kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Bran 35kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Bran 34kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Bran 45kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Bran 30kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Bran 28kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Bran 25kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Bran 43kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Rawa/Suji 50kg']}</td>
            <td className='border-2 border-black'>{computeTotals()['Rawa/Suji 25kg']}</td>
            <td className='border-2 border-black' colSpan={2}>{((computeTotals()['Loose Material']) / 100)}</td>
            <td className='border-2 border-black'>{((computeTotals()['Bulker']) / 100)}</td>
            <td className='border-2 border-black' colSpan={2}>{((computeTotals()['Scrap']) / 100)}</td>
            <td className='border-2 border-black'>{((computeTotals()['Scrap Amount']) / 100)}</td>
            <td className='border-2 border-black' colSpan={2}>{(computeTotals()['Refraction']) / 100}</td>
            <td className='border-2 border-black'>{((computeTotals()['Refraction Amount']) / 100).toFixed(2)}</td>
            <td className='border-2 border-black' colSpan={2}>{computeTotals()['Bardana']}</td>
            <td className='border-2 border-black'>{((computeTotals()['Bardana Amount']) / 100)}</td>
            <td className='border-2 border-black' colSpan={2}>{((computeTotals()['FOC']) / 100)}</td>
            <td className='border-2 border-black'>{computeTotals()['Cash Sale']}</td>
            <td className='border-2 border-black'>{((computeTotals()['Total Amount']) / 100)}</td>
            <td className='border-2 border-black'></td>
            <td className='border-2 border-black'>{((computeTotals()['Total Weight']) / 100)}</td>
            <td className='border-2 border-black'></td>
            <td className='border-2 border-black'></td>
            <td className='border-2 border-black'>{computeTotals()['Difference']}</td>
            <td className='border-2 border-black'>{((computeTotals()['Kanda Weight']) / 10000)}</td>
            <td className='border-2 border-black'>{((computeTotals()['Kanda Difference']) / 10000)}</td>
            <td colSpan={2} className='border-2 border-black'>Total Pending : {computeTotals()['Number of Pending']}<br />Total Cancel : {computeTotals()['Number of Cancel']}<br />Total Verfied : {computeTotals()['Number of Verified']}</td>
          </tr>
        </tbody>
      </table>


    </div>
  )
}

export default CrfmExcelsheet
