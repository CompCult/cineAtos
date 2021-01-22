import React from 'react';
import { Menu, Button } from '../component/Component';
import Routes from "./Routes.container";

export default function MenuC() {

    return (
        <>
            <Menu.AppBar />
            <Menu.Hearder />
            <Menu.Main >
                <Button.ButtonHome />
                <Routes />
            </Menu.Main>
        </>
    );
}
