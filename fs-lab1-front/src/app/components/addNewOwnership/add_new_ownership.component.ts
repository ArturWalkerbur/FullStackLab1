import {Component, OnInit} from '@angular/core';
import {Owner} from "../../models/client";
import {Ownership} from "../../models/ownership-rental";
import {ICar} from "../../models/car";
import {OwnershipService} from "../../services/ownership.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-addnewownership',
  templateUrl: './add_new_ownership.component.html',
})

export class Add_new_ownershipComponent implements OnInit{

  carData: ICar = {
    carname: "", id: 0, model: "", volume: 0, year: 0

  };
  ownerData: Owner = {
    address: "", cellNumber: "", dateOfBrith: 0, id: 0, ownerName: ""

  };

  ownershipData: Ownership= {
    car: this.carData.id,
    id: 0,
    owner: this.ownerData.id,
    ownershipEndDate: 0,
    ownershipStartDate: 0

  };

  public listCars: ICar[] = [];
  public listOwners: Owner[] = [];

  constructor(private ownershipService: OwnershipService) { }

  ngOnInit(): void {

      this.ownershipService.getCarList().subscribe(data=>{
          this.listCars = data;
      });

      this.ownershipService.getOwnerList().subscribe(data=>{
        this.listOwners = data;
      })

  }

  onSubmit() {
    console.log(this.ownershipData.car)
    console.log(this.ownershipData.owner)
    this.ownershipService.addNewOwnershipData(this.ownershipData);
  }




}
