import {
  Component,
  OnInit,
  AfterViewInit,
  ViewEncapsulation, EventEmitter, Output
} from '@angular/core';
import Keyboard from "simple-keyboard";

@Component({
  selector: "app-virtual-keyboard",
  templateUrl: "./virtual-keyboard.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    "../../../../node_modules/simple-keyboard/build/css/index.css",
    "./virtual-keyboard.component.css"
  ]
})
export class VirtualKeyboardComponent implements OnInit, AfterViewInit {
  value = "";
  keyboard: Keyboard;
  // numpad: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"];

  @Output()
  public keyPressedEvent: EventEmitter<string>;

  constructor() {
    this.keyPressedEvent = new EventEmitter<string>();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      theme: "hg-theme-default hg-layout-default custom-theme"
      // layout: {
      //   default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"],
      //   shift: [],
      //   xxx: [],
      // },
      // display: {
      //   "{bksp}": "XX",
      //   "{enter}": "<i class='fab fa-accusoft'></i>"
      // }
    });
  }

  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);
    this.keyPressedEvent.emit(button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };
}
