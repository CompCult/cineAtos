import React from 'react';
import styled from "styled-components";
import Paper from '@material-ui/core/Paper';

export interface Props {
    fontSize?: number;
    marginRight?: number;
}

export const CardSteled = styled(({ ...props }) => (
    <Paper elevation={0} {...props} />
))` 
   && { 
        width: 270px;
        height: 300px;
        margin: 12px;
        border-radius: 12px;
        padding: 5px;
        float: left;
        cursor: pointer;
        transition: 0.2s ease-in;
        @media (max-width: 500px) {
            width: 310px;
            height: 300px;
            box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.07);
            transition: 0.2s ease-in;
        }
        :hover {
            box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
        }
    }
`;

export const Img = styled.img` 
    height: 180px; 
    width: 270px;
    border-radius: 12px;
`;

export const Span = styled.div` 
    margin-top: 5%;
    font-size: 20px;
    font-weight: 500;
    transition: 0.2s ease-in;
`;

export const SubSpan = styled.div` 
    margin-top: 3%;
    font-size: ${(props: Props) => `${props.fontSize ? props.fontSize : 16}px`};
    font-weight: 500;
    margin-right: ${(props: Props) => `${props.marginRight ? props.marginRight : 0}px`};
`;

export const Container = styled.div` 
    padding-top: 10px;
     margin-bottom: -10px;
`;