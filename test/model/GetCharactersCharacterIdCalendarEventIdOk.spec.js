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
    describe('GetCharactersCharacterIdCalendarEventIdOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdOk();
      });

      it('should create an instance of GetCharactersCharacterIdCalendarEventIdOk', function() {
        // TODO: update the code to test GetCharactersCharacterIdCalendarEventIdOk
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdOk);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property duration (base name: "duration")', function() {
        // TODO: update the code to test the property duration
        expect(instance).to.have.property('duration');
        // expect(instance.duration).to.be(expectedValueLiteral);
      });

      it('should have the property eventId (base name: "event_id")', function() {
        // TODO: update the code to test the property eventId
        expect(instance).to.have.property('eventId');
        // expect(instance.eventId).to.be(expectedValueLiteral);
      });

      it('should have the property importance (base name: "importance")', function() {
        // TODO: update the code to test the property importance
        expect(instance).to.have.property('importance');
        // expect(instance.importance).to.be(expectedValueLiteral);
      });

      it('should have the property ownerId (base name: "owner_id")', function() {
        // TODO: update the code to test the property ownerId
        expect(instance).to.have.property('ownerId');
        // expect(instance.ownerId).to.be(expectedValueLiteral);
      });

      it('should have the property ownerName (base name: "owner_name")', function() {
        // TODO: update the code to test the property ownerName
        expect(instance).to.have.property('ownerName');
        // expect(instance.ownerName).to.be(expectedValueLiteral);
      });

      it('should have the property ownerType (base name: "owner_type")', function() {
        // TODO: update the code to test the property ownerType
        expect(instance).to.have.property('ownerType');
        // expect(instance.ownerType).to.be(expectedValueLiteral);
      });

      it('should have the property response (base name: "response")', function() {
        // TODO: update the code to test the property response
        expect(instance).to.have.property('response');
        // expect(instance.response).to.be(expectedValueLiteral);
      });

      it('should have the property text (base name: "text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

    });
  });

}));
