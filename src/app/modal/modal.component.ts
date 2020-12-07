import { Component} from '@angular/core';
import {CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
 datetime = new Date();

  constructor(public cookieService: CookieService){
    this.datetime.setDate(this.datetime.getDate() + 1);
    cookieService.set("openStockModal", "false");
  }
}
