import { useEffect, useState } from 'react';
import { KeyNum } from '../data/types';
import { FilterMaterialUnit } from '../data/materials';
import { SecondaryHeader } from '../components/header';
import Inputs from '../components/calculator/inputs';
import Select from '../components/UI/select';
import { filterMaterials, materialsTypes } from '../data/materials';
import { ZIP_MULTIPLIER } from '../data/config';

interface InputsData {
  label: string;
  id: string;
}

interface KeyNumObject {
  [key: string]: number;
}

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
  const inputsData = [
    {
      label: 'Закрыто (№) до начала работы',
      id: 'initial_number',
    },
  ];
  const materials = getDefaultMaterialData(materialType, materialsData);
  materials.forEach((mat) => inputsData.push({ label: mat.label, id: mat.id }));
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

// Render calculation data to the output container
const renderOutput = (output: number) => {
  if (!output) return;
  return <p>Закрытый №: {output}</p>;
};

const NumberCalculator = () => {
  const [matType, setMatType] = useState(materialsTypes[0].id);
  const [inputsData, setInputsData] = useState<InputsData[]>([]);
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
    const areas: KeyNumObject = {};
    defaultUnitsData.forEach((mat) => {
      areas[mat.id] = calculateUnitArea(mat);
    });

    // Area covered by stock
    let areaCoveredByStock = 0;
    for (const mat in areas) areaCoveredByStock += areas[mat] * data[mat];

    // Area covered by single set
    let areaCoveredBySet = 0;
    const defaultAmounts: KeyNumObject = {};
    defaultUnitsData.forEach(
      (mat) =>
        (defaultAmounts[mat.id] = zip
          ? mat.defaultAmount * ZIP_MULTIPLIER
          : mat.defaultAmount)
    );
    for (const mat in areas)
      areaCoveredBySet += areas[mat] * defaultAmounts[mat];

    // How many sets covered
    const coveredSets = areaCoveredByStock / areaCoveredBySet;

    // Next number
    const nextNumber = Math.floor(coveredSets + initialNumber);
    setOutput(nextNumber);
  };

  return (
    <>
      <SecondaryHeader label="Калькулятор номеров" />
      {/* Description */}
      <Select onChange={onSelectChange} value={matType}>
        {selectOptions}
      </Select>
      <Inputs onSubmit={submitHandler} inputsData={inputsData} />
      <div>
        <ul>{output && renderOutput(output)}</ul>
      </div>
    </>
  );
};

export default NumberCalculator;
