import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import VerficationCard from '../components/VerficationCard'

const Verification = () => {
  const [allGatepasses, setAllGatepasses] = useState([])

  const fetchAllGatepasses = async () => {
    const response = await fetch(SummaryApi.AllAwlGatepass.url)
    const dataResponse = await response.json()

    console.log("Awl Gatepass data", dataResponse)

    setAllGatepasses(dataResponse?.data || [])
  }

  useEffect(() => {
    fetchAllGatepasses()
  }, [])

  const filteredGatepasses = allGatepasses.filter(gatepass => gatepass.kwverified === 'No');

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">Verfication</h2>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        {filteredGatepasses.length > 0 ? (
          filteredGatepasses.map((awlformdata, index) => (
            <VerficationCard data={awlformdata} key={index + "allGatepasses"} />
          ))
        ) : (
          <p className="text-center text-gray-500">No gatepasses to verify.</p>
        )}
      </div>
    </div>
  )
}

export default Verification
