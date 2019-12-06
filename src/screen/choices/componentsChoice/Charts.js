import React, { useEffect, useState } from 'react'
import Chart from "react-google-charts"
import ChoicesApi from '../ChoicesApi.js'

function Charts({ id }) {
    const [dados, setDados] = useState({});
    const [correctAnswer, setCorrectAnswer] = useState({});
    useEffect(() => {
        ChoicesApi.getAnalyticsChoices(id)
          .then(res => {
            const dados = res.data.answers
            const correctAnswer = res.data.correctAnswer
            setCorrectAnswer(correctAnswer)
            setDados(dados)
          })
    
      }, [id])
    const data = [
        ["Alternativa", "Quantidade", { role: "style" }],
        ["A", dados.a, (correctAnswer === 'a') ? "color: #00FF7F" : "color: #FF0000"],
        ["B", dados.b, (correctAnswer === 'b') ? "color: #00FF7F" : "color: #FF0000"],
        ["C", dados.c, (correctAnswer === 'c') ? "color: #00FF7F" : "color: #FF0000"],
        ["D", dados.d, (correctAnswer === 'd') ? "color: #00FF7F" : "color: #FF0000"],
        ["E", dados.e, (correctAnswer === 'e') ? "color: #00FF7F" : "color: #FF0000"],
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