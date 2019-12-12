import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProcessLayoutComponent } from "./process-layout/process-layout.component";
import { SharedModule } from "./shared/shared.module";
import { FeatureAModule } from "./feature-a/feature-a.module";

@NgModule({
  declarations: [AppComponent, ProcessLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, FeatureAModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
