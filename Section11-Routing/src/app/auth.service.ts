import {setTimeout} from "timers";
import {resolve} from "q";
/**
 * Created by tsanh on 30-Jun-17.
 */
export class AuthService {
  LoggedIn = false;

  isAuthenticated(): Promise<boolean> {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {resolve(this.LoggedIn); }, 800);
      }
    );
    return promise;
  }
  Login() {
    this.LoggedIn = true;
  }

  Logout() {
    this.LoggedIn = false;
  }
}
