import { Component } from '@angular/core';
import { GetRandomService } from 'src/app/shared/services/getRandom.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  constructor (
    public getRandomService: GetRandomService,
    public globalService: GlobalService
  ) { }

  clickHandler(): void {
    if (!this.globalService.isIconPanelOpen) {
      this.openIconPanel();
    }
    setTimeout(() => {
      this.setName()
    }, 3000);
  }

  setName(): void {
    this.globalService.setFaName(this.getName());
  }

  openIconPanel(): void {
    this.globalService.openPanel();
  }

  getName(): string {
    return this.getRandomService.getRandomName()
  }
}
