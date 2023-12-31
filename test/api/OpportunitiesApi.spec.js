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
    instance = new EveSwaggerInterface.OpportunitiesApi();
  });

  describe('(package)', function() {
    describe('OpportunitiesApi', function() {
      describe('getCharactersCharacterIdOpportunities', function() {
        it('should call getCharactersCharacterIdOpportunities successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdOpportunities call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdOpportunities(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdOpportunities200Ok);
              expect(data.completedAt).to.be.a(Date);
              expect(data.completedAt).to.be(new Date());
              expect(data.taskId).to.be.a('number');
              expect(data.taskId).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOpportunitiesGroups', function() {
        it('should call getOpportunitiesGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for getOpportunitiesGroups call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getOpportunitiesGroups(opts, function(error, data, response) {
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
      describe('getOpportunitiesGroupsGroupId', function() {
        it('should call getOpportunitiesGroupsGroupId successfully', function(done) {
          // TODO: uncomment, update parameter values for getOpportunitiesGroupsGroupId call and complete the assertions
          /*
          var groupId = 56;
          var opts = {};
          opts.acceptLanguage = "en";
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.language = "en";

          instance.getOpportunitiesGroupsGroupId(groupId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetOpportunitiesGroupsGroupIdOk);
            {
              let dataCtr = data.connectedGroups;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.groupId).to.be.a('number');
            expect(data.groupId).to.be(0);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.notification).to.be.a('string');
            expect(data.notification).to.be("");
            {
              let dataCtr = data.requiredTasks;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOpportunitiesTasks', function() {
        it('should call getOpportunitiesTasks successfully', function(done) {
          // TODO: uncomment, update parameter values for getOpportunitiesTasks call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getOpportunitiesTasks(opts, function(error, data, response) {
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
      describe('getOpportunitiesTasksTaskId', function() {
        it('should call getOpportunitiesTasksTaskId successfully', function(done) {
          // TODO: uncomment, update parameter values for getOpportunitiesTasksTaskId call and complete the assertions
          /*
          var taskId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getOpportunitiesTasksTaskId(taskId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetOpportunitiesTasksTaskIdOk);
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.notification).to.be.a('string');
            expect(data.notification).to.be("");
            expect(data.taskId).to.be.a('number');
            expect(data.taskId).to.be(0);

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
