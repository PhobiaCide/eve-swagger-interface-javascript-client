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
    describe('PostFleetsFleetIdMembersInvitation', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.PostFleetsFleetIdMembersInvitation();
      });

      it('should create an instance of PostFleetsFleetIdMembersInvitation', function() {
        // TODO: update the code to test PostFleetsFleetIdMembersInvitation
        expect(instance).to.be.a(EveSwaggerInterface.PostFleetsFleetIdMembersInvitation);
      });

      it('should have the property characterId (base name: "character_id")', function() {
        // TODO: update the code to test the property characterId
        expect(instance).to.have.property('characterId');
        // expect(instance.characterId).to.be(expectedValueLiteral);
      });

      it('should have the property role (base name: "role")', function() {
        // TODO: update the code to test the property role
        expect(instance).to.have.property('role');
        // expect(instance.role).to.be(expectedValueLiteral);
      });

      it('should have the property squadId (base name: "squad_id")', function() {
        // TODO: update the code to test the property squadId
        expect(instance).to.have.property('squadId');
        // expect(instance.squadId).to.be(expectedValueLiteral);
      });

      it('should have the property wingId (base name: "wing_id")', function() {
        // TODO: update the code to test the property wingId
        expect(instance).to.have.property('wingId');
        // expect(instance.wingId).to.be(expectedValueLiteral);
      });

    });
  });

}));
