import React, { PureComponent } from 'react';
import { DataSourceHttpSettings } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { ConprofOptions } from './types';

interface Props extends DataSourcePluginOptionsEditorProps<ConprofOptions> {}

export class ConfigEditor extends PureComponent<Props> {
  render() {
    const { options, onOptionsChange } = this.props;

    return (
      <div className="gf-form-group">
        <div className="gf-form">
          <DataSourceHttpSettings
            defaultUrl="http://localhost:8080"
            dataSourceConfig={options}
            onChange={onOptionsChange}
            showAccessOptions={true}
          />
        </div>
      </div>
    );
  }
}
