import styled from "styled-components";

export const Container = styled.div` 
    margin: 20px 10px 10px 10px;
`;

const WIDTH = '320px';


export interface Props {
    audio?: boolean;
    map?: boolean;
}

export const CardStyled = styled.div` 
    border-radius: 12px;
    margin-top: 15px;
    min-width: ${WIDTH};
    max-width: 400px;
    height: ${(props: Props) => `${props.audio ? 50 : 300}px`}; 
    padding: 5px;
    border: 1px solid #58AFFF; 
    color: #0060B8; 
    transition: 0.2s ease-in;
    @media (max-width: 1290px) {
        max-width: ${WIDTH};
        transition: 0.2s ease-in;
        height: ${(props: Props) => `${props.audio ? 50 : 300}px`}; 
    } 
    @media (max-width: 870px) {
        min-width: 300px;
        max-width: 300px;
        height: 280px;  
        height: ${(props: Props) => `${props.audio ? 50 : 300}px`}; 
        transition: 0.2s ease-in;
    } 
    @media (max-width: 400px) {
        min-width: 250px;
        max-width: 250px;
        height: 220px;  
        height: ${(props: Props) => `${props.audio ? 50 : props.map ? 300 : 220}px`}; 
        transition: 0.2s ease-in;
    } 
`;

export const Text = styled.div` 
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #50555C;
`;

export const Video = styled.video` 
    width: 400px;
    height: 300px;
    border-radius: 12px;
    @media (max-width: 1290px) {
        width: ${WIDTH};
        transition: 0.2s ease-in;
    } 
    @media (max-width: 870px) {
        width: 300px;
        height: 280px;  
        transition: 0.2s ease-in;
    } 
    @media (max-width: 400px) {
        width: 250px; 
        height: 220px;  
        transition: 0.2s ease-in;
    } 
`;

export const Image = styled.img`
    width: ${WIDTH}; 
    height: 300px; 
    border-radius: 12px;
    @media (max-width: 870px) {
        width: 300px;
        height: 280px;  
        transition: 0.2s ease-in;
    } 
    @media (max-width: 400px) {
        width: 250px; 
        height: 220px;  
        transition: 0.2s ease-in;
    } 
`;

export const Audio = styled.audio`
    width: ${WIDTH}; 
    height: 50px; 
    border-radius: 12px;
    @media (max-width: 870px) {
        width: 300px;  
        transition: 0.2s ease-in;
    } 
    @media (max-width: 400px) {
        width: 250px;  
        transition: 0.2s ease-in;
    } 
`;

export const TextResponse = styled.div`
    width: 400px;  
    border-radius: 12px;
    @media (max-width: 1290px) {
        width: ${WIDTH};
        transition: 0.2s ease-in;
    } 
    @media (max-width: 870px) {
        width: 300px;  
        transition: 0.2s ease-in;
    } 
    @media (max-width: 400px) {
        width: 250px;  
        transition: 0.2s ease-in;
    } 
`;