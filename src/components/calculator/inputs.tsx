import { useState } from 'react';
import { KeyNum } from '../../data/types';
import { inputsContainerStyles } from '../../styles/inputs';
import Button from '../UI/button';
import { LabeledCheckbox } from '../UI/checkbox';
import { InputLabeled } from '../UI/input';

interface InputData {
  label: string;
  id: string;
}

interface InputsProps {
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    data: KeyNum,
    zip: boolean
  ) => void;
  inputsData: InputData[];
}

interface InputsState {
  [key: string]: string;
}

const Inputs = (props: InputsProps) => {
  const { onSubmit, inputsData } = props;
  const [values, setValues] = useState<InputsState>({});
  const [zip, setZip] = useState(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const updatedValues: KeyNum = {};
    for (const val in values) updatedValues[val] = +values[val];
    onSubmit(e, updatedValues, zip);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;

    setValues((prevState) => {
      if (typeof input.dataset.id === 'string') {
        const state = { ...prevState, [input.dataset.id]: input.value };
        return state;
      }

      return prevState;
    });
  };

  const zipChangeHandler = () => setZip((prevState) => !prevState);

  const inputs = inputsData.map((input) => {
    const { id, label } = input;

    return (
      <InputLabeled
        key={id}
        label={label}
        onChange={changeHandler}
        type="number"
        data-id={id}
        value={values[id] || ''}
        required={true}
      />
    );
  });

  return (
    <form onSubmit={submitHandler} css={inputsContainerStyles}>
      {inputs}
      <LabeledCheckbox
        label="Включить ZIP"
        onChange={zipChangeHandler}
        value={zip}
      />
      <Button label="Вычислить" type="submit" />
    </form>
  );
};

export default Inputs;
