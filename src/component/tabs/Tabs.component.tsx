import React, { ReactNode, Children, useState, ChangeEvent, useLayoutEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ContainerTabs } from './TabsStyled';
import { TabInterface } from './TabsInterface';
import TabPanel from './TabPanel.component';

export default function CenteredTabs({ tabValue, nameTabs, children, disabled }: TabInterface) {
    const [value, setValue] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(true);

    useLayoutEffect(() => {
        function updateSize() {
            let currentHideNav: boolean = window.innerWidth < 600;
            currentHideNav ? setOpen(false) : setOpen(true);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
        if (tabValue) {
            tabValue(newValue)
        }
        setValue(newValue);
    };

    const childrenList: Array<ReactNode> = Children.toArray(children);

    return (
        <ContainerTabs>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                variant={open ? "fullWidth" : "scrollable"}
                textColor="inherit"
                scrollButtons="on"
                centered={open ? true : false}
                style={{ color: 'white' }}
            >
                {nameTabs.map((tabs: string, index: number) => {
                    return <Tab label={tabs} key={index} disabled={disabled?.length ? disabled.some((elem: number) => elem === index + 1) : false} style={{ fontSize: 20 }} />
                })}
            </Tabs>

            {childrenList.map((child: ReactNode, index: number) => {
                return (
                    <TabPanel key={index} value={value} index={index}>
                        {child}
                    </TabPanel>
                )
            })}
        </ContainerTabs>
    );
}
