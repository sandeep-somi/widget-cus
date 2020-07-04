import { apiGet } from '../../utils';

export function getData() {
  return new Promise((resolve, reject) => {
    apiGet('/script_test/api-test/')
      .then(resolve)
      .catch(reject)
  })
}