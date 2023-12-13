export interface User{
  id: number;
  email: string;
  password: string;
  username: string;

}

export interface UserLogin{
  email: string;
  password: string;

}

export interface UserRegistration{
  email: string;
  password: string;
  username: string;
  rePassword: string;

}

export interface PasswordChange{
  password: string;
  newPassword: string;
  reNewPassword: string;

}

export interface Message {

  id: number;
  topic: string;
  text: string;
  dateDispatch: number;
  sender: string;

}
