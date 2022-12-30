export interface LinkData {
  label: string;
  src: string;
  header?: string;
  id?: string;
}

export const navLinks: LinkData[] = [
  {
    label: 'Материалы',
    src: 'calculator/materials',
    header: 'Калькулятор материалов',
    id: 'materials',
  },
  {
    label: 'Номер',
    src: 'calculator/number',
    header: 'Калькулятор номера',
    id: 'number',
  },
  {
    label: 'Площади',
    src: '#',
    header: 'Площади',
    id: 'area',
  },
];
