import React, { useEffect, useState } from 'react'
import Chart from "react-google-charts"
import ChoicesApi from '../ChoicesApi.js'

function Charts({ id, correctAnswer }) {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        ChoicesApi.getAnalyticsChoices(id)
          .then(res => {
            const dados = res.data[0].data
            setDados(dados)
          })
    
      }, [id])

    console.log(correctAnswer)

    const data = [
        ["Alternativa", "Quantidade", { role: "style" }],
        ["A", dados[0], (correctAnswer === 'a') ? "color: #00FF7F" : "color: #FF0000"],
        ["B", dados[1], (correctAnswer === 'b') ? "color: #00FF7F" : "color: #FF0000"],
        ["C", dados[2], (correctAnswer === 'c') ? "color: #00FF7F" : "color: #FF0000"],
        ["D", dados[3], (correctAnswer === 'd') ? "color: #00FF7F" : "color: #FF0000"],
        ["E", dados[4], (correctAnswer === 'e') ? "color: #00FF7F" : "color: #FF0000"],
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