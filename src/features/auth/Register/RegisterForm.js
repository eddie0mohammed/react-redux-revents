import React from 'react';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../common/form/TextInput';
import {connect} from 'react-redux';
import {registerUser, socialLogin} from '../authActions';
import {combineValidators, isRequired} from 'revalidate';
import SocialLogin from '../SocialLogin/SocialLogin';

const validate = combineValidators({
  displayName: isRequired('displayName'),
  email: isRequired('email'),
  password: isRequired('password'),
  
}) 

const RegisterForm = (props) => {
  const {handleSubmit, registerUser, error, invalid, submitting, socialLogin} = props;
  return (
    <div>
      <Form size="large" autoComplete="off" onSubmit={handleSubmit(() => registerUser(props.creds.values))}>
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
     
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          {error && <Label style={{marginBottom: '5px'}} basic color="red">{error}</Label>}
          <Button loading={submitting} disabled={invalid || submitting} fluid size="large" color="teal">
            Register
          </Button>
          <Divider horizontal>Or</Divider>
          <SocialLogin socialLogin={socialLogin}/>
        </Segment>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    creds: state.form.registerForm,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (creds) => dispatch(registerUser(creds)),
    socialLogin: (selectedProvider) => dispatch(socialLogin(selectedProvider))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'registerForm', validate})(RegisterForm));