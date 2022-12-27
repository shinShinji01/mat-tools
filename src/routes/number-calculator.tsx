import { ChangeEvent, useEffect, useState } from 'react';
import { InputsState } from '../data/types';
import { SecondaryHeader } from '../components/header';
import Inputs from '../components/calculator/inputs';
import Select from '../components/UI/select';
import { materialsTypes } from '../data/materials';

const inputsData = [
  {
    label: 'Закрыто (№) до начала работы',
    id: 'initial_number',
  },
  {
    label: 'Готово единиц (М)',
    id: 'units_stock_s',
  },
  {
    label: 'Готово единиц (Б)',
    id: 'units_stock_l',
  },
];

const NumberCalculator = () => {
  const [matType, setMatType] = useState('');

  // Generate options for material type select menu
  const selectOptions = materialsTypes.map((mat) => {
    return (
      <option key={mat.id} value={mat.id}>
        {mat.label}
      </option>
    );
  });

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setMatType(e.target.value);

  /**
   * Calculate the number of the conditioner, on which the next material roll will get started
   * @param data input values
   */
  const calculate = (data: InputsState) => {
    //
  };

  return (
    <>
      <SecondaryHeader label="Калькулятор номеров" />
      {/* Description */}
      <Select onChange={onSelectChange} value={matType}>
        {selectOptions}
      </Select>
      <Inputs onCalculate={calculate} inputsData={inputsData} />
    </>
  );
};

export default NumberCalculator;
