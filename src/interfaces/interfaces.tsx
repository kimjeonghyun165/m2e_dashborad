export interface SeriesItem {
  name: string;
  data: number[];
}

export interface SeriesTypeItem {
  name: string;
  type: string;
  data: number[];
  dataLabel: {
    enabled: boolean;
  };
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
