import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
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
  label,
  type,
  valueDefault,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <FormControl fullWidth id="marginForm" checked={true}>
      <TextField
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
      />
    </FormControl >
  );

export const SelectField2 = ({ input, array, defaultValue, label, meta: { touched, invalid, error }, erro, children, ...custom }) => (
  <FormControl fullWidth id="marginForm" checked={true}>
    <TextField
      select
      label={label}
      value={defaultValue}
      variant="outlined"
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    >
      {array.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  </FormControl>
);

export const SelectField = ({
  input,
  label,
  meta: { touched },
  erro,
  children,
  ...custom
}) => (
    <FormControl fullWidth error={touched && erro} id="marginForm" checked={true}>
      <InputLabel>{label}</InputLabel>
      <Select {...input} {...custom} variant="outlined">
        {children}
      </Select>
    </FormControl>
  );

export const SelectFieldUpdate = ({
  input,
  label,
  valueDefault,
  meta: { touched },
  erro,
  children,
  ...custom
}) => (
    <FormControl fullWidth error={touched && erro} id="marginForm">
      <InputLabel>{label}</InputLabel>
      <Select {...input} {...custom} value={valueDefault} variant="outlined">
        {children}
      </Select>
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

export const renderTextFieldLogin = ({
  className,
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <FormControl fullWidth className={className}>
      <TextField
        label={label}
        margin="normal"
        variant="outlined"
        id="mui-theme-provider-outlined-input"
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
      />
    </FormControl>
  );

export const renderTextFieldPassword = ({
  className,
  onClick,
  onMouseDown,
  conditional,
  type,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <FormControl fullWidth className={className}>
      <TextField
        id="outlined-adornment-password"
        variant="outlined"
        type={type}
        label="Password"
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={onClick}
                onMouseDown={onMouseDown}
              >
                {conditional}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </FormControl>
  );
