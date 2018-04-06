import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message: string;
  messageStatus: boolean;
  currentDate = new Date;
  constructor() { }

  ngOnInit() {
  }

  post() {
    if (this.message != null) {
      this.messageStatus = true;
    }
  }

}
