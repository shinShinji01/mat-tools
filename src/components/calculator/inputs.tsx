import { useState } from 'react';
import { inputsContainerStyles } from '../../styles/inputs';
import { InputLabeled } from '../UI/input';

interface InputData {
  label: string;
  id: string;
}

interface InputsProps {
  onCalculate: (data: InputsState) => void;
  inputsData: InputData[];
}

interface InputsState {
  [key: string]: string;
}

const Inputs = (props: InputsProps) => {
  const { onCalculate, inputsData } = props;
  const [values, setValues] = useState<InputsState>({});

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

  const calculateHandler = () => onCalculate(values);

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
      />
    );
  });

  return (
    <>
      <div css={inputsContainerStyles}>{inputs}</div>
      <button onClick={calculateHandler}>Calc</button>
    </>
  );
};

export default Inputs;
