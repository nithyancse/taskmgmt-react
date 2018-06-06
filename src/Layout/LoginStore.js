import { computed, observable } from "mobx"

export class LoginStore {
  @observable user = []
  @observable company = []
  @observable isLoggedIn = "New"
  @observable custError = {}
  @observable globalError = []
}

export default new LoginStore