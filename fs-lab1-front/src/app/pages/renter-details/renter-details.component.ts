import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Renter} from "../../models/client";
import {RentersService} from "../../services/renters.service";



@Component({
  selector: 'app-renter-details',
  templateUrl: './renter-details.component.html',
})

export class RenterDetailsComponent {

  title = 'Update Renter';

  renterData: Renter= {
    address: "",
    cellNumber: "",
    dateOfBrith: 0,
    id: 0,
    iin: "",
    renterName: "",
    trustedCellNumber: ""


  };

  constructor(private rentersService: RentersService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id']; // Извлекаем id машины
      this.rentersService.getSelectedRenter(id).subscribe(
        (response) => {
          this.renterData = response;
        },
        (error) => {
          console.error('Произошла ошибка при удалении машины:', error);
        }
      );
    });
  }

  onSubmit(){
    this.rentersService.editRenterData(this.renterData);
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
  }

}
