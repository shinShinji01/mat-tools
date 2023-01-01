import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { InputData, KeyNum } from '../../data/types';
import Button from '../UI/button';
import { LabeledCheckboxFancy } from '../UI/checkbox';
import { InputLabeled } from '../UI/input';
import {
  flexCenterColumn,
  gridTwoCols,
  inputsBase,
  shadow,
  space,
} from '../../styles/variables';
import { colors } from '../../styles/colors';
import { PlusMinus, X } from 'phosphor-react';

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
  width: 100%;
  row-gap: ${space.sm};
  column-gap: ${space.xxl};
  margin-bottom: ${space.md};
  letter-spacing: 0.06rem;
  text-shadow: 0 0 0.25rem ${colors.orangeLight};

  input {
    ${inputsBase};
    width: 10rem;

    &::placeholder {
      color: ${colors.grayLight};
    }

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
  align-items: flex-start;
  width: 100%;
  gap: ${space.md};

  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: ${space.md};
  }
`;

// const temp: InputsState = {
//   sets: '10',
//   filter_s: '22',
//   filter_l: '22',
//   woven_mesh_s: '22',
//   woven_mesh_l: '22',
//   welded_mesh_s: '22',
//   welded_mesh_l: '22',
// };

const Inputs = (props: InputsProps) => {
  const { onSubmit, inputsData } = props;
  const [values, setValues] = useState<InputsState>({});
  const [zip, setZip] = useState(true);

  useEffect(() => console.log(values), [values]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const updatedValues: KeyNum = {};
    for (const val in values) updatedValues[val] = +values[val];
    onSubmit(e, updatedValues, zip);
  };

  const resetHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const resetValues: InputsState = {};
    for (const val in values) {
      resetValues[val] = '';
    }
    setValues(resetValues);
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
    const { id, label, required } = input;

    return (
      <InputLabeled
        key={id}
        label={label}
        onChange={changeHandler}
        type="number"
        data-id={id}
        placeholder="0"
        value={values[id] || ''}
        required={required}
      />
    );
  });

  return (
    <form onSubmit={submitHandler} css={inputsContainerStyles}>
      <div css={inputsStyles}>{inputs}</div>
      <div css={secondaryInputStyles}>
        <div>
          <LabeledCheckboxFancy
            label="ZIP"
            onChange={zipChangeHandler}
            value={zip}
          />
        </div>
        <div className="buttons">
          <Button label="Посчитать" type="submit">
            <PlusMinus size={20} weight="bold" />
          </Button>
          <Button type="reset" onClick={resetHandler}>
            <X size={20} weight="bold" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Inputs;
