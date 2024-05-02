import {Component} from "@angular/core";
import {tools} from "../../../core/consts/tools";
import {ToolInterface} from "../../../core/interfaces/tool.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {

  protected readonly tools: ToolInterface[] = tools

  constructor(
    private _router: Router
  ) {}

  public goToCatalog() {
    this._router.navigate(['/', 'pages', 'catalog'])
  }

}
