import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormModule} from "../core/components/form/form.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        RouterLink,
        CommonModule,
        FormModule
    ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
