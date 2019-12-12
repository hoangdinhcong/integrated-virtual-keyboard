import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {INgRxMessageBusService, MESSAGE_BUS_SERVICE_INJECTOR} from 'ngrx-message-bus';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.css']
})
export class FeatureAComponent implements OnInit {

  private myForm: FormGroup;

  private focusedControlName: string | null = null;

  private _nameToControl: {[name: string]: FormControl} = {};

  constructor(formBuilder: FormBuilder,
              @Inject(MESSAGE_BUS_SERVICE_INJECTOR) public messageBusService: INgRxMessageBusService) {

    const firstName = formBuilder.control('');
    const lastName = formBuilder.control('');
    const age = formBuilder.control('');

    this._nameToControl.firstName = firstName;
    this._nameToControl.lastName = lastName;
    this._nameToControl.age = age;

    this.myForm = formBuilder.group({
      firstName,
      lastName,
      age
    });

    this.messageBusService.hookMessageChannel<string>('firstName', 'keypressed')
      .subscribe(key => {
        const control = this._nameToControl['firstName'];
        control.patchValue(`${control.value}${key}`);
      });

    this.messageBusService.hookMessageChannel<string>('lastName', 'keypressed')
      .subscribe(key => {
        const control = this._nameToControl['lastName'];
        control.patchValue(`${control.value}${key}`);
      });

    this.messageBusService.hookMessageChannel<string>('age', 'keypressed')
      .subscribe(key => {
        const control = this._nameToControl['age'];
        control.patchValue(`${control.value}${key}`);
      });
  }

  ngOnInit() {
  }

  public handleKeyPress(key: string): void {
    if (!this.focusedControlName) {
      return;
    }

    this.messageBusService
      .addMessage(this.focusedControlName, 'keypressed', key);
  }

  public handleControlFocus(controlName: string): void {
    this.focusedControlName = controlName;
  }
}
