import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {SparePartsGreeting} from "../../../core/consts/spare-parts-greeting";
import {SparePartInterface} from "../../../core/interfaces/spare-part-interface";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent {

  protected readonly sparePartsGreeting: SparePartInterface[] = SparePartsGreeting

  constructor(
    private _router: Router
  ) {}

  public goToCatalog() {
    this._router.navigate(['pages', 'catalog'])
  }

}
