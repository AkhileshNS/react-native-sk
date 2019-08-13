// External Modules
import {decorate, observable, action} from 'mobx';

class appStore {
  trigger = false;
  currRoute = "Start";

  startTrigger = () => this.trigger = true;
  setRoute = route => this.currRoute = route;
}

decorate(appStore, {
  trigger: observable,
  currRoute: observable,

  startTrigger: action,
  setRoute: action
});

export default new appStore();