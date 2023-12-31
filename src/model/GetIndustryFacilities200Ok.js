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
    root.EveSwaggerInterface.GetIndustryFacilities200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetIndustryFacilities200Ok model module.
   * @module model/GetIndustryFacilities200Ok
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetIndustryFacilities200Ok</code>.
   * 200 ok object
   * @alias module:model/GetIndustryFacilities200Ok
   * @class
   * @param facilityId {Number} ID of the facility
   * @param ownerId {Number} Owner of the facility
   * @param regionId {Number} Region ID where the facility is
   * @param solarSystemId {Number} Solar system ID where the facility is
   * @param typeId {Number} Type ID of the facility
   */
  var exports = function(facilityId, ownerId, regionId, solarSystemId, typeId) {
    this.facilityId = facilityId;
    this.ownerId = ownerId;
    this.regionId = regionId;
    this.solarSystemId = solarSystemId;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetIndustryFacilities200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetIndustryFacilities200Ok} obj Optional instance to populate.
   * @return {module:model/GetIndustryFacilities200Ok} The populated <code>GetIndustryFacilities200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('facility_id'))
        obj.facilityId = ApiClient.convertToType(data['facility_id'], 'Number');
      if (data.hasOwnProperty('owner_id'))
        obj.ownerId = ApiClient.convertToType(data['owner_id'], 'Number');
      if (data.hasOwnProperty('region_id'))
        obj.regionId = ApiClient.convertToType(data['region_id'], 'Number');
      if (data.hasOwnProperty('solar_system_id'))
        obj.solarSystemId = ApiClient.convertToType(data['solar_system_id'], 'Number');
      if (data.hasOwnProperty('tax'))
        obj.tax = ApiClient.convertToType(data['tax'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * ID of the facility
   * @member {Number} facilityId
   */
  exports.prototype.facilityId = undefined;

  /**
   * Owner of the facility
   * @member {Number} ownerId
   */
  exports.prototype.ownerId = undefined;

  /**
   * Region ID where the facility is
   * @member {Number} regionId
   */
  exports.prototype.regionId = undefined;

  /**
   * Solar system ID where the facility is
   * @member {Number} solarSystemId
   */
  exports.prototype.solarSystemId = undefined;

  /**
   * Tax imposed by the facility
   * @member {Number} tax
   */
  exports.prototype.tax = undefined;

  /**
   * Type ID of the facility
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;


  return exports;

}));
