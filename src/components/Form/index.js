import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Price from "../PriceSubmit/price";
import Buttom from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import "./styles.css";

const validate = values => {
  const errors = {};
  const requiredFields = ["firstName", "email", "genero"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Campo obrigatório";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Email invalido";
  }
  return errors;
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    fullWidth
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    margin="normal"
    variant="outlined"
    InputLabelProps={{
      shrink: true
    }}
    {...input}
    {...custom}
  />
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, invalid, error },
  children,
  ...custom
}) => (
  <FormControl className="selectStyle">
    <TextField
      select
      fullWidth
      error={touched && invalid}
      helperText={touched && error}
      style={{ width: 100 }}
      {...input}
      {...custom}
      margin="normal"
      label={label}
      InputLabelProps={{
        shrink: true
      }}
      variant="outlined"
    >
      {children}
    </TextField>
    {/* {renderFromHelper({ touched, error })} */}
  </FormControl>
);

const handleFormSubmit = (values, props, history) => {
  history.history.push({
    pathname: "/finish",
    state: {
      name: values.firstName
    }
  });
};

const MaterialUiForm = props => {
  const { handleSubmit, classes, history } = props;
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit, props, history)}
      className="formStyle"
    >
      <Grid container spacing={1}>
        <Grid item lg={5} xs={12} sm={6} md={5}>
          <Field name="firstName" component={renderTextField} label="Nome" />
        </Grid>

        <Grid lg={5} item xs={12} sm={6} md={5}>
          <Field name="email" component={renderTextField} label="Email" />
        </Grid>

        <Grid lg={2} item xs={12} sm={2} md={2}>
          <Field
            classes={classes}
            name="genero"
            component={renderSelectField}
            label="Genero"
          >
            <MenuItem value={"Masculino"}>Masculino</MenuItem>
            <MenuItem value={"Feminino"}>Feminino</MenuItem>
          </Field>
        </Grid>
      </Grid>

      <div className="mainDiv">
        <div className="sub">
          <div className="price">
            <Price />
          </div>

          <div className="submit">
            <Buttom
              type="submit"
              // disabled={props.pristine || props.submitting}
              variant="contained"
            >
              Finalizar Compra
            </Buttom>
          </div>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "MaterialUiForm",
  validate
})(MaterialUiForm);
