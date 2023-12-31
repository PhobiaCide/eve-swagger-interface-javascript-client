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
    describe('GetLoyaltyStoresCorporationIdOffers200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetLoyaltyStoresCorporationIdOffers200Ok();
      });

      it('should create an instance of GetLoyaltyStoresCorporationIdOffers200Ok', function() {
        // TODO: update the code to test GetLoyaltyStoresCorporationIdOffers200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetLoyaltyStoresCorporationIdOffers200Ok);
      });

      it('should have the property akCost (base name: "ak_cost")', function() {
        // TODO: update the code to test the property akCost
        expect(instance).to.have.property('akCost');
        // expect(instance.akCost).to.be(expectedValueLiteral);
      });

      it('should have the property iskCost (base name: "isk_cost")', function() {
        // TODO: update the code to test the property iskCost
        expect(instance).to.have.property('iskCost');
        // expect(instance.iskCost).to.be(expectedValueLiteral);
      });

      it('should have the property lpCost (base name: "lp_cost")', function() {
        // TODO: update the code to test the property lpCost
        expect(instance).to.have.property('lpCost');
        // expect(instance.lpCost).to.be(expectedValueLiteral);
      });

      it('should have the property offerId (base name: "offer_id")', function() {
        // TODO: update the code to test the property offerId
        expect(instance).to.have.property('offerId');
        // expect(instance.offerId).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property requiredItems (base name: "required_items")', function() {
        // TODO: update the code to test the property requiredItems
        expect(instance).to.have.property('requiredItems');
        // expect(instance.requiredItems).to.be(expectedValueLiteral);
      });

      it('should have the property typeId (base name: "type_id")', function() {
        // TODO: update the code to test the property typeId
        expect(instance).to.have.property('typeId');
        // expect(instance.typeId).to.be(expectedValueLiteral);
      });

    });
  });

}));
