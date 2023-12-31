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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetCorporationsCorporationIdFwStatsKills', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdFwStatsKills();
      });

      it('should create an instance of GetCorporationsCorporationIdFwStatsKills', function() {
        // TODO: update the code to test GetCorporationsCorporationIdFwStatsKills
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdFwStatsKills);
      });

      it('should have the property lastWeek (base name: "last_week")', function() {
        // TODO: update the code to test the property lastWeek
        expect(instance).to.have.property('lastWeek');
        // expect(instance.lastWeek).to.be(expectedValueLiteral);
      });

      it('should have the property total (base name: "total")', function() {
        // TODO: update the code to test the property total
        expect(instance).to.have.property('total');
        // expect(instance.total).to.be(expectedValueLiteral);
      });

      it('should have the property yesterday (base name: "yesterday")', function() {
        // TODO: update the code to test the property yesterday
        expect(instance).to.have.property('yesterday');
        // expect(instance.yesterday).to.be(expectedValueLiteral);
      });

    });
  });

}));
