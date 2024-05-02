import {CatalogItemInterface} from "./catalog-item.interface";

export interface GeneralPartsInterface {
  [key: string]: any[];
  pumps: CatalogItemInterface[]
  jacks: CatalogItemInterface[]
  motorOils: CatalogItemInterface[]
  antifreeze: CatalogItemInterface[]
  tires: CatalogItemInterface[]
  discs: CatalogItemInterface[]
  steeringWheel: CatalogItemInterface[]
  batteries: CatalogItemInterface[]
  wipers: CatalogItemInterface[]
  engines: CatalogItemInterface[]
  gearbox: CatalogItemInterface[]
  shockAbsorbers: CatalogItemInterface[]
}
