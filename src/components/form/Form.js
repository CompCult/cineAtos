import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import Select from '@material-ui/core/Select'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export const DataPicker = ({ input, selectedDate, minData, label }) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker {...input} clearable id="date-picker-dialog"
            label={label} value={selectedDate} minDate={minData} format="dd/MM/yyyy" disablePast={true} />
        <div id='marginForm'></div>
    </MuiPickersUtilsProvider>
)

export const RenderTextField = ({ label, type, input, meta: { touched, invalid, error }, ...custom }) => (
    <FormControl fullWidth id='marginForm'>
        <TextField fullWidth label={label} placeholder={label} type={type}
            error={touched && invalid}
            helperText={touched && error}
            {...input} {...custom} />
    </FormControl>
)

export const RadioButton = ({ input, label, children, ...rest }) => (
    <FormControl id='marginForm'>
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup {...input} {...rest}>
            {children}
        </RadioGroup>
    </FormControl>
)

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}

export const SelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <FormControl fullWidth error={touched && error} id='marginForm'>
        <InputLabel>{label}</InputLabel>
        <Select {...input} {...custom}>
            {children}
        </Select>
        {renderFromHelper({ touched, error })}
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
