import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Owner} from "../../models/client";
import {OwnersService} from "../../services/owners.service";


@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
})

export class OwnerDetailsComponent {

  title = 'Update Owner';

  ownerData: Owner= {
    address: "",
    cellNumber: "",
    dateOfBrith: 0,
    id: 0,
    ownerName: ""

  };

  constructor(private ownersService: OwnersService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id']; // Извлекаем id машины
      this.ownersService.getSelectedOwner(id).subscribe(
        (response) => {
          this.ownerData = response;
        },
        (error) => {
          console.error('Произошла ошибка при удалении машины:', error);
        }
      );
    });
  }

  onSubmit(){
    this.ownersService.editOwnerData(this.ownerData);
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
  }

}
