import { computed, observable, action } from "mobx"
import Common from '../../../Constant/Common'

export class HomeStore {
  @observable user = {}
  @observable company = {}
  @observable isLoggedIn = Common.NO
  @observable custError = {}
  @observable globalError = {}

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