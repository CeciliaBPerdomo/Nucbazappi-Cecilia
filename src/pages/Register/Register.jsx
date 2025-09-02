import React from 'react';
import { Formik } from 'formik';

import { registerInitialValue } from "../../formik/initialValues"
import { registerValidationSchema } from "../../formik/validationSchema"

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';

import { createUser } from "../../axios/axios-user"
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userSlice';

const Register = () => {

  const dispatch = useDispatch()

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValue}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const user = await createUser(
            values.name,
            values.email,
            values.password
          )
          actions.resetForm()

          // se envia al store-persist
          if (user) {
            dispatch(setCurrentUser({
              ...user.usuario
            }))
          }
        }}
      >
        <Form>
          <LoginInput name="name" type='text' placeholder='Nombre' />
          <LoginInput name="email" type='text' placeholder='Email' />
          <LoginInput name="password" type='password' placeholder='Password' />

          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>

          {/* No es necesario el onClick, lo manejo formik */}
          <Submit type='button'>
            Registrarte
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
