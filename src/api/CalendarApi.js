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
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/GetCharactersCharacterIdCalendar200Ok', 'model/GetCharactersCharacterIdCalendarEventIdAttendees200Ok', 'model/GetCharactersCharacterIdCalendarEventIdAttendeesNotFound', 'model/GetCharactersCharacterIdCalendarEventIdNotFound', 'model/GetCharactersCharacterIdCalendarEventIdOk', 'model/InternalServerError', 'model/PutCharactersCharacterIdCalendarEventIdResponse', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/GetCharactersCharacterIdCalendar200Ok'), require('../model/GetCharactersCharacterIdCalendarEventIdAttendees200Ok'), require('../model/GetCharactersCharacterIdCalendarEventIdAttendeesNotFound'), require('../model/GetCharactersCharacterIdCalendarEventIdNotFound'), require('../model/GetCharactersCharacterIdCalendarEventIdOk'), require('../model/InternalServerError'), require('../model/PutCharactersCharacterIdCalendarEventIdResponse'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.CalendarApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdAttendees200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdAttendeesNotFound, root.EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdNotFound, root.EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdOk, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.PutCharactersCharacterIdCalendarEventIdResponse, root.EveSwaggerInterface.ServiceUnavailable, root.EveSwaggerInterface.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, GetCharactersCharacterIdCalendar200Ok, GetCharactersCharacterIdCalendarEventIdAttendees200Ok, GetCharactersCharacterIdCalendarEventIdAttendeesNotFound, GetCharactersCharacterIdCalendarEventIdNotFound, GetCharactersCharacterIdCalendarEventIdOk, InternalServerError, PutCharactersCharacterIdCalendarEventIdResponse, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * Calendar service.
   * @module api/CalendarApi
   * @version 1.19
   */

  /**
   * Constructs a new CalendarApi. 
   * @alias module:api/CalendarApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdCalendar operation.
     * @callback module:api/CalendarApi~getCharactersCharacterIdCalendarCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdCalendar200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List calendar event summaries
     * Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event  --- Alternate route: `/dev/characters/{character_id}/calendar/`  Alternate route: `/legacy/characters/{character_id}/calendar/`  Alternate route: `/v1/characters/{character_id}/calendar/`  Alternate route: `/v2/characters/{character_id}/calendar/`  --- This route is cached for up to 5 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {Number} opts.fromEvent The event ID to retrieve events from
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/CalendarApi~getCharactersCharacterIdCalendarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdCalendar200Ok>}
     */
    this.getCharactersCharacterIdCalendar = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdCalendar");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'from_event': opts['fromEvent'],
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
      var returnType = [GetCharactersCharacterIdCalendar200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/calendar/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdCalendarEventId operation.
     * @callback module:api/CalendarApi~getCharactersCharacterIdCalendarEventIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdCalendarEventIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an event
     * Get all the information for a specific event  --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/`  --- This route is cached for up to 5 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Number} eventId The id of the event requested
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/CalendarApi~getCharactersCharacterIdCalendarEventIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdCalendarEventIdOk}
     */
    this.getCharactersCharacterIdCalendarEventId = function(characterId, eventId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdCalendarEventId");
      }

      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw new Error("Missing the required parameter 'eventId' when calling getCharactersCharacterIdCalendarEventId");
      }


      var pathParams = {
        'character_id': characterId,
        'event_id': eventId
      };
      var queryParams = {
        'datasource': opts['datasource'],
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
      var returnType = GetCharactersCharacterIdCalendarEventIdOk;

      return this.apiClient.callApi(
        '/characters/{character_id}/calendar/{event_id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdCalendarEventIdAttendees operation.
     * @callback module:api/CalendarApi~getCharactersCharacterIdCalendarEventIdAttendeesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdCalendarEventIdAttendees200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get attendees
     * Get all invited attendees for a given event  --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/attendees/`  Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/attendees/`  Alternate route: `/v1/characters/{character_id}/calendar/{event_id}/attendees/`  Alternate route: `/v2/characters/{character_id}/calendar/{event_id}/attendees/`  --- This route is cached for up to 600 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Number} eventId The id of the event requested
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/CalendarApi~getCharactersCharacterIdCalendarEventIdAttendeesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdCalendarEventIdAttendees200Ok>}
     */
    this.getCharactersCharacterIdCalendarEventIdAttendees = function(characterId, eventId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdCalendarEventIdAttendees");
      }

      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw new Error("Missing the required parameter 'eventId' when calling getCharactersCharacterIdCalendarEventIdAttendees");
      }


      var pathParams = {
        'character_id': characterId,
        'event_id': eventId
      };
      var queryParams = {
        'datasource': opts['datasource'],
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
      var returnType = [GetCharactersCharacterIdCalendarEventIdAttendees200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/calendar/{event_id}/attendees/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putCharactersCharacterIdCalendarEventId operation.
     * @callback module:api/CalendarApi~putCharactersCharacterIdCalendarEventIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Respond to an event
     * Set your response status to an event  --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/`  --- This route is cached for up to 5 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Number} eventId The ID of the event requested
     * @param {module:model/PutCharactersCharacterIdCalendarEventIdResponse} response The response value to set, overriding current value
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/CalendarApi~putCharactersCharacterIdCalendarEventIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putCharactersCharacterIdCalendarEventId = function(characterId, eventId, response, opts, callback) {
      opts = opts || {};
      var postBody = response;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling putCharactersCharacterIdCalendarEventId");
      }

      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw new Error("Missing the required parameter 'eventId' when calling putCharactersCharacterIdCalendarEventId");
      }

      // verify the required parameter 'response' is set
      if (response === undefined || response === null) {
        throw new Error("Missing the required parameter 'response' when calling putCharactersCharacterIdCalendarEventId");
      }


      var pathParams = {
        'character_id': characterId,
        'event_id': eventId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/characters/{character_id}/calendar/{event_id}/', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
