import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar, Tooltip, Legend } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='chart-part'>
            <div className='chart-component'>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                </LineChart>
            </div>
            <div className='chart-component'>
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="month" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="investment" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;