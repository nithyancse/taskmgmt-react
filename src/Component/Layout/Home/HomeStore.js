import { computed, observable, action } from "mobx"
import Common from '../../../Constant/Common'

export class HomeStore {
  @observable user = {}
  @observable company = {}
  @observable isLoggedIn = Common.NO
  @observable registerStatus = Common.EMPTY
  @observable registerStatusColor = Common.EMPTY

  @action setUser(user){
    this.user = user;
  }
  @action setCompany(company){
    this.company = company;
  }
  @action setUserName(name){
    this.user.name = name;
  }

  @action setRegisterStatus(status){
    this.registerStatus = status;
  }

  @action setRegisterStatusColor(color){
    this.registerStatusColor = color;
  }

  
}

export default new HomeStore