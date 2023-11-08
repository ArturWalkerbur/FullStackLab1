import {Component, OnInit} from '@angular/core';
import {OwnershipService} from "../../services/ownership.service";
import {Router} from "@angular/router";
import {OwnershipWhithObjects, RentalWhithObjects} from "../../models/ownership-rental";
import {RentalService} from "../../services/rental.service";

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent {

  title = 'Rental Base';

  constructor(private rentalService: RentalService, private router: Router) { }

  deleteSelectedRental(id: number) {
    this.rentalService.deleteSelectedRental(id);
  }

  rentals: RentalWhithObjects[] = [];

  ngOnInit(): void {

    this.rentalService.getRentalsData().subscribe((rentals) => {
        this.rentals = rentals;
      }
    );
  }

  goToRentalDetail(id: number) {
    this.router.navigate(['/rental', id]);
  }



}
