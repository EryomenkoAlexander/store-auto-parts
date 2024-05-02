import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {matchOtherValidator} from "../../../core/validators/match-other-validator";
import {UserService} from "../../../core/services/user.service";
import {UserInterface} from "../../../core/interfaces/user.interface";
import {SnackbarService} from "../../../core/components/snackbar/core/services/snackbar.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public linkConfidentiality: string = 'https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C'
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  public wastePhoneNumber: string[] = [' ', '(', ')']
  public maskPhoneNumber: string = '+0 (000) 000 00 00'

  public form!: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _snackbarService: SnackbarService
  ) { }

  private _initForm() {
    this.form = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, matchOtherValidator('password')]]
    })
  }

  private _filterPhoneNumber(value: string) {
    return value
      .split('')
      .filter((i: string) => !this.wastePhoneNumber.includes(i))
      .join('')
  }

  public toggleShowPassword() {
    this.showPassword = !this.showPassword
  }

  public toggleConfirmShowPassword() {
    this.showConfirmPassword = !this.showConfirmPassword
  }

  public onSubmit() {
    const formData = this.form?.value
    delete formData.confirmPassword

    const resData: UserInterface = {
      ...formData,
      phoneNumber: this._filterPhoneNumber(formData.phoneNumber),
      city: this._userService.getCity()
    }

    if (this._userService.registerUser(resData)) {
      this._snackbarService.success('Регистрация успешно выполнена')
    } else {
      this._snackbarService.warning('Пользователь с таким email или номером телефона уже существует')
    }
  }

  ngOnInit() {
    this._initForm()
  }

}
