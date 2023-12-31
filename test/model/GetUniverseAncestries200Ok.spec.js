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
    describe('GetUniverseAncestries200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetUniverseAncestries200Ok();
      });

      it('should create an instance of GetUniverseAncestries200Ok', function() {
        // TODO: update the code to test GetUniverseAncestries200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetUniverseAncestries200Ok);
      });

      it('should have the property bloodlineId (base name: "bloodline_id")', function() {
        // TODO: update the code to test the property bloodlineId
        expect(instance).to.have.property('bloodlineId');
        // expect(instance.bloodlineId).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property iconId (base name: "icon_id")', function() {
        // TODO: update the code to test the property iconId
        expect(instance).to.have.property('iconId');
        // expect(instance.iconId).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property shortDescription (base name: "short_description")', function() {
        // TODO: update the code to test the property shortDescription
        expect(instance).to.have.property('shortDescription');
        // expect(instance.shortDescription).to.be(expectedValueLiteral);
      });

    });
  });

}));
