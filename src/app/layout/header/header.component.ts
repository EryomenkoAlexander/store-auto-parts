import {Component, OnInit} from "@angular/core";
import {Cities} from "../../core/consts/cities";
import {CityInterface} from "../../core/interfaces/city.interface";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../core/services/user.service";
import {UserInterface} from "../../core/interfaces/user.interface";
import {SnackbarService} from "../../core/components/snackbar/core/services/snackbar.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected readonly cities: CityInterface[] = Cities

  public searchValueControl: FormControl = new FormControl<string>('')
  public activeCity!: string

  get isLogged(): boolean {
    return this._userService.isLogged
  }

  get activeUser(): UserInterface | null {
    return this._userService.getActiveUser()
  }

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _snackbarService: SnackbarService
  ) {}

  private _initCity() {
    const city: string | undefined = this._userService.getCity()
    if (city) {
      this.activeCity = city
    } else {
      this.activeCity = this.cities[0].value
    }
  }

  public onChangeCity() {
    this._userService.setCity(this.activeCity)
  }

  public onSearch() {
    const { value } = this.searchValueControl
    console.log(value)
  }

  public logout() {
    this._snackbarService.success('Вы успешно вышли с аккаунта')
    this._userService.logoutUser()
  }

  public login() {
    this._router.navigate(['pages', 'auth', 'sign-in'])
  }

  public registration() {
    this._router.navigate(['pages', 'auth', 'registration'])
  }

  ngOnInit() {
    this._initCity()
  }

}
