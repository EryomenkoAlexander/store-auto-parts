import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {HomeRouting} from "./home.routing";
import {GreetingComponent} from "./greeting/greeting.component";
import {FormModule} from "../../core/components/form/form.module";
import {AboutComponent} from "./about/about.component";
import {OilsComponent} from "./oils/oils.component";
import {ToolsComponent} from "./tools/tools.component";

@NgModule({
  declarations: [
    HomeComponent,
    GreetingComponent,
    AboutComponent,
    OilsComponent,
    ToolsComponent
  ],
  imports: [
    RouterModule.forChild(HomeRouting),
    FormModule
  ],
  exports: [],
  providers: [],
})
export class HomeModule { }
