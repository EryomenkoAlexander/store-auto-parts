import {Component, forwardRef, Input, OnInit} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {IItem} from "./core/interfaces/IItem";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]

})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() label: string = ''
  @Input() type: string = 'text'
  @Input() placeholder: string = ''
  @Input() items: IItem[] = []

  public activeValue: string | number | null = null
  public selectIsOpen: boolean = false
  public filteredItems: IItem[] = []

  constructor() { }

  public filterItem(event: any) {
    const { value } = event.target
    this.filteredItems = this.items.filter(i => i.title.toLowerCase().includes(value.toLowerCase()))
  }

  public toggleSelect() {
    this.selectIsOpen = !this.selectIsOpen
  }

  public changeItem(value: IItem) {
    this.activeValue = value.value
    this.onChange(this.activeValue)
    this.toggleSelect()
    this.filteredItems = this.items
  }

  public onChange = (value: any) => {}
  public onTouched = (value: any) => {}

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  writeValue(value: string): void {
    if (!value) return
    this.activeValue = value
  }

  ngOnInit(): void {
    this.filteredItems = this.items
  }

}
