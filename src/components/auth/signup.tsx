import React, { useState } from 'react';
import { InputsState } from '../../data/types';
import { signUpUserEmailPassword } from '../../utils/firebase';
import Button from '../UI/button';
import { Input } from '../UI/input';
import { errorRed } from '../../styles/variables';

const inputsData = [
  {
    placeholder: 'Email',
    type: 'email',
    id: 'email',
  },
  {
    placeholder: 'Пароль',
    type: 'password',
    id: 'password',
  },
  {
    placeholder: 'Повторите пароль',
    type: 'password',
    id: 'repeatPassword',
  },
];

const SignUp = () => {
  const [values, setValues] = useState<InputsState>({});
  const [passwordEqual, setPasswordsEqual] = useState(true);

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const inputType = input.dataset.id;

    if (!inputType) return;
    setValues((prevState) => {
      return { ...prevState, [inputType]: input.value };
    });
  };

  const signUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password, repeatPassword } = values;
    if (password !== repeatPassword) {
      setPasswordsEqual(false);
      return;
    }
    setPasswordsEqual(true);

    try {
      const res = await signUpUserEmailPassword(email, password);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={signUpHandler}>
      {inputsData.map((input) => {
        const { placeholder, type, id } = input;
        return (
          <Input
            key={id}
            placeholder={placeholder}
            type={type}
            data-id={id}
            onChange={inputChangeHandler}
            value={values[id] || ''}
            required
          />
        );
      })}
      <Button type="submit">Sign Up</Button>
      {!passwordEqual && <p css={errorRed}>Пароли отличаются</p>}
    </form>
  );
};

export default SignUp;
