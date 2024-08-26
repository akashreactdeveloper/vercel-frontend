import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import AdminGatepassCard from '../components/AdminGatepassCard'

const HomeGatePasses = () => {
  const [allGatepasses, setAllGatepasses] = useState([])

  const fetchAllGatepasses = async () => {
    const response = await fetch(SummaryApi.AllAwlGatepass.url)
    const dataResponse = await response.json()

    console.log("Awl Gatepass data",dataResponse)

    setAllGatepasses(dataResponse?.data || [])
  }

  useEffect(() => {
    fetchAllGatepasses()
  }, [])

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Gatepasses</h2>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        {allGatepasses.map((awlformdata, index) => (
          <AdminGatepassCard data={awlformdata} key={index + "allGatepasses"} />
        ))}
      </div>
    </div>
  )
}

export default HomeGatePasses
