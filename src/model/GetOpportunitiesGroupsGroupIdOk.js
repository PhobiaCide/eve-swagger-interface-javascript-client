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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetOpportunitiesGroupsGroupIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetOpportunitiesGroupsGroupIdOk model module.
   * @module model/GetOpportunitiesGroupsGroupIdOk
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetOpportunitiesGroupsGroupIdOk</code>.
   * 200 ok object
   * @alias module:model/GetOpportunitiesGroupsGroupIdOk
   * @class
   * @param connectedGroups {Array.<Number>} The groups that are connected to this group on the opportunities map
   * @param description {String} description string
   * @param groupId {Number} group_id integer
   * @param name {String} name string
   * @param notification {String} notification string
   * @param requiredTasks {Array.<Number>} Tasks need to complete for this group
   */
  var exports = function(connectedGroups, description, groupId, name, notification, requiredTasks) {
    this.connectedGroups = connectedGroups;
    this.description = description;
    this.groupId = groupId;
    this.name = name;
    this.notification = notification;
    this.requiredTasks = requiredTasks;
  };

  /**
   * Constructs a <code>GetOpportunitiesGroupsGroupIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetOpportunitiesGroupsGroupIdOk} obj Optional instance to populate.
   * @return {module:model/GetOpportunitiesGroupsGroupIdOk} The populated <code>GetOpportunitiesGroupsGroupIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('connected_groups'))
        obj.connectedGroups = ApiClient.convertToType(data['connected_groups'], ['Number']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('group_id'))
        obj.groupId = ApiClient.convertToType(data['group_id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('notification'))
        obj.notification = ApiClient.convertToType(data['notification'], 'String');
      if (data.hasOwnProperty('required_tasks'))
        obj.requiredTasks = ApiClient.convertToType(data['required_tasks'], ['Number']);
    }
    return obj;
  }

  /**
   * The groups that are connected to this group on the opportunities map
   * @member {Array.<Number>} connectedGroups
   */
  exports.prototype.connectedGroups = undefined;

  /**
   * description string
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * group_id integer
   * @member {Number} groupId
   */
  exports.prototype.groupId = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * notification string
   * @member {String} notification
   */
  exports.prototype.notification = undefined;

  /**
   * Tasks need to complete for this group
   * @member {Array.<Number>} requiredTasks
   */
  exports.prototype.requiredTasks = undefined;


  return exports;

}));
