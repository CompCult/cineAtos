import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import '../../App.css'
import MenuItem from "@material-ui/core/MenuItem";

export const DataPicker = ({
  input,
  selectedDate,
  minData,
  label,
  disablePast
}) => (
    <div id="marginForm">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          {...input}
          clearable
          label={label}
          value={selectedDate}
          minDate={minData}
          inputVariant="outlined"
          format="dd/MM/yyyy"
          disablePast={disablePast !== undefined ? disablePast : true}
        />
      </MuiPickersUtilsProvider>
    </div>
  );

export const RenderTextField = ({
  className,
  label,
  type,
  valueDefault,
  input,
  rows,
  InputProps,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <FormControl fullWidth className={className} id="marginForm" checked={true}>
      <TextField
        multiline={rows !== undefined ? true : false}
        rowsMax={rows}
        fullWidth
        label={label}
        placeholder={label}
        type={type}
        variant="outlined"
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
        value={valueDefault}
        InputProps={InputProps}
      />
    </FormControl >
  );

export const SelectField = ({ input, array, label, valueDefault, meta: { touched, invalid, error }, erro, children, ...custom }) => (
  <FormControl fullWidth id="marginForm" checked={true}>
    <TextField
      select
      label={label}
      variant="outlined"
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
      value={valueDefault} >
      {array.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  </FormControl>
);

export const RadioButtonTypeSent = ({ input, label, checked, ...rest }) => (
  <div id="marginForm">
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest} row>
      <FormControlLabel
        value="true"
        checked={checked === true}
        control={<Radio />}
        label="Sim"
      />
      <FormControlLabel
        value="false"
        checked={checked === false}
        control={<Radio />}
        label="Nao"
      />
    </RadioGroup>
  </div>
);

export const RadioButtonType = ({ input, label, FormControlLabelOne, FormControlLabelTwo, checked, ...rest }) => (
  <div id="marginForm">
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest} row>
      <FormControlLabel
        value="true"
        checked={checked === true}
        control={<Radio />}
        label={FormControlLabelOne}
      />
      <FormControlLabel
        value="false"
        checked={checked === false}
        control={<Radio />}
        label={FormControlLabelTwo}
      />
    </RadioGroup>
  </div>
);