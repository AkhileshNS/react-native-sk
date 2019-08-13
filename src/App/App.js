// External Modules
import React, {Fragment} from 'react';
import {observer, inject} from 'mobx-react';
import {derive} from 'elegant-standard';
import clone from 'lodash/cloneDeep';

// Internal Styles and Database Controller
import {AppContainer, AppTitle} from './App.styles';
import Controller from './App.controller';

// Central Functions
import {log} from 'src/central/functions';

const App = props => {
  log("[App] [Props]", clone(props));
  log("[ENV] [CONFIG]", process.env);

  // By value
  const {trigger = false} = clone(props);

  // By reference

  return <Fragment>
    {trigger ? <Controller /> : null}
    <AppContainer>
      <AppTitle>
        Testing 123
      </AppTitle>
    </AppContainer>
  </Fragment>;
};

const mapStoresToProps = derive({
  trigger: "appStore"
});

export default inject(mapStoresToProps)(observer(App));
