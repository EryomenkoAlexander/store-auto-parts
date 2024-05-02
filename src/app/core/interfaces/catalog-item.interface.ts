import {CategoryEnum} from "../enums/category.enum";

export interface CatalogItemInterface {
  brand: string
  description: string
  category: CategoryEnum
  imagePath: string
  price: number
  count: number
}
