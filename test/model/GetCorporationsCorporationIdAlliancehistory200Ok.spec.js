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
    describe('GetCorporationsCorporationIdAlliancehistory200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdAlliancehistory200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdAlliancehistory200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdAlliancehistory200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdAlliancehistory200Ok);
      });

      it('should have the property allianceId (base name: "alliance_id")', function() {
        // TODO: update the code to test the property allianceId
        expect(instance).to.have.property('allianceId');
        // expect(instance.allianceId).to.be(expectedValueLiteral);
      });

      it('should have the property isDeleted (base name: "is_deleted")', function() {
        // TODO: update the code to test the property isDeleted
        expect(instance).to.have.property('isDeleted');
        // expect(instance.isDeleted).to.be(expectedValueLiteral);
      });

      it('should have the property recordId (base name: "record_id")', function() {
        // TODO: update the code to test the property recordId
        expect(instance).to.have.property('recordId');
        // expect(instance.recordId).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "start_date")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
