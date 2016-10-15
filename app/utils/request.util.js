import request from 'browser-request'

export default class Reqeust {
  static HTTP_METHOD = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
  };

  static fetch(url, method, params = {}) {
    return new Promise(http_call);

    function http_call(resolve, reject) {
      var callOptions = {
        uri: url,
        method: method || this.HTTP_METHOD.GET,
        body: JSON.stringify(params),
        headers: {
          'content-type': 'application/json'
        },
        json: true
      };

      request(callOptions, (error, response, body) => {
        if (error) {
          reject(error);
          return false;
        }

        if (response.statusCode >= 200 && response.statusCode < 300) {
          resolve(body);
        }
      });
    }
  }

  static get(url, param) {
    return this.fetch(url, this.HTTP_METHOD.GET, param);
  }

  static post(url, param) {
    return this.fetch(url, this.HTTP_METHOD.POST, param);
  }

  static put(url, param) {
    return this.fetch(url, this.HTTP_METHOD.PUT, param);
  }

  static delete(url, param) {
    return this.fetch(url, this.HTTP_METHOD.DELETE, param);
  }
}