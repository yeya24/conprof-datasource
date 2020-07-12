// import defaults from 'lodash/defaults';

import React, { PureComponent } from 'react';
// import { LegacyForms } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from './DataSource';
import { ConprofOptions, ConprofQuery } from './types';

// const { FormField } = LegacyForms;

type Props = QueryEditorProps<DataSource, ConprofQuery, ConprofOptions>;

export class QueryEditor extends PureComponent<Props> {
  render() {
    // const query = defaults(this.props.query, defaultQuery);

    return (
      <></>
      // <div className="gf-form">
      //   <FormField
      //     width={4}
      //     value={constant}
      //     onChange={this.onConstantChange}
      //     label="Constant"
      //     type="number"
      //     step="0.1"
      //   />
      //   <FormField
      //     labelWidth={8}
      //     value={queryText || ''}
      //     onChange={this.onQueryTextChange}
      //     label="Query Text"
      //     tooltip="Not used yet"
      //   />
      // </div>
    );
  }
}
