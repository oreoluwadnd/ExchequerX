interface ISignUp {
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
  verificationMethod: string;
  firstName: string;
  lastName: string;
}

interface IOpt {
  email: string;
  otp: string;
}

interface IUser {
  email: string;
  phone: string;
}

interface ILogin {
  email: string;
  password: string;
}
