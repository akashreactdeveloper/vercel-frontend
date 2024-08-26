import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify';
import moment from 'moment'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const CrfmExcelsheet = () => {

  const [CrfmExcelsheet, setCrfmExcelsheet] = useState([])
  const [selectedDate, setSelectedDate] = useState('');

  
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
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  }

  const getFilteredData = () => {
    if (!selectedDate) {
      return CrfmExcelsheet;
    }
    return CrfmExcelsheet.filter(entry =>
      moment(entry.createdAt).format('YYYY-MM-DD') === selectedDate
    );
  }


  useEffect(() => {
    fetchCrfmExcelsheet()
  }, [])




  return (
    <div className='bg-white pb-4'>
      <div className='flex justify-center mb-4'>
        <input
          type='date'
          value={selectedDate}
          onChange={handleDateChange}
          className='border p-2 rounded'
        />
      </div>
      <div>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button bg-green-600 hover:bg-green-800 text-white px-6 py-3 w-full max-w-[200px] rounded-full transition-all mx-auto block text-center border"
          table="table-to-xls"
          filename="crfmtablexls"
          sheet="crfmtablexls"
          buttonText="Download as XLS" />
      </div>
      <table id="table-to-xls" className='w-full userTable'>
        <thead>
          <tr className='bg-blue-400 text-black border-b border-black'>
            <th rowSpan={2}>G.P No.</th>
            <th rowSpan={2}>Date</th>
            <th rowSpan={2}>Bill no.</th>
            <th rowSpan={2}>Party Name</th>
            <th rowSpan={2}>Truck No.</th>
            <th colSpan={5}>Maida</th>
            <th colSpan={7}>CHAKKI ATTA & Bajra ,jo maize</th>
            <th colSpan={4}>MILL ATTA</th>
            <th colSpan={10}>Bran</th>
            <th colSpan={2}>Rawa/Suji</th>
            <th rowSpan={2}>Loose Material (kg)</th>
            <th>Tally BULKER  Maida (KG)</th>
            <th colSpan={2}>Refraction</th>
            <th colSpan={2}>Bardana (No. of bags)</th>
            <th rowSpan={2}>F.O.C in (Kg)</th>
            <th rowSpan={2}>Remarks for Ref., Bardana,FOC</th>
            <th>Cash Sale (Rs.)</th>
            <th rowSpan={2}>Comment on Name of Product in Loose Item / Scrap</th>
            <th rowSpan={2}>Tally Cash Sale(Rs.)</th>
            <th rowSpan={2}>Excel Sheet Calculated Amt (Rs.)</th>
            <th rowSpan={2}>Agent Name</th>
            <th rowSpan={2}>Total Weight</th>
            <th rowSpan={2}>Tally Amount (Rs.)</th>
            <th rowSpan={2}>Remarks</th>
            <th rowSpan={2}>Cancel ?</th>
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
            <th>45kg</th>
            <th>30kg</th>
            <th>28 kg</th>
            <th>25 kg</th>
            <th>43 kg</th>
            <th>50kg</th>
            <th>25kg</th>
            <th>(Net Wt. of Maida minus Bulker Maida Returned)</th>
            <th>Kg</th>
            <th>Amt (Rs.)</th>
            <th>No. of Bags</th>
            <th>Amt (Rs.)</th>
            <th>OTHER SALES / SCRAP SALES / LOOSE MATERIAL</th>
          </tr>
        </thead>
        <tbody>
          {
            getFilteredData().slice().reverse().map((el) => {

              console.log("total", el?.subsubcategories)
              console.log("total amount", el?.TotalGatepassAmount)
              return (
                <tr>
                  <td>C-{el?.gatepassNumber-1000}</td>
                  <td>{moment(el?.createdAt).format('LL')}</td>
                  <td></td>
                  <td>{el?.partyName}</td>
                  <td>{el?.trucknumber}</td>
                  <td>{el?.subsubcategories === '50' && el?.category === "Maida" ? el?.numberOfBags : '' || el?.subsubcategories1 === '50' && el?.category1 === "Maida" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '50' && el?.category2 === "Maida" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '50' && el?.category3 === "Maida" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '45' && el?.category === "Maida" ? el?.numberOfBags : '' || el?.subsubcategories1 === '45' && el?.category1 === "Maida" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '45' && el?.category2 === "Maida" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '45' && el?.category3 === "Maida" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '40' && el?.category === "Maida" ? el?.numberOfBags : '' || el?.subsubcategories1 === '40' && el?.category1 === "Maida" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '40' && el?.category2 === "Maida" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '40' && el?.category3 === "Maida" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '30' && el?.category === "Maida" ? el?.numberOfBags : '' || el?.subsubcategories1 === '30' && el?.category1 === "Maida" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '30' && el?.category2 === "Maida" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '30' && el?.category3 === "Maida" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '25' && el?.category === "Maida" ? el?.numberOfBags : '' || el?.subsubcategories1 === '25' && el?.category1 === "Maida" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '25' && el?.category2 === "Maida" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '25' && el?.category3 === "Maida" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '50' && el?.category === "Chakki aata and bajra jo maize" ? el?.numberOfBags : '' || el?.subsubcategories1 === '50' && el?.category1 === "Chakki aata and bajra jo maize" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '50' && el?.category2 === "Chakki aata and bajra jo maize" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '50' && el?.category3 === "Chakki aata and bajra jo maize" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '40' && el?.category === "Chakki aata and bajra jo maize" ? el?.numberOfBags : '' || el?.subsubcategories1 === '40' && el?.category1 === "Chakki aata and bajra jo maize" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '40' && el?.category2 === "Chakki aata and bajra jo maize" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '40' && el?.category3 === "Chakki aata and bajra jo maize" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '30' && el?.category === "Chakki aata and bajra jo maize" ? el?.numberOfBags : '' || el?.subsubcategories1 === '30' && el?.category1 === "Chakki aata and bajra jo maize" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '30' && el?.category2 === "Chakki aata and bajra jo maize" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '30' && el?.category3 === "Chakki aata and bajra jo maize" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '35' && el?.category === "Chakki aata and bajra jo maize" ? el?.numberOfBags : '' || el?.subsubcategories1 === '35' && el?.category1 === "Chakki aata and bajra jo maize" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '35' && el?.category2 === "Chakki aata and bajra jo maize" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '35' && el?.category3 === "Chakki aata and bajra jo maize" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subcategories === 'LD' && el?.subsubcategories === '5' && el?.category === "Chakki aata and bajra jo maize" ? el?.numberOfBags : '' || el?.subcategories1 === 'LD' && el?.subsubcategories1 === '5' && el?.category1 === "Chakki aata and bajra jo maize" ? el?.numberOfBags1 : '' || el?.subcategories2 === 'LD' && el?.subsubcategories2 === '5' && el?.category2 === "Chakki aata and bajra jo maize" ? el?.numberOfBags2 : '' || el?.subcategories3 === 'LD' && el?.subsubcategories3 === '5' && el?.category3 === "Chakki aata and bajra jo maize" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subcategories === 'LD' && el?.subsubcategories === '10' && el?.category === "Chakki aata and bajra jo maize" ? el?.numberOfBags : '' || el?.subcategories1 === 'LD' && el?.subsubcategories1 === '10' && el?.category1 === "Chakki aata and bajra jo maize" ? el?.numberOfBags1 : '' || el?.subcategories2 === 'LD' && el?.subsubcategories2 === '10' && el?.category2 === "Chakki aata and bajra jo maize" ? el?.numberOfBags2 : '' || el?.subcategories3 === 'LD' && el?.subsubcategories3 === '10' && el?.category3 === "Chakki aata and bajra jo maize" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '26' && el?.category === "MILL ATTA" ? el?.numberOfBags : '' || el?.subsubcategories1 === '26' && el?.category1 === "MILL ATTA" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '26' && el?.category2 === "MILL ATTA" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '26' && el?.category3 === "MILL ATTA" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '50' && el?.category === "MILL ATTA" ? el?.numberOfBags : '' || el?.subsubcategories1 === '50' && el?.category1 === "MILL ATTA" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '50' && el?.category2 === "MILL ATTA" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '50' && el?.category3 === "MILL ATTA" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '40' && el?.category === "MILL ATTA" ? el?.numberOfBags : '' || el?.subsubcategories1 === '40' && el?.category1 === "MILL ATTA" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '40' && el?.category2 === "MILL ATTA" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '40' && el?.category3 === "MILL ATTA" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '30' && el?.category === "MILL ATTA" ? el?.numberOfBags : '' || el?.subsubcategories1 === '30' && el?.category1 === "MILL ATTA" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '30' && el?.category2 === "MILL ATTA" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '30' && el?.category3 === "MILL ATTA" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '10' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '10' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '10' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '10' && el?.category3 === 'Bran' ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '50' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '50' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '50' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '50' && el?.category3 === 'Bran' ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '49' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '49' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '49' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '49' && el?.category3 === 'Bran' ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '48' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '48' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '48' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '48' && el?.category3 === 'Bran' ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '44' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '44' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '44' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '44' && el?.category3 === 'Bran' ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '35' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '35' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '35' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '35' && el?.category3 === 'Bran' ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '45' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '45' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '45' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '45' && el?.category3 === 'Bran' ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '30' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '30' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '30' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '30' && el?.category3 === 'Bran' ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '28' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '28' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '28' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '28' && el?.category3 === 'Bran' ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '25' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '25' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '25' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '25' && el?.category3 === 'Bran' ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '43' && el?.category === 'Bran' ? el?.numberOfBags : '' || el?.subsubcategories1 === '43' && el?.category1 === 'Bran' ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '43' && el?.category2 === 'Bran' ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '43' && el?.category3 === 'Bran' ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '50' && el?.category === "Rawa Suji" ? el?.numberOfBags : '' || el?.subsubcategories1 === '50' && el?.category1 === "Rawa Suji" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '50' && el?.category2 === "Rawa Suji" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '50' && el?.category3 === "Rawa Suji" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === '25' && el?.category === "Rawa Suji" ? el?.numberOfBags : '' || el?.subsubcategories1 === '25' && el?.category1 === "Rawa Suji" ? el?.numberOfBags1 : '' || el?.subsubcategories2 === '25' && el?.category2 === "Rawa Suji" ? el?.numberOfBags2 : '' || el?.subsubcategories3 === '25' && el?.category3 === "Rawa Suji" ? el?.numberOfBags3 : ''}</td>
                  <td>{el?.subsubcategories === 'Others' ? el?.otherSubsubcategories : ''}</td>
                  <td>{el?.subcategories === 'Maida_Bulker' && el?.category === 'Maida' ? el?.totalWeight * 100 : ''}</td>
                  <td>{el?.category === 'Refraction' ? el?.weight * 100 : ''}</td>
                  <td>{el?.category === 'Refraction' ? el?.totalamount : ''}</td>
                  <td>{el?.category === 'Bardana' ? el?.numberOfBags : ''}</td>
                  <td>{el?.category === 'Bardana' ? el?.totalValue : ''}</td>
                  <td>{el?.TotalGatepassAmount === 0 ? el?.TotalGatepassWeight : ''}</td>
                  <td>{el?.TotalGatepassAmount === 0 ? el?.category : ''}</td>
                  <td></td>
                  <td>{el?.subsubcategories === 'Others' ? el?.category : ''}</td>
                  <td>{el?.typeofsale === 'cash' ? el?.TotalGatepassAmount : ''}</td>
                  <td>{el?.typeofsale === 'virtual' ? el?.TotalGatepassAmount : ''}</td>
                  <td></td>
                  <td>{el?.category === 'Refraction' || el?.subcategories === 'Maida_Bulker' && el?.category === 'Maida' ? el?.TotalGatepassWeight : el?.TotalGatepassWeight / 100}</td>
                  <td></td>
                  <td></td>
                  <td>
                    <button className='border border-black bg-red-500 text-white rounded-lg px-2 py-1 hover:bg-red-600'>Cancel</button>
                  </td>

                </tr>
              )
            })
          }
        </tbody>
      </table>


    </div>
  )
}

export default CrfmExcelsheet
