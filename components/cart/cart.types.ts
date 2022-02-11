import { IProduct } from "types/product";

export type CartProps = {
  response: {
    value: number,
    items: IProduct[],
    totalizers: {
      id: string,
      name: string,
      value: number
    }[]
  }
}