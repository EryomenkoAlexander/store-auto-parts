import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../core/services/user.service";
import {SnackbarService} from "../../../core/components/snackbar/core/services/snackbar.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public linkConfidentiality: string = 'https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C'
  public showPassword: boolean = false;
  public form!: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _snackbarService: SnackbarService
  ) { }

  private _initForm() {
    this.form = this._fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  public onSubmit() {
    const data = this.form.value

    if (this._userService.loginUser(data.email, data.password)) {
      this._snackbarService.success('Вход успешно выполнен')
      this._router.navigate(['/pages', 'catalog'])
    } else {
      this._snackbarService.warning('Неверный логин или пароль')
    }
  }

  public toggleShowPassword() {
    this.showPassword = !this.showPassword
  }

  ngOnInit() {
    this._initForm()
  }

}
