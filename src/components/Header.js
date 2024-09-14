import React, { useState } from 'react';
import Logo from './Logo';
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify'
import { setUserDetals } from '../store/userSlice';
import ROLE from '../common/role';

const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const [menuDisplay, setmenuDisplay] = useState(false)

  console.log("user header", user)

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.Logout_user.url, {
      method: SummaryApi.Logout_user.method,
      credentials: 'include'
    })

    const data = await fetchData.json()

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetals(null))
    }

    if (data.error) {
      toast.error(data.message)
    }
  }
  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className=' h-full container mx-auto flex items-center px-4 justify-between bg-slate-100'>
        <div className=''>
          <Logo w={90} h={50} />
        </div>
        <div className='flex items-center gap-7'>

          <div className='relative flex justify-center'>
            {
              user?._id && (
                <div className='text-3xl cursor-pointer relative flex justify-center' onClick={() => setmenuDisplay(preve => !preve)}>
                  <FaRegCircleUser />
                </div>
              )
            }
            {
              menuDisplay && (
                <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
                  <nav>
                    {
                      user?.role === ROLE.ADMIN && (
                        <Link to={"admin-portal/allgatepasses"} className='whitespace-nowrap md:flex hidden hover:bg-slate-100 p-2'>Admin Panel</Link>
                      )
                    }
                  </nav>
                </div>

              )
            }

          </div>
          <div>
          <Link to={"/"} className='bg-blue-500 hover:bg-red-800 text-white px-3 py-1 w-full max-w-[250px] rounded-full hover:scale-110 transition-all mx-auto block mt-0 text-center'>Reset After Print</Link>
          </div>
          <div>
          <Link to={"/home"} className='bg-blue-500 hover:bg-red-800 text-white px-3 py-1 w-full max-w-[250px] rounded-full hover:scale-110 transition-all mx-auto block mt-0 text-center'>Home</Link>
          </div>


          <div>
            {
              user?._id ? (
                <button onClick={handleLogout} className='bg-yellow-500 hover:bg-red-800 text-white px-3 py-1 w-full max-w-[250px] rounded-full hover:scale-110 transition-all mx-auto block mt-0 text-center text'>Logout</button>
              ) : (
                <Link to={"/"} className='bg-yellow-500 hover:bg-red-800 text-white px-3 py-1 w-full max-w-[250px] rounded-full hover:scale-110 transition-all mx-auto block mt-0 text-center'>Login</Link>
              )
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
