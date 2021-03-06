/* eslint no-console: 0 */
/* eslint angular/log: 0 */

class ApiService {
  constructor($http) {
    this.$http = $http;
  }

  fetchData() {
    const data = this.$http.get('/api/faker');

    return data;
  }

  generateData() {
    console.log('Post sent');

    return this.fetchData();
  }

  generateCsv() {
    return this.$http.get('/get-csv');
  }
}

ApiService.$inject = ['$http'];

export default ApiService;
