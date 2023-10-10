import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OwnersService} from "../../services/owners.service";
import {Owner} from "../../models/client";


@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  title = 'Owners Base';

  constructor(private ownersService: OwnersService, private router: Router) { }

  deleteSelectedOwner(id: number) {
    this.ownersService.deleteSelectedOwner(id);
  }

  owners: Owner[] = [];

  ngOnInit(): void {

    this.ownersService.getOwnersData().subscribe((owners) => {
        this.owners = owners;
      }
    );
  }

  goToOwnerDetail(id: number) {
    this.router.navigate(['/owners', id]);
  }

}
