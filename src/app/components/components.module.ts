import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { CheckSampleComponent } from "./check-sample/check-sample.component";
import { InputComponent } from "./input/input.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TitleComponent } from "./title/title.component";
import { AvatarComponent } from "./avatar/avatar.component";

@NgModule({
  declarations: [
    CardComponent,
    CheckSampleComponent,
    InputComponent,
    NavbarComponent,
    TitleComponent,
    AvatarComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    CheckSampleComponent,
    InputComponent,
    NavbarComponent,
    TitleComponent,
  ],
})
export class ComponentsModule {}
