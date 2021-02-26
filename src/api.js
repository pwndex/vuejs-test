import axios from 'axios';
import getPaymentsMockApi from '@/mocks/getPayments';

const VUE_APP_API_MOCK = process.env.VUE_APP_API_MOCK === 'true';

/**
 * @var {Axios}
 */
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

/**
 * Load payments data.
 *
 * @param {Object} params
 * @returns {Promise}
 */

const getPayments = (params = {}) => {
  if (VUE_APP_API_MOCK) {
    return getPaymentsMockApi(params).then((data) => data);
  }
  return instance.request({
    method: 'get',
    url: '/api/v1/payments',
    params,
  });
};

export default {
  instance,
  getPayments,
};
