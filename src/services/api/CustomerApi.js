/**
 * facturacion
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * Customer service.
 * @module api/CustomerApi
 * @version 1.0
 */
export default class CustomerApi {
  /**
   * Constructs a new CustomerApi.
   * @alias module:api/CustomerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the apiCustomerGet operation.
   * @callback module:api/CustomerApi~apiCustomerGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {module:api/CustomerApi~apiCustomerGetCallback} callback The callback function, accepting three arguments: error, data, response
   */
  apiCustomerGet(callback) {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = null;
    return this.apiClient.callApi(
      '/api/Customer',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null,
      callback,
    );
  }

  /**
   * Callback function to receive the result of the apiCustomerIdDelete operation.
   * @callback module:api/CustomerApi~apiCustomerIdDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {String} id
   * @param {module:api/CustomerApi~apiCustomerIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */
  apiCustomerIdDelete(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling apiCustomerIdDelete");
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = null;
    return this.apiClient.callApi(
      '/api/Customer/{id}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null,
      callback,
    );
  }

  /**
   * Callback function to receive the result of the apiCustomerIdPut operation.
   * @callback module:api/CustomerApi~apiCustomerIdPutCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {String} id
   * @param {Object} opts Optional parameters
   * @param {module:model/Customer} [customer]
   * @param {module:api/CustomerApi~apiCustomerIdPutCallback} callback The callback function, accepting three arguments: error, data, response
   */
  apiCustomerIdPut(id, opts, callback) {
    opts = opts || {};
    let postBody = opts['customer'];
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling apiCustomerIdPut");
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ['application/json', 'text/json', 'application/*+json'];
    let accepts = [];
    let returnType = null;
    return this.apiClient.callApi(
      '/api/Customer/{id}',
      'PUT',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null,
      callback,
    );
  }

  /**
   * Callback function to receive the result of the apiCustomerPost operation.
   * @callback module:api/CustomerApi~apiCustomerPostCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {Object} opts Optional parameters
   * @param {module:model/Customer} [customer]
   * @param {module:api/CustomerApi~apiCustomerPostCallback} callback The callback function, accepting three arguments: error, data, response
   */
  apiCustomerPost(opts, callback) {
    opts = opts || {};
    let postBody = opts['customer'];

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ['application/json', 'text/json', 'application/*+json'];
    let accepts = [];
    let returnType = null;
    return this.apiClient.callApi(
      '/api/Customer',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null,
      callback,
    );
  }
}
