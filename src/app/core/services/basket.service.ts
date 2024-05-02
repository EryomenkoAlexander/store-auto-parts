import {Injectable} from "@angular/core";
import {CatalogItemInterface} from "../interfaces/catalog-item.interface";

@Injectable({providedIn: 'root'})
export class BasketService {

  private _basketKey: string = 'basket';

  get basket(): CatalogItemInterface[] {
    return JSON.parse(localStorage.getItem(this._basketKey) || '[]');
  }

  constructor() {}

  public addItemToBasket(item: CatalogItemInterface) {
    // Получаем текущую корзину из localStorage
    let basket: CatalogItemInterface[] = this.basket

    // Проверяем, существует ли уже такой товар в корзине
    const existingItem: CatalogItemInterface | undefined = basket.find(basketItem => basketItem.brand === item.brand && basketItem.description === item.description && basketItem.category === item.category);

    if (existingItem) {
      // Если товар найден, увеличиваем его количество
      existingItem.count = existingItem.count + 1;
    } else {
      // Если товар не найден, добавляем его в корзину
      basket.push({...item, count: 1});
    }

    // Сохраняем обновленную корзину обратно в localStorage
    localStorage.setItem(this._basketKey, JSON.stringify(basket));
  }


  public deleteItem(item: CatalogItemInterface) {
    const filteredItems: CatalogItemInterface[] = this.basket
      .filter((catalogItem: CatalogItemInterface) => catalogItem.description !== item.description)
    localStorage.setItem(this._basketKey, JSON.stringify(filteredItems));
  }

  public plus(item: CatalogItemInterface) {
    const updatedBasket: CatalogItemInterface[] = this.basket
      .map((catalogItem: CatalogItemInterface) => {
        if (catalogItem.description === item.description) {
          return {
            ...catalogItem,
            count: catalogItem.count + 1
          }
        }
        return catalogItem
      })
    localStorage.setItem(this._basketKey, JSON.stringify(updatedBasket));
  }

  public minus(item: CatalogItemInterface) {
    const updatedBasket: CatalogItemInterface[] = this.basket
      .map((catalogItem: CatalogItemInterface) => {
        if (catalogItem.description === item.description) {
          return {
            ...catalogItem,
            count: catalogItem.count > 1 ? catalogItem.count - 1 : catalogItem.count
          }
        }
        return catalogItem
      })
    localStorage.setItem(this._basketKey, JSON.stringify(updatedBasket));
  }

  public clearBasket() {
    localStorage.setItem(this._basketKey, JSON.stringify([]));
  }

}
