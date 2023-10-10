import { Component } from '@angular/core';
import {Owner} from "../../models/client";
import {OwnersService} from "../../services/owners.service";

@Component({
  selector: 'app-addnewowner',
  templateUrl: './add_new_owner.component.html',
})


export class Add_new_ownerComponent {
  ownerData: Owner= {
    id: 0,
    ownerName: "",
    dateOfBrith: Date.now(),
    address: "",
    cellNumber: ""
  };

  constructor(private ownersService: OwnersService) { }

  onSubmit() {
    this.ownersService.addNewOwnerData(this.ownerData);
  }

  /*onSubmit() {
    this.carsService.test(3).subscribe(
      (response) => {
        console.log('Новые данные успешно добавлены:', response);
      },
      (error) => {
        console.error('Произошла ошибка при добавлении данных:', error);
      }
    );
  }*/
}
