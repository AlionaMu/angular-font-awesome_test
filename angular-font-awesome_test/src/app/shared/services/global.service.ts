import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public isIconPanelOpen = false;
  public faName = '';

  public openPanel(): void {
    this.isIconPanelOpen = true;
  }

  public setFaName(value: string): void {
    this.faName = value;
  }
}
