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
    define(['ApiClient', 'model/GetLoyaltyStoresCorporationIdOffersRequiredItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetLoyaltyStoresCorporationIdOffersRequiredItem'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetLoyaltyStoresCorporationIdOffers200Ok = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetLoyaltyStoresCorporationIdOffersRequiredItem);
  }
}(this, function(ApiClient, GetLoyaltyStoresCorporationIdOffersRequiredItem) {
  'use strict';

  /**
   * The GetLoyaltyStoresCorporationIdOffers200Ok model module.
   * @module model/GetLoyaltyStoresCorporationIdOffers200Ok
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetLoyaltyStoresCorporationIdOffers200Ok</code>.
   * 200 ok object
   * @alias module:model/GetLoyaltyStoresCorporationIdOffers200Ok
   * @class
   * @param iskCost {Number} isk_cost integer
   * @param lpCost {Number} lp_cost integer
   * @param offerId {Number} offer_id integer
   * @param quantity {Number} quantity integer
   * @param requiredItems {Array.<module:model/GetLoyaltyStoresCorporationIdOffersRequiredItem>} required_items array
   * @param typeId {Number} type_id integer
   */
  var exports = function(iskCost, lpCost, offerId, quantity, requiredItems, typeId) {
    this.iskCost = iskCost;
    this.lpCost = lpCost;
    this.offerId = offerId;
    this.quantity = quantity;
    this.requiredItems = requiredItems;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetLoyaltyStoresCorporationIdOffers200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLoyaltyStoresCorporationIdOffers200Ok} obj Optional instance to populate.
   * @return {module:model/GetLoyaltyStoresCorporationIdOffers200Ok} The populated <code>GetLoyaltyStoresCorporationIdOffers200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ak_cost'))
        obj.akCost = ApiClient.convertToType(data['ak_cost'], 'Number');
      if (data.hasOwnProperty('isk_cost'))
        obj.iskCost = ApiClient.convertToType(data['isk_cost'], 'Number');
      if (data.hasOwnProperty('lp_cost'))
        obj.lpCost = ApiClient.convertToType(data['lp_cost'], 'Number');
      if (data.hasOwnProperty('offer_id'))
        obj.offerId = ApiClient.convertToType(data['offer_id'], 'Number');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('required_items'))
        obj.requiredItems = ApiClient.convertToType(data['required_items'], [GetLoyaltyStoresCorporationIdOffersRequiredItem]);
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * Analysis kredit cost
   * @member {Number} akCost
   */
  exports.prototype.akCost = undefined;

  /**
   * isk_cost integer
   * @member {Number} iskCost
   */
  exports.prototype.iskCost = undefined;

  /**
   * lp_cost integer
   * @member {Number} lpCost
   */
  exports.prototype.lpCost = undefined;

  /**
   * offer_id integer
   * @member {Number} offerId
   */
  exports.prototype.offerId = undefined;

  /**
   * quantity integer
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * required_items array
   * @member {Array.<module:model/GetLoyaltyStoresCorporationIdOffersRequiredItem>} requiredItems
   */
  exports.prototype.requiredItems = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;


  return exports;

}));
