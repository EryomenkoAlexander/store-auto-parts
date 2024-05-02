import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {SnackbarService} from "./core/components/snackbar/core/services/snackbar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('overlays', { read: ViewContainerRef }) overlaysRef!: ViewContainerRef

  constructor(
    private _snackbarService: SnackbarService
  ) { }

  ngAfterViewInit() {
    this._snackbarService._initContainerRef(this.overlaysRef)
  }

}
