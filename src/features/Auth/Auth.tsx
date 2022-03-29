import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import { Form, BoxContent, GoogleBtn } from './Auth.style';
import { ILogin } from './interfaces';

const Login = ({
  hasSessionActive,
  signInWithGoogle,
  singInWithEmail,
  createUserWithEmail,
}: ILogin) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    if (hasSessionActive) singInWithEmail(email, password);
    if (!hasSessionActive) createUserWithEmail(email, password);

    reset({ email: '', password: '' });
  };

  return (
    <BoxContent>
      <h1 data-testid="h1-title">{hasSessionActive ? 'Sign in' : 'Sign Up'}</h1>
      <Form>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            label="Email"
            {...register('email', { required: true })}
          />
        </FormControl>
        {errors.email && <span>Email is required</span>}

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            label="Password"
            type="password"
            {...register('password', { required: true })}
          />
        </FormControl>
        {errors.password && <span>Password is required</span>}

        <Button
          data-testid="submitBtn"
          variant="contained"
          type="submit"
          size="large"
          onClick={handleSubmit(onSubmit)}
        >
          {hasSessionActive ? 'Login' : 'Create account'}
        </Button>
      </Form>
      <GoogleBtn data-testid="googleBtn" onClick={signInWithGoogle}>
        Google
      </GoogleBtn>
    </BoxContent>
  );
};

export default Login;
