import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { Header, Table } from '../../component/Component';
import { INITIAL_VALUES_PAGINATION } from './utils/INITIAL_VALUES';
import { useHistory } from "react-router-dom";
import { getStore } from './Store.service';
import { toast } from "react-toastify";
import { InterfacePagination } from './interface/StorePagination';
import Item from './interface/Item';
import { StoreInterface } from './interface/StoreComponent';
import TableBody from './component/TableBody.component';

export default function StoreComponent({ isPupils }: StoreInterface) {
    let history = useHistory();
    const [store, setStore] = useState<Array<Item>>([]);
    const [pagination, setPagination] = useState<InterfacePagination>(INITIAL_VALUES_PAGINATION);
    const [request, setRequest] = useState(true);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        getStore(pagination).then(res => {
            if (res.data) {
                setStore(setData(res.data.docs, isPupils));
                console.log(res.data.docs)
                setTotal(res.data.total);
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [pagination, request]);


    const setData = (data: Array<Item>, isPupils?: boolean) => {
        return data.filter((obj: Item) => obj.isCreatedByMission === !!isPupils);
    }

    const handleRequestSort = (_event: MouseEvent<unknown>, property: string) => {
        const isAsc = pagination.sort === property && pagination.asc === 1;
        setPagination({ ...pagination, sort: property, asc: isAsc ? -1 : 1 });
    };

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPagination({ ...pagination, page: newPage + 1 });
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setPagination({ ...pagination, limit: +event.target.value, page: 1 });
    };

    return (
        <Header namePage="Loja Virtual" link="/loja-virtual/novo-item" title={`${isPupils ? '' : 'Adiconar Item'}`} >

            <Table
                request={request}
                data={store}
                noTable
                size={total}
                headCells={[]}
                page={pagination.page}
                rowsPerPage={pagination.limit}
                order={pagination.asc === 1 ? 'asc' : 'desc'}
                orderBy={pagination.sort}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onRequestSort={handleRequestSort}
            >
                <TableBody data={store} />
            </Table>
        </Header>
    );
}
