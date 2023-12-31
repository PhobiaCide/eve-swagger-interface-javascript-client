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

  beforeEach(function() {
    instance = new EveSwaggerInterface.AllianceApi();
  });

  describe('(package)', function() {
    describe('AllianceApi', function() {
      describe('getAlliances', function() {
        it('should call getAlliances successfully', function(done) {
          // TODO: uncomment, update parameter values for getAlliances call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getAlliances(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a('number');
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAlliancesAllianceId', function() {
        it('should call getAlliancesAllianceId successfully', function(done) {
          // TODO: uncomment, update parameter values for getAlliancesAllianceId call and complete the assertions
          /*
          var allianceId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getAlliancesAllianceId(allianceId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetAlliancesAllianceIdOk);
            expect(data.creatorCorporationId).to.be.a('number');
            expect(data.creatorCorporationId).to.be(0);
            expect(data.creatorId).to.be.a('number');
            expect(data.creatorId).to.be(0);
            expect(data.dateFounded).to.be.a(Date);
            expect(data.dateFounded).to.be(new Date());
            expect(data.executorCorporationId).to.be.a('number');
            expect(data.executorCorporationId).to.be(0);
            expect(data.factionId).to.be.a('number');
            expect(data.factionId).to.be(0);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.ticker).to.be.a('string');
            expect(data.ticker).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAlliancesAllianceIdCorporations', function() {
        it('should call getAlliancesAllianceIdCorporations successfully', function(done) {
          // TODO: uncomment, update parameter values for getAlliancesAllianceIdCorporations call and complete the assertions
          /*
          var allianceId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getAlliancesAllianceIdCorporations(allianceId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a('number');
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAlliancesAllianceIdIcons', function() {
        it('should call getAlliancesAllianceIdIcons successfully', function(done) {
          // TODO: uncomment, update parameter values for getAlliancesAllianceIdIcons call and complete the assertions
          /*
          var allianceId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getAlliancesAllianceIdIcons(allianceId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetAlliancesAllianceIdIconsOk);
            expect(data.px128x128).to.be.a('string');
            expect(data.px128x128).to.be("");
            expect(data.px64x64).to.be.a('string');
            expect(data.px64x64).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
