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
    describe('GetCorporationCorporationIdMiningObserversObserverId200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationCorporationIdMiningObserversObserverId200Ok();
      });

      it('should create an instance of GetCorporationCorporationIdMiningObserversObserverId200Ok', function() {
        // TODO: update the code to test GetCorporationCorporationIdMiningObserversObserverId200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationCorporationIdMiningObserversObserverId200Ok);
      });

      it('should have the property characterId (base name: "character_id")', function() {
        // TODO: update the code to test the property characterId
        expect(instance).to.have.property('characterId');
        // expect(instance.characterId).to.be(expectedValueLiteral);
      });

      it('should have the property lastUpdated (base name: "last_updated")', function() {
        // TODO: update the code to test the property lastUpdated
        expect(instance).to.have.property('lastUpdated');
        // expect(instance.lastUpdated).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property recordedCorporationId (base name: "recorded_corporation_id")', function() {
        // TODO: update the code to test the property recordedCorporationId
        expect(instance).to.have.property('recordedCorporationId');
        // expect(instance.recordedCorporationId).to.be(expectedValueLiteral);
      });

      it('should have the property typeId (base name: "type_id")', function() {
        // TODO: update the code to test the property typeId
        expect(instance).to.have.property('typeId');
        // expect(instance.typeId).to.be(expectedValueLiteral);
      });

    });
  });

}));
