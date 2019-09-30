import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

const validate = values => {
  const errors = {}
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'notes'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
)

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
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

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="age-native-simple">Age</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'age',
        id: 'age-native-simple'
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)

const onSubmit = (values, dispatch) => {
    // dispatch(    // your submit action //      );
    console.log('Values');
    console.log(values);
    console.log('Dispatch');
    console.log(dispatch);
  };

const MaterialUiForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, classes } = props
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="sex" component={radioButton}>
          <Radio value="male" label="male" />
          <Radio value="female" label="female" />
        </Field>
      </div>
      <div>
        <Field
          classes={classes}
          name="favoriteColor"
          component={renderSelectField}
          label="Favorite Color"
        >
          <option value="" />
          <option value={'ff0000'}>Red</option>
          <option value={'00ff00'}>Green</option>
          <option value={'0000ff'}>Blue</option>
        </Field>
      </div>
      <div>
        <Field name="employed" component={renderCheckbox} label="Employed" />
      </div>
      <div />
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          multiline
          rowsMax="4"
          margin="normal"
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
})(MaterialUiForm)

// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
// import TextField from '@material-ui/core/TextField'
// import Checkbox from '@material-ui/core/Checkbox'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import FormControl from '@material-ui/core/FormControl'
// import Select from '@material-ui/core/Select'
// import InputLabel from '@material-ui/core/InputLabel'
// import FormHelperText from '@material-ui/core/FormHelperText'
// import Radio from '@material-ui/core/Radio'
// import RadioGroup from '@material-ui/core/RadioGroup'
// import MenuItem from '@material-ui/core/MenuItem';
// import "./styles.css";


// import Grid from '@material-ui/core/Grid';
// import { Button } from '@material-ui/core';

// const validate = values => {

//     console.log('Validate');
//     console.log(values)

//     const errors = {}
//     if (!values.Nome) {
//       errors.username = 'Required'
//     } 
//     if (!values.Email) {
//       errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
//       errors.email = 'Invalid email address'
//     }
//     if (!values.Gender) {
//       errors.age = 'Required'
//     } 
//     return errors
 // }

// const genders = [
//     {
//         value: 'Masculino',
//         label: 'Masculino',
//     },
//     {
//         value: 'Feminino',
//         label: 'Feminino',
//     },

// ];

// const renderInputName = ({
//     input,
//     label,
//     type,
//     meta: { touched, invalid, error },
//   }) => (
//     <TextField
//     id="outlined-full-width"
//     label={label}
//     style={{ margin: 8 }}
//     placeholder={label}
//     // helperText="Full width!"
//     error={touched && invalid}
//     helperText={touched && error}
//     margin="normal"
//     fullWidth
//     variant="outlined"
//     {...input}
//     {...custom}
//     InputLabelProps={{
//         shrink: true,
//     }}
// />
// )

// const renderInputEmail = ({
//     input,
//     label,
//     type,
//     meta: { touched, error, warning }
//   }) => (
//     <TextField
//     id="outlined-full-width"
//     label="Email"
//     style={{ margin: 8 }}
//     placeholder="Digite seu email aqui"
//     fullWidth
//     // helperText="Full width!"
//     margin="normal"
//     variant="outlined"
//     InputLabelProps={{
//         shrink: true,
//     }}
//     />
//   )

// const renderSelectField = ({
//     input,
//     label,
//     type,
//     meta: { touched, error, warning }
//   }) => (
//     <TextField
//     id="outlined-select-currency"
//     select
//     label="Sexo"
//     // placeholder="Selecione"
//     fullWidth
//     style={{ margin: 8 }}
//     // helperText="Please select your currency"
//     margin="normal"
//     InputLabelProps={{
//         shrink: true,
//     }}
//     variant="outlined"
// >
// {genders.map(option => (
//                         <MenuItem key={option.value} value={option.value}>
//                             {option.label}
//                         </MenuItem>
//                     ))}
//     </TextField>
// )

// const onSubmit = (values, dispatch) => {
//     // dispatch(    // your submit action //      );
//     console.log('Values');
//     console.log(values);
//     console.log('Dispatch');
//     console.log(dispatch);
//   };

// const Form = props => {
//   console.log('Redux form');
//   console.log(props);
//   return (
//     <form onSubmit={props.handleSubmit(onSubmit)} className="formStyle" autoComplete="off">
//     <Grid container spacing={1}>


//         <Grid item lg={5} xs={12} sm={6} md={5}>
//         <Field
//           name="Nome"
//           component={renderInputName}
//           label="Nome"
//         />
//         </Grid>

//         <Grid lg={5} item xs={12} sm={6} md={5}>

//         <Field name="Email" component={renderInputEmail} label="Email" />


//         </Grid>

//         <Grid lg={2} item xs={12} sm={2} md={2}>

//         <Field
//         //   classes={classes}
//           name="Genders"
//           component={renderSelectField}
//           label="Genero"
//         >
//         </Field>

//         <Button type="submit">Enviar</Button>

//         </Grid>

//     </Grid>
// </form>

//   )
// }

// export default reduxForm({
//   form: 'FormProducts', // a unique identifier for this form
//   validate,
// })(Form)
