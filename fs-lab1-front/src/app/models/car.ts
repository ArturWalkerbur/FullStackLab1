export interface ICar{
  id: number;
  carname: string;
  model: string;
  year: number;
  volume: number;
}

export interface ICarWithoutId {
  carname: string;
  model: string;
  year: number;
  volume: number;
}
