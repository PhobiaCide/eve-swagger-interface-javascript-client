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
    instance = new EveSwaggerInterface.IndustryApi();
  });

  describe('(package)', function() {
    describe('IndustryApi', function() {
      describe('getCharactersCharacterIdIndustryJobs', function() {
        it('should call getCharactersCharacterIdIndustryJobs successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdIndustryJobs call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.includeCompleted = true;
          opts.token = "token_example";

          instance.getCharactersCharacterIdIndustryJobs(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdIndustryJobs200Ok);
              expect(data.activityId).to.be.a('number');
              expect(data.activityId).to.be(0);
              expect(data.blueprintId).to.be.a('number');
              expect(data.blueprintId).to.be("0");
              expect(data.blueprintLocationId).to.be.a('number');
              expect(data.blueprintLocationId).to.be("0");
              expect(data.blueprintTypeId).to.be.a('number');
              expect(data.blueprintTypeId).to.be(0);
              expect(data.completedCharacterId).to.be.a('number');
              expect(data.completedCharacterId).to.be(0);
              expect(data.completedDate).to.be.a(Date);
              expect(data.completedDate).to.be(new Date());
              expect(data.cost).to.be.a('number');
              expect(data.cost).to.be(0.0);
              expect(data.duration).to.be.a('number');
              expect(data.duration).to.be(0);
              expect(data.endDate).to.be.a(Date);
              expect(data.endDate).to.be(new Date());
              expect(data.facilityId).to.be.a('number');
              expect(data.facilityId).to.be("0");
              expect(data.installerId).to.be.a('number');
              expect(data.installerId).to.be(0);
              expect(data.jobId).to.be.a('number');
              expect(data.jobId).to.be(0);
              expect(data.licensedRuns).to.be.a('number');
              expect(data.licensedRuns).to.be(0);
              expect(data.outputLocationId).to.be.a('number');
              expect(data.outputLocationId).to.be("0");
              expect(data.pauseDate).to.be.a(Date);
              expect(data.pauseDate).to.be(new Date());
              expect(data.probability).to.be.a('number');
              expect(data.probability).to.be(0.0);
              expect(data.productTypeId).to.be.a('number');
              expect(data.productTypeId).to.be(0);
              expect(data.runs).to.be.a('number');
              expect(data.runs).to.be(0);
              expect(data.startDate).to.be.a(Date);
              expect(data.startDate).to.be(new Date());
              expect(data.stationId).to.be.a('number');
              expect(data.stationId).to.be("0");
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("active");
              expect(data.successfulRuns).to.be.a('number');
              expect(data.successfulRuns).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdMining', function() {
        it('should call getCharactersCharacterIdMining successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdMining call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCharactersCharacterIdMining(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMining200Ok);
              expect(data._date).to.be.a(Date);
              expect(data._date).to.be(new Date());
              expect(data.quantity).to.be.a('number');
              expect(data.quantity).to.be("0");
              expect(data.solarSystemId).to.be.a('number');
              expect(data.solarSystemId).to.be(0);
              expect(data.typeId).to.be.a('number');
              expect(data.typeId).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationCorporationIdMiningExtractions', function() {
        it('should call getCorporationCorporationIdMiningExtractions successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationCorporationIdMiningExtractions call and complete the assertions
          /*
          var corporationId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationCorporationIdMiningExtractions(corporationId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCorporationCorporationIdMiningExtractions200Ok);
              expect(data.chunkArrivalTime).to.be.a(Date);
              expect(data.chunkArrivalTime).to.be(new Date());
              expect(data.extractionStartTime).to.be.a(Date);
              expect(data.extractionStartTime).to.be(new Date());
              expect(data.moonId).to.be.a('number');
              expect(data.moonId).to.be(0);
              expect(data.naturalDecayTime).to.be.a(Date);
              expect(data.naturalDecayTime).to.be(new Date());
              expect(data.structureId).to.be.a('number');
              expect(data.structureId).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationCorporationIdMiningObservers', function() {
        it('should call getCorporationCorporationIdMiningObservers successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationCorporationIdMiningObservers call and complete the assertions
          /*
          var corporationId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationCorporationIdMiningObservers(corporationId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCorporationCorporationIdMiningObservers200Ok);
              expect(data.lastUpdated).to.be.a(Date);
              expect(data.lastUpdated).to.be(new Date());
              expect(data.observerId).to.be.a('number');
              expect(data.observerId).to.be("0");
              expect(data.observerType).to.be.a('string');
              expect(data.observerType).to.be("structure");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationCorporationIdMiningObserversObserverId', function() {
        it('should call getCorporationCorporationIdMiningObserversObserverId successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationCorporationIdMiningObserversObserverId call and complete the assertions
          /*
          var corporationId = 56;
          var observerId = 789;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationCorporationIdMiningObserversObserverId(corporationId, observerId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCorporationCorporationIdMiningObserversObserverId200Ok);
              expect(data.characterId).to.be.a('number');
              expect(data.characterId).to.be(0);
              expect(data.lastUpdated).to.be.a(Date);
              expect(data.lastUpdated).to.be(new Date());
              expect(data.quantity).to.be.a('number');
              expect(data.quantity).to.be("0");
              expect(data.recordedCorporationId).to.be.a('number');
              expect(data.recordedCorporationId).to.be(0);
              expect(data.typeId).to.be.a('number');
              expect(data.typeId).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationsCorporationIdIndustryJobs', function() {
        it('should call getCorporationsCorporationIdIndustryJobs successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationsCorporationIdIndustryJobs call and complete the assertions
          /*
          var corporationId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.includeCompleted = false;
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationsCorporationIdIndustryJobs(corporationId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdIndustryJobs200Ok);
              expect(data.activityId).to.be.a('number');
              expect(data.activityId).to.be(0);
              expect(data.blueprintId).to.be.a('number');
              expect(data.blueprintId).to.be("0");
              expect(data.blueprintLocationId).to.be.a('number');
              expect(data.blueprintLocationId).to.be("0");
              expect(data.blueprintTypeId).to.be.a('number');
              expect(data.blueprintTypeId).to.be(0);
              expect(data.completedCharacterId).to.be.a('number');
              expect(data.completedCharacterId).to.be(0);
              expect(data.completedDate).to.be.a(Date);
              expect(data.completedDate).to.be(new Date());
              expect(data.cost).to.be.a('number');
              expect(data.cost).to.be(0.0);
              expect(data.duration).to.be.a('number');
              expect(data.duration).to.be(0);
              expect(data.endDate).to.be.a(Date);
              expect(data.endDate).to.be(new Date());
              expect(data.facilityId).to.be.a('number');
              expect(data.facilityId).to.be("0");
              expect(data.installerId).to.be.a('number');
              expect(data.installerId).to.be(0);
              expect(data.jobId).to.be.a('number');
              expect(data.jobId).to.be(0);
              expect(data.licensedRuns).to.be.a('number');
              expect(data.licensedRuns).to.be(0);
              expect(data.locationId).to.be.a('number');
              expect(data.locationId).to.be("0");
              expect(data.outputLocationId).to.be.a('number');
              expect(data.outputLocationId).to.be("0");
              expect(data.pauseDate).to.be.a(Date);
              expect(data.pauseDate).to.be(new Date());
              expect(data.probability).to.be.a('number');
              expect(data.probability).to.be(0.0);
              expect(data.productTypeId).to.be.a('number');
              expect(data.productTypeId).to.be(0);
              expect(data.runs).to.be.a('number');
              expect(data.runs).to.be(0);
              expect(data.startDate).to.be.a(Date);
              expect(data.startDate).to.be(new Date());
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("active");
              expect(data.successfulRuns).to.be.a('number');
              expect(data.successfulRuns).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getIndustryFacilities', function() {
        it('should call getIndustryFacilities successfully', function(done) {
          // TODO: uncomment, update parameter values for getIndustryFacilities call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getIndustryFacilities(opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetIndustryFacilities200Ok);
              expect(data.facilityId).to.be.a('number');
              expect(data.facilityId).to.be("0");
              expect(data.ownerId).to.be.a('number');
              expect(data.ownerId).to.be(0);
              expect(data.regionId).to.be.a('number');
              expect(data.regionId).to.be(0);
              expect(data.solarSystemId).to.be.a('number');
              expect(data.solarSystemId).to.be(0);
              expect(data.tax).to.be.a('number');
              expect(data.tax).to.be(0.0);
              expect(data.typeId).to.be.a('number');
              expect(data.typeId).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getIndustrySystems', function() {
        it('should call getIndustrySystems successfully', function(done) {
          // TODO: uncomment, update parameter values for getIndustrySystems call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getIndustrySystems(opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetIndustrySystems200Ok);
              {
                let dataCtr = data.costIndices;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetIndustrySystemsCostIndice);
                  expect(data.activity).to.be.a('string');
                  expect(data.activity).to.be("copying");
                  expect(data.costIndex).to.be.a('number');
                  expect(data.costIndex).to.be(0.0);
  
                        }
              }
              expect(data.solarSystemId).to.be.a('number');
              expect(data.solarSystemId).to.be(0);
            }

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
