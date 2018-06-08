import { computed, observable, action } from "mobx"

export class HomeStore {
  @observable user = []
  @observable company = []
  @observable isLoggedIn = "New"
  @observable custError = {}
  @observable globalError = []

  @action setUser(user){
    this.user = user;
  }
  @action setCompany(company){
    this.company = company;
  }
  @action setUserName(name){
    this.user.name = name;
  }
}

export default new HomeStore