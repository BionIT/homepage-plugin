import { App } from '@opensearch-dashboards/homepage';
import { AppMountParameters, CoreStart } from '../../../../src/core/public';
import React from 'react';
import ReactDOM from 'react-dom';

export const Homepage = (
    CoreStartProp: CoreStart,
    AppMountParametersProp: AppMountParameters
  ) => {
    ReactDOM.render(
      <App />,
      AppMountParametersProp.element
    );
  
    return () => ReactDOM.unmountComponentAtNode(AppMountParametersProp.element);
  };