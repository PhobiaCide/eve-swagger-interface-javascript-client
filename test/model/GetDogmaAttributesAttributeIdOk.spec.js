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
    describe('GetDogmaAttributesAttributeIdOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetDogmaAttributesAttributeIdOk();
      });

      it('should create an instance of GetDogmaAttributesAttributeIdOk', function() {
        // TODO: update the code to test GetDogmaAttributesAttributeIdOk
        expect(instance).to.be.a(EveSwaggerInterface.GetDogmaAttributesAttributeIdOk);
      });

      it('should have the property attributeId (base name: "attribute_id")', function() {
        // TODO: update the code to test the property attributeId
        expect(instance).to.have.property('attributeId');
        // expect(instance.attributeId).to.be(expectedValueLiteral);
      });

      it('should have the property defaultValue (base name: "default_value")', function() {
        // TODO: update the code to test the property defaultValue
        expect(instance).to.have.property('defaultValue');
        // expect(instance.defaultValue).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property displayName (base name: "display_name")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property highIsGood (base name: "high_is_good")', function() {
        // TODO: update the code to test the property highIsGood
        expect(instance).to.have.property('highIsGood');
        // expect(instance.highIsGood).to.be(expectedValueLiteral);
      });

      it('should have the property iconId (base name: "icon_id")', function() {
        // TODO: update the code to test the property iconId
        expect(instance).to.have.property('iconId');
        // expect(instance.iconId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property published (base name: "published")', function() {
        // TODO: update the code to test the property published
        expect(instance).to.have.property('published');
        // expect(instance.published).to.be(expectedValueLiteral);
      });

      it('should have the property stackable (base name: "stackable")', function() {
        // TODO: update the code to test the property stackable
        expect(instance).to.have.property('stackable');
        // expect(instance.stackable).to.be(expectedValueLiteral);
      });

      it('should have the property unitId (base name: "unit_id")', function() {
        // TODO: update the code to test the property unitId
        expect(instance).to.have.property('unitId');
        // expect(instance.unitId).to.be(expectedValueLiteral);
      });

    });
  });

}));
