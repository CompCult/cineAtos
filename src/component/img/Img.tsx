import styled from "styled-components";

export interface Props {
    maxWidth?: number;
    maxHeight?: number;
}

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: ${(props: Props) => `${props.maxWidth ? props.maxWidth : 200}px`}; 
    max-height: ${(props: Props) => `${props.maxHeight ? props.maxHeight : 150}px`};
    margin: 5px; 
`;