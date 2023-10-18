import {Injectable} from '@angular/core';
import {icons} from '../../shared/icons';

@Injectable()
export class GetRandomService {
  getRandomNumber() {
    return Math.floor((Math.random()*1000));
  }

  getRandomUnicode() {
    const num = this.getRandomNumber();
    return icons[num].unicode;
  }

  getRandomName() {
    const num = this.getRandomNumber();
    return icons[num].name;
  }
}
