import { DataSourcePlugin } from '@grafana/data';
import { DataSource } from './DataSource';
import { ConfigEditor } from './ConfigEditor';
import { QueryEditor } from './QueryEditor';
import { ConprofQuery, ConprofOptions } from './types';
import { ConprofAnnotationsQueryCtrl } from './AnnotationsQueryCtrl';

export const plugin = new DataSourcePlugin<DataSource, ConprofQuery, ConprofOptions>(DataSource)
  .setConfigEditor(ConfigEditor)
  .setQueryEditor(QueryEditor)
  .setAnnotationQueryCtrl(ConprofAnnotationsQueryCtrl);
