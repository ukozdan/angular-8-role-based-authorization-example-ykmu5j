import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { DepartmentService } from "../_models/department-service";
import { DepartmentServiceService } from "../_services/department-service.service";

@Component({
  selector: "app-department-service-detail",
  templateUrl: "./department-service-detail.component.html",
  styleUrls: ["./department-service-detail.component.css"]
})
export class DepartmentServiceDetailComponent implements OnInit {
  @Input() departmentService: DepartmentService;

  constructor(
    private route: ActivatedRoute,
    private departmentServiceService: DepartmentServiceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDepartmentService();
  }

  getDepartmentService(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.departmentServiceService
      .getDepartmentService(id)
      .subscribe(
        departmentService => (this.departmentService = departmentService)
      );
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.departmentServiceService
      .updateDepartmentService(this.departmentService)
      .subscribe(() => this.goBack());
  }
}
