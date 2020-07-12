import defaults from 'lodash/defaults';

import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  AnnotationEvent,
  AnnotationQueryRequest,
} from '@grafana/data';

import { getBackendSrv } from '@grafana/runtime';

import { ConprofQuery, ConprofOptions, defaultQuery, ConprofDataQueryResponse, Series } from './types';

export class DataSource extends DataSourceApi<ConprofQuery, ConprofOptions> {
  url: string;
  defaultUrl: string;

  constructor(instanceSettings: DataSourceInstanceSettings<ConprofOptions>) {
    super(instanceSettings);
    this.url = instanceSettings.url!;
    this.defaultUrl = instanceSettings.jsonData.defaultUrl;
  }

  _request(url: string, data: Record<string, string> = {}) {
    const options = {
      url: this.url + url,
      method: 'GET',
    };

    if (data && Object.keys(data).length) {
      options.url =
        options.url +
        '?' +
        Object.entries(data)
          .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
          .join('&');
    }

    return getBackendSrv().datasourceRequest(options);
  }

  performTimeSeriesQuery(query: ConprofQuery) {
    if (query.start > query.end) {
      throw { message: 'Invalid time range' };
    }

    const url = '/api/v1/query_range';
    const data: any = {
      query: query.expr,
      from: query.start,
      to: query.end,
    };

    return this._request(url, data).catch((err: any) => {
      return err;
    });
  }

  async query(options: DataQueryRequest<ConprofQuery>): Promise<DataQueryResponse> {
    return Promise.resolve({ data: [] });
  }

  async annotationQuery(options: AnnotationQueryRequest<ConprofQuery>): Promise<AnnotationEvent[]> {
    const annotation = options.annotation;
    const { expr = '' } = annotation;

    if (!expr) {
      return Promise.resolve([]);
    }

    const query = defaults(options.annotation, defaultQuery);
    query.start = options.range.from.valueOf();
    query.end = options.range.to.valueOf();
    const response: ConprofDataQueryResponse = await this.performTimeSeriesQuery(query);

    let events: AnnotationEvent[] = [];

    response.data.series.map((series: Series) => {
      let tags: string[] = [];
      for (let key in series.labels) {
        tags.push(`${key}:${series.labels[key]}`);
      }
      series.timestamps.forEach((timestamp: number) => {
        events.push({
          title: `${series.labels['__name__']}`,
          time: timestamp,
          text: `<a target="_blank" href="${this.defaultUrl}/pprof/${series.labelsetEncoded}/${timestamp}/">pprof UI</a>`,
          tags: tags,
        });
      });
    });

    return events;
  }

  async testDatasource() {
    // Implement a health check for your data source.

    // TODO: use /-/ready endpoint for liveness check
    const result = await this._request('/metrics').catch((err: any) => {
      console.log(err);
    });

    return result.status === 200
      ? { status: 'success', message: 'Data source is working' }
      : { status: 'error', message: result.error };
  }
}
