import { Component, OnInit } from "@angular/core";

import { DepartmentService } from "../_model/department-service";
import { DepartmentServiceService } from "../_services/department-service.service";

@Component({
  selector: "app-department-services",
  templateUrl: "./department-services.component.html",
  styleUrls: ["./department-services.component.css"]
})
export class DepartmentServicesComponent implements OnInit {
  departmentServices: DepartmentService[];

  constructor(private departmentServiceService: DepartmentServiceService) {}

  ngOnInit() {
    this.getDepartmentServices();
  }

  getDepartmentServices(): void {
    this.departmentServiceService
      .getDepartmentServices()
      .subscribe(departmentServices => (this.departmentServices = departmentServices));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.departmentServiceService
      .addHero({ name } as DepartmentService)
      .subscribe(hero => {
        this.departmentServices.push(hero);
      });
  }

  delete(departmentService: DepartmentService): void {
    this.departmentServices = this.departmentServices.filter(
      h => h !== departmentService
    );
    this.departmentServiceService.deleteHero(departmentService).subscribe();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
