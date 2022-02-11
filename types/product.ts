import { EProduct } from "constants/product";

export interface IProduct {
  [EProduct.Id]: string
  [EProduct.ImageUrl]: string
  [EProduct.Name]: string
  [EProduct.Price]: number
  [EProduct.Quantity]: number
  [EProduct.SellingPrice]: number
}