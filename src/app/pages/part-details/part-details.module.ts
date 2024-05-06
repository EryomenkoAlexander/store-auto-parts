import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PartDetailsRouting} from "./part-details.routing";
import {PartDetailsComponent} from "./part-details.component";
import {FormModule} from "../../core/components/form/form.module";

@NgModule({
  declarations: [
    PartDetailsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(PartDetailsRouting),
        FormModule
    ],
  exports: [],
  providers: []
})
export class PartDetailsModule { }
