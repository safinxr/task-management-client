import React from 'react';
import logo from '../../assets/logo.png'
import { Link, Outlet } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><MdKeyboardDoubleArrowRight /></label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className='bg-base-300 min-h-full pt-6'>
                    <Link to="/">
                        <img className="w-auto h-6 sm:h-7 mx-auto " src={logo} alt="" />
                    </Link>
                    <ul className="menu p-4 w-72  bg-base-300 text-base-content mt-4">
                        {/* Sidebar content here */}
                        <li>
                            <Link to='/dashboard'>Task</Link>
                        </li>
                        <li>
                            <Link to='/dashboard/addtask'>Add Task</Link>
                        </li>
                    </ul>
                </div>
                

            </div>
        </div>
    );
};

export default Dashboard;