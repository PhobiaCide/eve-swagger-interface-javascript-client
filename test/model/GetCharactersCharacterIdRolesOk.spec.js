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
    describe('GetCharactersCharacterIdRolesOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdRolesOk();
      });

      it('should create an instance of GetCharactersCharacterIdRolesOk', function() {
        // TODO: update the code to test GetCharactersCharacterIdRolesOk
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdRolesOk);
      });

      it('should have the property roles (base name: "roles")', function() {
        // TODO: update the code to test the property roles
        expect(instance).to.have.property('roles');
        // expect(instance.roles).to.be(expectedValueLiteral);
      });

      it('should have the property rolesAtBase (base name: "roles_at_base")', function() {
        // TODO: update the code to test the property rolesAtBase
        expect(instance).to.have.property('rolesAtBase');
        // expect(instance.rolesAtBase).to.be(expectedValueLiteral);
      });

      it('should have the property rolesAtHq (base name: "roles_at_hq")', function() {
        // TODO: update the code to test the property rolesAtHq
        expect(instance).to.have.property('rolesAtHq');
        // expect(instance.rolesAtHq).to.be(expectedValueLiteral);
      });

      it('should have the property rolesAtOther (base name: "roles_at_other")', function() {
        // TODO: update the code to test the property rolesAtOther
        expect(instance).to.have.property('rolesAtOther');
        // expect(instance.rolesAtOther).to.be(expectedValueLiteral);
      });

    });
  });

}));
