import React from 'react'
import Chart from "react-google-charts"

function Charts({ id }) {

    const data = [
        ["Alternativa", "Quantidade", { role: "style" }],
        ["A", 9, "color: #FF0000"],
        ["B", 10, "color: #FF0000"],
        ["C", 19, "color: #FF0000"],
        ["D", 51, "color: #00FF7F"],
        ["E", 11, "color: #FF0000"],
    ];

    const options = {
        title: "",
        hAxis: { title: "Alternativas" },
        backgroundColor: { stroke: '#666', fill: 'white', strokeWidth: 0 },
        vAxis: { title: "Quantidade de respostas" },
        legend: { position: 'none' },
        chartArea: { left: 70, top: 30, right: 5, width: '75%', height: '80%' },
    };

    return (
        <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}

export default Charts