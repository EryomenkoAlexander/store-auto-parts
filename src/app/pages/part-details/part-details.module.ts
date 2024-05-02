import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PartDetailsRouting} from "./part-details.routing";
import {PartDetailsComponent} from "./part-details.component";

@NgModule({
  declarations: [
    PartDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PartDetailsRouting)
  ],
  exports: [],
  providers: []
})
export class PartDetailsModule { }
