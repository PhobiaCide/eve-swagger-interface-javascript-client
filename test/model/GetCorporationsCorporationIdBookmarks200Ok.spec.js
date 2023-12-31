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
    describe('GetCorporationsCorporationIdBookmarks200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdBookmarks200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdBookmarks200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdBookmarks200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdBookmarks200Ok);
      });

      it('should have the property bookmarkId (base name: "bookmark_id")', function() {
        // TODO: update the code to test the property bookmarkId
        expect(instance).to.have.property('bookmarkId');
        // expect(instance.bookmarkId).to.be(expectedValueLiteral);
      });

      it('should have the property coordinates (base name: "coordinates")', function() {
        // TODO: update the code to test the property coordinates
        expect(instance).to.have.property('coordinates');
        // expect(instance.coordinates).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property creatorId (base name: "creator_id")', function() {
        // TODO: update the code to test the property creatorId
        expect(instance).to.have.property('creatorId');
        // expect(instance.creatorId).to.be(expectedValueLiteral);
      });

      it('should have the property folderId (base name: "folder_id")', function() {
        // TODO: update the code to test the property folderId
        expect(instance).to.have.property('folderId');
        // expect(instance.folderId).to.be(expectedValueLiteral);
      });

      it('should have the property item (base name: "item")', function() {
        // TODO: update the code to test the property item
        expect(instance).to.have.property('item');
        // expect(instance.item).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

      it('should have the property locationId (base name: "location_id")', function() {
        // TODO: update the code to test the property locationId
        expect(instance).to.have.property('locationId');
        // expect(instance.locationId).to.be(expectedValueLiteral);
      });

      it('should have the property notes (base name: "notes")', function() {
        // TODO: update the code to test the property notes
        expect(instance).to.have.property('notes');
        // expect(instance.notes).to.be(expectedValueLiteral);
      });

    });
  });

}));
