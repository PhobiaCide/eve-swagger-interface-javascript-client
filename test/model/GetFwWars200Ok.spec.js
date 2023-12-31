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
    describe('GetFwWars200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetFwWars200Ok();
      });

      it('should create an instance of GetFwWars200Ok', function() {
        // TODO: update the code to test GetFwWars200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetFwWars200Ok);
      });

      it('should have the property againstId (base name: "against_id")', function() {
        // TODO: update the code to test the property againstId
        expect(instance).to.have.property('againstId');
        // expect(instance.againstId).to.be(expectedValueLiteral);
      });

      it('should have the property factionId (base name: "faction_id")', function() {
        // TODO: update the code to test the property factionId
        expect(instance).to.have.property('factionId');
        // expect(instance.factionId).to.be(expectedValueLiteral);
      });

    });
  });

}));
