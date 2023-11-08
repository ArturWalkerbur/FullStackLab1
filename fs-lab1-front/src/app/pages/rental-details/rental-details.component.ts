import {Component, OnInit} from '@angular/core';
import {ICar} from "../../models/car";
import {Renter} from "../../models/client";
import {OwnershipWhithObjects, RentalWhithObjects} from "../../models/ownership-rental";
import {OwnershipService} from "../../services/ownership.service";
import {ActivatedRoute} from "@angular/router";
import {RentalService} from "../../services/rental.service";

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css']
})
export class RentalDetailsComponent implements OnInit{

  title = 'Update Rental';

  carData: ICar = {
    carname: "", id: 0, model: "", volume: 0, year: 0

  };
  renterData: Renter = {
    address: "", cellNumber: "", dateOfBrith: 0, id: 0, renterName: "", trustedCellNumber: "", iin: ""

  };

  public listCars: ICar[] = [];
  public listRenters: Renter[] = [];

  rentalDataWO: RentalWhithObjects= {
    car: this.carData, id: 0, renter: this.renterData, rentalEndDate: 0, rentalStartDate: 0
  };

  constructor(private rentalService: RentalService, private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id']; // Извлекаем id машины
      this.rentalService.getSelectedRental(id).subscribe(
        (response) => {
          this.rentalDataWO = response;
        },
        (error) => {
          console.error('Произошла ошибка при удалении машины:', error);
        }
      );
    });

    this.rentalService.getCarList().subscribe(data=>{
      this.listCars = data;
    });

    this.rentalService.getRenterList().subscribe(data=>{
      this.listRenters = data;
    })
  }

  onSubmit(){
    this.rentalService.editRentalData(this.rentalDataWO);
    console.log(this.rentalDataWO);
    setTimeout(() => {
      this.ngOnInit();
    }, 6000);
  }

}
