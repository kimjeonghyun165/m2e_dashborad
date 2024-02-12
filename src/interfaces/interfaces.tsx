export interface SeriesItem {
  name: string;
  data: number[];
}

export interface dateType {
  date: string[];
  apexData: SeriesItem[];
}

export interface dateType_B {
  rate: number;
  date: string[];
  apexData: SeriesItem[];
  LastTotalCount: number;
}

export interface Props {
  fetchOption: (option: string) => void;
}
