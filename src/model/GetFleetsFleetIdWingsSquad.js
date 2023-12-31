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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetFleetsFleetIdWingsSquad = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetFleetsFleetIdWingsSquad model module.
   * @module model/GetFleetsFleetIdWingsSquad
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetFleetsFleetIdWingsSquad</code>.
   * squad object
   * @alias module:model/GetFleetsFleetIdWingsSquad
   * @class
   * @param id {Number} id integer
   * @param name {String} name string
   */
  var exports = function(id, name) {
    this.id = id;
    this.name = name;
  };

  /**
   * Constructs a <code>GetFleetsFleetIdWingsSquad</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFleetsFleetIdWingsSquad} obj Optional instance to populate.
   * @return {module:model/GetFleetsFleetIdWingsSquad} The populated <code>GetFleetsFleetIdWingsSquad</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * id integer
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
