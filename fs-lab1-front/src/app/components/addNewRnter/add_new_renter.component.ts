import { Component } from '@angular/core';
import {Renter} from "../../models/client";
import {RentersService} from "../../services/renters.service";

@Component({
  selector: 'app-addnewrenter',
  templateUrl: './add_new_renter.component.html',
})


export class Add_new_renterComponent {
  renterData: Renter= {
    id: 0,
    renterName: "",
    dateOfBrith: 0,
    address: "",
    cellNumber: "",
    trustedCellNumber: "",
    iin: ""
  };

  constructor(private rentersService: RentersService) { }

  onSubmit() {
    this.rentersService.addNewRenterData(this.renterData);
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
