import {NgModule} from "@angular/core";
import {SearchComponent} from "./search.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SearchRouting} from "./search.routing";
import {FormModule} from "../../core/components/form/form.module";

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(SearchRouting), FormModule
  ],
  exports: [],
  providers: []
})
export class SearchModule { }
