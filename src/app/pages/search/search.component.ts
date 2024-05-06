import {Component, OnDestroy, OnInit} from "@angular/core";
import {GeneralPartsInterface} from "../../core/interfaces/general-parts.interface";
import {GeneralParts} from "../../core/consts/catalog/general-parts";
import {Subject, takeUntil} from "rxjs";
import {CatalogItemInterface} from "../../core/interfaces/catalog-item.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {SnackbarService} from "../../core/components/snackbar/core/services/snackbar.service";
import {BasketService} from "../../core/services/basket.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  protected readonly generalParts: GeneralPartsInterface = GeneralParts

  private _unSubscribeAll: Subject<any> = new Subject<any>()

  public filteredParts: CatalogItemInterface[] = []

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _snackbarService: SnackbarService,
    private _router: Router,
    private _basketService: BasketService
  ) {}

  private _filterParts(searchValue: string) {
    if (!searchValue) return

    searchValue = searchValue.toLowerCase();

    const categories: CatalogItemInterface[][] = Object.values(this.generalParts);
    this.filteredParts = categories.flatMap((category: CatalogItemInterface[]) =>
      category.filter((part: CatalogItemInterface) =>
        part.brand.toLowerCase().includes(searchValue) ||
        part.description.toLowerCase().includes(searchValue) ||
        part.category.toLowerCase().includes(searchValue)
      )
    );
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

  public goToCatalog() {
    this._router.navigate(['pages/catalog'])
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
    this._activatedRoute.queryParams
      .pipe(takeUntil(this._unSubscribeAll))
      .subscribe(params => {
        this._filterParts(params['searchValue'])
      });
  }

  ngOnDestroy() {
    this._unSubscribeAll.next(null)
    this._unSubscribeAll.complete()
  }

}
