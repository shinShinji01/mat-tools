import { useState } from 'react';
import { css } from '@emotion/react';
import { FilterMaterialUnit } from '../data/materials';
import { InputsState } from '../data/types';
import { SecondaryHeader } from '../components/header';
import { filterMaterials } from '../data/materials';
import Inputs from '../components/calculator/inputs';

interface TotalMaterials {
  [key: string]: number | string;
}

const outputStyles = css`
  list-style: none;
  background-color: rgba(0, 0, 0, 0.2);
`;

const totalAmountNeeded = (
  setsNeeded: number,
  materials: FilterMaterialUnit[]
): TotalMaterials => {
  const totalMaterials: TotalMaterials = {};
  materials.forEach((mat) => {
    totalMaterials[mat.id] = mat.defaultAmount * setsNeeded;
  });

  return totalMaterials;
};

const totalAndStockDifference = (
  totalNeeded: TotalMaterials,
  stock: TotalMaterials
): TotalMaterials => {
  const difference: TotalMaterials = {};
  Object.entries(totalNeeded).forEach((mat) => {
    const [id, amountNeeded] = mat;
    const amountStock = stock[id];
    difference[id] = +amountNeeded - +amountStock;
  });

  return difference;
};

const renderOutput = (output: TotalMaterials) => {
  if (!output) return;
  const outputNodes = filterMaterials.map((mat) => {
    const { id, label } = mat;

    return (
      <li key={id}>
        {label}: {output[id]}
      </li>
    );
  });

  return outputNodes;
};

const MaterialsCalculator = () => {
  const [output, setOutput] = useState<TotalMaterials | null>(null);

  const calculate = (data: InputsState) => {
    // calculate how many materials needed for desired amount of sets
    const totalMaterialsNeeded = totalAmountNeeded(+data.sets, filterMaterials);

    // subtract materials already in stock from the total desired amount
    const difference = totalAndStockDifference(totalMaterialsNeeded, data);

    setOutput(difference);
  };

  return (
    <>
      <SecondaryHeader label="Калькулятор материалов" />
      {/* Description */}
      <Inputs
        onCalculate={calculate}
        inputsData={[{ label: 'Комплекты', id: 'sets' }, ...filterMaterials]}
      />

      <div>
        <ul css={outputStyles}>{output && renderOutput(output)}</ul>
      </div>
    </>
  );
};

export default MaterialsCalculator;
