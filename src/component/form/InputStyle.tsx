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
    correctHeight?: boolean
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
    <Select fullWidth displayEmpty variant="outlined" labelId="demo-select-label" id="demo-select"
        inputProps={{
            name: 'age',
            id: 'age-native-simple',
        }}
        {...props} />
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
    border : 1.5px solid #5a5a5a;
    border-radius: 5px;  
    padding: 2.2px;
    background-color: #FFFFFF;
    color:black;
    :hover {
        border-color:white;
    } 
`;

export const LabelForm = styled.p`
    margin-top:${(props: Props) => `${props.correctHeight ? -9 : -10}px`};  
    text-align: left;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    max-width: ${(props: Props) => `${props.maxWidth || 35}px`};  
    font-size: 0.75em;
    line-height: 1;
    margin-left: 6px;
    color:black;
    letter-spacing: 0.00938em;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 54% , #FFFFFF 10%) no-repeat;
    padding-left: 5px; 
`;