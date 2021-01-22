import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

export const AppBarSteled = styled(({ ...props }) => (
  <AppBar position="fixed" {...props} />
))`
  && {
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    width: 100%;
  }
`;

export const Text = styled(({ ...props }) => (
  <Typography {...props} />
))`
  && {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    margin-left: 400px; 
    transition: 0.2s ease-in;
    @media (max-width: 1200px) {
        margin-left: 340px;
        transition: 0.2s ease-in;
    }
    @media (max-width: 900px) {
        margin-left: 220px;
        transition: 0.2s ease-in;
    }
    @media (max-width: 700px) {
        margin-left: 120px;
        transition: 0.2s ease-in;
    }
    @media (max-width: 500px) {
        font-size: 16px;
        margin-left: 0px;
        transition: 0.2s ease-in;
    }
  }
`;

export const Title = styled(({ ...props }) => (
  <Typography {...props} />
))`
  && {
    font-size: 18px; 
    margin-right: 10px;
    transition: 0.2s ease-in;
    @media (max-width: 500px) {
        font-size: 16px;
        transition: 0.2s ease-in;
    }
  }
`;