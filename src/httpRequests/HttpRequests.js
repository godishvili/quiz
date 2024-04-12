import axios from 'axios';

export class HttpRequests {
  getProducts() {
    return axios.get('products');
  }
}
