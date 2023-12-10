import {ICar} from "./car";
import {Owner, Renter} from "./client";

export interface Ownership{

  id: number;

  car: number;

  owner: number;

  ownershipStartDate: number;

  ownershipEndDate: number;


}


export interface OwnershipWhithObjects{

  id: number;

  car_id: number;

  owner: Owner;

  ownershipStartDate: number;

  ownershipEndDate: number;


}

export interface Rental{

  id: number;

  car: number;

  renter: number;

  rentalStartDate: number;

  rentalEndDate: number;

}

export interface RentalWhithObjects{

  id: number;

  car_id: number;

  renter: Renter;

  rentalStartDate: number;

  rentalEndDate: number;

}
