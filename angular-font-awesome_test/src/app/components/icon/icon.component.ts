import { Component } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent{
  constructor(public globalService: GlobalService) { }
}
