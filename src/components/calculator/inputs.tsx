import { useState } from 'react';
import { css } from '@emotion/react';
import { KeyNum } from '../../data/types';
import Button from '../UI/button';
import { LabeledCheckbox } from '../UI/checkbox';
import { InputLabeled } from '../UI/input';
import {
  borderRadius,
  flexCenterColumn,
  gridTwoCols,
  shadow,
  space,
} from '../../styles/variables';
import { colors } from '../../styles/colors';
import { hexToRgb } from '../../utils/utils';

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

const inputsContainerStyles = css`
  ${flexCenterColumn};
  align-items: flex-start;
  gap: ${space.sm};
  margin-top: ${space.lg};
`;

const inputsStyles = css`
  ${gridTwoCols};
  row-gap: ${space.sm};
  column-gap: ${space.xxl};
  margin-bottom: ${space.md};
  letter-spacing: 0.06rem;
  text-shadow: 0 0 0.25rem ${colors.orangeLight};

  input {
    padding: ${space.sm} ${space.md};
    margin-right: ${space.md};
    width: 10rem;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: ${colors.orange};
    text-align: center;
    text-shadow: 0 0 0.15rem ${colors.orangeLight};
    border: none;
    border-radius: ${borderRadius.round};
    background-color: rgba(${hexToRgb(colors.backgroundGray)}, 0.6);
    box-shadow: inset ${shadow.inset};

    &:focus {
      outline: none;
      box-shadow: ${shadow.focus};
    }
  }

  label:first-of-type {
    grid-column-end: span 2;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const secondaryInputStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${space.sm};
  margin-bottom: ${space.lg};
`;

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
      <div css={inputsStyles}>{inputs}</div>
      <div css={secondaryInputStyles}>
        <LabeledCheckbox
          label="Включить ZIP"
          onChange={zipChangeHandler}
          value={zip}
        />
        <Button label="Вычислить" type="submit" />
      </div>
    </form>
  );
};

export default Inputs;
