/**
 * resca
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Content from '../model/Content';

/**
* GetContent service.
* @module api/GetContentApi
* @version 1.0.0
*/
export default class GetContentApi {

    /**
    * Constructs a new GetContentApi. 
    * @alias module:api/GetContentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * get content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Content} and HTTP response
     */
    getContentWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic', 'oauth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Content;

      return this.apiClient.callApi(
        '/getContent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * get content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Content}
     */
    getContent() {
      return this.getContentWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
