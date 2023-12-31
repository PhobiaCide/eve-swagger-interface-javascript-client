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
    define(['ApiClient', 'model/GetUniversePlanetsPlanetIdPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetUniversePlanetsPlanetIdPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetUniversePlanetsPlanetIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetUniversePlanetsPlanetIdPosition);
  }
}(this, function(ApiClient, GetUniversePlanetsPlanetIdPosition) {
  'use strict';

  /**
   * The GetUniversePlanetsPlanetIdOk model module.
   * @module model/GetUniversePlanetsPlanetIdOk
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetUniversePlanetsPlanetIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniversePlanetsPlanetIdOk
   * @class
   * @param name {String} name string
   * @param planetId {Number} planet_id integer
   * @param position {module:model/GetUniversePlanetsPlanetIdPosition} 
   * @param systemId {Number} The solar system this planet is in
   * @param typeId {Number} type_id integer
   */
  var exports = function(name, planetId, position, systemId, typeId) {
    this.name = name;
    this.planetId = planetId;
    this.position = position;
    this.systemId = systemId;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetUniversePlanetsPlanetIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniversePlanetsPlanetIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniversePlanetsPlanetIdOk} The populated <code>GetUniversePlanetsPlanetIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('planet_id'))
        obj.planetId = ApiClient.convertToType(data['planet_id'], 'Number');
      if (data.hasOwnProperty('position'))
        obj.position = GetUniversePlanetsPlanetIdPosition.constructFromObject(data['position']);
      if (data.hasOwnProperty('system_id'))
        obj.systemId = ApiClient.convertToType(data['system_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * planet_id integer
   * @member {Number} planetId
   */
  exports.prototype.planetId = undefined;

  /**
   * @member {module:model/GetUniversePlanetsPlanetIdPosition} position
   */
  exports.prototype.position = undefined;

  /**
   * The solar system this planet is in
   * @member {Number} systemId
   */
  exports.prototype.systemId = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;


  return exports;

}));
