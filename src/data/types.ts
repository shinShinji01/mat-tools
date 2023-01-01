export interface InputsState {
  [key: string]: string;
}

export interface InputData {
  label: string;
  id: string;
  required?: boolean;
}

export interface KeyNum {
  [key: string]: number;
}

export interface OutputResults {
  [key: string]: {
    label: string;
    value: number;
  };
}
