// External Modules
import React, {Fragment} from 'react';
import {AppRegistry, Alert} from 'react-native';
import {setJSExceptionHandler, setNativeExceptionHandler} from 'react-native-exception-handler';
import {Provider} from 'mobx-react';

// Internal Components
import App from 'src/App/App';
import {name as appName} from 'src/App/app.json';

// Central Functions and Stores
import {log} from 'src/central/functions';
import stores from 'src/App/App.stores';

// Setting up global exception handlers
setJSExceptionHandler((e, isFatal) => {
  log('[JSError] [Global]', e); // So that we can see it in the ADB logs in case of Android if needed
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `
      Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}

      We will need to restart the app.
      `,
      [{
        text: 'Restart',
        onPress: () => {
          RNRestart.Restart();
        }
      }]
    );
  }
});
setNativeExceptionHandler(e => log('[NativeError] [Global]', e));

// Setting up MobX
const app = () => <Provider {...stores}>
  <App />
</Provider>;

AppRegistry.registerComponent(appName, () => app);
