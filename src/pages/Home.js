import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-purple-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Choose the Action</h1>
        <div className="space-y-4">
          <Link
            to={"/awl"}
            className='bg-red-600 hover:bg-red-800 text-white px-6 py-3 w-full max-w-[300px] rounded-full transition-all mx-auto block text-center'
          >
            Generate Gatepass Now
          </Link>
          <Link
            to={"/HomeGatePasses"}
            className='bg-red-600 hover:bg-red-800 text-white px-6 py-3 w-full max-w-[200px] rounded-full transition-all mx-auto block text-center'
          >
            View Gatepasses
          </Link>
          <Link
            to={"/crfmexcelsheet"}
            className='bg-green-600 hover:bg-green-800 text-white px-6 py-3 w-full max-w-[200px] rounded-full transition-all mx-auto block text-center border'
          >
            CRFM Excel Sheet
          </Link>
          <Link
            to={"/awlexcelsheet"}
            className='bg-green-600 hover:bg-green-800 text-white px-6 py-3 w-full max-w-[200px] rounded-full transition-all mx-auto block text-center border'
          >
            AWL Excel Sheet
          </Link>
          <Link
            to={"/verification"}
            className='bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 w-full max-w-[200px] rounded-full transition-all mx-auto block text-center border'
          >
            Verificaton
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
