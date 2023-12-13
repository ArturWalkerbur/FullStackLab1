import {Component, OnInit} from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Router} from "@angular/router";
import {ICar} from "../../models/car";
import {UserService} from "../../services/user.service";
import {Message} from "../../models/users";

@Component({
  selector: 'app-message',
  templateUrl: './messageTable.component.html',
  styleUrls: ['./messageTable.component.css']
})
export class MessageTableComponent implements OnInit{

  messageData: Message[] = [];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getMessages().subscribe((messages) => {
        this.messageData = messages;
      }
    );
  }

}
