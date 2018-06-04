import { computed, observable } from "mobx"

export class LoginStore {
  @observable user = []
  @observable company = []
  @observable isLoggedIn = "New";
}

export default new LoginStore