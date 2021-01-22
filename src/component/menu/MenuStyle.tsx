import styled from "styled-components";

export const Main = styled.div`
    transition: 0.2s ease-in; 
    margin-top: 25px;
    @media (max-width: 500px) {
        margin-top: 20px;
        transition: 0.2s ease-in;
    }
`;

export const Hearder = styled.div` 
    background: linear-gradient(180deg, #0060B8 , #58AFFF) no-repeat;
    height: 64.5px;
    width: 100%;
    border: none;
    transition: 0.2s ease-in;
    @media (max-width: 500px) {
        height: 56.5px;
        transition: 0.2s ease-in;
    }
`;