import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ProcessLayoutComponent } from "./process-layout/process-layout.component";
import {NgRxMessageBusModule} from 'ngrx-message-bus';

const routes: Routes = [
  //Main routes goes here
  {
    path: "",
    pathMatch: "full",
    redirectTo: "a"
  },
  // Process routes goes here here
  {
    path: "",
    component: ProcessLayoutComponent,
    children: [
      {
        path: "a",
        loadChildren: () =>
          import("./feature-a/feature-a.module").then(
            module => module.FeatureAModule
          )
      }
    ]
  },
  // otherwise redirect to home
  { path: "**", redirectTo: "a" }
];

@NgModule({
  imports: [
    NgRxMessageBusModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
