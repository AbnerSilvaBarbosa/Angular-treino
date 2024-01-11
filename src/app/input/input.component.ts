import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit {
  @Output() valueInputOutput: EventEmitter<string> = new EventEmitter<string>();

  public valueInput: string = "";

  constructor() {}

  ngOnInit(): void {}

  public changeValue(event: Event): void {
    let valueNow = (event.target as HTMLInputElement).value;
    this.valueInputOutput.emit(valueNow);
  }
}
