import React, { useState } from 'react';
import { Input } from '../UI/input';
import Button from '../UI/button';
import { InputsState } from '../../data/types';
import { signInUserEmailPassword } from '../../utils/firebase';

const inputsData = [
  {
    placeholder: 'Email',
    type: 'email',
    id: 'email',
  },
  {
    placeholder: 'Password',
    type: 'password',
    id: 'password',
  },
];

const SignIn = () => {
  const [values, setValues] = useState<InputsState>({});

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const inputType = input.dataset.id;

    if (!inputType) return;
    setValues((prevState) => {
      return { ...prevState, [inputType]: input.value };
    });
  };

  const signInHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = values;
    try {
      const res = await signInUserEmailPassword(email, password);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={signInHandler}>
      {inputsData.map(({ placeholder, type, id }) => (
        <Input
          key={id}
          placeholder={placeholder}
          type={type}
          data-id={id}
          value={values[id] || ''}
          onChange={inputChangeHandler}
          required
        />
      ))}
      <Button>Sign In</Button>
    </form>
  );
};

export default SignIn;
