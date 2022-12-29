export interface FilterMaterial {
  label: string;
  type: string;
  id: string;
  zip: boolean;
}

export interface FilterMaterialUnit extends FilterMaterial {
  defaultAmount: number;
  dimensions: { w: number; h: number };
  size: string;
}

export const materialsTypes: FilterMaterial[] = [
  {
    label: 'Фильтр',
    type: 'filter',
    id: 'filter',
    zip: true,
  },
  {
    label: 'Сетка сварная',
    type: 'welded_mesh',
    id: 'welded_mesh',
    zip: false,
  },
  {
    label: 'Сетка плетеная',
    type: 'woven_mesh',
    id: 'woven_mesh',
    zip: false,
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
    zip: true,
  },
  {
    label: 'Фильтр (Б)',
    defaultAmount: 3,
    dimensions: { w: 58, h: 34 },
    type: 'filter',
    size: 'large',
    id: 'filter_l',
    zip: true,
  },
  {
    label: 'Сетка плетеная (М)',
    defaultAmount: 6,
    dimensions: { w: 48, h: 20 },
    type: 'woven_mesh',
    size: 'small',
    id: 'woven_mesh_s',
    zip: false,
  },
  {
    label: 'Сетка плетеная (Б)',
    defaultAmount: 3,
    dimensions: { w: 150, h: 20 },
    type: 'woven_mesh',
    size: 'large',
    id: 'woven_mesh_l',
    zip: false,
  },
  {
    label: 'Сетка сварная (М)',
    defaultAmount: 6,
    dimensions: { w: 34, h: 50 },
    type: 'welded_mesh',
    size: 'small',
    id: 'welded_mesh_s',
    zip: false,
  },
  {
    label: 'Сетка сварная (Б)',
    defaultAmount: 3,
    dimensions: { w: 54, h: 50 },
    type: 'welded_mesh',
    size: 'large',
    id: 'welded_mesh_l',
    zip: false,
  },
];
