// External Modules
import {decorate, observable, action} from 'mobx';

class appStore {
  trigger = false;

  startTrigger = () => this.trigger = true;
}

decorate(appStore, {
  trigger: observable,

  startTrigger: action
});

export default new appStore();