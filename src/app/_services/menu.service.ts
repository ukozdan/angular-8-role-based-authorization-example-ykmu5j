import { Injectable } from "@angular/core";

@Injectable()
export class MenuService {
  constructor() {}

  getMenu(): Array<any> {
    const menu = [
      { name: "Home", path: "./home", children: [] },
      { name: "Incident", path: "./incident", children: [] },
      { name: "Assistance", path: "./assistance", children: [] },
      { name: "Pen-Test", path: "./pen-test", children: [] },
      { name: "Quick-Check", path: "./quick-check", children: [] },
      { name: "Admin", path: "./admin", children: [] },
      /*{
        name: "stores",
        path: "./stores",
        children: [
          {
            name: "books",
            path: "./books",
            children: [
              {
                name: "THE FELLOWSHIP OF THE RING Details",
                path: "./book1"
              },
              {
                name: "THE RETURN OF THE KING",
                path: "./book2"
              },
              {
                name: "Harry Potter and the Philosopher's Stone",
                path: "./book3"
              },
              {
                name: "Harry Potter and the Chamber of Secrets",
                path: "./book4"
              }
            ]
          }
        ]
      }*/
    ];

    return menu;
  }
}
