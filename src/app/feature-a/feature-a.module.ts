import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureAComponent } from "./feature-a.component";
import { FeatureARoutingModule } from "./feature-a-routing.module";
import { SharedModule } from "../shared/shared.module";
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [FeatureAComponent],
  imports: [CommonModule, ReactiveFormsModule, FeatureARoutingModule, SharedModule],
  exports: [FeatureAComponent]
})
export class FeatureAModule {}
