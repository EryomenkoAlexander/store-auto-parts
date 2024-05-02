import {NgModule} from "@angular/core";
import {BasketComponent} from "./basket.component";
import {RouterModule} from "@angular/router";
import {BasketRouting} from "./basket.routing";
import {CommonModule} from "@angular/common";
import {FormModule} from "../../core/components/form/form.module";

@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    RouterModule.forChild(BasketRouting),
    FormModule,
    CommonModule
  ],
  exports: [],
  providers: [],
})
export class BasketModule {}
