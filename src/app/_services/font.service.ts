import { Injectable } from "@angular/core";
import * as WebFont from "webfontloader";

@Injectable()
export class FontService {
  constructor() {}

  public loadFont(f: any): void {
    try {
      WebFont.load({
        google: {
          families: [
            "Rubik:300,300i,400,400i,500,500i,700,700i,900,900i",
            "Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i"
          ]
        }
      });
    } catch (e) {
      console.warn("Font Loading Failed:", f);
    }
  }
}
