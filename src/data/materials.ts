import { NumberLiteralType } from 'typescript';

export interface FilterMaterial {
  label: string;
  type: string;
  id: string;
}

export interface FilterMaterialUnit extends FilterMaterial {
  defaultAmount: number;
  // !TODO: remove null and replace with actual numbers
  dimensions: { w: number | null; h: number | null };
  size: string;
}

export const materialsTypes: FilterMaterial[] = [
  {
    label: 'Фильтр',
    type: 'filter',
    id: 'filter',
  },
  {
    label: 'Сетка сварная',
    type: 'welded_mesh',
    id: 'welded_mesh',
  },
  {
    label: 'Сетка плетеная',
    type: 'woven_mesh',
    id: 'woven_mesh',
  },
];

export const filterMaterials: FilterMaterialUnit[] = [
  {
    label: 'Фильтр (М)',
    defaultAmount: 6,
    dimensions: { w: 30, h: 31 },
    type: 'filter',
    size: 'small',
    id: 'filter_s',
  },
  {
    label: 'Фильтр (Б)',
    defaultAmount: 3,
    dimensions: { w: 58, h: 34 },
    type: 'filter',
    size: 'large',
    id: 'filter_l',
  },
  {
    label: 'Сетка плетеная (М)',
    defaultAmount: 6,
    dimensions: { w: null, h: null },
    type: 'woven_mesh',
    size: 'small',
    id: 'woven_mesh_s',
  },
  {
    label: 'Сетка плетеная (Б)',
    defaultAmount: 3,
    dimensions: { w: null, h: null },
    type: 'woven_mesh',
    size: 'large',
    id: 'woven_mesh_l',
  },
  {
    label: 'Сетка сварная (М)',
    defaultAmount: 6,
    dimensions: { w: null, h: null },
    type: 'welded_mesh',
    size: 'small',
    id: 'welded_mesh_s',
  },
  {
    label: 'Сетка сварная (Б)',
    defaultAmount: 3,
    dimensions: { w: null, h: null },
    type: 'welded_mesh',
    size: 'large',
    id: 'welded_mesh_l',
  },
];
