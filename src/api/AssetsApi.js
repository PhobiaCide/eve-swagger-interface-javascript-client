/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.19
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.33
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/GetCharactersCharacterIdAssets200Ok', 'model/GetCharactersCharacterIdAssetsNotFound', 'model/GetCorporationsCorporationIdAssets200Ok', 'model/InternalServerError', 'model/PostCharactersCharacterIdAssetsLocations200Ok', 'model/PostCharactersCharacterIdAssetsNames200Ok', 'model/PostCorporationsCorporationIdAssetsLocations200Ok', 'model/PostCorporationsCorporationIdAssetsLocationsNotFound', 'model/PostCorporationsCorporationIdAssetsNames200Ok', 'model/PostCorporationsCorporationIdAssetsNamesNotFound', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/GetCharactersCharacterIdAssets200Ok'), require('../model/GetCharactersCharacterIdAssetsNotFound'), require('../model/GetCorporationsCorporationIdAssets200Ok'), require('../model/InternalServerError'), require('../model/PostCharactersCharacterIdAssetsLocations200Ok'), require('../model/PostCharactersCharacterIdAssetsNames200Ok'), require('../model/PostCorporationsCorporationIdAssetsLocations200Ok'), require('../model/PostCorporationsCorporationIdAssetsLocationsNotFound'), require('../model/PostCorporationsCorporationIdAssetsNames200Ok'), require('../model/PostCorporationsCorporationIdAssetsNamesNotFound'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.AssetsApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetCharactersCharacterIdAssets200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdAssetsNotFound, root.EveSwaggerInterface.GetCorporationsCorporationIdAssets200Ok, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.PostCharactersCharacterIdAssetsLocations200Ok, root.EveSwaggerInterface.PostCharactersCharacterIdAssetsNames200Ok, root.EveSwaggerInterface.PostCorporationsCorporationIdAssetsLocations200Ok, root.EveSwaggerInterface.PostCorporationsCorporationIdAssetsLocationsNotFound, root.EveSwaggerInterface.PostCorporationsCorporationIdAssetsNames200Ok, root.EveSwaggerInterface.PostCorporationsCorporationIdAssetsNamesNotFound, root.EveSwaggerInterface.ServiceUnavailable, root.EveSwaggerInterface.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, GetCharactersCharacterIdAssets200Ok, GetCharactersCharacterIdAssetsNotFound, GetCorporationsCorporationIdAssets200Ok, InternalServerError, PostCharactersCharacterIdAssetsLocations200Ok, PostCharactersCharacterIdAssetsNames200Ok, PostCorporationsCorporationIdAssetsLocations200Ok, PostCorporationsCorporationIdAssetsLocationsNotFound, PostCorporationsCorporationIdAssetsNames200Ok, PostCorporationsCorporationIdAssetsNamesNotFound, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * Assets service.
   * @module api/AssetsApi
   * @version 1.19
   */

  /**
   * Constructs a new AssetsApi. 
   * @alias module:api/AssetsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdAssets operation.
     * @callback module:api/AssetsApi~getCharactersCharacterIdAssetsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdAssets200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get character assets
     * Return a list of the characters assets  --- Alternate route: `/dev/characters/{character_id}/assets/`  Alternate route: `/v5/characters/{character_id}/assets/`  --- This route is cached for up to 3600 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/AssetsApi~getCharactersCharacterIdAssetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdAssets200Ok>}
     */
    this.getCharactersCharacterIdAssets = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdAssets");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdAssets200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/assets/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdAssets operation.
     * @callback module:api/AssetsApi~getCorporationsCorporationIdAssetsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdAssets200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get corporation assets
     * Return a list of the corporation assets  --- Alternate route: `/dev/corporations/{corporation_id}/assets/`  Alternate route: `/v5/corporations/{corporation_id}/assets/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/AssetsApi~getCorporationsCorporationIdAssetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdAssets200Ok>}
     */
    this.getCorporationsCorporationIdAssets = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdAssets");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCorporationsCorporationIdAssets200Ok];

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/assets/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCharactersCharacterIdAssetsLocations operation.
     * @callback module:api/AssetsApi~postCharactersCharacterIdAssetsLocationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PostCharactersCharacterIdAssetsLocations200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get character asset locations
     * Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)  --- Alternate route: `/dev/characters/{character_id}/assets/locations/`  Alternate route: `/v2/characters/{character_id}/assets/locations/` 
     * @param {Number} characterId An EVE character ID
     * @param {Array.<module:model/Number>} itemIds A list of item ids
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/AssetsApi~postCharactersCharacterIdAssetsLocationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PostCharactersCharacterIdAssetsLocations200Ok>}
     */
    this.postCharactersCharacterIdAssetsLocations = function(characterId, itemIds, opts, callback) {
      opts = opts || {};
      var postBody = itemIds;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling postCharactersCharacterIdAssetsLocations");
      }

      // verify the required parameter 'itemIds' is set
      if (itemIds === undefined || itemIds === null) {
        throw new Error("Missing the required parameter 'itemIds' when calling postCharactersCharacterIdAssetsLocations");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [PostCharactersCharacterIdAssetsLocations200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/assets/locations/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCharactersCharacterIdAssetsNames operation.
     * @callback module:api/AssetsApi~postCharactersCharacterIdAssetsNamesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PostCharactersCharacterIdAssetsNames200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get character asset names
     * Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.  --- Alternate route: `/dev/characters/{character_id}/assets/names/`  Alternate route: `/legacy/characters/{character_id}/assets/names/`  Alternate route: `/v1/characters/{character_id}/assets/names/` 
     * @param {Number} characterId An EVE character ID
     * @param {Array.<module:model/Number>} itemIds A list of item ids
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/AssetsApi~postCharactersCharacterIdAssetsNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PostCharactersCharacterIdAssetsNames200Ok>}
     */
    this.postCharactersCharacterIdAssetsNames = function(characterId, itemIds, opts, callback) {
      opts = opts || {};
      var postBody = itemIds;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling postCharactersCharacterIdAssetsNames");
      }

      // verify the required parameter 'itemIds' is set
      if (itemIds === undefined || itemIds === null) {
        throw new Error("Missing the required parameter 'itemIds' when calling postCharactersCharacterIdAssetsNames");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [PostCharactersCharacterIdAssetsNames200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/assets/names/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCorporationsCorporationIdAssetsLocations operation.
     * @callback module:api/AssetsApi~postCorporationsCorporationIdAssetsLocationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PostCorporationsCorporationIdAssetsLocations200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get corporation asset locations
     * Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)  --- Alternate route: `/dev/corporations/{corporation_id}/assets/locations/`  Alternate route: `/v2/corporations/{corporation_id}/assets/locations/`   --- Requires one of the following EVE corporation role(s): Director 
     * @param {Number} corporationId An EVE corporation ID
     * @param {Array.<module:model/Number>} itemIds A list of item ids
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/AssetsApi~postCorporationsCorporationIdAssetsLocationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PostCorporationsCorporationIdAssetsLocations200Ok>}
     */
    this.postCorporationsCorporationIdAssetsLocations = function(corporationId, itemIds, opts, callback) {
      opts = opts || {};
      var postBody = itemIds;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling postCorporationsCorporationIdAssetsLocations");
      }

      // verify the required parameter 'itemIds' is set
      if (itemIds === undefined || itemIds === null) {
        throw new Error("Missing the required parameter 'itemIds' when calling postCorporationsCorporationIdAssetsLocations");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [PostCorporationsCorporationIdAssetsLocations200Ok];

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/assets/locations/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCorporationsCorporationIdAssetsNames operation.
     * @callback module:api/AssetsApi~postCorporationsCorporationIdAssetsNamesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PostCorporationsCorporationIdAssetsNames200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get corporation asset names
     * Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships  --- Alternate route: `/dev/corporations/{corporation_id}/assets/names/`  Alternate route: `/legacy/corporations/{corporation_id}/assets/names/`  Alternate route: `/v1/corporations/{corporation_id}/assets/names/`   --- Requires one of the following EVE corporation role(s): Director 
     * @param {Number} corporationId An EVE corporation ID
     * @param {Array.<module:model/Number>} itemIds A list of item ids
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/AssetsApi~postCorporationsCorporationIdAssetsNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PostCorporationsCorporationIdAssetsNames200Ok>}
     */
    this.postCorporationsCorporationIdAssetsNames = function(corporationId, itemIds, opts, callback) {
      opts = opts || {};
      var postBody = itemIds;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling postCorporationsCorporationIdAssetsNames");
      }

      // verify the required parameter 'itemIds' is set
      if (itemIds === undefined || itemIds === null) {
        throw new Error("Missing the required parameter 'itemIds' when calling postCorporationsCorporationIdAssetsNames");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [PostCorporationsCorporationIdAssetsNames200Ok];

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/assets/names/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
