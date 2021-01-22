import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

export const ClearFilter = styled.div` 
  text-align: right;
  margin-bottom: 20px;
`;

export const LinkButton = styled(({ ...props }) => (
  <Button variant="contained" size='small' color="secondary" {...props} />
))`
  && {
    margin: 1px 2px 20px 0px; 
  }
`;

export const FabButton = styled(({ ...props }) => (
  <Fab color="primary" {...props} />
))`
  && {
      position: fixed;
      bottom: 40px;
      right: 40px;
      z-index: 1;
      transition: 0.2s ease-in;
      @media (max-width: 500px) {
        bottom: 30px;
        right: 30px;
        transition: 0.2s ease-in;
    }
  }
`;

export const Input = styled.input` 
  display: none;
`;

export const Span = styled.span`  
  font-weight: 600;
`;

export const ButtonStyle = styled.span`
    cursor: pointer;
    margin-left: 15px;
`;


export const Container = styled.div` 
    margin-right: 10px;
    @media (max-width: 300px) {
        margin-right: 0px;
        margin-bottom: 10px;
    }
`;
