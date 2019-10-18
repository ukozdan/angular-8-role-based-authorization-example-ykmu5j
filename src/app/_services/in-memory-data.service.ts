import { InMemoryDbService } from "angular-in-memory-web-api";
import { DepartmentService } from "../_models/department-service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const departmentServices = [
      {
        id: 1,
        name: "Incident",
        itemCssClass: "",
        itemHeaderCssClass: "bg-ca-orange text-white",
        itemIconCssClass: "exclamation-circle",
        itemHeaderText: "Incident",
        itemBodyCssClass: "",
        itemBodyText: "Report a Security or suspicious Incident.",
        itemFooterCssClass: "",
        itemFooterText: "Go"
      },
      {
        id: 2,
        name: "Assistance",
        itemCssClass: "",
        itemHeaderCssClass: "bg-ca-purple text-white",
        itemIconCssClass: "users",
        itemHeaderText: "Assistance",
        itemBodyCssClass: "",
        itemBodyText: "Get assistance from our security team.",
        itemFooterCssClass: "",
        itemFooterText: "Go"
      },
      {
        id: 3,
        name: "Pen-Test",
        itemCssClass: "",
        itemHeaderCssClass: "bg-ca-blue text-white",
        itemIconCssClass: "user-secret",
        itemHeaderText: "Pen-Test",
        itemBodyCssClass: "",
        itemBodyText: "Check a project for vulnerabilities.",
        itemFooterCssClass: "",
        itemFooterText: "Go"
      },
      {
        id: 4,
        name: "Quick-Check",
        itemCssClass: "",
        itemHeaderCssClass: "bg-ca-green text-white",
        itemIconCssClass: "laptop-code",
        itemHeaderText: "Quick-Check",
        itemBodyCssClass: "",
        itemBodyText: "Run a security check on a web-app.",
        itemFooterCssClass: "",
        itemFooterText: "Go"
      }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
