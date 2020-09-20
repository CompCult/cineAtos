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
  minData,
  label,
  disablePast,
  onChange,
  field
}) => (
    <div id="marginForm">
      <MuiPickersUtilsProvider utils={DateFnsUtils} >
        <KeyboardDatePicker
          onChange={onChange}
          clearable
          id="colorForm"
          label={label}
          value={field.value}
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
  input,
  rows,
  InputProps,
  touched,
  error,
  ...custom
}) => (
    <FormControl fullWidth className={className} id="marginForm" checked={true}>
      <TextField
        multiline={rows ? true : false}
        rowsMax={rows}
        fullWidth
        label={label}
        placeholder={label}
        type={type}
        variant="outlined"
        error={touched && !!error}
        helperText={touched && error}
        {...input}
        {...custom}
        value={custom.value || ''}
        InputProps={InputProps}
        id="colorForm"
      />
    </FormControl >
  );

export const SelectField = ({ input, array, label, touched, error, ...custom }) => (
  <FormControl fullWidth id="marginForm" checked={true}>
    <TextField
      select
      label={label}
      variant="outlined"
      error={touched && !!error}
      helperText={touched && error}
      {...input}
      {...custom}
      value={custom.value || ''}
      id="colorForm">
      {array.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  </FormControl>
);

export const RadioButtonType = ({ input, label, formControlLabelOne, formControlLabelTwo, checked, ...rest }) => (
  <div id="marginForm">
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup aria-label="gender" name="radioButton" {...input} {...rest} row>
      <FormControlLabel
        value="true"
        checked={checked === true || checked === 'true'}
        control={<Radio />}
        label={formControlLabelOne}
      />
      <FormControlLabel
        value="false"
        checked={checked === false || checked === 'false'}
        control={<Radio />}
        label={formControlLabelTwo}
      />
    </RadioGroup>
  </div>
);