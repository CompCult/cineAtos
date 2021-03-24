import React from 'react';
import { Tabs } from '../../../component/Component';
import AnswersChart from './chart/AnswersChart.component';
import Answers from './Answers.component';

export default function View() {

    return (
        <Tabs nameTabs={['Ver Grafico', 'Ver Respostas']} >
            <AnswersChart />

            <Answers />
        </Tabs>
    );
}
