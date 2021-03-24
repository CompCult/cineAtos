import styled from "styled-components";

export const Img = styled.img`
    width: 400px;
    height: 260px; 
    border-radius: 12px;
    transition: 0.2s ease-in;
    margin-bottom: 12px; 
    @media (max-width: 960px) {
        width: 370px; 
        transition: 0.2s ease-in;
    }
    @media (max-width: 600px) {
        width: 360px; 
        transition: 0.2s ease-in;
    }
    @media (max-width: 450px) {
        width: 280px; 
        transition: 0.2s ease-in;
    }
`;

export const Container = styled.div`
    left: 50%;
    top: 50%;
    margin-left: -420px; /* Metade do valor da Largura */
    margin-top: -130px; /* Metade da valor da Altura */
    position: absolute;
    width: 840px; /* Valor da Largura */
    height: 260px; /* Valor da Altura */ 
    color:#fff;
    transition: 0.2s ease-in; 
    @media (max-width: 960px) {
        margin-left: -280px; /* Metade do valor da Largura */ 
        margin-top: -220px; /* Metade da valor da Altura */
        width: 560px; /* Valor da Largura */ 
        height: 440px; /* Valor da Altura */
        transition: 0.2s ease-in;
    }
    @media (max-width: 600px) {
        margin-left: -180px; /* Metade do valor da Largura */ 
        margin-top: -220px; /* Metade da valor da Altura */
        width: 360px; /* Valor da Largura */ 
        height: 440px; /* Valor da Altura */
        transition: 0.2s ease-in;
    }
    @media (max-width: 450px) {
        margin-left: -140px; /* Metade do valor da Largura */ 
        margin-top: -220px; /* Metade da valor da Altura */
        width: 280px; /* Valor da Largura */ 
        height: 440px; /* Valor da Altura */
        transition: 0.2s ease-in;
    }
`;