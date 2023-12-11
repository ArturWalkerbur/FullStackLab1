export interface Owner{
  id: number;
  ownerName: string;
  dateOfBrith: number;
  address: string;
  cellNumber: string;
  user_id: number;
}

export interface Renter{
  id: number;
  renterName: string;
  dateOfBrith: number;
  address: string;
  cellNumber: string;
  trustedCellNumber: string;
  iin: string;
  user_id: number;
}

export interface JWTAuthResponse{

  accessToken: string;
  tokenType: string;

}
