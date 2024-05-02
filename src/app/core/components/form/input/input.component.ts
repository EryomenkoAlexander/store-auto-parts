import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() control!: AbstractControl | null;
  @Input() label: string = ''
  @Input() width: string = '100%'
  @Input() type: string = 'text'
  @Input() placeholder: string = ''
  @Input() iconData: string = ''
  @Input() mask: string = ''
  @Input() iconPosition!: 'before' | 'after'

  @Output() onClickIcon: EventEmitter<boolean> = new EventEmitter<boolean>()

  get formControl(): FormControl {
    return this.control as FormControl;
  }

  constructor() { }

  public clickIcon() {
    this.onClickIcon.emit(true)
  }

}
