import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import Select from '@material-ui/core/Select'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export const DataPicker = ({ input, selectedDate, minData, label, disablePast }) => (
    <div id='marginForm'>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker {...input} clearable
                label={label} value={selectedDate} minDate={minData} format="dd/MM/yyyy" disablePast={(disablePast !== undefined ? disablePast : true)} />
        </MuiPickersUtilsProvider>
    </div>
)

export const RenderTextField = ({ label, type, valueDefault, input, meta: { touched, invalid, error }, ...custom }) => (
    <FormControl fullWidth id='marginForm' checked={true}>
        <TextField fullWidth label={label} placeholder={label} type={type}
            error={touched && invalid}
            helperText={touched && error}
            {...input} {...custom} value={valueDefault} />
    </FormControl>
)

export const RadioButton = ({ input, label, children, ...rest }) => (
    <FormControl id='marginForm' checked={true}>
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup {...input} {...rest}>
            {children}
        </RadioGroup>
    </FormControl>
)

export const SelectField = ({ input, label, meta: { touched }, erro, children, ...custom }) => (
    <FormControl fullWidth error={touched && erro} id='marginForm' checked={true}>
        <InputLabel>{label}</InputLabel>
        <Select {...input} {...custom}>
            {children}
        </Select>
    </FormControl>
)

export const SelectFieldUpdate = ({ input, label, valueDefault, meta: { touched }, erro, children, ...custom }) => (
    <FormControl fullWidth error={touched && erro} id='marginForm' checked={true}>
        <InputLabel>{label}</InputLabel>
        <Select {...input} {...custom} value={valueDefault}>
            {children}
        </Select>
    </FormControl>
)

export const RadioButtonTypeSent = ({ input, label, checked, ...rest }) => (
    <div id='marginForm'>
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest} row>
            <FormControlLabel value="true" checked={checked === true} control={<Radio />} label="Sim" id='radioButtonCor' />
            <FormControlLabel value="false" checked={checked === false} control={<Radio />} label="Nao" id='radioButtonCor' />
        </RadioGroup>
    </div>
)
