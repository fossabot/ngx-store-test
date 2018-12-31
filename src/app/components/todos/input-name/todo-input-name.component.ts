import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-todo-input-name',
  templateUrl: './todo-input-name.component.html',
  styleUrls: [ './todo-input-name.component.scss' ]
})
export class TodoInputNameComponent implements OnInit {
  public name: FormControl | undefined;

  public minLength: number = 2;
  public maxLength: number = 60;

  @Input('todoInputNameDefault')
  private defaultName: string | undefined;

  @Output('todoInputNameFormControl')
  private formControl: EventEmitter<FormControl> = new EventEmitter();

  public constructor() {
  }

  public ngOnInit(): void {
    this.name = new FormControl(this.defaultName, [
      Validators.required,
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength)
    ]);
    this.formControl.emit(this.name);
  }
}