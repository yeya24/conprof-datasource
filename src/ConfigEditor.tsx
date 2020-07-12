import React, { ChangeEvent, PureComponent } from 'react';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { ConprofOptions } from './types';
import { LegacyForms } from '@grafana/ui';

const { FormField } = LegacyForms;

interface Props extends DataSourcePluginOptionsEditorProps<ConprofOptions> {}

export class ConfigEditor extends PureComponent<Props> {
  onURLChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      defaultUrl: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  render() {
    const { options } = this.props;
    const { jsonData } = options;

    return (
      <div className="gf-form-group">
        <h3 className="page-heading">HTTP</h3>
        <div className="gf-form">
          <FormField
            label="URL"
            labelWidth={11}
            onChange={this.onURLChange}
            value={jsonData.defaultUrl || ''}
            tooltip="Specify a complete HTTP URL (for example http://your_server:8080);"
            placeholder="http://localhost:8080"
          />
        </div>
      </div>
    );
  }
}
