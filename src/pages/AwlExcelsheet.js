import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify';
import moment from 'moment'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const AwlExcelsheet = () => {
  const [AwlExcelsheet, setAwlExcelsheet] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchAwlExcelsheet = async () => {
    const fetchData = await fetch(SummaryApi.AllAwlGatepass.url, {
      method: SummaryApi.AllAwlGatepass.method,
    })

    const dataResponse = await fetchData.json()

    if (dataResponse.success) {
      const filteredData = dataResponse.data.filter(entry => entry.type === 'AWL');
      setAwlExcelsheet(filteredData);
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
    let filteredData = AwlExcelsheet;

    // Filter by selected date if a date is selected
    if (startDate && endDate) {
      filteredData = filteredData.filter(entry => {
        const entryDate = moment(entry.createdAt).format('YYYY-MM-DD');
        return entryDate >= startDate && entryDate <= endDate;
      });
    }

    // Sort by gatepassNumber in ascending order
    return filteredData.sort((a, b) => b.gatepassNumber - a.gatepassNumber);
  }

  const computeTotals = () => {
    const totals = {
      '5kg': 0,
      '10kg': 0,
      '11kg': 0,
      '30kg': 0,
      '50kg': 0,
      'R-Atta 50kg': 0,
      'Maida 10kg': 0,
      'Maida 30kg SM': 0,
      'Maida 30kg MP': 0,
      'Maida 50kg SM': 0,
      'Maida 50kg MP': 0,
      'Suji 10kg': 0,
      'Besan 12kg': 0,
      'Atta Weight(Qtl.)': 0,
      'Truck Weight(Qtl.)': 0,
      'weighing scale(Qtl.)' : 0,
      'weight Difference(Kg.)' : 0,
    };

    getFilteredData().forEach(el => {
      totals['5kg'] += el?.subcategories === '5' && el?.category === "Atta Chakki" ? el?.numberOfBags : 0 || el?.subcategories1 === '5' && el?.category1 === "Atta Chakki" ? el?.numberOfBags1 : 0 || el?.subcategories2 === '5' && el?.category2 === "Atta Chakki" ? el?.numberOfBags2 : 0 || el?.subcategories3 === '5' && el?.category3 === "Atta Chakki" ? el?.numberOfBags3 : 0 || el?.subcategories4 === '5' && el?.category4 === "Atta Chakki" ? el?.numberOfBags4 : 0

      totals['10kg'] += el?.subcategories === '10' && el?.category === "Atta Scheme" ? el?.numberOfBags : 0 || el?.subcategories1 === '10' && el?.category1 === "Atta Scheme" ? el?.numberOfBags1 : 0 || el?.subcategories2 === '10' && el?.category2 === "Atta Scheme" ? el?.numberOfBags2 : 0 || el?.subcategories3 === '10' && el?.category3 === "Atta Scheme" ? el?.numberOfBags3 : 0 || el?.subcategories4 === '10' && el?.category4 === "Atta Scheme" ? el?.numberOfBags4 : 0 || el?.subcategories === '10' && el?.category === "Atta Chakki" ? el?.numberOfBags : 0 || el?.subcategories1 === '10' && el?.category1 === "Atta Chakki" ? el?.numberOfBags1 : 0 || el?.subcategories2 === '10' && el?.category2 === "Atta Chakki" ? el?.numberOfBags2 : 0 || el?.subcategories3 === '10' && el?.category3 === "Atta Chakki" ? el?.numberOfBags3 : 0 || el?.subcategories4 === '10' && el?.category4 === "Atta Chakki" ? el?.numberOfBags4 : 0  

      totals['11kg'] += el?.subcategories === '11' && el?.category === "Atta Chakki" ? el?.numberOfBags : 0 || el?.subcategories1 === '11' && el?.category1 === "Atta Chakki" ? el?.numberOfBags1 : 0 || el?.subcategories2 === '11' && el?.category2 === "Atta Chakki" ? el?.numberOfBags2 : 0 || el?.subcategories3 === '11' && el?.category3 === "Atta Chakki" ? el?.numberOfBags3 : 0 || el?.subcategories4 === '11' && el?.category4 === "Atta Chakki" ? el?.numberOfBags4 : 0

      totals['30kg'] += el?.subcategories === '30' && el?.category === "Atta Chakki" ? el?.numberOfBags : 0 || el?.subcategories1 === '30' && el?.category1 === "Atta Chakki" ? el?.numberOfBags1 : 0 || el?.subcategories2 === '30' && el?.category2 === "Atta Chakki" ? el?.numberOfBags2 : 0 || el?.subcategories3 === '30' && el?.category3 === "Atta Chakki" ? el?.numberOfBags3 : 0 || el?.subcategories4 === '30' && el?.category4 === "Atta Chakki" ? el?.numberOfBags4 : 0

      
      totals['50kg'] += el?.subcategories === '50' && el?.category === "Atta Chakki" ? el?.numberOfBags : 0 || el?.subcategories1 === '50' && el?.category1 === "Atta Chakki" ? el?.numberOfBags1 : 0 || el?.subcategories2 === '50' && el?.category2 === "Atta Chakki" ? el?.numberOfBags2 : 0 || el?.subcategories3 === '50' && el?.category3 === "Atta Chakki" ? el?.numberOfBags3 : 0 || el?.subcategories4 === '50' && el?.category4 === "Atta Chakki" ? el?.numberOfBags4 : 0
      
      totals['R-Atta 50kg'] += el?.subcategories === '50' && el?.category === "Mill Atta (R-Atta)" ? el?.numberOfBags : 0 || el?.subcategories1 === '50' && el?.category1 === "Mill Atta (R-Atta)" ? el?.numberOfBags1 : 0 || el?.subcategories2 === '50' && el?.category2 === "Mill Atta (R-Atta)" ? el?.numberOfBags2 : 0 || el?.subcategories3 === '50' && el?.category3 === "Mill Atta (R-Atta)" ? el?.numberOfBags3 : 0 || el?.subcategories4 === '50' && el?.category4 === "Mill Atta (R-Atta)" ? el?.numberOfBags4 : 0
      
      totals['Maida 10kg'] += el?.subcategories === '10' && el?.category === 'Maida' ? el?.numberOfBags : 0 || el?.subcategories1 === '10' && el?.category1 === 'Maida' ? el?.numberOfBags1 : 0 || el?.subcategories2 === '10' && el?.category2 === 'Maida' ? el?.numberOfBags2 : 0 || el?.subcategories3 === '10' && el?.category3 === 'Maida' ? el?.numberOfBags3 : 0 || el?.subcategories4 === '10' && el?.category4 === 'Maida' ? el?.numberOfBags4 : 0
      
      totals['Maida 30kg SM'] += el?.subcategories === '30' && el?.category === 'Maida' && el?.subsubcategories === 'Super Maida' ? el?.numberOfBags : 0 || el?.subcategories1 === '30' && el?.category1 === 'Maida' && el?.subsubcategories1 === 'Super Maida' ? el?.numberOfBags1 : 0 || el?.subcategories2 === '30' && el?.category2 === 'Maida' && el?.subsubcategories2 === 'Super Maida' ? el?.numberOfBags2 : 0 || el?.subcategories3 === '30' && el?.category3 === 'Maida' && el?.subsubcategories3 === 'Super Maida' ? el?.numberOfBags3 : 0 || el?.subcategories4 === '30' && el?.category4 === 'Maida' && el?.subsubcategories4 === 'Super Maida' ? el?.numberOfBags4 : 0
      
      totals['Maida 30kg MP'] += el?.subcategories === '30' && el?.category === 'Maida' && el?.subsubcategories === 'Multipurpose Maida' ? el?.numberOfBags : 0 || el?.subcategories1 === '30' && el?.category1 === 'Maida' && el?.subsubcategories1 === 'Multipurpose Maida' ? el?.numberOfBags1 : 0 || el?.subcategories2 === '30' && el?.category2 === 'Maida' && el?.subsubcategories2 === 'Multipurpose Maida' ? el?.numberOfBags2 : 0 || el?.subcategories3 === '30' && el?.category3 === 'Maida' && el?.subsubcategories3 === 'Multipurpose Maida' ? el?.numberOfBags3 : 0 || el?.subcategories4 === '30' && el?.category4 === 'Maida' && el?.subsubcategories4 === 'Multipurpose Maida' ? el?.numberOfBags4 : 0
      
      totals['Maida 50kg SM'] += el?.subcategories === '50' && el?.category === 'Maida' && el?.subsubcategories === 'Super Maida' ? el?.numberOfBags : 0 || el?.subcategories1 === '50' && el?.category1 === 'Maida' && el?.subsubcategories1 === 'Super Maida' ? el?.numberOfBags1 : 0 || el?.subcategories2 === '50' && el?.category2 === 'Maida' && el?.subsubcategories2 === 'Super Maida' ? el?.numberOfBags2 : 0 || el?.subcategories3 === '50' && el?.category3 === 'Maida' && el?.subsubcategories3 === 'Super Maida' ? el?.numberOfBags3 : 0 || el?.subcategories4 === '50' && el?.category4 === 'Maida' && el?.subsubcategories4 === 'Super Maida' ? el?.numberOfBags4 : 0
      
      totals['Maida 50kg MP'] += el?.subcategories === '50' && el?.category === 'Maida' && el?.subsubcategories === 'Multipurpose Maida' ? el?.numberOfBags : 0 || el?.subcategories1 === '50' && el?.category1 === 'Maida' && el?.subsubcategories1 === 'Multipurpose Maida' ? el?.numberOfBags1 : 0 || el?.subcategories2 === '50' && el?.category2 === 'Maida' && el?.subsubcategories2 === 'Multipurpose Maida' ? el?.numberOfBags2 : 0 || el?.subcategories3 === '50' && el?.category3 === 'Maida' && el?.subsubcategories3 === 'Multipurpose Maida' ? el?.numberOfBags3 : 0 || el?.subcategories4 === '50' && el?.category4 === 'Maida' && el?.subsubcategories4 === 'Multipurpose Maida' ? el?.numberOfBags4 : 0
      
      totals['Suji 10kg'] += el?.category === 'Suji' ? el?.numberOfBags : 0 || el?.category1 === 'Suji' ? el?.numberOfBags1 : 0 || el?.category2 === 'Suji' ? el?.numberOfBags2 : 0 || el?.category3 === 'Suji' ? el?.numberOfBags3 : 0 || el?.category4 === 'Suji' ? el?.numberOfBags4 : 0 
      
      totals['Besan 12kg'] += el?.subcategories === '10' && el?.category === "Atta Scheme" ? el?.numberOfBags / 10 : 0 || el?.subcategories1 === '10' && el?.category1 === "Atta Scheme" ? el?.numberOfBags1 / 10 : 0 || el?.subcategories2 === '10' && el?.category2 === "Atta Scheme" ? el?.numberOfBags2 / 10 : 0 || el?.subcategories3 === '10' && el?.category3 === "Atta Scheme" ? el?.numberOfBags3 / 10 : 0 || el?.subcategories4 === '10' && el?.category4 === "Atta Scheme" ? el?.numberOfBags4 / 10 : 0

      totals['Atta Weight(Qtl.)'] += (el?.TotalGatepassWeight) || 0
      totals['Truck Weight(Qtl.)'] += (el?.TotalGatepassTruckWeight) || 0
      totals['weighing scale(Qtl.)'] += (el?.kandaWeight) || 0
      totals['weight Difference(Kg.)'] += (el?.weightDifference) || 0

      
    });

    return totals;
  };

  useEffect(() => {
    fetchAwlExcelsheet()
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
          <tr className='bg-black text-white'>
            <th rowSpan={2}>G.P No.</th>
            <th rowSpan={2}>Date</th>
            <th rowSpan={2}>Truck No.</th>
            <th rowSpan={2}>5kg</th>
            <th rowSpan={2}>10kg</th>
            <th rowSpan={2}>11kg</th>
            <th rowSpan={2}>30kg</th>
            <th rowSpan={2}>50kG Atta chakki</th>
            <th rowSpan={2}>R-Atta 50kg</th>
            <th rowSpan={2}>Maida 10kg</th>
            <th colSpan={2}>Maida 30kg</th>
            <th colSpan={2}>Maida 50kg</th>
            <th rowSpan={2}>Suji 10kg</th>
            <th rowSpan={2}>Besan 12kg</th>
            <th rowSpan={2}>Atta Weight(Qtl.)</th>
            <th rowSpan={2}>Truck Weight(Qtl.)</th>
            <th rowSpan={2}>weighing scale(Qtl.)</th>
            <th rowSpan={2}>weight Difference(Kg.)</th>
            <th rowSpan={2}>Remarks</th>
            <th rowSpan={2}>Reason of Cancelation</th>
          </tr>
          <tr className='bg-black text-white'>


            <th>SM</th>
            <th>MP</th>
            <th>SM</th>
            <th>MP</th>

          </tr>
        </thead>
        <tbody>
          {
            getFilteredData().slice().reverse().map((el) => {
              return (
                <tr key={el._id}>
                  <td>{el?.gatepassNumber}</td>
                  <td>{moment(el?.createdAt).format('LL')}</td>
                  <td>{el?.trucknumber}</td>


                  <td>{el?.subcategories === '5' && el?.category === "Atta Chakki" ? el?.numberOfBags : '' || el?.subcategories1 === '5' && el?.category1 === "Atta Chakki" ? el?.numberOfBags1 : '' || el?.subcategories2 === '5' && el?.category2 === "Atta Chakki" ? el?.numberOfBags2 : '' || el?.subcategories3 === '5' && el?.category3 === "Atta Chakki" ? el?.numberOfBags3 : '' || el?.subcategories4 === '5' && el?.category4 === "Atta Chakki" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === '10' && el?.category === "Atta Scheme" ? el?.numberOfBags : '' || el?.subcategories1 === '10' && el?.category1 === "Atta Scheme" ? el?.numberOfBags1 : '' || el?.subcategories2 === '10' && el?.category2 === "Atta Scheme" ? el?.numberOfBags2 : '' || el?.subcategories3 === '10' && el?.category3 === "Atta Scheme" ? el?.numberOfBags3 : '' || el?.subcategories4 === '10' && el?.category4 === "Atta Scheme" ? el?.numberOfBags4 : '' || el?.subcategories === '10' && el?.category === "Atta Chakki" ? el?.numberOfBags : '' || el?.subcategories1 === '10' && el?.category1 === "Atta Chakki" ? el?.numberOfBags1 : '' || el?.subcategories2 === '10' && el?.category2 === "Atta Chakki" ? el?.numberOfBags2 : '' || el?.subcategories3 === '10' && el?.category3 === "Atta Chakki" ? el?.numberOfBags3 : '' || el?.subcategories4 === '10' && el?.category4 === "Atta Chakki" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === '11' && el?.category === "Atta Chakki" ? el?.numberOfBags : '' || el?.subcategories1 === '11' && el?.category1 === "Atta Chakki" ? el?.numberOfBags1 : '' || el?.subcategories2 === '11' && el?.category2 === "Atta Chakki" ? el?.numberOfBags2 : '' || el?.subcategories3 === '11' && el?.category3 === "Atta Chakki" ? el?.numberOfBags3 : '' || el?.subcategories4 === '11' && el?.category4 === "Atta Chakki" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === '30' && el?.category === "Atta Chakki" ? el?.numberOfBags : '' || el?.subcategories1 === '30' && el?.category1 === "Atta Chakki" ? el?.numberOfBags1 : '' || el?.subcategories2 === '30' && el?.category2 === "Atta Chakki" ? el?.numberOfBags2 : '' || el?.subcategories3 === '30' && el?.category3 === "Atta Chakki" ? el?.numberOfBags3 : '' || el?.subcategories4 === '30' && el?.category4 === "Atta Chakki" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === '50' && el?.category === "Atta Chakki" ? el?.numberOfBags : '' || el?.subcategories1 === '50' && el?.category1 === "Atta Chakki" ? el?.numberOfBags1 : '' || el?.subcategories2 === '50' && el?.category2 === "Atta Chakki" ? el?.numberOfBags2 : '' || el?.subcategories3 === '50' && el?.category3 === "Atta Chakki" ? el?.numberOfBags3 : '' || el?.subcategories4 === '50' && el?.category4 === "Atta Chakki" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === '50' && el?.category === "Mill Atta (R-Atta)" ? el?.numberOfBags : '' || el?.subcategories1 === '50' && el?.category1 === "Mill Atta (R-Atta)" ? el?.numberOfBags1 : '' || el?.subcategories2 === '50' && el?.category2 === "Mill Atta (R-Atta)" ? el?.numberOfBags2 : '' || el?.subcategories3 === '50' && el?.category3 === "Mill Atta (R-Atta)" ? el?.numberOfBags3 : '' || el?.subcategories4 === '50' && el?.category4 === "Mill Atta (R-Atta)" ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === '10' && el?.category === 'Maida' ? el?.numberOfBags : '' || el?.subcategories1 === '10' && el?.category1 === 'Maida' ? el?.numberOfBags1 : '' || el?.subcategories2 === '10' && el?.category2 === 'Maida' ? el?.numberOfBags2 : '' || el?.subcategories3 === '10' && el?.category3 === 'Maida' ? el?.numberOfBags3 : '' || el?.subcategories4 === '10' && el?.category4 === 'Maida' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === '30' && el?.category === 'Maida' && el?.subsubcategories === 'Super Maida' ? el?.numberOfBags : '' || el?.subcategories1 === '30' && el?.category1 === 'Maida' && el?.subsubcategories1 === 'Super Maida' ? el?.numberOfBags1 : '' || el?.subcategories2 === '30' && el?.category2 === 'Maida' && el?.subsubcategories2 === 'Super Maida' ? el?.numberOfBags2 : '' || el?.subcategories3 === '30' && el?.category3 === 'Maida' && el?.subsubcategories3 === 'Super Maida' ? el?.numberOfBags3 : '' || el?.subcategories4 === '30' && el?.category4 === 'Maida' && el?.subsubcategories4 === 'Super Maida' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === '30' && el?.category === 'Maida' && el?.subsubcategories === 'Multipurpose Maida' ? el?.numberOfBags : '' || el?.subcategories1 === '30' && el?.category1 === 'Maida' && el?.subsubcategories1 === 'Multipurpose Maida' ? el?.numberOfBags1 : '' || el?.subcategories2 === '30' && el?.category2 === 'Maida' && el?.subsubcategories2 === 'Multipurpose Maida' ? el?.numberOfBags2 : '' || el?.subcategories3 === '30' && el?.category3 === 'Maida' && el?.subsubcategories3 === 'Multipurpose Maida' ? el?.numberOfBags3 : '' || el?.subcategories4 === '30' && el?.category4 === 'Maida' && el?.subsubcategories4 === 'Multipurpose Maida' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === '50' && el?.category === 'Maida' && el?.subsubcategories === 'Super Maida' ? el?.numberOfBags : '' || el?.subcategories1 === '50' && el?.category1 === 'Maida' && el?.subsubcategories1 === 'Super Maida' ? el?.numberOfBags1 : '' || el?.subcategories2 === '50' && el?.category2 === 'Maida' && el?.subsubcategories2 === 'Super Maida' ? el?.numberOfBags2 : '' || el?.subcategories3 === '50' && el?.category3 === 'Maida' && el?.subsubcategories3 === 'Super Maida' ? el?.numberOfBags3 : '' || el?.subcategories4 === '50' && el?.category4 === 'Maida' && el?.subsubcategories4 === 'Super Maida' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === '50' && el?.category === 'Maida' && el?.subsubcategories === 'Multipurpose Maida' ? el?.numberOfBags : '' || el?.subcategories1 === '50' && el?.category1 === 'Maida' && el?.subsubcategories1 === 'Multipurpose Maida' ? el?.numberOfBags1 : '' || el?.subcategories2 === '50' && el?.category2 === 'Maida' && el?.subsubcategories2 === 'Multipurpose Maida' ? el?.numberOfBags2 : '' || el?.subcategories3 === '50' && el?.category3 === 'Maida' && el?.subsubcategories3 === 'Multipurpose Maida' ? el?.numberOfBags3 : '' || el?.subcategories4 === '50' && el?.category4 === 'Maida' && el?.subsubcategories4 === 'Multipurpose Maida' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.category === 'Suji' ? el?.numberOfBags : '' || el?.category1 === 'Suji' ? el?.numberOfBags1 : '' || el?.category2 === 'Suji' ? el?.numberOfBags2 : '' || el?.category3 === 'Suji' ? el?.numberOfBags3 : '' || el?.category4 === 'Suji' ? el?.numberOfBags4 : ''}</td>

                  <td>{el?.subcategories === '10' && el?.category === "Atta Scheme" ? el?.numberOfBags / 10 : '' || el?.subcategories1 === '10' && el?.category1 === "Atta Scheme" ? el?.numberOfBags1 / 10 : '' || el?.subcategories2 === '10' && el?.category2 === "Atta Scheme" ? el?.numberOfBags2 / 10 : '' || el?.subcategories3 === '10' && el?.category3 === "Atta Scheme" ? el?.numberOfBags3 / 10 : '' || el?.subcategories4 === '10' && el?.category4 === "Atta Scheme" ? el?.numberOfBags4 / 10 : ''}</td>

                  <td>{(el?.TotalGatepassWeight / 100).toFixed(2)}</td>
                  <td>{(el?.TotalGatepassTruckWeight / 100).toFixed(2)}</td>
                  <td>{(el?.kandaWeight / 100).toFixed(2)}</td>
                  <td>{el?.weightDifference}</td>
                  <td>{el?.trucknumber === 'Cancel'?`Cancel By - ${el?.canceledBy}` :''}</td>
                  <td>{el?.reason}</td>
                </tr>
              )
            })
          }
          <tr className='bg-gray-200 font-bold'>
            <td colSpan={2}>Total</td>
            <td></td>
            <td>{computeTotals()['5kg']}</td>
            <td>{computeTotals()['10kg']}</td>
            <td>{computeTotals()['11kg']}</td>
            <td>{computeTotals()['30kg']}</td>
            <td>{computeTotals()['50kg']}</td>
            <td>{computeTotals()['R-Atta 50kg']}</td>
            <td>{computeTotals()['Maida 10kg']}</td>
            <td>{computeTotals()['Maida 30kg SM']}</td>
            <td>{computeTotals()['Maida 30kg MP']}</td>
            <td>{computeTotals()['Maida 50kg SM']}</td>
            <td>{computeTotals()['Maida 50kg MP']}</td>
            <td>{computeTotals()['Suji 10kg']}</td>
            <td>{computeTotals()['Besan 12kg']}</td>
            <td>{((computeTotals()['Atta Weight(Qtl.)'])/100).toFixed(2)}</td>
            <td>{((computeTotals()['Truck Weight(Qtl.)'])/100).toFixed(2)}</td>
            <td>{((computeTotals()['weighing scale(Qtl.)'])/100).toFixed(2)}</td>
            <td>{computeTotals()['weight Difference(Kg.)']}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AwlExcelsheet
