// External Modules
import React, {Fragment} from 'react';
import {observer, inject} from 'mobx-react';
import {derive} from 'elegant-standard';
import clone from 'lodash/cloneDeep';
import Router from 'react-regex-router';

// Internal Styles and Database Controller
import Controller from './App.controller';

// Screens
import Start from 'src/Start/Start';

const App = props => {
  // By value
  const {trigger = false, currRoute = "start"} = clone(props);

  // By reference

  return <Fragment>
    {trigger ? <Controller /> : null}
    <Router 
      currRoute={currRoute}
      routes={[{
        name: /start/i,
        component: Start
      }]}
    />
  </Fragment>;
};

const mapStoresToProps = derive({
  trigger: "appStore",
  currRoute: "appStore"
});

export default inject(mapStoresToProps)(observer(App));
