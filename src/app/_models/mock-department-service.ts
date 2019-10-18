import { DepartmentService } from "./department-service";

export const DEPARTMENTSERVICES: DepartmentService[] = [
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
