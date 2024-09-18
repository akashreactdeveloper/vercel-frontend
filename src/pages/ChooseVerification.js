import React from 'react';
import { Link } from 'react-router-dom';

const ChooseVerification = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-purple-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Choose Verification Type</h1>
        <div className="space-y-4">
          <Link
            to={"/verification"}
            className='bg-red-600 hover:bg-red-800 text-white px-6 py-3 w-full max-w-[300px] rounded-full transition-all mx-auto block text-center'
          >
            Kanda Weight Verify
          </Link>
          <Link
            to={"/billnumberverification"}
            className='bg-red-600 hover:bg-red-800 text-white px-6 py-3 w-full max-w-[200px] rounded-full transition-all mx-auto block text-center'
          >
            Bill Number Verify
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChooseVerification


