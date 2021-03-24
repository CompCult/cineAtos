import React, { useState, useEffect } from 'react';
import { Tabs, Table } from '../../../component/Component';
import { HEAD_CELL_MISSIOES } from '../utils/HEAD_CELL';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { getByMissionsStatus } from '../Missions.service';
import { Action, ACTION_VIEW } from '../../../component/table/interfaces/TableInterface';
import { useHistory } from 'react-router-dom';
import { MissionsInterface } from '../interface/MissionsComponent';
import { Status } from '../interface/Status';
import { APROVADO, REJEITADO, PENDENTE } from '../utils/STATUS';

export default function View({ allMissions }: MissionsInterface) {

    let { id } = useParams<ParamTypes>();
    let history = useHistory();
    const [missions, setMissions] = useState<Array<any>>([]);
    const [status, setStatus] = useState<Status>({ status: PENDENTE });
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        getByMissionsStatus(id, status).then(res => {
            if (res.data) {
                setMissions(res.data);
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [id, status]);

    const handleClickAction = (action: Action, missions: any) => {
        if (action === ACTION_VIEW) {
            return history.push(`/missoes/${allMissions ? 'todas-missoes' : 'minhas-missoes'}/visualizar-missao/${missions._mission._id}/resposta/${missions._id}`);
        }
    };

    const TableStatus = () => {
        return (
            <Table
                request={request}
                data={missions}
                headCells={HEAD_CELL_MISSIOES}
                noActionEdit
                noActionDelete
                handleClickAction={handleClickAction}
            />
        )
    }

    const tabValue = (value: number) => {
        if (!value) {
            setStatus({ ...status, status: PENDENTE });
        } else if (value === 1) {
            setStatus({ ...status, status: APROVADO });
        } else {
            setStatus({ ...status, status: REJEITADO });
        }
        setRequest(true);
    }

    return (
        <Tabs nameTabs={['Missões Pendentes', 'Missões Aprovadas', 'Missões Rejeitadas']} tabValue={tabValue}>
            {TableStatus()}

            {TableStatus()}

            {TableStatus()}
        </Tabs>
    );
}
