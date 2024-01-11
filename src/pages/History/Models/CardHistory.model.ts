export enum Type {
  WARNING = "warning",
  SUCCESS = "success",
}

export interface ICardHistory {
  title: string;
  type: Type;
  price: number;
}
