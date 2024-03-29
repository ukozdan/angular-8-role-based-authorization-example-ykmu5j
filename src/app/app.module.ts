import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FontService } from "./_services/font.service";
import { DepartmentServiceService } from "./_services/department-service.service";
import { MenuService } from "./_services/menu.service";

import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// used to create fake backend
import { fakeBackendProvider } from "./_helpers";

import { AppComponent } from "./app.component";
import { appRoutingModule } from "./app.routing";

import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { HomeComponent } from "./home";
import { AdminComponent } from "./admin";
import { LoginComponent } from "./login";
import { IncidentComponent } from "./incident";
import { AssistanceComponent } from "./assistance";
import { PenTestComponent } from "./pen-test";
import { QuickCheckComponent } from "./quick-check";
import { MessagesComponent } from "./messages/messages.component";
import { DepartmentServicesComponent } from "./department-services/department-services.component";
import { DepartmentServiceDetailComponent } from "./department-service-detail/department-service-detail.component";
import { DepartmentServiceSearchComponent } from "./department-service-search/department-service-search.component";
import { RegisterComponent } from "./register/register.component";
import { AlertService } from "./_services/alert.service";
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    IncidentComponent,
    AssistanceComponent,
    PenTestComponent,
    QuickCheckComponent,
    MessagesComponent,
    DepartmentServicesComponent,
    DepartmentServiceDetailComponent,
    DepartmentServiceSearchComponent,
    RegisterComponent,
    AlertComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    FontService,
    DepartmentServiceService,
    MenuService,
    // provider used to create fake backend
    fakeBackendProvider,
    MenuService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  send_date = new Date();
  formattedDate: any;
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
    this.formattedDate = this.send_date.getFullYear();
  }
}
