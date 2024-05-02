import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PagesRouting} from "./pages.routing";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(PagesRouting)
  ],
  exports: [],
  providers: []
})
export class PagesModule { }
