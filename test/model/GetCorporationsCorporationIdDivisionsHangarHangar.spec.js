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
    describe('GetCorporationsCorporationIdDivisionsHangarHangar', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdDivisionsHangarHangar();
      });

      it('should create an instance of GetCorporationsCorporationIdDivisionsHangarHangar', function() {
        // TODO: update the code to test GetCorporationsCorporationIdDivisionsHangarHangar
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdDivisionsHangarHangar);
      });

      it('should have the property division (base name: "division")', function() {
        // TODO: update the code to test the property division
        expect(instance).to.have.property('division');
        // expect(instance.division).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

    });
  });

}));
