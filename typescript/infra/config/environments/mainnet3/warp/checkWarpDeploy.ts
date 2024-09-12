import { CheckWarpDeployConfig } from '../../../../src/config/funding.js';
import { environment } from '../chains.js';

export const checkWarpDeployConfig: CheckWarpDeployConfig = {
  docker: {
    repo: 'gcr.io/abacus-labs-dev/hyperlane-monorepo',
    tag: '7ce7aef-20240912-090321',
  },
  namespace: environment,
  cronSchedule: '0 15 * * *', // set to 3pm utc every day
  prometheusPushGateway:
    'http://prometheus-prometheus-pushgateway.monitoring.svc.cluster.local:9091',
};
