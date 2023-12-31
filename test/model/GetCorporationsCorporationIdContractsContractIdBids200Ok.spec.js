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
    describe('GetCorporationsCorporationIdContractsContractIdBids200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdContractsContractIdBids200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdContractsContractIdBids200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdContractsContractIdBids200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdContractsContractIdBids200Ok);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property bidId (base name: "bid_id")', function() {
        // TODO: update the code to test the property bidId
        expect(instance).to.have.property('bidId');
        // expect(instance.bidId).to.be(expectedValueLiteral);
      });

      it('should have the property bidderId (base name: "bidder_id")', function() {
        // TODO: update the code to test the property bidderId
        expect(instance).to.have.property('bidderId');
        // expect(instance.bidderId).to.be(expectedValueLiteral);
      });

      it('should have the property dateBid (base name: "date_bid")', function() {
        // TODO: update the code to test the property dateBid
        expect(instance).to.have.property('dateBid');
        // expect(instance.dateBid).to.be(expectedValueLiteral);
      });

    });
  });

}));
