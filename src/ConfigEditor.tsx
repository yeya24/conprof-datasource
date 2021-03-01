import React from 'react';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { ConprofOptions } from './types';
import { DataSourceHttpSettings } from '@grafana/ui';

interface Props extends DataSourcePluginOptionsEditorProps<ConprofOptions> {}

export const ConfigEditor: React.FC<Props> = props => {
  const { options, onOptionsChange } = props;

  return (
    <>
      <DataSourceHttpSettings
        defaultUrl="http://localhost:8080"
        dataSourceConfig={options}
        showAccessOptions={true}
        onChange={onOptionsChange}
      />
    </>
  );
};
