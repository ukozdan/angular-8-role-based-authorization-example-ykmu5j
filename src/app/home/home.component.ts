import { Component } from "@angular/core";
import { first } from "rxjs/operators";

import { User } from "../_models";
import { UserService, AuthenticationService } from "../_services";

import { DepartmentService } from "../_models/department-service";
import { DepartmentServiceService } from "../_services/department-service.service";

@Component({ templateUrl: "home.component.html" })
export class HomeComponent {
  loading = false;
  currentUser: User;
  userFromApi: User;
  departmentServices: DepartmentService[] = [];

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private departmentService: DepartmentService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loading = true;
    this.userService
      .getById(this.currentUser.id)
      .pipe(first())
      .subscribe(user => {
        this.loading = false;
        this.userFromApi = user;
      });
    this.getDepartmentServices();
  }

  getDepartmentServices(): void {
    this.departmentService.getDepartmentServices().subscribe(
      departmentServices => (this.departmentServices = departmentServices.slice())
    );
    // .subscribe(departmentServices => (this.departmentServices = departmentServices.slice(1, 5)));
  }
}
