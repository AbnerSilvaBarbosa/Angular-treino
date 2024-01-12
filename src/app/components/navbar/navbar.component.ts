import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  public rulerUser: "user" | "admin" | "shop" = "admin";
  public styleNav: "nav-white" | "nav-black" = "nav-white";
  constructor() {}

  ngOnInit(): void {}

  public trocar() {
    if (this.styleNav === "nav-white") {
      this.styleNav = "nav-black";
    } else {
      this.styleNav = "nav-white";
    }
  }
}
