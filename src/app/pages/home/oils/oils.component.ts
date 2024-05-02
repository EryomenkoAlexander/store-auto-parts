import {Component} from "@angular/core";
import {Oils} from "../../../core/consts/oils";
import {OilInterface} from "../../../core/interfaces/oil.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-oils',
  templateUrl: './oils.component.html',
  styleUrls: ['./oils.component.scss']
})
export class OilsComponent {

  protected readonly oils: OilInterface[] = Oils

  constructor(
    private _router: Router
  ) {}

  public goToCatalog() {
    this._router.navigate(['/', 'pages', 'catalog'])
  }

}
