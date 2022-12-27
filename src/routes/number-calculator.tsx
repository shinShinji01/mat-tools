import { useState } from 'react';
import { InputsState } from '../data/types';
import { FilterMaterialUnit } from '../data/materials';
import { SecondaryHeader } from '../components/header';
import Inputs from '../components/calculator/inputs';
import Select from '../components/UI/select';
import { filterMaterials, materialsTypes } from '../data/materials';

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
    const {
      initial_number: initialNumber,
      units_stock_s: unitsStockS,
      units_stock_l: unitsStockL,
    } = data;
    console.log(data);

    // Selected material data
    const defaultUnitsData = getDefaultMaterialData(matType, filterMaterials);

    // Get areas of selected units (single)
    const areas: { [key: string]: number } = {};
    defaultUnitsData.forEach((mat) => {
      areas[mat.size] = calculateUnitArea(mat);
    });

    // Calculate total area covered by stock
    const areaCovered = null;
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
