import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import { BootstrapInput } from './TextInput';
import InputLabel from '@material-ui/core/InputLabel';
import {
    KeyboardDatePicker,
} from '@material-ui/pickers';
import React from "react";

export const FormInput = styled(({ ...props }) => (
    <TextField fullWidth variant='outlined' size='small' inputProps={{ maxLength: 60 }}  {...props} />
))`  
`;

export const FormControlStyled = styled(({ ...props }) => (
    <FormControl fullWidth {...props} />
))`  
`;

export const InputLabelStyled = styled(({ ...props }) => (
    <InputLabel shrink htmlFor="bootstrap-input" {...props} />
))`
    && {
        font-size: 20px;
        padding-left: 2%;
        font-weight: 900; 
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        white-space: nowrap;
    }
`;

export const FormInputMultiline = styled(({ ...props }) => (
    <TextField fullWidth variant="outlined" multiline rows={2} rowsMax={4} inputProps={{ maxLength: 1000 }} {...props} />
))` 
`;

export const FormInputNumber = styled(({ ...props }) => (
    <TextField fullWidth inputProps={{ maxLength: 6 }} placeholder="00,00" variant="outlined" {...props} />
))` 
`;

export const FormSelect = styled(({ ...props }) => (
    <BootstrapInput fullWidth  {...props} />
))`  
`;

export const FormRadio = styled(({ ...props }) => (
    <RadioGroup  {...props} />
))`  
`;

export const FormControlRadio = styled(({ ...props }) => (
    <FormControlLabel labelPlacement="end" control={<Radio color="default" />} {...props} />
))` 
    margin-left: 0px;
    && {
        color: #2B6CB0;
    }
`;

export const DatePicker = styled(({ ...props }) => (
    <KeyboardDatePicker disableToolbar
        autoOk
        fullWidth
        inputVariant="outlined"
        format="dd/MM/yyyy"
        invalidLabel="Data Inválida"
        invalidDateMessage="Data Inválida"
        style={{ borderRadius: 10 }}
        size="small"
        {...props} />
))`
    && {
        background-color: #FFFFFF;
        border-radius: 10px;
    }
`;

export const ContainerRadio = styled.div`
    border : 1px solid rgba(0,0,0,0.25);
    border-radius: 10px;  
    padding: 2.2px;
    background-color: #FFFFFF; 
    :hover {
        border-color:#6e6e6e;
    } 
`;