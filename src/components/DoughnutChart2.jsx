import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const DoughnutChart2 = () => {
    const data = {
        labels: ['Failed', 'Warning', 'Not available', 'Passed'],
        datasets: [
            {
                data: [1689, 681, 36, 7253],
                backgroundColor: ['#D32F2F', '#FFEB3B', '#BDBDBD', '#4CAF50'],
                hoverBackgroundColor: ['#B71C1C', '#FBC02D', '#9E9E9E', '#388E3C'],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide the built-in legend
            },
        },
        cutout: '70%', // This will make the chart a doughnut shape
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
            <div style={{ position: 'relative' }} className='w-50'>
                <Doughnut data={data} options={options} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>9659</div>
                    <div style={{ fontSize: '12px', color: '#888' }}>Total</div>
                </div>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, marginLeft: '20px', textAlign: 'left' }}>
                <li style={{ color: '#D32F2F', marginBottom: '8px' }}>● Failed (1689)</li>
                <li style={{ color: '#FFEB3B', marginBottom: '8px' }}>● Warning (681)</li>
                <li style={{ color: '#BDBDBD', marginBottom: '8px' }}>● Not available (36)</li>
                <li style={{ color: '#4CAF50' }}>● Passed (7253)</li>
            </ul>
        </div>
    );
};

export default DoughnutChart2;
