import { App } from '@opensearch-dashboards/homepage';
import ReactDOM from 'react-dom';
import React from 'react';
import { EuiFlexItem, EuiButtonEmpty } from '@elastic/eui';
import { FormattedMessage } from '@osd/i18n/react';


export const Homepage = (
    coreStartProp,
    props
  ) => {
    console.log(coreStartProp);
  
    const { show, save } = coreStartProp.application.capabilities.advancedSettings;
    const isAdvancedSettingsEnabled = show && save;

    ReactDOM.render(
    <div>
      <App/>
      <EuiFlexItem grow={false}>
        <div>{isAdvancedSettingsEnabled ? 
        <EuiButtonEmpty
          className="osdOverviewPageFooter__button"
          flush="both"
          href={`${window.location.hostname}/app/management/opensearch-dashboards/settings#defaultRoute`}
          iconType="home"
          size="xs"
        >
          <FormattedMessage
            id="opensearch-dashboards-react.pageFooter.changeHomeRouteLink"
            defaultMessage="Display a different page on log in"
          />
        </EuiButtonEmpty> : null}
        </div>
        </EuiFlexItem>
    </div>, props.element);
  
    return () => ReactDOM.unmountComponentAtNode(props.element);
};