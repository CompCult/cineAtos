import styled from "styled-components";

export const NamePage = styled.span`
    color: #fff;
    font-size: 36px;
    font-style: normal;
    font-family: 'Roboto';
    font-weight: 900;
    text-transform: uppercase;
    transition: 0.2s ease-in; 
    @media (max-width: 500px) {
        font-size: 26px;
        transition: 0.2s ease-in;
    }
`;

export const SubPage = styled.span`
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-family: 'Roboto';
    font-weight: 900; 
    border-left: 1px solid #0060B8;
    transition: 0.2s ease-in; 
    margin-left: 20px;
    padding-left: 20px;
    @media (max-width: 500px) {
        font-size: 17px;
        margin-left: 15px;
        padding-left: 15px;
        transition: 0.2s ease-in;
    }
`;

export const Header = styled.div`
    font-size: 1.7em;  
    font-weight: 500;
    transition: 0.2s ease-in;
    @media (max-width: 500px) {
        font-size: 1.4em; 
        margin-left: 10px; 
        transition: 0.2s ease-in;
    }
`;

export const HeaderForm = styled.div`
    margin-left: 30px; 
    margin-right: 30px;
    transition: 0.2s ease-in;
    @media (max-width: 500px) {
        margin-left: 15px; 
        margin-right: 15px;
        transition: 0.2s ease-in;
    }
`;