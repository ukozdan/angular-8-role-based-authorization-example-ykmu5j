import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuService } from "./_services/menu.service";

import { AuthenticationService } from "./_services";
import { User, Role } from "./_models";

@Component({ selector: "app", templateUrl: "app.component.html" })
export class AppComponent {
  currentUser: User;
  name: string;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private _router: Router,
    private menuService: MenuService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit() {
    // Get the menu in MenuService
    this.menu = this.menuService.getMenu();
    this.listenRouting();
  }

  /* Listening for routing events */
  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === "string") {
        // Initialize breadcrumb
        target = this.menu;
        this.breadcrumbList.length = 0;
        // Get the current routing url with /, [0] = first layer, [1] = second layer ...etc
        routerList = routerUrl.slice(1).split("/");
        routerList.forEach((router, index) => {
          // Find this layer in the menu path and the same path as the current routing
          target = target.find(page => page.path.slice(2) === router);
          // After storing the breadcrumbList, the list is directly breadcrumbs.
          this.breadcrumbList.push({
            name: target.name,
            // The second layer starts routing and adds the routing of the previous layer. The relative position will cause a routing error.
            path: index === 0 ? target.path : `${this.breadcrumbList[index - 1].path}/${target.path.slice(2)}`
            // Need condition for when target is undefined
          });

          // The next level to be compared is the specified subpage of this layer.
          if (index + 1 !== routerList.length) {
            target = target.children;
          }
        });

        //console.log(this.breadcrumbList);
      }
    });
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
