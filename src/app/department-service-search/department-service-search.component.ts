import { Component, OnInit } from "@angular/core";

import { Observable, Subject } from "rxjs";

import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { DepartmentService } from "../_models/department-service";
import { DepartmentServiceService } from "../_services/department-service.service";

@Component({
  selector: "app-department-service-search",
  templateUrl: "./department-service-search.component.html",
  styleUrls: ["./department-service-search.component.css"]
})
export class DepartmentServiceSearchComponent implements OnInit {
  departmentServices$: Observable<DepartmentService[]>;
  private searchTerms = new Subject<string>();

  constructor(private departmentServiceService: DepartmentServiceService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.departmentServices$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) =>
        this.departmentServiceService.searchDepartmentService(term)
      )
    );
  }
}
