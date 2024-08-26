import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';

const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || user.role !== ROLE.ADMIN) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div className='min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 flex'>
            {/* Sidebar */}
            <aside className='bg-gray-800 w-60 shadow-md'>
                <div className='p-6 border-b border-gray-700'>
                    <p className='text-lg font-semibold capitalize text-white'>{user?.name}</p>
                    <p className='text-sm text-gray-300'>{user?.role}</p>
                </div>
                <nav className='py-4'>
                    <Link
                        to={'all-users'}
                        className='block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'
                    >
                        All Users
                    </Link>
                    <Link
                        to={'allgatepasses'}
                        className='block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'
                    >
                        All Gatepasses
                    </Link>
                    {/* Add more navigation links as needed */}
                </nav>
            </aside>

            {/* Main Content */}
            <main className='flex-1 p-6'>
                <div className='bg-gray-800 bg-opacity-75 rounded-lg p-6 shadow-md'>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminPanel;
