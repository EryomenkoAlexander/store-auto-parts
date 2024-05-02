import {Component} from "@angular/core";
import {BasketService} from "../../core/services/basket.service";
import {CatalogItemInterface} from "../../core/interfaces/catalog-item.interface";
import {SnackbarService} from "../../core/components/snackbar/core/services/snackbar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  get basket(): CatalogItemInterface[] {
    return this._basketService.basket
  }

  get countParts(): number {
    if (!this.basket) return 0
    return this.basket.reduce((acc: number, item: CatalogItemInterface) => acc + item.count, 0)
  }

  get totalCost(): number {
    if (!this.basket) return 0
    return this.basket.reduce((acc: number, item: CatalogItemInterface) => acc + item.price * item.count, 0)
  }

  constructor(
    private _basketService: BasketService,
    private _snackbarService: SnackbarService,
    private _router: Router
  ) {}

  public getBg(imagePath: string): string {
    return `url("${imagePath}") no-repeat center / cover`
  }

  public deleteItem(item: CatalogItemInterface) {
    this._basketService.deleteItem(item)
    this._snackbarService.success(`Товар успешно удален ${item.brand}`)
  }

  public goToCatalog() {
    this._router.navigate(['/pages/catalog'])
  }

  public plus(item: CatalogItemInterface) {
    this._basketService.plus(item)
  }

  public minus(item: CatalogItemInterface) {
    this._basketService.minus(item)
  }

  public goToCreateOrder() {
    this._router.navigate(['/pages/create-order'])
  }

}
