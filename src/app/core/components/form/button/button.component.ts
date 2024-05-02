import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input() text: string = ''
  @Input() color: string = '#f3b949'
  @Input() size: 'sm' | 'md' | 'lg' = 'sm'
  @Input() width: string = 'auto' || 'full'
  @Input() disabled: boolean = false

  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() {}

  public click() {
    this.onClick.next(true)
  }

}

