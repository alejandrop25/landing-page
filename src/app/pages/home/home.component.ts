import { Component } from '@angular/core';
import { MainBarComponent } from "../../components/main-bar/main-bar.component";
import { LeftMenuComponent } from "../../components/left-menu/left-menu.component";
import { CentralImgComponent } from "../../components/central-img/central-img.component";
import { RightMenuComponent } from "../../components/right-menu/right-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainBarComponent, LeftMenuComponent, CentralImgComponent, RightMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
