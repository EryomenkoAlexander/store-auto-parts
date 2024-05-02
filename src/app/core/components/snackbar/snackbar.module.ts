import {NgModule} from "@angular/core";
import {SnackbarComponent} from "./snackbar.component";
import {CommonModule} from "@angular/common";
import {SnackbarService} from "./core/services/snackbar.service";

@NgModule({
  declarations: [
    SnackbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    SnackbarService
  ]
})
export class SnackbarModule { }
