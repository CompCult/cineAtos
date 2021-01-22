import styled from "styled-components";

export const Img = styled.img`
    width: 100%;
    height: 300px; 
    transition: 0.2s ease-in; 
    @media (max-width: 600px) {
        height: 250px; 
        transition: 0.2s ease-in;
    }
    @media (max-width: 500px) {
        height: 200px; 
        transition: 0.2s ease-in;
    }
    @media (max-width: 400px) {
        height: 180px; 
        transition: 0.2s ease-in;
    }
`;