import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-check-sample",
  templateUrl: "./check-sample.component.html",
  styleUrls: ["./check-sample.component.css"],
})
export class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  quantidade: number = 0;

  adicionar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade -= 1;
  }

  constructor() {}

  ngOnDestroy(): void {
    console.log("Bye Bye my friend !");
  }

  ngAfterViewInit(): void {
    // console.log("ngAfterViewInit");
  }

  ngAfterContentInit(): void {
    // console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    // console.log("ngAfterContentChecked");
  }
  ngAfterViewChecked(): void {
    // console.log("ngAfterViewChecked");
  }

  ngDoCheck(): void {
    // console.log("ngDoCheck");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
}
