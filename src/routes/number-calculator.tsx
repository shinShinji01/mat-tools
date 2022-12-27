import { useEffect, useState } from 'react';
import { InputsState } from '../data/types';
import { FilterMaterialUnit } from '../data/materials';
import { SecondaryHeader } from '../components/header';
import Inputs from '../components/calculator/inputs';
import Select from '../components/UI/select';
import { filterMaterials, materialsTypes } from '../data/materials';

interface InputsData {
  label: string;
  id: string;
}

interface KeyNumObject {
  [key: string]: number;
}

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
const renderOutput = (output: KeyNumObject) => {
  if (!output) return;
  const outputNodes: React.ReactNode[] = [];

  for (const mat in output) {
    const node = (
      <li key={mat}>
        {mat}: {output[mat]}
      </li>
    );
    outputNodes.push(node);
  }

  return outputNodes;
};

const NumberCalculator = () => {
  const [matType, setMatType] = useState('');
  const [inputsData, setInputsData] = useState<InputsData[]>([]);
  const [output, setOutput] = useState<KeyNumObject | null>(null);

  useEffect(
    () => setInputsData(generateInputsObject(matType, filterMaterials)),
    [matType]
  );

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
    // Selected material data
    const defaultUnitsData = getDefaultMaterialData(matType, filterMaterials);

    // Areas of selected units (single)
    const areas: KeyNumObject = {};
    defaultUnitsData.forEach((mat) => {
      areas[mat.id] = calculateUnitArea(mat);
    });

    // Area covered by stock
    const areaCoveredByStock: KeyNumObject = {};
    for (const mat in areas) areaCoveredByStock[mat] = areas[mat] * +data[mat];

    // Area covered by single set
    const areaCoveredBySet: KeyNumObject = {};
    const defaultAmounts: KeyNumObject = {};
    defaultUnitsData.forEach(
      (mat) => (defaultAmounts[mat.id] = mat.defaultAmount)
    );
    for (const mat in areas)
      areaCoveredBySet[mat] = areas[mat] * defaultAmounts[mat];

    // How many sets covered
    const results: KeyNumObject = {};
    for (const mat in areaCoveredBySet)
      results[mat] = areaCoveredByStock[mat] / areaCoveredBySet[mat];

    setOutput(results);
  };

  return (
    <>
      <SecondaryHeader label="Калькулятор номеров" />
      {/* Description */}
      <Select onChange={onSelectChange} value={matType}>
        {selectOptions}
      </Select>
      <Inputs onCalculate={calculate} inputsData={inputsData} />
      <div>
        <ul>{output && renderOutput(output)}</ul>
      </div>
    </>
  );
};

export default NumberCalculator;
