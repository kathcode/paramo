export interface ILogin {
  hasSessionActive: boolean;
  signInWithGoogle: any;
  singInWithEmail: any;
  createUserWithEmail: any;
}

export interface IDataSubmit {
  email: string;
  password: string;
}
