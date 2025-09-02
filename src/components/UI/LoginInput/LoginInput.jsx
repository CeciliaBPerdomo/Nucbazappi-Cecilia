import React from 'react';

import { ErrorMessageStyled, InputContainerStyled, LoginInputStyled } from './LoginInputStyles';
import { ErrorMessage, Field } from 'formik';

const LoginInput = ({ type, placeholder, name }) => {
  return (
    <Field
      name={name}
    >
      {
        ({ field, form: { errors, touched } }) => (
          <InputContainerStyled>
            <LoginInputStyled
              type={type}
              placeholder={placeholder}
              {...field}
              isError={errors[field.name] && touched[field.name]} // isError -> estilo css
            />

            <ErrorMessage name={field.name}>
              { msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled> }
            </ErrorMessage>
          </InputContainerStyled>
        )}
    </Field>
  );
};

export default LoginInput;
