import React from 'react';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../common/form/TextInput';
import {login, socialLogin} from '../authActions';
import {connect} from 'react-redux';
import SocialLogin from '../SocialLogin/SocialLogin';

const LoginForm = (props) => {
  const {login, handleSubmit, error, socialLogin} = props;
  return (
    <Form size="large" onSubmit={handleSubmit(() => login(props.creds.values))} autoComplete="off">
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && <Label basic color="red" style={{marginBottom:'5px'}}>{error}</Label>}
        <Button fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        <SocialLogin socialLogin={socialLogin}/>
      </Segment>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    creds: state.form.loginForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login:  (creds) => dispatch(login(creds)),
    socialLogin: (selectedProvider) => dispatch(socialLogin(selectedProvider))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'loginForm'})(LoginForm)); 