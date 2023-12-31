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
    describe('GetAlliancesAllianceIdContacts200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetAlliancesAllianceIdContacts200Ok();
      });

      it('should create an instance of GetAlliancesAllianceIdContacts200Ok', function() {
        // TODO: update the code to test GetAlliancesAllianceIdContacts200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetAlliancesAllianceIdContacts200Ok);
      });

      it('should have the property contactId (base name: "contact_id")', function() {
        // TODO: update the code to test the property contactId
        expect(instance).to.have.property('contactId');
        // expect(instance.contactId).to.be(expectedValueLiteral);
      });

      it('should have the property contactType (base name: "contact_type")', function() {
        // TODO: update the code to test the property contactType
        expect(instance).to.have.property('contactType');
        // expect(instance.contactType).to.be(expectedValueLiteral);
      });

      it('should have the property labelIds (base name: "label_ids")', function() {
        // TODO: update the code to test the property labelIds
        expect(instance).to.have.property('labelIds');
        // expect(instance.labelIds).to.be(expectedValueLiteral);
      });

      it('should have the property standing (base name: "standing")', function() {
        // TODO: update the code to test the property standing
        expect(instance).to.have.property('standing');
        // expect(instance.standing).to.be(expectedValueLiteral);
      });

    });
  });

}));
