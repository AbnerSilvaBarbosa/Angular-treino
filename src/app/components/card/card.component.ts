import { Component, Input, OnInit } from "@angular/core";

type TCard = {
  productName: string;
  value: number;
};

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  cards: TCard[] = [
    { productName: "A", value: 123 },
    { productName: "B", value: 123 },
    { productName: "C", value: 123 },
    { productName: "D", value: 123 },
    { productName: "E", value: 123 },
    { productName: "F", value: 123 },
    { productName: "G", value: 123 },
    { productName: "H", value: 123 },
    { productName: "I", value: 123 },
  ];

  constructor() {}

  ngOnInit(): void {}

  removeItem(index: number): void {
    this.cards.splice(index, 1);
  }
}
