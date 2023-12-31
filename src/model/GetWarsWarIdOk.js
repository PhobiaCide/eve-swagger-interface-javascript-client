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
    define(['ApiClient', 'model/GetWarsWarIdAggressor', 'model/GetWarsWarIdAlly', 'model/GetWarsWarIdDefender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetWarsWarIdAggressor'), require('./GetWarsWarIdAlly'), require('./GetWarsWarIdDefender'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetWarsWarIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetWarsWarIdAggressor, root.EveSwaggerInterface.GetWarsWarIdAlly, root.EveSwaggerInterface.GetWarsWarIdDefender);
  }
}(this, function(ApiClient, GetWarsWarIdAggressor, GetWarsWarIdAlly, GetWarsWarIdDefender) {
  'use strict';

  /**
   * The GetWarsWarIdOk model module.
   * @module model/GetWarsWarIdOk
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetWarsWarIdOk</code>.
   * 200 ok object
   * @alias module:model/GetWarsWarIdOk
   * @class
   * @param aggressor {module:model/GetWarsWarIdAggressor} 
   * @param declared {Date} Time that the war was declared
   * @param defender {module:model/GetWarsWarIdDefender} 
   * @param id {Number} ID of the specified war
   * @param mutual {Boolean} Was the war declared mutual by both parties
   * @param openForAllies {Boolean} Is the war currently open for allies or not
   */
  var exports = function(aggressor, declared, defender, id, mutual, openForAllies) {
    this.aggressor = aggressor;
    this.declared = declared;
    this.defender = defender;
    this.id = id;
    this.mutual = mutual;
    this.openForAllies = openForAllies;
  };

  /**
   * Constructs a <code>GetWarsWarIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWarsWarIdOk} obj Optional instance to populate.
   * @return {module:model/GetWarsWarIdOk} The populated <code>GetWarsWarIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('aggressor'))
        obj.aggressor = GetWarsWarIdAggressor.constructFromObject(data['aggressor']);
      if (data.hasOwnProperty('allies'))
        obj.allies = ApiClient.convertToType(data['allies'], [GetWarsWarIdAlly]);
      if (data.hasOwnProperty('declared'))
        obj.declared = ApiClient.convertToType(data['declared'], 'Date');
      if (data.hasOwnProperty('defender'))
        obj.defender = GetWarsWarIdDefender.constructFromObject(data['defender']);
      if (data.hasOwnProperty('finished'))
        obj.finished = ApiClient.convertToType(data['finished'], 'Date');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('mutual'))
        obj.mutual = ApiClient.convertToType(data['mutual'], 'Boolean');
      if (data.hasOwnProperty('open_for_allies'))
        obj.openForAllies = ApiClient.convertToType(data['open_for_allies'], 'Boolean');
      if (data.hasOwnProperty('retracted'))
        obj.retracted = ApiClient.convertToType(data['retracted'], 'Date');
      if (data.hasOwnProperty('started'))
        obj.started = ApiClient.convertToType(data['started'], 'Date');
    }
    return obj;
  }

  /**
   * @member {module:model/GetWarsWarIdAggressor} aggressor
   */
  exports.prototype.aggressor = undefined;

  /**
   * allied corporations or alliances, each object contains either corporation_id or alliance_id
   * @member {Array.<module:model/GetWarsWarIdAlly>} allies
   */
  exports.prototype.allies = undefined;

  /**
   * Time that the war was declared
   * @member {Date} declared
   */
  exports.prototype.declared = undefined;

  /**
   * @member {module:model/GetWarsWarIdDefender} defender
   */
  exports.prototype.defender = undefined;

  /**
   * Time the war ended and shooting was no longer allowed
   * @member {Date} finished
   */
  exports.prototype.finished = undefined;

  /**
   * ID of the specified war
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Was the war declared mutual by both parties
   * @member {Boolean} mutual
   */
  exports.prototype.mutual = undefined;

  /**
   * Is the war currently open for allies or not
   * @member {Boolean} openForAllies
   */
  exports.prototype.openForAllies = undefined;

  /**
   * Time the war was retracted but both sides could still shoot each other
   * @member {Date} retracted
   */
  exports.prototype.retracted = undefined;

  /**
   * Time when the war started and both sides could shoot each other
   * @member {Date} started
   */
  exports.prototype.started = undefined;


  return exports;

}));
