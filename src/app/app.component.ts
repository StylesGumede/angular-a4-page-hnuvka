import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  elements = ["text"];

  onBtnAddElement(el: string): void {
    this.elements = [...this.elements, el];
  }
}
