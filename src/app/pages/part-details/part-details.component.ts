import {Component, OnDestroy, OnInit} from "@angular/core";
import {CategoryEnum} from "../../core/enums/category.enum";
import {ActivatedRoute, Router} from "@angular/router";
import {pipe, Subject, takeUntil} from "rxjs";
import {SnackbarService} from "../../core/components/snackbar/core/services/snackbar.service";
import {CatalogItemInterface} from "../../core/interfaces/catalog-item.interface";
import {GeneralPartsInterface} from "../../core/interfaces/general-parts.interface";
import {GeneralParts} from "../../core/consts/catalog/general-parts";
import {BasketService} from "../../core/services/basket.service";

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.scss']
})
export class PartDetailsComponent implements OnInit, OnDestroy {

  protected readonly generalParts: GeneralPartsInterface = GeneralParts

  private _unSubscribeAll: Subject<any> = new Subject<any>()

  public foundPart: CatalogItemInterface | undefined

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _snackbarService: SnackbarService,
    private _router: Router,
    private _basketService: BasketService
  ) {}

  private _findPart(category: CategoryEnum, description: string) {
    if (!category || !description) {
      this._snackbarService.error('Неверный код товара')
      this._router.navigate(['pages/catalog'])
      return
    }
    const foundPartsByCategory: CatalogItemInterface[] | undefined = this.generalParts[category]
    if (!foundPartsByCategory) {
      this._snackbarService.error('Неверный код категории')
      this._router.navigate(['pages/catalog'])
      return
    }
    this.foundPart = foundPartsByCategory.find((part: CatalogItemInterface) => part.description === description)
    if (!this.foundPart) {
      this._snackbarService.error('Товар не найден')
      this._router.navigate(['pages/catalog'])
      return
    }
    console.log(this.foundPart)
  }

  public onBuy(part: CatalogItemInterface | undefined) {
    if (!part) return
    this._basketService.addItemToBasket(part)
    this._snackbarService.success(`Товар успешно добавлен в корзину ( ${part.brand} )`)
  }

  public goToCatalog() {
    this._router.navigate(['pages', 'catalog'])
  }

  public goToBasket() {
    this._router.navigate(['pages', 'basket'])
  }

  ngOnInit() {
    this._activatedRoute.queryParams
      .pipe(takeUntil(this._unSubscribeAll))
      .subscribe(params => {
        this._findPart(params['category'], params['description'])
      });
  }

  ngOnDestroy() {
    this._unSubscribeAll.next(null)
    this._unSubscribeAll.complete()
  }

}
