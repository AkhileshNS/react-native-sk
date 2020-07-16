import React from 'react';
// import {Store} from 'src/App/App.store';

interface IProps {}

const Controller: React.FC<IProps> = () => {
  React.useEffect(() => {
    // Side Effects Here
  }, []);

  return null;
};

export default () => {
  // const store = Store.useContainer();

  return <Controller />;
};
