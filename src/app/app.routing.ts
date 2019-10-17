import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home";
import { IncidentComponent } from "./incident";
import { AssistanceComponent } from "./assistance";
import { PenTestComponent } from "./pen-test";
import { QuickCheckComponent } from "./quick-check";
import { AdminComponent } from "./admin";
import { LoginComponent } from "./login";
import { AuthGuard } from "./_helpers";
import { Role } from "./_models";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "incident",
    component: IncidentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "assistance",
    component: AssistanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "pen-test",
    component: PenTestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "quick-check",
    component: QuickCheckComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: "login",
    component: LoginComponent
  },

  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

export const appRoutingModule = RouterModule.forRoot(routes);
