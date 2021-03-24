import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkRouter = styled(({ ...props }) => (
    <Link {...props} />
))`
    text-decoration: none; 
    color: #FFFFFF;
    cursor: pointer;
`; 