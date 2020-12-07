import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../app/modal/modal.component'
import {CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  chatStyle = "hidden-chat";
  openCloseChatStyle = "fa fa-arrow-up open-close-chat_btn";
  constructor(public dialog: MatDialog, public cookieService: CookieService){
    var openStockModel = cookieService.get("openStockModal");
    if(openStockModel != "false"){
      const dialogRef = this.dialog.open(ModalComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  showChat(){
    if(this.chatStyle == "hidden-chat"){
      this.chatStyle = "chat";
      this.openCloseChatStyle = "fa fa-arrow-down open-close-chat_btn"
      return;
    }
    if(this.chatStyle == "chat"){
      this.chatStyle = "hidden-chat";
      this.openCloseChatStyle = "fa fa-arrow-up open-close-chat_btn";
      return;
    }
  }
}
