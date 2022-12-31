import React, { useState } from 'react';
import { FilterMaterialUnit } from '../data/materials';
import { KeyNum } from '../data/types';
import { SecondaryHeader } from '../components/header';
import { filterMaterials } from '../data/materials';
import Inputs from '../components/calculator/inputs';
import { ZIP_MULTIPLIER } from '../data/config';
import { Calculator } from 'phosphor-react';
import Output from '../components/calculator/output';
import { OutputResults } from '../data/types';
import CalculatorCard from '../components/calculator/calculator-card';

const totalAmountNeeded = (
  setsNeeded: number,
  zip: boolean,
  materials: FilterMaterialUnit[]
): KeyNum => {
  const totalMaterials: KeyNum = {};

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
  totalNeeded: KeyNum,
  stock: KeyNum
): KeyNum => {
  const difference: KeyNum = {};
  Object.entries(totalNeeded).forEach((mat) => {
    const [id, amountNeeded] = mat;
    const amountStock = stock[id];
    difference[id] = amountNeeded - amountStock;
  });

  return difference;
};

// Generate output for the Output component
const generateOutput = (output: KeyNum) => {
  if (!output) return {};

  const outputObj: OutputResults = {};

  filterMaterials.map((mat) => {
    const { label, id } = mat;
    outputObj[id] = {
      label: label,
      value: output[id],
    };
  });

  return outputObj;
};

const MaterialsCalculator = () => {
  const [output, setOutput] = useState<KeyNum | null>(null);

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
    <div>
      <CalculatorCard>
        <SecondaryHeader label="Калькулятор материалов">
          <Calculator size={36} weight="fill" />
        </SecondaryHeader>
        {/* Description */}
        <Inputs
          onSubmit={submitHandler}
          inputsData={[{ label: 'Комплекты', id: 'sets' }, ...filterMaterials]}
        />
      </CalculatorCard>
      <div>
        {output && <Output results={generateOutput(output)} />}
        {/* <ul css={outputStyles}>{output && renderOutput(output)}</ul> */}
      </div>
    </div>
  );
};

export default MaterialsCalculator;
