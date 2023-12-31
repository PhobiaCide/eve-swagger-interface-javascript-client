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
    root.EveSwaggerInterface.GetUniverseStarsStarIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetUniverseStarsStarIdOk model module.
   * @module model/GetUniverseStarsStarIdOk
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetUniverseStarsStarIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseStarsStarIdOk
   * @class
   * @param age {Number} Age of star in years
   * @param luminosity {Number} luminosity number
   * @param name {String} name string
   * @param radius {Number} radius integer
   * @param solarSystemId {Number} solar_system_id integer
   * @param spectralClass {module:model/GetUniverseStarsStarIdOk.SpectralClassEnum} spectral_class string
   * @param temperature {Number} temperature integer
   * @param typeId {Number} type_id integer
   */
  var exports = function(age, luminosity, name, radius, solarSystemId, spectralClass, temperature, typeId) {
    this.age = age;
    this.luminosity = luminosity;
    this.name = name;
    this.radius = radius;
    this.solarSystemId = solarSystemId;
    this.spectralClass = spectralClass;
    this.temperature = temperature;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetUniverseStarsStarIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseStarsStarIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseStarsStarIdOk} The populated <code>GetUniverseStarsStarIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('age'))
        obj.age = ApiClient.convertToType(data['age'], 'Number');
      if (data.hasOwnProperty('luminosity'))
        obj.luminosity = ApiClient.convertToType(data['luminosity'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('radius'))
        obj.radius = ApiClient.convertToType(data['radius'], 'Number');
      if (data.hasOwnProperty('solar_system_id'))
        obj.solarSystemId = ApiClient.convertToType(data['solar_system_id'], 'Number');
      if (data.hasOwnProperty('spectral_class'))
        obj.spectralClass = ApiClient.convertToType(data['spectral_class'], 'String');
      if (data.hasOwnProperty('temperature'))
        obj.temperature = ApiClient.convertToType(data['temperature'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * Age of star in years
   * @member {Number} age
   */
  exports.prototype.age = undefined;

  /**
   * luminosity number
   * @member {Number} luminosity
   */
  exports.prototype.luminosity = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * radius integer
   * @member {Number} radius
   */
  exports.prototype.radius = undefined;

  /**
   * solar_system_id integer
   * @member {Number} solarSystemId
   */
  exports.prototype.solarSystemId = undefined;

  /**
   * spectral_class string
   * @member {module:model/GetUniverseStarsStarIdOk.SpectralClassEnum} spectralClass
   */
  exports.prototype.spectralClass = undefined;

  /**
   * temperature integer
   * @member {Number} temperature
   */
  exports.prototype.temperature = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;



  /**
   * Allowed values for the <code>spectralClass</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SpectralClassEnum = {
    /**
     * value: "K2 V"
     * @const
     */
    k2V: "K2 V",

    /**
     * value: "K4 V"
     * @const
     */
    k4V: "K4 V",

    /**
     * value: "G2 V"
     * @const
     */
    g2V: "G2 V",

    /**
     * value: "G8 V"
     * @const
     */
    g8V: "G8 V",

    /**
     * value: "M7 V"
     * @const
     */
    m7V: "M7 V",

    /**
     * value: "K7 V"
     * @const
     */
    k7V: "K7 V",

    /**
     * value: "M2 V"
     * @const
     */
    m2V: "M2 V",

    /**
     * value: "K5 V"
     * @const
     */
    k5V: "K5 V",

    /**
     * value: "M3 V"
     * @const
     */
    m3V: "M3 V",

    /**
     * value: "G0 V"
     * @const
     */
    g0V: "G0 V",

    /**
     * value: "G7 V"
     * @const
     */
    g7V: "G7 V",

    /**
     * value: "G3 V"
     * @const
     */
    g3V: "G3 V",

    /**
     * value: "F9 V"
     * @const
     */
    f9V: "F9 V",

    /**
     * value: "G5 V"
     * @const
     */
    g5V: "G5 V",

    /**
     * value: "F6 V"
     * @const
     */
    f6V: "F6 V",

    /**
     * value: "K8 V"
     * @const
     */
    k8V: "K8 V",

    /**
     * value: "K9 V"
     * @const
     */
    k9V: "K9 V",

    /**
     * value: "K6 V"
     * @const
     */
    k6V: "K6 V",

    /**
     * value: "G9 V"
     * @const
     */
    g9V: "G9 V",

    /**
     * value: "G6 V"
     * @const
     */
    g6V: "G6 V",

    /**
     * value: "G4 VI"
     * @const
     */
    g4VI: "G4 VI",

    /**
     * value: "G4 V"
     * @const
     */
    g4V: "G4 V",

    /**
     * value: "F8 V"
     * @const
     */
    f8V: "F8 V",

    /**
     * value: "F2 V"
     * @const
     */
    f2V: "F2 V",

    /**
     * value: "F1 V"
     * @const
     */
    f1V: "F1 V",

    /**
     * value: "K3 V"
     * @const
     */
    k3V: "K3 V",

    /**
     * value: "F0 VI"
     * @const
     */
    f0VI: "F0 VI",

    /**
     * value: "G1 VI"
     * @const
     */
    g1VI: "G1 VI",

    /**
     * value: "G0 VI"
     * @const
     */
    g0VI: "G0 VI",

    /**
     * value: "K1 V"
     * @const
     */
    k1V: "K1 V",

    /**
     * value: "M4 V"
     * @const
     */
    m4V: "M4 V",

    /**
     * value: "M1 V"
     * @const
     */
    m1V: "M1 V",

    /**
     * value: "M6 V"
     * @const
     */
    m6V: "M6 V",

    /**
     * value: "M0 V"
     * @const
     */
    m0V: "M0 V",

    /**
     * value: "K2 IV"
     * @const
     */
    k2IV: "K2 IV",

    /**
     * value: "G2 VI"
     * @const
     */
    g2VI: "G2 VI",

    /**
     * value: "K0 V"
     * @const
     */
    k0V: "K0 V",

    /**
     * value: "K5 IV"
     * @const
     */
    k5IV: "K5 IV",

    /**
     * value: "F5 VI"
     * @const
     */
    f5VI: "F5 VI",

    /**
     * value: "G6 VI"
     * @const
     */
    g6VI: "G6 VI",

    /**
     * value: "F6 VI"
     * @const
     */
    f6VI: "F6 VI",

    /**
     * value: "F2 IV"
     * @const
     */
    f2IV: "F2 IV",

    /**
     * value: "G3 VI"
     * @const
     */
    g3VI: "G3 VI",

    /**
     * value: "M8 V"
     * @const
     */
    m8V: "M8 V",

    /**
     * value: "F1 VI"
     * @const
     */
    f1VI: "F1 VI",

    /**
     * value: "K1 IV"
     * @const
     */
    k1IV: "K1 IV",

    /**
     * value: "F7 V"
     * @const
     */
    f7V: "F7 V",

    /**
     * value: "G5 VI"
     * @const
     */
    g5VI: "G5 VI",

    /**
     * value: "M5 V"
     * @const
     */
    m5V: "M5 V",

    /**
     * value: "G7 VI"
     * @const
     */
    g7VI: "G7 VI",

    /**
     * value: "F5 V"
     * @const
     */
    f5V: "F5 V",

    /**
     * value: "F4 VI"
     * @const
     */
    f4VI: "F4 VI",

    /**
     * value: "F8 VI"
     * @const
     */
    f8VI: "F8 VI",

    /**
     * value: "K3 IV"
     * @const
     */
    k3IV: "K3 IV",

    /**
     * value: "F4 IV"
     * @const
     */
    f4IV: "F4 IV",

    /**
     * value: "F0 V"
     * @const
     */
    f0V: "F0 V",

    /**
     * value: "G7 IV"
     * @const
     */
    g7IV: "G7 IV",

    /**
     * value: "G8 VI"
     * @const
     */
    g8VI: "G8 VI",

    /**
     * value: "F2 VI"
     * @const
     */
    f2VI: "F2 VI",

    /**
     * value: "F4 V"
     * @const
     */
    f4V: "F4 V",

    /**
     * value: "F7 VI"
     * @const
     */
    f7VI: "F7 VI",

    /**
     * value: "F3 V"
     * @const
     */
    f3V: "F3 V",

    /**
     * value: "G1 V"
     * @const
     */
    g1V: "G1 V",

    /**
     * value: "G9 VI"
     * @const
     */
    g9VI: "G9 VI",

    /**
     * value: "F3 IV"
     * @const
     */
    f3IV: "F3 IV",

    /**
     * value: "F9 VI"
     * @const
     */
    f9VI: "F9 VI",

    /**
     * value: "M9 V"
     * @const
     */
    m9V: "M9 V",

    /**
     * value: "K0 IV"
     * @const
     */
    k0IV: "K0 IV",

    /**
     * value: "F1 IV"
     * @const
     */
    f1IV: "F1 IV",

    /**
     * value: "G4 IV"
     * @const
     */
    g4IV: "G4 IV",

    /**
     * value: "F3 VI"
     * @const
     */
    f3VI: "F3 VI",

    /**
     * value: "K4 IV"
     * @const
     */
    k4IV: "K4 IV",

    /**
     * value: "G5 IV"
     * @const
     */
    g5IV: "G5 IV",

    /**
     * value: "G3 IV"
     * @const
     */
    g3IV: "G3 IV",

    /**
     * value: "G1 IV"
     * @const
     */
    g1IV: "G1 IV",

    /**
     * value: "K7 IV"
     * @const
     */
    k7IV: "K7 IV",

    /**
     * value: "G0 IV"
     * @const
     */
    g0IV: "G0 IV",

    /**
     * value: "K6 IV"
     * @const
     */
    k6IV: "K6 IV",

    /**
     * value: "K9 IV"
     * @const
     */
    k9IV: "K9 IV",

    /**
     * value: "G2 IV"
     * @const
     */
    g2IV: "G2 IV",

    /**
     * value: "F9 IV"
     * @const
     */
    f9IV: "F9 IV",

    /**
     * value: "F0 IV"
     * @const
     */
    f0IV: "F0 IV",

    /**
     * value: "K8 IV"
     * @const
     */
    k8IV: "K8 IV",

    /**
     * value: "G8 IV"
     * @const
     */
    g8IV: "G8 IV",

    /**
     * value: "F6 IV"
     * @const
     */
    f6IV: "F6 IV",

    /**
     * value: "F5 IV"
     * @const
     */
    f5IV: "F5 IV",

    /**
     * value: "A0"
     * @const
     */
    a0: "A0",

    /**
     * value: "A0IV"
     * @const
     */
    a0IV: "A0IV",

    /**
     * value: "A0IV2"
     * @const
     */
    a0IV2: "A0IV2"
  };

  return exports;

}));
