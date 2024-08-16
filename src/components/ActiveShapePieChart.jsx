import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const data = {
        datasets: [
            {
                data: [50, 50], // Adjust the numbers to represent your data
                backgroundColor: ['#4F79FF', '#E6EEFF'],
                borderWidth: 0, // No border
            },
        ],
    };

    const options = {
        cutout: '80%', // Controls the size of the inner white circle
        plugins: {
            legend: {
                display: false, // Hides the default legend
            },
            tooltip: {
                enabled: false, // Disables the tooltip
            },
        },
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }} className='my-2'>
            <div style={{ position: 'relative', width: '150px', height: '150px' }}>
                <Doughnut data={data} options={options} />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    <div>2</div>
                    <div style={{ fontSize: '14px', fontWeight: 'normal' }}>Total</div>
                </div>
            </div>
            <div style={{ marginLeft: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div
                        style={{
                            width: '10px',
                            height: '10px',
                            backgroundColor: '#4F79FF',
                            borderRadius: '50%',
                            marginRight: '8px',
                        }}
                    />
                    <span style={{ fontSize: '14px', color: '#333' }} className='fw-medium'>
                        Connected (2)
                    </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                        style={{
                            width: '10px',
                            height: '10px',
                            backgroundColor: '#E6EEFF',
                            borderRadius: '50%',
                            marginRight: '8px',
                        }}
                    />
                    <span style={{ fontSize: '14px', color: '#333' }} className='fw-medium'>
                        Not Connected (2)
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DoughnutChart;
