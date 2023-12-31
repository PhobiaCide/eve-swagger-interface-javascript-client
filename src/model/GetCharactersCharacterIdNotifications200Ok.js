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
    root.EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdNotifications200Ok model module.
   * @module model/GetCharactersCharacterIdNotifications200Ok
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdNotifications200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdNotifications200Ok
   * @class
   * @param notificationId {Number} notification_id integer
   * @param senderId {Number} sender_id integer
   * @param senderType {module:model/GetCharactersCharacterIdNotifications200Ok.SenderTypeEnum} sender_type string
   * @param timestamp {Date} timestamp string
   * @param type {module:model/GetCharactersCharacterIdNotifications200Ok.TypeEnum} type string
   */
  var exports = function(notificationId, senderId, senderType, timestamp, type) {
    this.notificationId = notificationId;
    this.senderId = senderId;
    this.senderType = senderType;
    this.timestamp = timestamp;
    this.type = type;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdNotifications200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdNotifications200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdNotifications200Ok} The populated <code>GetCharactersCharacterIdNotifications200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('is_read'))
        obj.isRead = ApiClient.convertToType(data['is_read'], 'Boolean');
      if (data.hasOwnProperty('notification_id'))
        obj.notificationId = ApiClient.convertToType(data['notification_id'], 'Number');
      if (data.hasOwnProperty('sender_id'))
        obj.senderId = ApiClient.convertToType(data['sender_id'], 'Number');
      if (data.hasOwnProperty('sender_type'))
        obj.senderType = ApiClient.convertToType(data['sender_type'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Date');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * is_read boolean
   * @member {Boolean} isRead
   */
  exports.prototype.isRead = undefined;

  /**
   * notification_id integer
   * @member {Number} notificationId
   */
  exports.prototype.notificationId = undefined;

  /**
   * sender_id integer
   * @member {Number} senderId
   */
  exports.prototype.senderId = undefined;

  /**
   * sender_type string
   * @member {module:model/GetCharactersCharacterIdNotifications200Ok.SenderTypeEnum} senderType
   */
  exports.prototype.senderType = undefined;

  /**
   * text string
   * @member {String} text
   */
  exports.prototype.text = undefined;

  /**
   * timestamp string
   * @member {Date} timestamp
   */
  exports.prototype.timestamp = undefined;

  /**
   * type string
   * @member {module:model/GetCharactersCharacterIdNotifications200Ok.TypeEnum} type
   */
  exports.prototype.type = undefined;



  /**
   * Allowed values for the <code>senderType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SenderTypeEnum = {
    /**
     * value: "character"
     * @const
     */
    character: "character",

    /**
     * value: "corporation"
     * @const
     */
    corporation: "corporation",

    /**
     * value: "alliance"
     * @const
     */
    alliance: "alliance",

    /**
     * value: "faction"
     * @const
     */
    faction: "faction",

    /**
     * value: "other"
     * @const
     */
    other: "other"
  };


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "AcceptedAlly"
     * @const
     */
    acceptedAlly: "AcceptedAlly",

    /**
     * value: "AcceptedSurrender"
     * @const
     */
    acceptedSurrender: "AcceptedSurrender",

    /**
     * value: "AgentRetiredTrigravian"
     * @const
     */
    agentRetiredTrigravian: "AgentRetiredTrigravian",

    /**
     * value: "AllAnchoringMsg"
     * @const
     */
    allAnchoringMsg: "AllAnchoringMsg",

    /**
     * value: "AllMaintenanceBillMsg"
     * @const
     */
    allMaintenanceBillMsg: "AllMaintenanceBillMsg",

    /**
     * value: "AllStrucInvulnerableMsg"
     * @const
     */
    allStrucInvulnerableMsg: "AllStrucInvulnerableMsg",

    /**
     * value: "AllStructVulnerableMsg"
     * @const
     */
    allStructVulnerableMsg: "AllStructVulnerableMsg",

    /**
     * value: "AllWarCorpJoinedAllianceMsg"
     * @const
     */
    allWarCorpJoinedAllianceMsg: "AllWarCorpJoinedAllianceMsg",

    /**
     * value: "AllWarDeclaredMsg"
     * @const
     */
    allWarDeclaredMsg: "AllWarDeclaredMsg",

    /**
     * value: "AllWarInvalidatedMsg"
     * @const
     */
    allWarInvalidatedMsg: "AllWarInvalidatedMsg",

    /**
     * value: "AllWarRetractedMsg"
     * @const
     */
    allWarRetractedMsg: "AllWarRetractedMsg",

    /**
     * value: "AllWarSurrenderMsg"
     * @const
     */
    allWarSurrenderMsg: "AllWarSurrenderMsg",

    /**
     * value: "AllianceCapitalChanged"
     * @const
     */
    allianceCapitalChanged: "AllianceCapitalChanged",

    /**
     * value: "AllianceWarDeclaredV2"
     * @const
     */
    allianceWarDeclaredV2: "AllianceWarDeclaredV2",

    /**
     * value: "AllyContractCancelled"
     * @const
     */
    allyContractCancelled: "AllyContractCancelled",

    /**
     * value: "AllyJoinedWarAggressorMsg"
     * @const
     */
    allyJoinedWarAggressorMsg: "AllyJoinedWarAggressorMsg",

    /**
     * value: "AllyJoinedWarAllyMsg"
     * @const
     */
    allyJoinedWarAllyMsg: "AllyJoinedWarAllyMsg",

    /**
     * value: "AllyJoinedWarDefenderMsg"
     * @const
     */
    allyJoinedWarDefenderMsg: "AllyJoinedWarDefenderMsg",

    /**
     * value: "BattlePunishFriendlyFire"
     * @const
     */
    battlePunishFriendlyFire: "BattlePunishFriendlyFire",

    /**
     * value: "BillOutOfMoneyMsg"
     * @const
     */
    billOutOfMoneyMsg: "BillOutOfMoneyMsg",

    /**
     * value: "BillPaidCorpAllMsg"
     * @const
     */
    billPaidCorpAllMsg: "BillPaidCorpAllMsg",

    /**
     * value: "BountyClaimMsg"
     * @const
     */
    bountyClaimMsg: "BountyClaimMsg",

    /**
     * value: "BountyESSShared"
     * @const
     */
    bountyESSShared: "BountyESSShared",

    /**
     * value: "BountyESSTaken"
     * @const
     */
    bountyESSTaken: "BountyESSTaken",

    /**
     * value: "BountyPlacedAlliance"
     * @const
     */
    bountyPlacedAlliance: "BountyPlacedAlliance",

    /**
     * value: "BountyPlacedChar"
     * @const
     */
    bountyPlacedChar: "BountyPlacedChar",

    /**
     * value: "BountyPlacedCorp"
     * @const
     */
    bountyPlacedCorp: "BountyPlacedCorp",

    /**
     * value: "BountyYourBountyClaimed"
     * @const
     */
    bountyYourBountyClaimed: "BountyYourBountyClaimed",

    /**
     * value: "BuddyConnectContactAdd"
     * @const
     */
    buddyConnectContactAdd: "BuddyConnectContactAdd",

    /**
     * value: "CharAppAcceptMsg"
     * @const
     */
    charAppAcceptMsg: "CharAppAcceptMsg",

    /**
     * value: "CharAppRejectMsg"
     * @const
     */
    charAppRejectMsg: "CharAppRejectMsg",

    /**
     * value: "CharAppWithdrawMsg"
     * @const
     */
    charAppWithdrawMsg: "CharAppWithdrawMsg",

    /**
     * value: "CharLeftCorpMsg"
     * @const
     */
    charLeftCorpMsg: "CharLeftCorpMsg",

    /**
     * value: "CharMedalMsg"
     * @const
     */
    charMedalMsg: "CharMedalMsg",

    /**
     * value: "CharTerminationMsg"
     * @const
     */
    charTerminationMsg: "CharTerminationMsg",

    /**
     * value: "CloneActivationMsg"
     * @const
     */
    cloneActivationMsg: "CloneActivationMsg",

    /**
     * value: "CloneActivationMsg2"
     * @const
     */
    cloneActivationMsg2: "CloneActivationMsg2",

    /**
     * value: "CloneMovedMsg"
     * @const
     */
    cloneMovedMsg: "CloneMovedMsg",

    /**
     * value: "CloneRevokedMsg1"
     * @const
     */
    cloneRevokedMsg1: "CloneRevokedMsg1",

    /**
     * value: "CloneRevokedMsg2"
     * @const
     */
    cloneRevokedMsg2: "CloneRevokedMsg2",

    /**
     * value: "CombatOperationFinished"
     * @const
     */
    combatOperationFinished: "CombatOperationFinished",

    /**
     * value: "ContactAdd"
     * @const
     */
    contactAdd: "ContactAdd",

    /**
     * value: "ContactEdit"
     * @const
     */
    contactEdit: "ContactEdit",

    /**
     * value: "ContainerPasswordMsg"
     * @const
     */
    containerPasswordMsg: "ContainerPasswordMsg",

    /**
     * value: "ContractRegionChangedToPochven"
     * @const
     */
    contractRegionChangedToPochven: "ContractRegionChangedToPochven",

    /**
     * value: "CorpAllBillMsg"
     * @const
     */
    corpAllBillMsg: "CorpAllBillMsg",

    /**
     * value: "CorpAppAcceptMsg"
     * @const
     */
    corpAppAcceptMsg: "CorpAppAcceptMsg",

    /**
     * value: "CorpAppInvitedMsg"
     * @const
     */
    corpAppInvitedMsg: "CorpAppInvitedMsg",

    /**
     * value: "CorpAppNewMsg"
     * @const
     */
    corpAppNewMsg: "CorpAppNewMsg",

    /**
     * value: "CorpAppRejectCustomMsg"
     * @const
     */
    corpAppRejectCustomMsg: "CorpAppRejectCustomMsg",

    /**
     * value: "CorpAppRejectMsg"
     * @const
     */
    corpAppRejectMsg: "CorpAppRejectMsg",

    /**
     * value: "CorpBecameWarEligible"
     * @const
     */
    corpBecameWarEligible: "CorpBecameWarEligible",

    /**
     * value: "CorpDividendMsg"
     * @const
     */
    corpDividendMsg: "CorpDividendMsg",

    /**
     * value: "CorpFriendlyFireDisableTimerCompleted"
     * @const
     */
    corpFriendlyFireDisableTimerCompleted: "CorpFriendlyFireDisableTimerCompleted",

    /**
     * value: "CorpFriendlyFireDisableTimerStarted"
     * @const
     */
    corpFriendlyFireDisableTimerStarted: "CorpFriendlyFireDisableTimerStarted",

    /**
     * value: "CorpFriendlyFireEnableTimerCompleted"
     * @const
     */
    corpFriendlyFireEnableTimerCompleted: "CorpFriendlyFireEnableTimerCompleted",

    /**
     * value: "CorpFriendlyFireEnableTimerStarted"
     * @const
     */
    corpFriendlyFireEnableTimerStarted: "CorpFriendlyFireEnableTimerStarted",

    /**
     * value: "CorpKicked"
     * @const
     */
    corpKicked: "CorpKicked",

    /**
     * value: "CorpLiquidationMsg"
     * @const
     */
    corpLiquidationMsg: "CorpLiquidationMsg",

    /**
     * value: "CorpNewCEOMsg"
     * @const
     */
    corpNewCEOMsg: "CorpNewCEOMsg",

    /**
     * value: "CorpNewsMsg"
     * @const
     */
    corpNewsMsg: "CorpNewsMsg",

    /**
     * value: "CorpNoLongerWarEligible"
     * @const
     */
    corpNoLongerWarEligible: "CorpNoLongerWarEligible",

    /**
     * value: "CorpOfficeExpirationMsg"
     * @const
     */
    corpOfficeExpirationMsg: "CorpOfficeExpirationMsg",

    /**
     * value: "CorpStructLostMsg"
     * @const
     */
    corpStructLostMsg: "CorpStructLostMsg",

    /**
     * value: "CorpTaxChangeMsg"
     * @const
     */
    corpTaxChangeMsg: "CorpTaxChangeMsg",

    /**
     * value: "CorpVoteCEORevokedMsg"
     * @const
     */
    corpVoteCEORevokedMsg: "CorpVoteCEORevokedMsg",

    /**
     * value: "CorpVoteMsg"
     * @const
     */
    corpVoteMsg: "CorpVoteMsg",

    /**
     * value: "CorpWarDeclaredMsg"
     * @const
     */
    corpWarDeclaredMsg: "CorpWarDeclaredMsg",

    /**
     * value: "CorpWarDeclaredV2"
     * @const
     */
    corpWarDeclaredV2: "CorpWarDeclaredV2",

    /**
     * value: "CorpWarFightingLegalMsg"
     * @const
     */
    corpWarFightingLegalMsg: "CorpWarFightingLegalMsg",

    /**
     * value: "CorpWarInvalidatedMsg"
     * @const
     */
    corpWarInvalidatedMsg: "CorpWarInvalidatedMsg",

    /**
     * value: "CorpWarRetractedMsg"
     * @const
     */
    corpWarRetractedMsg: "CorpWarRetractedMsg",

    /**
     * value: "CorpWarSurrenderMsg"
     * @const
     */
    corpWarSurrenderMsg: "CorpWarSurrenderMsg",

    /**
     * value: "CorporationGoalClosed"
     * @const
     */
    corporationGoalClosed: "CorporationGoalClosed",

    /**
     * value: "CorporationGoalCompleted"
     * @const
     */
    corporationGoalCompleted: "CorporationGoalCompleted",

    /**
     * value: "CorporationGoalCreated"
     * @const
     */
    corporationGoalCreated: "CorporationGoalCreated",

    /**
     * value: "CustomsMsg"
     * @const
     */
    customsMsg: "CustomsMsg",

    /**
     * value: "DeclareWar"
     * @const
     */
    declareWar: "DeclareWar",

    /**
     * value: "DistrictAttacked"
     * @const
     */
    districtAttacked: "DistrictAttacked",

    /**
     * value: "DustAppAcceptedMsg"
     * @const
     */
    dustAppAcceptedMsg: "DustAppAcceptedMsg",

    /**
     * value: "ESSMainBankLink"
     * @const
     */
    eSSMainBankLink: "ESSMainBankLink",

    /**
     * value: "EntosisCaptureStarted"
     * @const
     */
    entosisCaptureStarted: "EntosisCaptureStarted",

    /**
     * value: "ExpertSystemExpired"
     * @const
     */
    expertSystemExpired: "ExpertSystemExpired",

    /**
     * value: "ExpertSystemExpiryImminent"
     * @const
     */
    expertSystemExpiryImminent: "ExpertSystemExpiryImminent",

    /**
     * value: "FWAllianceKickMsg"
     * @const
     */
    fWAllianceKickMsg: "FWAllianceKickMsg",

    /**
     * value: "FWAllianceWarningMsg"
     * @const
     */
    fWAllianceWarningMsg: "FWAllianceWarningMsg",

    /**
     * value: "FWCharKickMsg"
     * @const
     */
    fWCharKickMsg: "FWCharKickMsg",

    /**
     * value: "FWCharRankGainMsg"
     * @const
     */
    fWCharRankGainMsg: "FWCharRankGainMsg",

    /**
     * value: "FWCharRankLossMsg"
     * @const
     */
    fWCharRankLossMsg: "FWCharRankLossMsg",

    /**
     * value: "FWCharWarningMsg"
     * @const
     */
    fWCharWarningMsg: "FWCharWarningMsg",

    /**
     * value: "FWCorpJoinMsg"
     * @const
     */
    fWCorpJoinMsg: "FWCorpJoinMsg",

    /**
     * value: "FWCorpKickMsg"
     * @const
     */
    fWCorpKickMsg: "FWCorpKickMsg",

    /**
     * value: "FWCorpLeaveMsg"
     * @const
     */
    fWCorpLeaveMsg: "FWCorpLeaveMsg",

    /**
     * value: "FWCorpWarningMsg"
     * @const
     */
    fWCorpWarningMsg: "FWCorpWarningMsg",

    /**
     * value: "FacWarCorpJoinRequestMsg"
     * @const
     */
    facWarCorpJoinRequestMsg: "FacWarCorpJoinRequestMsg",

    /**
     * value: "FacWarCorpJoinWithdrawMsg"
     * @const
     */
    facWarCorpJoinWithdrawMsg: "FacWarCorpJoinWithdrawMsg",

    /**
     * value: "FacWarCorpLeaveRequestMsg"
     * @const
     */
    facWarCorpLeaveRequestMsg: "FacWarCorpLeaveRequestMsg",

    /**
     * value: "FacWarCorpLeaveWithdrawMsg"
     * @const
     */
    facWarCorpLeaveWithdrawMsg: "FacWarCorpLeaveWithdrawMsg",

    /**
     * value: "FacWarLPDisqualifiedEvent"
     * @const
     */
    facWarLPDisqualifiedEvent: "FacWarLPDisqualifiedEvent",

    /**
     * value: "FacWarLPDisqualifiedKill"
     * @const
     */
    facWarLPDisqualifiedKill: "FacWarLPDisqualifiedKill",

    /**
     * value: "FacWarLPPayoutEvent"
     * @const
     */
    facWarLPPayoutEvent: "FacWarLPPayoutEvent",

    /**
     * value: "FacWarLPPayoutKill"
     * @const
     */
    facWarLPPayoutKill: "FacWarLPPayoutKill",

    /**
     * value: "GameTimeAdded"
     * @const
     */
    gameTimeAdded: "GameTimeAdded",

    /**
     * value: "GameTimeReceived"
     * @const
     */
    gameTimeReceived: "GameTimeReceived",

    /**
     * value: "GameTimeSent"
     * @const
     */
    gameTimeSent: "GameTimeSent",

    /**
     * value: "GiftReceived"
     * @const
     */
    giftReceived: "GiftReceived",

    /**
     * value: "IHubDestroyedByBillFailure"
     * @const
     */
    iHubDestroyedByBillFailure: "IHubDestroyedByBillFailure",

    /**
     * value: "IncursionCompletedMsg"
     * @const
     */
    incursionCompletedMsg: "IncursionCompletedMsg",

    /**
     * value: "IndustryOperationFinished"
     * @const
     */
    industryOperationFinished: "IndustryOperationFinished",

    /**
     * value: "IndustryTeamAuctionLost"
     * @const
     */
    industryTeamAuctionLost: "IndustryTeamAuctionLost",

    /**
     * value: "IndustryTeamAuctionWon"
     * @const
     */
    industryTeamAuctionWon: "IndustryTeamAuctionWon",

    /**
     * value: "InfrastructureHubBillAboutToExpire"
     * @const
     */
    infrastructureHubBillAboutToExpire: "InfrastructureHubBillAboutToExpire",

    /**
     * value: "InsuranceExpirationMsg"
     * @const
     */
    insuranceExpirationMsg: "InsuranceExpirationMsg",

    /**
     * value: "InsuranceFirstShipMsg"
     * @const
     */
    insuranceFirstShipMsg: "InsuranceFirstShipMsg",

    /**
     * value: "InsuranceInvalidatedMsg"
     * @const
     */
    insuranceInvalidatedMsg: "InsuranceInvalidatedMsg",

    /**
     * value: "InsuranceIssuedMsg"
     * @const
     */
    insuranceIssuedMsg: "InsuranceIssuedMsg",

    /**
     * value: "InsurancePayoutMsg"
     * @const
     */
    insurancePayoutMsg: "InsurancePayoutMsg",

    /**
     * value: "InvasionCompletedMsg"
     * @const
     */
    invasionCompletedMsg: "InvasionCompletedMsg",

    /**
     * value: "InvasionSystemLogin"
     * @const
     */
    invasionSystemLogin: "InvasionSystemLogin",

    /**
     * value: "InvasionSystemStart"
     * @const
     */
    invasionSystemStart: "InvasionSystemStart",

    /**
     * value: "JumpCloneDeletedMsg1"
     * @const
     */
    jumpCloneDeletedMsg1: "JumpCloneDeletedMsg1",

    /**
     * value: "JumpCloneDeletedMsg2"
     * @const
     */
    jumpCloneDeletedMsg2: "JumpCloneDeletedMsg2",

    /**
     * value: "KillReportFinalBlow"
     * @const
     */
    killReportFinalBlow: "KillReportFinalBlow",

    /**
     * value: "KillReportVictim"
     * @const
     */
    killReportVictim: "KillReportVictim",

    /**
     * value: "KillRightAvailable"
     * @const
     */
    killRightAvailable: "KillRightAvailable",

    /**
     * value: "KillRightAvailableOpen"
     * @const
     */
    killRightAvailableOpen: "KillRightAvailableOpen",

    /**
     * value: "KillRightEarned"
     * @const
     */
    killRightEarned: "KillRightEarned",

    /**
     * value: "KillRightUnavailable"
     * @const
     */
    killRightUnavailable: "KillRightUnavailable",

    /**
     * value: "KillRightUnavailableOpen"
     * @const
     */
    killRightUnavailableOpen: "KillRightUnavailableOpen",

    /**
     * value: "KillRightUsed"
     * @const
     */
    killRightUsed: "KillRightUsed",

    /**
     * value: "LocateCharMsg"
     * @const
     */
    locateCharMsg: "LocateCharMsg",

    /**
     * value: "MadeWarMutual"
     * @const
     */
    madeWarMutual: "MadeWarMutual",

    /**
     * value: "MercOfferRetractedMsg"
     * @const
     */
    mercOfferRetractedMsg: "MercOfferRetractedMsg",

    /**
     * value: "MercOfferedNegotiationMsg"
     * @const
     */
    mercOfferedNegotiationMsg: "MercOfferedNegotiationMsg",

    /**
     * value: "MissionCanceledTriglavian"
     * @const
     */
    missionCanceledTriglavian: "MissionCanceledTriglavian",

    /**
     * value: "MissionOfferExpirationMsg"
     * @const
     */
    missionOfferExpirationMsg: "MissionOfferExpirationMsg",

    /**
     * value: "MissionTimeoutMsg"
     * @const
     */
    missionTimeoutMsg: "MissionTimeoutMsg",

    /**
     * value: "MoonminingAutomaticFracture"
     * @const
     */
    moonminingAutomaticFracture: "MoonminingAutomaticFracture",

    /**
     * value: "MoonminingExtractionCancelled"
     * @const
     */
    moonminingExtractionCancelled: "MoonminingExtractionCancelled",

    /**
     * value: "MoonminingExtractionFinished"
     * @const
     */
    moonminingExtractionFinished: "MoonminingExtractionFinished",

    /**
     * value: "MoonminingExtractionStarted"
     * @const
     */
    moonminingExtractionStarted: "MoonminingExtractionStarted",

    /**
     * value: "MoonminingLaserFired"
     * @const
     */
    moonminingLaserFired: "MoonminingLaserFired",

    /**
     * value: "MutualWarExpired"
     * @const
     */
    mutualWarExpired: "MutualWarExpired",

    /**
     * value: "MutualWarInviteAccepted"
     * @const
     */
    mutualWarInviteAccepted: "MutualWarInviteAccepted",

    /**
     * value: "MutualWarInviteRejected"
     * @const
     */
    mutualWarInviteRejected: "MutualWarInviteRejected",

    /**
     * value: "MutualWarInviteSent"
     * @const
     */
    mutualWarInviteSent: "MutualWarInviteSent",

    /**
     * value: "NPCStandingsGained"
     * @const
     */
    nPCStandingsGained: "NPCStandingsGained",

    /**
     * value: "NPCStandingsLost"
     * @const
     */
    nPCStandingsLost: "NPCStandingsLost",

    /**
     * value: "OfferToAllyRetracted"
     * @const
     */
    offerToAllyRetracted: "OfferToAllyRetracted",

    /**
     * value: "OfferedSurrender"
     * @const
     */
    offeredSurrender: "OfferedSurrender",

    /**
     * value: "OfferedToAlly"
     * @const
     */
    offeredToAlly: "OfferedToAlly",

    /**
     * value: "OfficeLeaseCanceledInsufficientStandings"
     * @const
     */
    officeLeaseCanceledInsufficientStandings: "OfficeLeaseCanceledInsufficientStandings",

    /**
     * value: "OldLscMessages"
     * @const
     */
    oldLscMessages: "OldLscMessages",

    /**
     * value: "OperationFinished"
     * @const
     */
    operationFinished: "OperationFinished",

    /**
     * value: "OrbitalAttacked"
     * @const
     */
    orbitalAttacked: "OrbitalAttacked",

    /**
     * value: "OrbitalReinforced"
     * @const
     */
    orbitalReinforced: "OrbitalReinforced",

    /**
     * value: "OwnershipTransferred"
     * @const
     */
    ownershipTransferred: "OwnershipTransferred",

    /**
     * value: "RaffleCreated"
     * @const
     */
    raffleCreated: "RaffleCreated",

    /**
     * value: "RaffleExpired"
     * @const
     */
    raffleExpired: "RaffleExpired",

    /**
     * value: "RaffleFinished"
     * @const
     */
    raffleFinished: "RaffleFinished",

    /**
     * value: "ReimbursementMsg"
     * @const
     */
    reimbursementMsg: "ReimbursementMsg",

    /**
     * value: "ResearchMissionAvailableMsg"
     * @const
     */
    researchMissionAvailableMsg: "ResearchMissionAvailableMsg",

    /**
     * value: "RetractsWar"
     * @const
     */
    retractsWar: "RetractsWar",

    /**
     * value: "SeasonalChallengeCompleted"
     * @const
     */
    seasonalChallengeCompleted: "SeasonalChallengeCompleted",

    /**
     * value: "SovAllClaimAquiredMsg"
     * @const
     */
    sovAllClaimAquiredMsg: "SovAllClaimAquiredMsg",

    /**
     * value: "SovAllClaimLostMsg"
     * @const
     */
    sovAllClaimLostMsg: "SovAllClaimLostMsg",

    /**
     * value: "SovCommandNodeEventStarted"
     * @const
     */
    sovCommandNodeEventStarted: "SovCommandNodeEventStarted",

    /**
     * value: "SovCorpBillLateMsg"
     * @const
     */
    sovCorpBillLateMsg: "SovCorpBillLateMsg",

    /**
     * value: "SovCorpClaimFailMsg"
     * @const
     */
    sovCorpClaimFailMsg: "SovCorpClaimFailMsg",

    /**
     * value: "SovDisruptorMsg"
     * @const
     */
    sovDisruptorMsg: "SovDisruptorMsg",

    /**
     * value: "SovStationEnteredFreeport"
     * @const
     */
    sovStationEnteredFreeport: "SovStationEnteredFreeport",

    /**
     * value: "SovStructureDestroyed"
     * @const
     */
    sovStructureDestroyed: "SovStructureDestroyed",

    /**
     * value: "SovStructureReinforced"
     * @const
     */
    sovStructureReinforced: "SovStructureReinforced",

    /**
     * value: "SovStructureSelfDestructCancel"
     * @const
     */
    sovStructureSelfDestructCancel: "SovStructureSelfDestructCancel",

    /**
     * value: "SovStructureSelfDestructFinished"
     * @const
     */
    sovStructureSelfDestructFinished: "SovStructureSelfDestructFinished",

    /**
     * value: "SovStructureSelfDestructRequested"
     * @const
     */
    sovStructureSelfDestructRequested: "SovStructureSelfDestructRequested",

    /**
     * value: "SovereigntyIHDamageMsg"
     * @const
     */
    sovereigntyIHDamageMsg: "SovereigntyIHDamageMsg",

    /**
     * value: "SovereigntySBUDamageMsg"
     * @const
     */
    sovereigntySBUDamageMsg: "SovereigntySBUDamageMsg",

    /**
     * value: "SovereigntyTCUDamageMsg"
     * @const
     */
    sovereigntyTCUDamageMsg: "SovereigntyTCUDamageMsg",

    /**
     * value: "StationAggressionMsg1"
     * @const
     */
    stationAggressionMsg1: "StationAggressionMsg1",

    /**
     * value: "StationAggressionMsg2"
     * @const
     */
    stationAggressionMsg2: "StationAggressionMsg2",

    /**
     * value: "StationConquerMsg"
     * @const
     */
    stationConquerMsg: "StationConquerMsg",

    /**
     * value: "StationServiceDisabled"
     * @const
     */
    stationServiceDisabled: "StationServiceDisabled",

    /**
     * value: "StationServiceEnabled"
     * @const
     */
    stationServiceEnabled: "StationServiceEnabled",

    /**
     * value: "StationStateChangeMsg"
     * @const
     */
    stationStateChangeMsg: "StationStateChangeMsg",

    /**
     * value: "StoryLineMissionAvailableMsg"
     * @const
     */
    storyLineMissionAvailableMsg: "StoryLineMissionAvailableMsg",

    /**
     * value: "StructureAnchoring"
     * @const
     */
    structureAnchoring: "StructureAnchoring",

    /**
     * value: "StructureCourierContractChanged"
     * @const
     */
    structureCourierContractChanged: "StructureCourierContractChanged",

    /**
     * value: "StructureDestroyed"
     * @const
     */
    structureDestroyed: "StructureDestroyed",

    /**
     * value: "StructureFuelAlert"
     * @const
     */
    structureFuelAlert: "StructureFuelAlert",

    /**
     * value: "StructureImpendingAbandonmentAssetsAtRisk"
     * @const
     */
    structureImpendingAbandonmentAssetsAtRisk: "StructureImpendingAbandonmentAssetsAtRisk",

    /**
     * value: "StructureItemsDelivered"
     * @const
     */
    structureItemsDelivered: "StructureItemsDelivered",

    /**
     * value: "StructureItemsMovedToSafety"
     * @const
     */
    structureItemsMovedToSafety: "StructureItemsMovedToSafety",

    /**
     * value: "StructureLostArmor"
     * @const
     */
    structureLostArmor: "StructureLostArmor",

    /**
     * value: "StructureLostShields"
     * @const
     */
    structureLostShields: "StructureLostShields",

    /**
     * value: "StructureOnline"
     * @const
     */
    structureOnline: "StructureOnline",

    /**
     * value: "StructurePaintPurchased"
     * @const
     */
    structurePaintPurchased: "StructurePaintPurchased",

    /**
     * value: "StructureServicesOffline"
     * @const
     */
    structureServicesOffline: "StructureServicesOffline",

    /**
     * value: "StructureUnanchoring"
     * @const
     */
    structureUnanchoring: "StructureUnanchoring",

    /**
     * value: "StructureUnderAttack"
     * @const
     */
    structureUnderAttack: "StructureUnderAttack",

    /**
     * value: "StructureWentHighPower"
     * @const
     */
    structureWentHighPower: "StructureWentHighPower",

    /**
     * value: "StructureWentLowPower"
     * @const
     */
    structureWentLowPower: "StructureWentLowPower",

    /**
     * value: "StructuresJobsCancelled"
     * @const
     */
    structuresJobsCancelled: "StructuresJobsCancelled",

    /**
     * value: "StructuresJobsPaused"
     * @const
     */
    structuresJobsPaused: "StructuresJobsPaused",

    /**
     * value: "StructuresReinforcementChanged"
     * @const
     */
    structuresReinforcementChanged: "StructuresReinforcementChanged",

    /**
     * value: "TowerAlertMsg"
     * @const
     */
    towerAlertMsg: "TowerAlertMsg",

    /**
     * value: "TowerResourceAlertMsg"
     * @const
     */
    towerResourceAlertMsg: "TowerResourceAlertMsg",

    /**
     * value: "TransactionReversalMsg"
     * @const
     */
    transactionReversalMsg: "TransactionReversalMsg",

    /**
     * value: "TutorialMsg"
     * @const
     */
    tutorialMsg: "TutorialMsg",

    /**
     * value: "WarAdopted "
     * @const
     */
    warAdopted_: "WarAdopted ",

    /**
     * value: "WarAllyInherited"
     * @const
     */
    warAllyInherited: "WarAllyInherited",

    /**
     * value: "WarAllyOfferDeclinedMsg"
     * @const
     */
    warAllyOfferDeclinedMsg: "WarAllyOfferDeclinedMsg",

    /**
     * value: "WarConcordInvalidates"
     * @const
     */
    warConcordInvalidates: "WarConcordInvalidates",

    /**
     * value: "WarDeclared"
     * @const
     */
    warDeclared: "WarDeclared",

    /**
     * value: "WarEndedHqSecurityDrop"
     * @const
     */
    warEndedHqSecurityDrop: "WarEndedHqSecurityDrop",

    /**
     * value: "WarHQRemovedFromSpace"
     * @const
     */
    warHQRemovedFromSpace: "WarHQRemovedFromSpace",

    /**
     * value: "WarInherited"
     * @const
     */
    warInherited: "WarInherited",

    /**
     * value: "WarInvalid"
     * @const
     */
    warInvalid: "WarInvalid",

    /**
     * value: "WarRetracted"
     * @const
     */
    warRetracted: "WarRetracted",

    /**
     * value: "WarRetractedByConcord"
     * @const
     */
    warRetractedByConcord: "WarRetractedByConcord",

    /**
     * value: "WarSurrenderDeclinedMsg"
     * @const
     */
    warSurrenderDeclinedMsg: "WarSurrenderDeclinedMsg",

    /**
     * value: "WarSurrenderOfferMsg"
     * @const
     */
    warSurrenderOfferMsg: "WarSurrenderOfferMsg"
  };

  return exports;

}));
