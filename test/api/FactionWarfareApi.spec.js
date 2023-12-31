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
    instance = new EveSwaggerInterface.FactionWarfareApi();
  });

  describe('(package)', function() {
    describe('FactionWarfareApi', function() {
      describe('getCharactersCharacterIdFwStats', function() {
        it('should call getCharactersCharacterIdFwStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdFwStats call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdFwStats(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdFwStatsOk);
            expect(data.currentRank).to.be.a('number');
            expect(data.currentRank).to.be(0);
            expect(data.enlistedOn).to.be.a(Date);
            expect(data.enlistedOn).to.be(new Date());
            expect(data.factionId).to.be.a('number');
            expect(data.factionId).to.be(0);
            expect(data.highestRank).to.be.a('number');
            expect(data.highestRank).to.be(0);
            expect(data.kills).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdFwStatsKills);
                  expect(data.kills.lastWeek).to.be.a('number');
              expect(data.kills.lastWeek).to.be(0);
              expect(data.kills.total).to.be.a('number');
              expect(data.kills.total).to.be(0);
              expect(data.kills.yesterday).to.be.a('number');
              expect(data.kills.yesterday).to.be(0);
            expect(data.victoryPoints).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdFwStatsVictoryPoints);
                  expect(data.victoryPoints.lastWeek).to.be.a('number');
              expect(data.victoryPoints.lastWeek).to.be(0);
              expect(data.victoryPoints.total).to.be.a('number');
              expect(data.victoryPoints.total).to.be(0);
              expect(data.victoryPoints.yesterday).to.be.a('number');
              expect(data.victoryPoints.yesterday).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationsCorporationIdFwStats', function() {
        it('should call getCorporationsCorporationIdFwStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationsCorporationIdFwStats call and complete the assertions
          /*
          var corporationId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCorporationsCorporationIdFwStats(corporationId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdFwStatsOk);
            expect(data.enlistedOn).to.be.a(Date);
            expect(data.enlistedOn).to.be(new Date());
            expect(data.factionId).to.be.a('number');
            expect(data.factionId).to.be(0);
            expect(data.kills).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdFwStatsKills);
                  expect(data.kills.lastWeek).to.be.a('number');
              expect(data.kills.lastWeek).to.be(0);
              expect(data.kills.total).to.be.a('number');
              expect(data.kills.total).to.be(0);
              expect(data.kills.yesterday).to.be.a('number');
              expect(data.kills.yesterday).to.be(0);
            expect(data.pilots).to.be.a('number');
            expect(data.pilots).to.be(0);
            expect(data.victoryPoints).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdFwStatsVictoryPoints);
                  expect(data.victoryPoints.lastWeek).to.be.a('number');
              expect(data.victoryPoints.lastWeek).to.be(0);
              expect(data.victoryPoints.total).to.be.a('number');
              expect(data.victoryPoints.total).to.be(0);
              expect(data.victoryPoints.yesterday).to.be.a('number');
              expect(data.victoryPoints.yesterday).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFwLeaderboards', function() {
        it('should call getFwLeaderboards successfully', function(done) {
          // TODO: uncomment, update parameter values for getFwLeaderboards call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getFwLeaderboards(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsOk);
            expect(data.kills).to.be.a(EveSwaggerInterface.GetFwLeaderboardsKills);
                  {
                let dataCtr = data.kills.activeTotal;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsActiveTotalActiveTotal);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.factionId).to.be.a('number');
                  expect(data.factionId).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.kills.lastWeek;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsLastWeekLastWeek);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.factionId).to.be.a('number');
                  expect(data.factionId).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.kills.yesterday;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsYesterdayYesterday);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.factionId).to.be.a('number');
                  expect(data.factionId).to.be(0);
  
                        }
              }
            expect(data.victoryPoints).to.be.a(EveSwaggerInterface.GetFwLeaderboardsVictoryPoints);
                  {
                let dataCtr = data.victoryPoints.activeTotal;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsActiveTotalActiveTotal1);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.factionId).to.be.a('number');
                  expect(data.factionId).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.victoryPoints.lastWeek;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsLastWeekLastWeek1);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.factionId).to.be.a('number');
                  expect(data.factionId).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.victoryPoints.yesterday;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsYesterdayYesterday1);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.factionId).to.be.a('number');
                  expect(data.factionId).to.be(0);
  
                        }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFwLeaderboardsCharacters', function() {
        it('should call getFwLeaderboardsCharacters successfully', function(done) {
          // TODO: uncomment, update parameter values for getFwLeaderboardsCharacters call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getFwLeaderboardsCharacters(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCharactersOk);
            expect(data.kills).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCharactersKills);
                  {
                let dataCtr = data.kills.activeTotal;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCharactersActiveTotalActiveTotal);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.characterId).to.be.a('number');
                  expect(data.characterId).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.kills.lastWeek;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCharactersLastWeekLastWeek);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.characterId).to.be.a('number');
                  expect(data.characterId).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.kills.yesterday;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCharactersYesterdayYesterday);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.characterId).to.be.a('number');
                  expect(data.characterId).to.be(0);
  
                        }
              }
            expect(data.victoryPoints).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCharactersVictoryPoints);
                  {
                let dataCtr = data.victoryPoints.activeTotal;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCharactersActiveTotalActiveTotal1);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.characterId).to.be.a('number');
                  expect(data.characterId).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.victoryPoints.lastWeek;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCharactersLastWeekLastWeek1);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.characterId).to.be.a('number');
                  expect(data.characterId).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.victoryPoints.yesterday;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCharactersYesterdayYesterday1);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.characterId).to.be.a('number');
                  expect(data.characterId).to.be(0);
  
                        }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFwLeaderboardsCorporations', function() {
        it('should call getFwLeaderboardsCorporations successfully', function(done) {
          // TODO: uncomment, update parameter values for getFwLeaderboardsCorporations call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getFwLeaderboardsCorporations(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCorporationsOk);
            expect(data.kills).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCorporationsKills);
                  {
                let dataCtr = data.kills.activeTotal;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCorporationsActiveTotalActiveTotal);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.corporationId).to.be.a('number');
                  expect(data.corporationId).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.kills.lastWeek;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCorporationsLastWeekLastWeek);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.corporationId).to.be.a('number');
                  expect(data.corporationId).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.kills.yesterday;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCorporationsYesterdayYesterday);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.corporationId).to.be.a('number');
                  expect(data.corporationId).to.be(0);
  
                        }
              }
            expect(data.victoryPoints).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCorporationsVictoryPoints);
                  {
                let dataCtr = data.victoryPoints.activeTotal;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCorporationsActiveTotalActiveTotal1);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.corporationId).to.be.a('number');
                  expect(data.corporationId).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.victoryPoints.lastWeek;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCorporationsLastWeekLastWeek1);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.corporationId).to.be.a('number');
                  expect(data.corporationId).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.victoryPoints.yesterday;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFwLeaderboardsCorporationsYesterdayYesterday1);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0);
                  expect(data.corporationId).to.be.a('number');
                  expect(data.corporationId).to.be(0);
  
                        }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFwStats', function() {
        it('should call getFwStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getFwStats call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getFwStats(opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetFwStats200Ok);
              expect(data.factionId).to.be.a('number');
              expect(data.factionId).to.be(0);
              expect(data.kills).to.be.a(EveSwaggerInterface.GetFwStatsKills);
                    expect(data.kills.lastWeek).to.be.a('number');
                expect(data.kills.lastWeek).to.be(0);
                expect(data.kills.total).to.be.a('number');
                expect(data.kills.total).to.be(0);
                expect(data.kills.yesterday).to.be.a('number');
                expect(data.kills.yesterday).to.be(0);
              expect(data.pilots).to.be.a('number');
              expect(data.pilots).to.be(0);
              expect(data.systemsControlled).to.be.a('number');
              expect(data.systemsControlled).to.be(0);
              expect(data.victoryPoints).to.be.a(EveSwaggerInterface.GetFwStatsVictoryPoints);
                    expect(data.victoryPoints.lastWeek).to.be.a('number');
                expect(data.victoryPoints.lastWeek).to.be(0);
                expect(data.victoryPoints.total).to.be.a('number');
                expect(data.victoryPoints.total).to.be(0);
                expect(data.victoryPoints.yesterday).to.be.a('number');
                expect(data.victoryPoints.yesterday).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFwSystems', function() {
        it('should call getFwSystems successfully', function(done) {
          // TODO: uncomment, update parameter values for getFwSystems call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getFwSystems(opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetFwSystems200Ok);
              expect(data.contested).to.be.a('string');
              expect(data.contested).to.be("captured");
              expect(data.occupierFactionId).to.be.a('number');
              expect(data.occupierFactionId).to.be(0);
              expect(data.ownerFactionId).to.be.a('number');
              expect(data.ownerFactionId).to.be(0);
              expect(data.solarSystemId).to.be.a('number');
              expect(data.solarSystemId).to.be(0);
              expect(data.victoryPoints).to.be.a('number');
              expect(data.victoryPoints).to.be(0);
              expect(data.victoryPointsThreshold).to.be.a('number');
              expect(data.victoryPointsThreshold).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFwWars', function() {
        it('should call getFwWars successfully', function(done) {
          // TODO: uncomment, update parameter values for getFwWars call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getFwWars(opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetFwWars200Ok);
              expect(data.againstId).to.be.a('number');
              expect(data.againstId).to.be(0);
              expect(data.factionId).to.be.a('number');
              expect(data.factionId).to.be(0);
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
