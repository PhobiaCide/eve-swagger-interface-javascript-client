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
    root.EveSwaggerInterface.GetIndustrySystemsCostIndice = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetIndustrySystemsCostIndice model module.
   * @module model/GetIndustrySystemsCostIndice
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetIndustrySystemsCostIndice</code>.
   * cost_indice object
   * @alias module:model/GetIndustrySystemsCostIndice
   * @class
   * @param activity {module:model/GetIndustrySystemsCostIndice.ActivityEnum} activity string
   * @param costIndex {Number} cost_index number
   */
  var exports = function(activity, costIndex) {
    this.activity = activity;
    this.costIndex = costIndex;
  };

  /**
   * Constructs a <code>GetIndustrySystemsCostIndice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetIndustrySystemsCostIndice} obj Optional instance to populate.
   * @return {module:model/GetIndustrySystemsCostIndice} The populated <code>GetIndustrySystemsCostIndice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('activity'))
        obj.activity = ApiClient.convertToType(data['activity'], 'String');
      if (data.hasOwnProperty('cost_index'))
        obj.costIndex = ApiClient.convertToType(data['cost_index'], 'Number');
    }
    return obj;
  }

  /**
   * activity string
   * @member {module:model/GetIndustrySystemsCostIndice.ActivityEnum} activity
   */
  exports.prototype.activity = undefined;

  /**
   * cost_index number
   * @member {Number} costIndex
   */
  exports.prototype.costIndex = undefined;



  /**
   * Allowed values for the <code>activity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActivityEnum = {
    /**
     * value: "copying"
     * @const
     */
    copying: "copying",

    /**
     * value: "duplicating"
     * @const
     */
    duplicating: "duplicating",

    /**
     * value: "invention"
     * @const
     */
    invention: "invention",

    /**
     * value: "manufacturing"
     * @const
     */
    manufacturing: "manufacturing",

    /**
     * value: "none"
     * @const
     */
    none: "none",

    /**
     * value: "reaction"
     * @const
     */
    reaction: "reaction",

    /**
     * value: "researching_material_efficiency"
     * @const
     */
    researchingMaterialEfficiency: "researching_material_efficiency",

    /**
     * value: "researching_technology"
     * @const
     */
    researchingTechnology: "researching_technology",

    /**
     * value: "researching_time_efficiency"
     * @const
     */
    researchingTimeEfficiency: "researching_time_efficiency",

    /**
     * value: "reverse_engineering"
     * @const
     */
    reverseEngineering: "reverse_engineering"
  };

  return exports;

}));
