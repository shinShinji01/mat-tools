import React, { useState } from 'react';
import { css } from '@emotion/react';
import { FilterMaterialUnit } from '../data/materials';
import { KeyNum } from '../data/types';
import { SecondaryHeader } from '../components/header';
import { filterMaterials } from '../data/materials';
import Inputs from '../components/calculator/inputs';
import { ZIP_MULTIPLIER } from '../data/config';

interface TotalMaterials {
  [key: string]: number;
}

const outputStyles = css`
  list-style: none;
`;

const totalAmountNeeded = (
  setsNeeded: number,
  zip: boolean,
  materials: FilterMaterialUnit[]
): TotalMaterials => {
  const totalMaterials: TotalMaterials = {};

  materials.forEach((mat) => {
    const calculateAmountForSets = mat.defaultAmount * setsNeeded;

    if (!mat.zip) totalMaterials[mat.id] = calculateAmountForSets;
    if (mat.zip)
      totalMaterials[mat.id] = zip
        ? calculateAmountForSets * ZIP_MULTIPLIER
        : calculateAmountForSets;
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
    difference[id] = amountNeeded - amountStock;
  });

  return difference;
};

const renderOutput = (output: TotalMaterials) => {
  if (!output) return;
  const outputNodes = filterMaterials.map((mat) => {
    const { id, label } = mat;
    const outputString = `${label}: ${
      output[id] < 0 ? `0 (избыток ${Math.abs(output[id])})` : `${output[id]}`
    }`;

    return <li key={id}>{outputString}</li>;
  });

  return outputNodes;
};

const MaterialsCalculator = () => {
  const [output, setOutput] = useState<TotalMaterials | null>(null);

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement>,
    data: KeyNum,
    zip: boolean
  ) => {
    e.preventDefault();
    calculate(data, zip);
  };

  /**
   * Calculate how many units of each material is needed for desired amount of sets
   * @param data Input data
   * @param zip Checkbox value. Checks whether zip package should be included
   */
  const calculate = (data: KeyNum, zip: boolean) => {
    // Calculate how many materials needed for desired amount of sets
    const totalMaterialsNeeded = totalAmountNeeded(
      data.sets,
      zip,
      filterMaterials
    );

    // Subtract materials already in stock from the total desired amount
    const difference = totalAndStockDifference(totalMaterialsNeeded, data);

    setOutput(difference);
  };

  return (
    <>
      <SecondaryHeader label="Калькулятор материалов" />
      {/* Description */}
      <Inputs
        onSubmit={submitHandler}
        inputsData={[{ label: 'Комплекты', id: 'sets' }, ...filterMaterials]}
      />

      <div>
        <ul css={outputStyles}>{output && renderOutput(output)}</ul>
      </div>
    </>
  );
};

export default MaterialsCalculator;
