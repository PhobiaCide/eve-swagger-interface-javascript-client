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
    root.EveSwaggerInterface.GetFwLeaderboardsCharactersLastWeekLastWeek = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetFwLeaderboardsCharactersLastWeekLastWeek model module.
   * @module model/GetFwLeaderboardsCharactersLastWeekLastWeek
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsCharactersLastWeekLastWeek</code>.
   * last_week object
   * @alias module:model/GetFwLeaderboardsCharactersLastWeekLastWeek
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetFwLeaderboardsCharactersLastWeekLastWeek</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsCharactersLastWeekLastWeek} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsCharactersLastWeekLastWeek} The populated <code>GetFwLeaderboardsCharactersLastWeekLastWeek</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('character_id'))
        obj.characterId = ApiClient.convertToType(data['character_id'], 'Number');
    }
    return obj;
  }

  /**
   * Amount of kills
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * character_id integer
   * @member {Number} characterId
   */
  exports.prototype.characterId = undefined;


  return exports;

}));
