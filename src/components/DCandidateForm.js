import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  withStyles,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useForm from "./useForm";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      minWidth: 230,
    },
  },
  FormControl: {
    margin: theme.spacing(1),
    minWidth: 230,
  },
  smMargin: {
    margin: theme.spacing(1),
  },
});

const initialFieldValues = {
  fullName: "",
  mobile: "",
  bloodGroup: "",
  email: "",
  age: "",
  address: "",
};

const DCandidateForm = ({ classes, ...props }) => {
  const validate = (fieldValues=values) => {
    let temp = {};
   if ("fullName" in fieldValues)
    temp.fullName = fieldValues.fullName ? "" : "This field is required";
    if ("mobile" in fieldValues)
    temp.mobile = fieldValues.mobile ? "" : "This field is required";
    if ("bloodGroup" in fieldValues)
    temp.bloodGroup = fieldValues.bloodGroup ? "" : "This field is required";
    if ("email" in fieldValues)
    temp.email = /^$|.+@.+..+/.test(fieldValues.email) ? "" : "Email is not valid";
    setErrors({
      ...temp,
    });
    if(fieldValues == values)
    return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFieldValues,validate);

  //material ui for select

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("Validation Succeeded");
    }
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <Grid container>
        <Grid item xs={6}>
          <TextField
            name="fullName"
            variant="outlined"
            label="full name"
            value={values.fullName}
            onChange={handleInputChange}
            {...(errors.fullName && {
              error: true,
              helperText: errors.fullName,
            })}
          />
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            {...(errors.email && { error: true })}
          />
          <FormControl
            variant="outlined"
            className={classes.FormControl}
            {...(errors.bloodGroup && {
              error: true,
              helperText: errors.email,
            })}
          >
            <InputLabel ref={inputLabel}>Blood Group</InputLabel>
            <Select
              name="bloodGroup"
              value={values.bloodGroup}
              onChange={handleInputChange}
              labelWidth={labelWidth}
            >
              <MenuItem value="">Select Blood Group</MenuItem>
              <MenuItem value="A+">A +ve</MenuItem>
              <MenuItem value="A-">A -ve</MenuItem>
              <MenuItem value="B+">B +ve</MenuItem>
              <MenuItem value="AB">AB</MenuItem>
              <MenuItem value="O">O</MenuItem>
            </Select>
            {errors.bloodGroup && (
              <FormHelperText>{errors.bloodGroup}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="mobile"
            variant="outlined"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            {...(errors.mobile && { error: true, helperText: errors.mobile })}
          />
          <TextField
            name="age"
            variant="outlined"
            label="Age"
            value={values.age}
            onChange={handleInputChange}
          />
          <TextField
            name="address"
            variant="outlined"
            label="Address"
            value={values.address}
            onChange={handleInputChange}
          />
          <div>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={classes.smMargin}
            >
              Submit
            </Button>
            <Button variant="contained" className={classes.smMargin}>
              Reset
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(styles)(DCandidateForm);
