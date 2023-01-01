import { useEffect, useState } from 'react';
import { InputData, KeyNum } from '../data/types';
import { FilterMaterialUnit } from '../data/materials';
import { SecondaryHeader } from '../components/header';
import Inputs from '../components/calculator/inputs';
import Select from '../components/UI/select';
import Label from '../components/UI/label';
import { filterMaterials, materialsTypes } from '../data/materials';
import { ZIP_MULTIPLIER } from '../data/config';
import { Calculator } from 'phosphor-react';
import CalculatorCard from '../components/calculator/calculator-card';
import Output from '../components/calculator/output';

// Generate options for material type select menu
const selectOptions = materialsTypes.map((mat) => {
  return (
    <option key={mat.id} value={mat.id}>
      {mat.label}
    </option>
  );
});

const generateInputsObject = (
  materialType: string,
  materialsData: FilterMaterialUnit[]
) => {
  const inputsData: InputData[] = [
    {
      label: 'Закрыто (№) до начала работы',
      id: 'initial_number',
      required: true,
    },
  ];
  const materials = getDefaultMaterialData(materialType, materialsData);
  materials.forEach((mat) => inputsData.push({ label: mat.label, id: mat.id }));
  console.log(inputsData);
  return inputsData;
};

/**
 * Find default data of materials of the selected type
 * @param materialType currently selected material type
 * @param materialsData array of material data
 * @returns array of the default data of materials of selected type
 */
const getDefaultMaterialData = (
  materialType: string,
  materialsData: FilterMaterialUnit[]
) => {
  // Find all materials of the same type
  const materials = materialsData.filter((mat) => mat.type === materialType);

  return materials;
};

// Calculate the area of single unit
const calculateUnitArea = (unitData: FilterMaterialUnit) => {
  const { w, h } = unitData.dimensions;
  const area = w * h;
  return area;
};

// Generate output object for the output component
const generateOutput = (output: number) => {
  const resultObj = { num: { label: 'Следующий №', value: output } };
  return resultObj;
};

const NumberCalculator = () => {
  const [matType, setMatType] = useState(materialsTypes[0].id);
  const [inputsData, setInputsData] = useState<InputData[]>([]);
  const [output, setOutput] = useState<number | null>(null);

  useEffect(
    () => setInputsData(generateInputsObject(matType, filterMaterials)),
    [matType]
  );

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setMatType(e.target.value);

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement>,
    data: KeyNum,
    zip: boolean
  ) => {
    e.preventDefault();
    calculate(data, zip);
  };

  /**
   * Calculate the number of the conditioner, on which the next material roll will get started
   * @param data Input values
   * @param zip Checkbox value. Checks whether zip package should be included
   */
  const calculate = (data: KeyNum, zip: boolean) => {
    const { initial_number: initialNumber } = data;
    if (!initialNumber) return;

    // Selected material data
    const defaultUnitsData = getDefaultMaterialData(matType, filterMaterials);

    // Areas of selected units (single)
    const areas: KeyNum = {};
    defaultUnitsData.forEach((mat) => {
      areas[mat.id] = calculateUnitArea(mat);
    });

    // Area covered by stock
    let areaCoveredByStock = 0;
    for (const mat in areas) {
      const areaCoveredByMat = areas[mat];
      const stockAmount = data[mat] || 0;
      areaCoveredByStock += areaCoveredByMat * stockAmount;
    }

    // Area covered by single set
    let areaCoveredBySet = 0;
    const defaultAmounts: KeyNum = {};
    defaultUnitsData.forEach((mat) => {
      if (!mat.zip) defaultAmounts[mat.id] = mat.defaultAmount;
      if (mat.zip)
        defaultAmounts[mat.id] = zip
          ? mat.defaultAmount * ZIP_MULTIPLIER
          : mat.defaultAmount;
    });
    for (const mat in areas)
      areaCoveredBySet += areas[mat] * defaultAmounts[mat];

    // How many sets covered
    const coveredSets = areaCoveredByStock / areaCoveredBySet;

    // Next number
    const nextNumber = Math.floor(coveredSets + initialNumber);
    setOutput(nextNumber);
  };

  return (
    <div>
      <CalculatorCard>
        <SecondaryHeader label="Калькулятор номеров">
          <Calculator size={36} weight="fill" />
        </SecondaryHeader>
        {/* Description */}
        <Label label="Материал">
          <Select onChange={onSelectChange} value={matType}>
            {selectOptions}
          </Select>
        </Label>
        <Inputs onSubmit={submitHandler} inputsData={inputsData} />
      </CalculatorCard>
      {output && <Output results={generateOutput(output)} />}
    </div>
  );
};

export default NumberCalculator;
