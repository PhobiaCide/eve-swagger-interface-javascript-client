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
    define(['ApiClient', 'model/PostCharactersCharacterIdAssetsLocationsPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PostCharactersCharacterIdAssetsLocationsPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.PostCharactersCharacterIdAssetsLocations200Ok = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.PostCharactersCharacterIdAssetsLocationsPosition);
  }
}(this, function(ApiClient, PostCharactersCharacterIdAssetsLocationsPosition) {
  'use strict';

  /**
   * The PostCharactersCharacterIdAssetsLocations200Ok model module.
   * @module model/PostCharactersCharacterIdAssetsLocations200Ok
   * @version 1.19
   */

  /**
   * Constructs a new <code>PostCharactersCharacterIdAssetsLocations200Ok</code>.
   * 200 ok object
   * @alias module:model/PostCharactersCharacterIdAssetsLocations200Ok
   * @class
   * @param itemId {Number} item_id integer
   * @param position {module:model/PostCharactersCharacterIdAssetsLocationsPosition} 
   */
  var exports = function(itemId, position) {
    this.itemId = itemId;
    this.position = position;
  };

  /**
   * Constructs a <code>PostCharactersCharacterIdAssetsLocations200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCharactersCharacterIdAssetsLocations200Ok} obj Optional instance to populate.
   * @return {module:model/PostCharactersCharacterIdAssetsLocations200Ok} The populated <code>PostCharactersCharacterIdAssetsLocations200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('item_id'))
        obj.itemId = ApiClient.convertToType(data['item_id'], 'Number');
      if (data.hasOwnProperty('position'))
        obj.position = PostCharactersCharacterIdAssetsLocationsPosition.constructFromObject(data['position']);
    }
    return obj;
  }

  /**
   * item_id integer
   * @member {Number} itemId
   */
  exports.prototype.itemId = undefined;

  /**
   * @member {module:model/PostCharactersCharacterIdAssetsLocationsPosition} position
   */
  exports.prototype.position = undefined;


  return exports;

}));
