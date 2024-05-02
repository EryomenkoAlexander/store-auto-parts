import {NgModule} from "@angular/core";
import {InputComponent} from "./input/input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ButtonComponent} from "./button/button.component";
import {SelectComponent} from "./select/select.component";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    SelectComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMaskModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    SelectComponent
  ],
  providers: []
})
export class FormModule {}
