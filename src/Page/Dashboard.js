import React from 'react';
import ActiveDoctor from '../Components/ActiveDoctor/ActiveDoctor';
import DoctorsShort from '../Components/DoctorsShort.js/DoctorsShort';
import RCalendar from '../Components/RCalendar/RCalendar';
import Recharts from '../Components/Recharts/Recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="dashboard container">
            <DoctorsShort />
            <div className="grid-3 ">
                <div className='chart'>
                    <Recharts data={data} name='Appointment' />
                    <Recharts data={data} name='New patient' />
                    <Recharts data={data} name='Earning' />
                </div>
                <div className="calendar py-4">
                    <RCalendar />
                </div>
                <div className="activeDoctors py-4">
                    <ActiveDoctor />
                </div>
            </div>


        </div>
    );
};

export default Dashboard;