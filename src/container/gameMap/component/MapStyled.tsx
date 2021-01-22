import styled from "styled-components";

export const Container = styled.div` 
    margin: 20px; 
    transition: 0.2s ease-in; 
    @media (max-width: 500px) { 
        margin: 20px 10px 10px 10px; 
        transition: 0.2s ease-in;
    }
`;

export const H2 = styled.div`
    text-align: 'center';
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.2s ease-in;
    @media (max-width: 500px) {
        font-size: 18px;
        transition: 0.2s ease-in;
    }
`;

export const Span = styled.div`
    font-size: 14px;
    font-weight:600;
    transition: 0.2s ease-in;
    @media (max-width: 500px) {
        font-size: 12px;
        transition: 0.2s ease-in;
    }
`;