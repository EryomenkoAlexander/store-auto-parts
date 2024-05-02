import {NgModule} from "@angular/core";
import {CatalogComponent} from "./catalog.component";
import {RouterModule} from "@angular/router";
import {CatalogRouting} from "./catalog.routing";
import {CommonModule} from "@angular/common";
import {FormModule} from "../../core/components/form/form.module";

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    RouterModule.forChild(CatalogRouting),
    CommonModule,
    FormModule
  ],
  exports: [],
  providers: []
})
export class CatalogModule { }
