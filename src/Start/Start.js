// External Modules
import React from 'react';
import {inject, observer} from 'mobx-react';
import {derive} from 'elegant-standard';

// Internal Styles
import {StartContainer, StartTitle} from './Start.styles';

const Start = () => {
  // By Value
  // By Reference

  return <StartContainer>
    <StartTitle>Hello World</StartTitle>
  </StartContainer>;
}

const mapStoresToProps = derive({});
export default inject(mapStoresToProps)(observer(Start));