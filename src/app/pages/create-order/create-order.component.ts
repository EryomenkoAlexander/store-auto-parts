import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {BasketService} from "../../core/services/basket.service";
import {CatalogItemInterface} from "../../core/interfaces/catalog-item.interface";
import {SnackbarService} from "../../core/components/snackbar/core/services/snackbar.service";
import {Router} from "@angular/router";
import {UserService} from "../../core/services/user.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit, OnDestroy {

  private _unSubscribeAll: Subject<any> = new Subject<any>()

  public city: FormControl = new FormControl<string>('')
  public street: FormControl = new FormControl<string>('')
  public home: FormControl = new FormControl<string>('')
  public type: 'cash' | 'card' = 'cash'

  public cardNumber: FormControl = new FormControl<string>('5244215082526420')
  public cardCarrier: FormControl = new FormControl<string>('Joe Alison')
  public cardDateStart: FormControl = new FormControl<string>('10')
  public cardDateFinish: FormControl = new FormControl<string>('22')
  public cardCvv: FormControl = new FormControl<string>('824')

  get basket(): CatalogItemInterface[] {
    return this._basketService.basket
  }

  get totalCost(): number {
    if (!this.basket) return 0
    return this.basket.reduce((acc: number, item: CatalogItemInterface) => acc + item.price * item.count, 0)
  }

  get formattedCardNumber(): string[] {
    // Удаление всех пробелов, обрезка до первых 16 символов
    const cleaned = this.cardNumber.value.replace(/\s/g, '').slice(0, 16);

    // Разделение строки на части по 4 символа и возвращение в виде массива
    return cleaned.match(/.{1,4}/g) || [];  // Добавляем `|| []` для обработки случая, когда `match` возвращает null
  }


  constructor(
    private _basketService: BasketService,
    private _snackbarService: SnackbarService,
    private _router: Router,
    private _userService: UserService
  ) {}

  private _subscribeUpdateCity() {
    this._userService.signalUpdateCity
      .pipe(takeUntil(this._unSubscribeAll))
      .subscribe((country: string) => {
        this.city.setValue(country)
      })
  }

  public setActiveType(type: 'cash' | 'card'): void {
    this.type = type
  }

  public pay() {
    this._snackbarService.success('Оплата прошла успешно, заказ будет доставлен в течении 7 дней')
    this._router.navigate(['/pages/catalog'])
    this._basketService.clearBasket()
  }

  ngOnInit() {
    this._subscribeUpdateCity()
    this.city.setValue(this._userService.getCity() || '')
  }

  ngOnDestroy() {
    this._unSubscribeAll.next(null)
    this._unSubscribeAll.complete()
  }

}
