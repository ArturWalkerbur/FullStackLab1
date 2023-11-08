import {Component, OnInit} from "@angular/core";
import {ICar} from "../../models/car";
import {Renter} from "../../models/client";
import {Rental} from "../../models/ownership-rental";
import {RentalService} from "../../services/rental.service";


@Component({
  selector: 'app-addnewrental',
  templateUrl: './add_new_rental.component.html',
})

export class Add_new_rentalComponent implements OnInit{

  carData: ICar = {
    carname: "", id: 0, model: "", volume: 0, year: 0

  };
  renterData: Renter = {
    address: "", cellNumber: "", dateOfBrith: 0, id: 0, renterName: "", trustedCellNumber: "", iin: ""

  };

  rentalData: Rental= {
    car: this.carData.id,
    id: 0,
    renter: this.renterData.id,
    rentalEndDate: 0,
    rentalStartDate: 0

  };

  public listCars: ICar[] = [];
  public listRenters: Renter[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {

    this.rentalService.getCarList().subscribe(data=>{
      this.listCars = data;
    });

    this.rentalService.getRenterList().subscribe(data=>{
      this.listRenters = data;
    })

  }

  onSubmit() {
    console.log(this.rentalData.car)
    console.log(this.rentalData.renter)
    this.rentalService.addNewRentalData(this.rentalData);
  }




}
