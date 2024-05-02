import {NgModule} from "@angular/core";
import {CreateOrderComponent} from "./create-order.component";
import {RouterModule} from "@angular/router";
import {CreateOrderRouting} from "./create-order.routing";
import {FormModule} from "../../core/components/form/form.module";

@NgModule({
  declarations: [
    CreateOrderComponent
  ],
  imports: [
    RouterModule.forChild(CreateOrderRouting),
    FormModule
  ],
  exports: [],
  providers: []
})
export class CreateOrderModule {}
