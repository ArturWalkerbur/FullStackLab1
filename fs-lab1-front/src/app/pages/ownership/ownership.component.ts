import {Component, OnInit} from '@angular/core';
import {OwnersService} from "../../services/owners.service";
import {Router} from "@angular/router";
import {Owner} from "../../models/client";
import {OwnershipService} from "../../services/ownership.service";
import {Ownership, OwnershipWhithObjects} from "../../models/ownership-rental";

@Component({
  selector: 'app-ownership',
  templateUrl: './ownership.component.html',
  styleUrls: ['./ownership.component.css']
})
export class OwnershipComponent implements OnInit{

  title = 'Ownership Base';

  constructor(private ownershipService: OwnershipService, private router: Router) { }

  deleteSelectedOwnership(id: number) {
    this.ownershipService.deleteSelectedOwnership(id);
  }

  ownerships: OwnershipWhithObjects[] = [];

  ngOnInit(): void {

    this.ownershipService.getOwnershipsData().subscribe((ownerships) => {
        this.ownerships = ownerships;
      }
    );
  }

  goToOwnershipDetail(id: number) {
    this.router.navigate(['/ownership', id]);
  }


}
