import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureAComponent } from "./feature-a.component";
import { FeatureARoutingModule } from "./feature-a-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [FeatureAComponent],
  imports: [CommonModule, FeatureARoutingModule, SharedModule],
  exports: [FeatureAComponent]
})
export class FeatureAModule {}
