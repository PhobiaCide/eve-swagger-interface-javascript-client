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
    define(['ApiClient', 'model/GetUniverseStructuresStructureIdPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetUniverseStructuresStructureIdPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetUniverseStructuresStructureIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetUniverseStructuresStructureIdPosition);
  }
}(this, function(ApiClient, GetUniverseStructuresStructureIdPosition) {
  'use strict';

  /**
   * The GetUniverseStructuresStructureIdOk model module.
   * @module model/GetUniverseStructuresStructureIdOk
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetUniverseStructuresStructureIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseStructuresStructureIdOk
   * @class
   * @param name {String} The full name of the structure
   * @param ownerId {Number} The ID of the corporation who owns this particular structure
   * @param solarSystemId {Number} solar_system_id integer
   */
  var exports = function(name, ownerId, solarSystemId) {
    this.name = name;
    this.ownerId = ownerId;
    this.solarSystemId = solarSystemId;
  };

  /**
   * Constructs a <code>GetUniverseStructuresStructureIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseStructuresStructureIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseStructuresStructureIdOk} The populated <code>GetUniverseStructuresStructureIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('owner_id'))
        obj.ownerId = ApiClient.convertToType(data['owner_id'], 'Number');
      if (data.hasOwnProperty('position'))
        obj.position = GetUniverseStructuresStructureIdPosition.constructFromObject(data['position']);
      if (data.hasOwnProperty('solar_system_id'))
        obj.solarSystemId = ApiClient.convertToType(data['solar_system_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * The full name of the structure
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The ID of the corporation who owns this particular structure
   * @member {Number} ownerId
   */
  exports.prototype.ownerId = undefined;

  /**
   * @member {module:model/GetUniverseStructuresStructureIdPosition} position
   */
  exports.prototype.position = undefined;

  /**
   * solar_system_id integer
   * @member {Number} solarSystemId
   */
  exports.prototype.solarSystemId = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;


  return exports;

}));
