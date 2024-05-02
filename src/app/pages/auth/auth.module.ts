import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthRouting} from "./auth.routing";
import {SignInComponent} from "./sign-in/sign-in.component";
import {FormModule} from "../../core/components/form/form.module";
import {RegistrationComponent} from "./registration/registration.component";

@NgModule({
    declarations: [
        SignInComponent,
        RegistrationComponent
    ],
    imports: [
        RouterModule.forChild(AuthRouting),
        FormModule
    ],
    exports: [],
    providers: []
})
export class AuthModule { }
