import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isAliviedCheckSample: boolean = true;
  valueFromInput: string = "";

  setisAliviedCheckSample() {
    this.isAliviedCheckSample = !this.isAliviedCheckSample;
  }

  setValueFromInput(value: string): void {
    this.valueFromInput = value;
  }
}
