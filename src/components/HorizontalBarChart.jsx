import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const HorizontalBarChart = () => {
    const data = {
        labels: ['Critical', 'High', 'Medium', 'Low', 'Info'],
        datasets: [
            {
                label: 'Vulnerabilities',
                data: [9, 150, 1035, 266, 10],
                backgroundColor: ['#D32F2F', '#E57373', '#FFA726', '#FFEB3B', '#BDBDBD'],
                borderRadius: 5,
                barThickness: 20,
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Makes the bar chart horizontal
        scales: {
            x: {
                beginAtZero: true,
                display: false,
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div style={{ width: '600px', margin: '0 auto' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                1470 Total Vulnerabilities
            </div>
            <div style={{ height: '150px' }}>
                <Bar data={data} options={options} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <div style={{ color: '#D32F2F' }}>● Critical (9)</div>
                <div style={{ color: '#E57373' }}>● High (150)</div>
                <div style={{ color: '#FFA726' }}>● Medium (1035)</div>
                <div style={{ color: '#FFEB3B' }}>● Low (266)</div>
                <div style={{ color: '#BDBDBD' }}>● Info (10)</div>
            </div>
        </div>
    );
};

export default HorizontalBarChart;
