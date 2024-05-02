import {ComponentRef, Injectable, ViewContainerRef} from "@angular/core";
import {SnackbarComponent} from "../../snackbar.component";
import {ISnackbarData} from "../interfaces/ISnackbarData";
import {SnackbarTypesEnum} from "../enums/SnackbarTypesEnum";

@Injectable({ providedIn: "root" })
export class SnackbarService {

  private _containerRef!: ViewContainerRef

  constructor( ) { }

  private _createSnackbar(data: ISnackbarData) {
    this.hide()
    const snackbarRef: ComponentRef<SnackbarComponent> = this._containerRef.createComponent(SnackbarComponent)
    snackbarRef.instance.snackbarData = data
  }

  public _initContainerRef(ref: ViewContainerRef) {
    this._containerRef = ref
  }

  public hide() {
    this._containerRef.clear()
  }

  public success(message: string) {
    this._createSnackbar({
      type: SnackbarTypesEnum.success,
      message
    })
  }

  public error(message: string) {
    this._createSnackbar({
      type: SnackbarTypesEnum.error,
      message
    })
  }

  public warning(message: string) {
    this._createSnackbar({
      type: SnackbarTypesEnum.warning,
      message
    })
  }

}
