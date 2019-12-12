import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VirtualKeyboardModule } from "./virtual-keyboard/virtual-keyboard.module";
import { InputModule } from "./input/input.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, VirtualKeyboardModule, InputModule],
  exports: [VirtualKeyboardModule, InputModule]
})
export class SharedModule {}
