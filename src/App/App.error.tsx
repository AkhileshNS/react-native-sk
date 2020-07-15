import {Alert} from 'react-native';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

const errorHandler = (e: Error, isFatal: boolean) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `
        Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}

        We will need to restart the app.
        `,
      [],
    );
  }
  console.log(e);
};
setJSExceptionHandler(errorHandler);

setNativeExceptionHandler((errorString: string) => {
  console.log(errorString);
});
