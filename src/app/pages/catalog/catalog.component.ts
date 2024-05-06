import {Component, OnInit} from "@angular/core";
import {MenuItems} from "../../core/consts/menu-items";
import {MenuItemInterface} from "../../core/interfaces/menu-item.interface";
import {GeneralParts} from "../../core/consts/catalog/general-parts";
import {GeneralPartsInterface} from "../../core/interfaces/general-parts.interface";
import {CatalogItemInterface} from "../../core/interfaces/catalog-item.interface";
import {SnackbarService} from "../../core/components/snackbar/core/services/snackbar.service";
import {Router} from "@angular/router";
import {BasketService} from "../../core/services/basket.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  protected readonly menuItems: MenuItemInterface[] = MenuItems
  protected readonly generalParts: GeneralPartsInterface = GeneralParts

  public menuItemActive!: MenuItemInterface
  public activeParts: CatalogItemInterface[] = []

  constructor(
    private _snackbarService: SnackbarService,
    private _router: Router,
    private _basketService: BasketService
  ) {}

  private _initMenuItemActive() {
    this.setActiveMenuItem(this.menuItems[6])
  }

  private _findActivePart() {
    this.activeParts = this.generalParts[this.menuItemActive.category]
  }

  public setActiveMenuItem(item: MenuItemInterface) {
    this.menuItemActive = item
    this._findActivePart()
  }

  public getBg(imagePath: string): string {
    return `url("${imagePath}") no-repeat center / cover`
  }

  public onBuy(part: CatalogItemInterface) {
    this._basketService.addItemToBasket(part)
    this._snackbarService.success(`Товар успешно добавлен в корзину ( ${part.brand} )`)
  }

  public goToBasket() {
    this._router.navigate(['pages/basket'])
  }

  public goToPartDetails(part: CatalogItemInterface) {
    this._router.navigate(['pages/part-details'], {
      queryParams: {
        category: part.category,
        description: part.description
      }
    })
  }

  ngOnInit() {
    this._initMenuItemActive()
  }

}





