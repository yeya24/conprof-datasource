import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface ConprofQuery extends DataQuery {
  expr: string;
  start: number;
  end: number;
}

export const defaultQuery: Partial<ConprofQuery> = {};

export interface Series {
  labels: Record<string, string>;
  labelsetEncoded: string;
  timestamps: number[];
}

export interface ConprofDataQueryResponse {
  status: string;
  data: {
    series: Series[];
  };
}

/**
 * These are options configured for each DataSource instance
 */
export interface ConprofOptions extends DataSourceJsonData {}
