import {Injectable} from "@angular/core";
import {UserInterface} from "../interfaces/user.interface";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService {

  private _keyActiveUser: string = 'auto-parts-active-user'
  private _keyUsers: string = 'auto-parts-users'
  private _keyCity: string = 'auto-parts-city'

  public signalUpdateCity: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  get isLogged(): boolean {
    return !!localStorage.getItem(this._keyActiveUser);
  }

  constructor(
    private _router: Router
  ) {}

  public registerUser(user: UserInterface): boolean {
    const users = this.getUsers();
    // Проверяем наличие пользователя с таким же email или телефоном
    const userExists = users.some((u: UserInterface) => u.email === user.email || u.phoneNumber === user.phoneNumber);
    if (userExists) {
      return false; // Пользователь с таким email или номером телефона уже существует
    }
    users.push(user);
    localStorage.setItem(this._keyUsers, JSON.stringify(users));
    this._router.navigate(['/pages', 'auth', 'sign-in']);
    return true;
  }

  public loginUser(email: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find((u: UserInterface) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem(this._keyActiveUser, JSON.stringify(user));
      return true;
    }
    return false;
  }

  public logoutUser(): void {
    localStorage.removeItem(this._keyActiveUser);
  }

  public getUsers(): UserInterface[] {
    const users = localStorage.getItem(this._keyUsers);
    return users ? JSON.parse(users) : [];
  }

  public getActiveUser(): UserInterface | null {
    const activeUser = localStorage.getItem(this._keyActiveUser);
    return activeUser ? JSON.parse(activeUser) : null;
  }

  public setCity(country: string) {
    this.signalUpdateCity.next(country)
    localStorage.setItem(this._keyCity, country)
  }

  public getCity(): string | undefined {
    return localStorage.getItem(this._keyCity) || undefined
  }

  public updateCityUser(country: string) {
    localStorage.setItem(this._keyActiveUser, JSON.stringify({
      ...this.getActiveUser(),
      country: country
    }))
  }

}
