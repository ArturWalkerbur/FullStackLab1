export interface Owner{
  id: number;
  ownerName: string;
  dateOfBrith: number;
  address: string;
  cellNumber: string;
}

export interface Renter{
  id: number;
  renterName: string;
  dateOfBrith: number;
  address: string;
  cellNumber: string;
  trustedCellNumber: string;
  iin: string;
}

export interface JWTAuthResponse{

  accessToken: string;
  tokenType: string;

}
