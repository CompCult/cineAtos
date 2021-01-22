import React from 'react';
import styled from "styled-components";
import Card from '@material-ui/core/Card';

export const CardC = styled(({ ...props }) => (
    <Card {...props} />
))` 
   && { 
        border-radius: 12px;
        padding: 30px 20px 10px 20px;
        transition: 0.2s ease-in;
        @media (max-width: 500px) {
            padding: 30px 10px 10px 10px;
            transition: 0.2s ease-in;
        }
    }
`;

export const CardCNoPadding = styled(({ ...props }) => (
    <Card {...props} />
))` 
   && { 
        border-radius: 12px;
        padding: 5px;
    }
`;

export const CardStyledSub = styled.div` 
    border-radius: 12px;
    margin-top: 15px;
    padding: 20px;
    background-color: #58AFFF;
    color: #FFFFFF; 
    transition: 0.2s ease-in;
    @media (max-width: 500px) {
        padding: 10px 15px 10px 15px;
        transition: 0.2s ease-in;
    }
`;

export const NamePage = styled.div`
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase; 
    margin-bottom: 20px;
`;