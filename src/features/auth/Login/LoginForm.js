import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../common/form/TextInput';
import {login} from '../authActions';
import {connect} from 'react-redux';

const LoginForm = (props) => {
  const {login, handleSubmit} = props;
  return (
    <Form error size="large" onSubmit={handleSubmit(() => login(props.creds.values))} autoComplete="off">
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
        <Button fluid size="large" color="teal">
          Login
        </Button>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'loginForm'})(LoginForm)); 