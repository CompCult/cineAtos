import styled from "styled-components";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import {
    KeyboardDatePicker,
} from '@material-ui/pickers';

interface Props {
    maxWidth?: number;
}

export const FormInput = styled(({ ...props }) => (
    <TextField placeholder={props.label} fullWidth inputProps={{ maxLength: 60 }} variant="outlined" {...props} />
))` 
    &&{   
        border-radius: 5px;  
    }
`;

export const FormInputMultiline = styled(({ ...props }) => (
    <TextField fullWidth multiline rows={4} rowsMax={6} inputProps={{ maxLength: 1000 }} variant="outlined" {...props} />
))` 
`;

export const FormInputNumber = styled(({ ...props }) => (
    <TextField fullWidth inputProps={{ maxLength: 6 }} placeholder="00,00" variant="outlined" {...props} />
))` 
`;

export const FormSelect = styled(({ ...props }) => (
    <Select fullWidth displayEmpty variant="outlined" labelId="demo-select-label" id="demo-select" {...props} />
))` 
    &&{  
        background-color: #FFFFFF;
        border-radius: 5px; 
    }
`;

export const FormRadio = styled(({ ...props }) => (
    <RadioGroup row {...props} />
))` 
    margin-top: -7px; 
`;

export const FormControlRadio = styled(({ ...props }) => (
    <FormControlLabel labelPlacement="start" control={<Radio />} {...props} />
))`  
`;

export const DatePicker = styled(({ ...props }) => (
    <KeyboardDatePicker disableToolbar
        autoOk
        fullWidth
        inputVariant="outlined"
        format="dd/MM/yyyy"
        invalidLabel="Data Inválida"
        invalidDateMessage="Data Inválida"
        {...props} />
))`
`;

export const ContainerRadio = styled.div`
    border : 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 5px; 
    margin-bottom: 30px; 
    padding: 2.2px;
    background-color: #FFFFFF;
    color:#5a5a5a;
`;


export const LabelForm = styled.p`
    margin-top: -11px; 
    text-align: left;
    max-width: ${(props: Props) => `${props.maxWidth ? props.maxWidth : 35}px`};  
    font-size: 12px;
    margin-left: 6px;
    color:#5a5a5a;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 60% , #FFFFFF 40%) no-repeat;
    padding-left: 5px;
    background-color: rgba(0, 0, 0, 0);
`;