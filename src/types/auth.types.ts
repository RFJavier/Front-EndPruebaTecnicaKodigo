export interface loginpayload {
  nickname: string;
  userpassword: string;
}
export interface loginresponse {
  token: string; 
}

export interface user_data {
  id: number, 

  idrol: number,

  username: string,

  nickname: string,

  email: string, 

  userpassword: string,

  isactive: string,

  confirmPassword_aux: string
};