import { Component } from '@angular/core';
import {Ownership, OwnershipWhithObjects} from "../../models/ownership-rental";
import {OwnershipService} from "../../services/ownership.service";
import {ActivatedRoute} from "@angular/router";
import {ICar} from "../../models/car";
import {Owner} from "../../models/client";

@Component({
  selector: 'app-ownership-details',
  templateUrl: './ownership-details.component.html',
  styleUrls: ['./ownership-details.component.css']
})
export class OwnershipDetailsComponent {
  title = 'Update Ownership';

  carData: ICar = {
    carname: "", id: 0, model: "", volume: 0, year: 0

  };
  ownerData: Owner = {
    address: "", cellNumber: "", dateOfBrith: 0, id: 0, ownerName: ""

  };

  public listCars: ICar[] = [];
  public listOwners: Owner[] = [];

  ownershipDataWO: OwnershipWhithObjects= {
    car: this.carData, id: 0, owner: this.ownerData, ownershipEndDate: 0, ownershipStartDate: 0
  };





  constructor(private ownershipService: OwnershipService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id']; // Извлекаем id машины
      this.ownershipService.getSelectedOwnership(id).subscribe(
        (response) => {
          this.ownershipDataWO = response;
        },
        (error) => {
          console.error('Произошла ошибка при удалении машины:', error);
        }
      );
    });

    this.ownershipService.getCarList().subscribe(data=>{
      this.listCars = data;
    });

    this.ownershipService.getOwnerList().subscribe(data=>{
      this.listOwners = data;
    })
  }

  onSubmit(){
    this.ownershipService.editOwnershipData(this.ownershipDataWO);
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
  }

}

