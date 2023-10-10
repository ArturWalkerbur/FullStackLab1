import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RentersService} from "../../services/renters.service";
import {Renter} from "../../models/client";


@Component({
  selector: 'app-renters',
  templateUrl: './renters.component.html',
  styleUrls: ['./renters.component.css']
})
export class RentersComponent implements OnInit{

  title = 'Renters Base';

  constructor(private rentersService: RentersService, private router: Router) { }

  deleteSelectedRenter(id: number) {
    this.rentersService.deleteSelectedRenter(id);
  }

  renters: Renter[] = [];

  ngOnInit(): void {

    this.rentersService.getRentersData().subscribe((renters) => {
        this.renters = renters;
      }
    );
  }

  goToRenterDetail(id: number) {
    this.router.navigate(['/renters', id]);
  }

}
