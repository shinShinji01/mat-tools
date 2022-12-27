export interface LinkData {
  label: string;
  src: string;
  header?: string;
}

export const navLinks: LinkData[] = [
  {
    label: 'Материалы',
    src: 'calculator/materials',
    header: 'Калькулятор материалов',
  },
  {
    label: 'Номер',
    src: 'calculator/number',
    header: 'Калькулятор номера',
  },
];
