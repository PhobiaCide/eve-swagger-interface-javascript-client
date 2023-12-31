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
    root.EveSwaggerInterface.GetCharactersCharacterIdWalletJournal200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdWalletJournal200Ok model module.
   * @module model/GetCharactersCharacterIdWalletJournal200Ok
   * @version 1.19
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdWalletJournal200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdWalletJournal200Ok
   * @class
   * @param _date {Date} Date and time of transaction
   * @param description {String} The reason for the transaction, mirrors what is seen in the client
   * @param id {Number} Unique journal reference ID
   * @param refType {module:model/GetCharactersCharacterIdWalletJournal200Ok.RefTypeEnum} \"The transaction type for the given. transaction. Different transaction types will populate different attributes.\"
   */
  var exports = function(_date, description, id, refType) {
    this._date = _date;
    this.description = description;
    this.id = id;
    this.refType = refType;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdWalletJournal200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdWalletJournal200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdWalletJournal200Ok} The populated <code>GetCharactersCharacterIdWalletJournal200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('balance'))
        obj.balance = ApiClient.convertToType(data['balance'], 'Number');
      if (data.hasOwnProperty('context_id'))
        obj.contextId = ApiClient.convertToType(data['context_id'], 'Number');
      if (data.hasOwnProperty('context_id_type'))
        obj.contextIdType = ApiClient.convertToType(data['context_id_type'], 'String');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('first_party_id'))
        obj.firstPartyId = ApiClient.convertToType(data['first_party_id'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('ref_type'))
        obj.refType = ApiClient.convertToType(data['ref_type'], 'String');
      if (data.hasOwnProperty('second_party_id'))
        obj.secondPartyId = ApiClient.convertToType(data['second_party_id'], 'Number');
      if (data.hasOwnProperty('tax'))
        obj.tax = ApiClient.convertToType(data['tax'], 'Number');
      if (data.hasOwnProperty('tax_receiver_id'))
        obj.taxReceiverId = ApiClient.convertToType(data['tax_receiver_id'], 'Number');
    }
    return obj;
  }

  /**
   * The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * Wallet balance after transaction occurred
   * @member {Number} balance
   */
  exports.prototype.balance = undefined;

  /**
   * An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id
   * @member {Number} contextId
   */
  exports.prototype.contextId = undefined;

  /**
   * The type of the given context_id if present
   * @member {module:model/GetCharactersCharacterIdWalletJournal200Ok.ContextIdTypeEnum} contextIdType
   */
  exports.prototype.contextIdType = undefined;

  /**
   * Date and time of transaction
   * @member {Date} _date
   */
  exports.prototype._date = undefined;

  /**
   * The reason for the transaction, mirrors what is seen in the client
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
   * @member {Number} firstPartyId
   */
  exports.prototype.firstPartyId = undefined;

  /**
   * Unique journal reference ID
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * The user stated reason for the transaction. Only applies to some ref_types
   * @member {String} reason
   */
  exports.prototype.reason = undefined;

  /**
   * \"The transaction type for the given. transaction. Different transaction types will populate different attributes.\"
   * @member {module:model/GetCharactersCharacterIdWalletJournal200Ok.RefTypeEnum} refType
   */
  exports.prototype.refType = undefined;

  /**
   * The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
   * @member {Number} secondPartyId
   */
  exports.prototype.secondPartyId = undefined;

  /**
   * Tax amount received. Only applies to tax related transactions
   * @member {Number} tax
   */
  exports.prototype.tax = undefined;

  /**
   * The corporation ID receiving any tax paid. Only applies to tax related transactions
   * @member {Number} taxReceiverId
   */
  exports.prototype.taxReceiverId = undefined;



  /**
   * Allowed values for the <code>contextIdType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ContextIdTypeEnum = {
    /**
     * value: "structure_id"
     * @const
     */
    structureId: "structure_id",

    /**
     * value: "station_id"
     * @const
     */
    stationId: "station_id",

    /**
     * value: "market_transaction_id"
     * @const
     */
    marketTransactionId: "market_transaction_id",

    /**
     * value: "character_id"
     * @const
     */
    characterId: "character_id",

    /**
     * value: "corporation_id"
     * @const
     */
    corporationId: "corporation_id",

    /**
     * value: "alliance_id"
     * @const
     */
    allianceId: "alliance_id",

    /**
     * value: "eve_system"
     * @const
     */
    eveSystem: "eve_system",

    /**
     * value: "industry_job_id"
     * @const
     */
    industryJobId: "industry_job_id",

    /**
     * value: "contract_id"
     * @const
     */
    contractId: "contract_id",

    /**
     * value: "planet_id"
     * @const
     */
    planetId: "planet_id",

    /**
     * value: "system_id"
     * @const
     */
    systemId: "system_id",

    /**
     * value: "type_id"
     * @const
     */
    typeId: "type_id"
  };


  /**
   * Allowed values for the <code>refType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RefTypeEnum = {
    /**
     * value: "acceleration_gate_fee"
     * @const
     */
    accelerationGateFee: "acceleration_gate_fee",

    /**
     * value: "advertisement_listing_fee"
     * @const
     */
    advertisementListingFee: "advertisement_listing_fee",

    /**
     * value: "agent_donation"
     * @const
     */
    agentDonation: "agent_donation",

    /**
     * value: "agent_location_services"
     * @const
     */
    agentLocationServices: "agent_location_services",

    /**
     * value: "agent_miscellaneous"
     * @const
     */
    agentMiscellaneous: "agent_miscellaneous",

    /**
     * value: "agent_mission_collateral_paid"
     * @const
     */
    agentMissionCollateralPaid: "agent_mission_collateral_paid",

    /**
     * value: "agent_mission_collateral_refunded"
     * @const
     */
    agentMissionCollateralRefunded: "agent_mission_collateral_refunded",

    /**
     * value: "agent_mission_reward"
     * @const
     */
    agentMissionReward: "agent_mission_reward",

    /**
     * value: "agent_mission_reward_corporation_tax"
     * @const
     */
    agentMissionRewardCorporationTax: "agent_mission_reward_corporation_tax",

    /**
     * value: "agent_mission_time_bonus_reward"
     * @const
     */
    agentMissionTimeBonusReward: "agent_mission_time_bonus_reward",

    /**
     * value: "agent_mission_time_bonus_reward_corporation_tax"
     * @const
     */
    agentMissionTimeBonusRewardCorporationTax: "agent_mission_time_bonus_reward_corporation_tax",

    /**
     * value: "agent_security_services"
     * @const
     */
    agentSecurityServices: "agent_security_services",

    /**
     * value: "agent_services_rendered"
     * @const
     */
    agentServicesRendered: "agent_services_rendered",

    /**
     * value: "agents_preward"
     * @const
     */
    agentsPreward: "agents_preward",

    /**
     * value: "alliance_maintainance_fee"
     * @const
     */
    allianceMaintainanceFee: "alliance_maintainance_fee",

    /**
     * value: "alliance_registration_fee"
     * @const
     */
    allianceRegistrationFee: "alliance_registration_fee",

    /**
     * value: "asset_safety_recovery_tax"
     * @const
     */
    assetSafetyRecoveryTax: "asset_safety_recovery_tax",

    /**
     * value: "bounty"
     * @const
     */
    bounty: "bounty",

    /**
     * value: "bounty_prize"
     * @const
     */
    bountyPrize: "bounty_prize",

    /**
     * value: "bounty_prize_corporation_tax"
     * @const
     */
    bountyPrizeCorporationTax: "bounty_prize_corporation_tax",

    /**
     * value: "bounty_prizes"
     * @const
     */
    bountyPrizes: "bounty_prizes",

    /**
     * value: "bounty_reimbursement"
     * @const
     */
    bountyReimbursement: "bounty_reimbursement",

    /**
     * value: "bounty_surcharge"
     * @const
     */
    bountySurcharge: "bounty_surcharge",

    /**
     * value: "brokers_fee"
     * @const
     */
    brokersFee: "brokers_fee",

    /**
     * value: "clone_activation"
     * @const
     */
    cloneActivation: "clone_activation",

    /**
     * value: "clone_transfer"
     * @const
     */
    cloneTransfer: "clone_transfer",

    /**
     * value: "contraband_fine"
     * @const
     */
    contrabandFine: "contraband_fine",

    /**
     * value: "contract_auction_bid"
     * @const
     */
    contractAuctionBid: "contract_auction_bid",

    /**
     * value: "contract_auction_bid_corp"
     * @const
     */
    contractAuctionBidCorp: "contract_auction_bid_corp",

    /**
     * value: "contract_auction_bid_refund"
     * @const
     */
    contractAuctionBidRefund: "contract_auction_bid_refund",

    /**
     * value: "contract_auction_sold"
     * @const
     */
    contractAuctionSold: "contract_auction_sold",

    /**
     * value: "contract_brokers_fee"
     * @const
     */
    contractBrokersFee: "contract_brokers_fee",

    /**
     * value: "contract_brokers_fee_corp"
     * @const
     */
    contractBrokersFeeCorp: "contract_brokers_fee_corp",

    /**
     * value: "contract_collateral"
     * @const
     */
    contractCollateral: "contract_collateral",

    /**
     * value: "contract_collateral_deposited_corp"
     * @const
     */
    contractCollateralDepositedCorp: "contract_collateral_deposited_corp",

    /**
     * value: "contract_collateral_payout"
     * @const
     */
    contractCollateralPayout: "contract_collateral_payout",

    /**
     * value: "contract_collateral_refund"
     * @const
     */
    contractCollateralRefund: "contract_collateral_refund",

    /**
     * value: "contract_deposit"
     * @const
     */
    contractDeposit: "contract_deposit",

    /**
     * value: "contract_deposit_corp"
     * @const
     */
    contractDepositCorp: "contract_deposit_corp",

    /**
     * value: "contract_deposit_refund"
     * @const
     */
    contractDepositRefund: "contract_deposit_refund",

    /**
     * value: "contract_deposit_sales_tax"
     * @const
     */
    contractDepositSalesTax: "contract_deposit_sales_tax",

    /**
     * value: "contract_price"
     * @const
     */
    contractPrice: "contract_price",

    /**
     * value: "contract_price_payment_corp"
     * @const
     */
    contractPricePaymentCorp: "contract_price_payment_corp",

    /**
     * value: "contract_reversal"
     * @const
     */
    contractReversal: "contract_reversal",

    /**
     * value: "contract_reward"
     * @const
     */
    contractReward: "contract_reward",

    /**
     * value: "contract_reward_deposited"
     * @const
     */
    contractRewardDeposited: "contract_reward_deposited",

    /**
     * value: "contract_reward_deposited_corp"
     * @const
     */
    contractRewardDepositedCorp: "contract_reward_deposited_corp",

    /**
     * value: "contract_reward_refund"
     * @const
     */
    contractRewardRefund: "contract_reward_refund",

    /**
     * value: "contract_sales_tax"
     * @const
     */
    contractSalesTax: "contract_sales_tax",

    /**
     * value: "copying"
     * @const
     */
    copying: "copying",

    /**
     * value: "corporate_reward_payout"
     * @const
     */
    corporateRewardPayout: "corporate_reward_payout",

    /**
     * value: "corporate_reward_tax"
     * @const
     */
    corporateRewardTax: "corporate_reward_tax",

    /**
     * value: "corporation_account_withdrawal"
     * @const
     */
    corporationAccountWithdrawal: "corporation_account_withdrawal",

    /**
     * value: "corporation_bulk_payment"
     * @const
     */
    corporationBulkPayment: "corporation_bulk_payment",

    /**
     * value: "corporation_dividend_payment"
     * @const
     */
    corporationDividendPayment: "corporation_dividend_payment",

    /**
     * value: "corporation_liquidation"
     * @const
     */
    corporationLiquidation: "corporation_liquidation",

    /**
     * value: "corporation_logo_change_cost"
     * @const
     */
    corporationLogoChangeCost: "corporation_logo_change_cost",

    /**
     * value: "corporation_payment"
     * @const
     */
    corporationPayment: "corporation_payment",

    /**
     * value: "corporation_registration_fee"
     * @const
     */
    corporationRegistrationFee: "corporation_registration_fee",

    /**
     * value: "courier_mission_escrow"
     * @const
     */
    courierMissionEscrow: "courier_mission_escrow",

    /**
     * value: "cspa"
     * @const
     */
    cspa: "cspa",

    /**
     * value: "cspaofflinerefund"
     * @const
     */
    cspaofflinerefund: "cspaofflinerefund",

    /**
     * value: "daily_challenge_reward"
     * @const
     */
    dailyChallengeReward: "daily_challenge_reward",

    /**
     * value: "datacore_fee"
     * @const
     */
    datacoreFee: "datacore_fee",

    /**
     * value: "dna_modification_fee"
     * @const
     */
    dnaModificationFee: "dna_modification_fee",

    /**
     * value: "docking_fee"
     * @const
     */
    dockingFee: "docking_fee",

    /**
     * value: "duel_wager_escrow"
     * @const
     */
    duelWagerEscrow: "duel_wager_escrow",

    /**
     * value: "duel_wager_payment"
     * @const
     */
    duelWagerPayment: "duel_wager_payment",

    /**
     * value: "duel_wager_refund"
     * @const
     */
    duelWagerRefund: "duel_wager_refund",

    /**
     * value: "ess_escrow_transfer"
     * @const
     */
    essEscrowTransfer: "ess_escrow_transfer",

    /**
     * value: "external_trade_delivery"
     * @const
     */
    externalTradeDelivery: "external_trade_delivery",

    /**
     * value: "external_trade_freeze"
     * @const
     */
    externalTradeFreeze: "external_trade_freeze",

    /**
     * value: "external_trade_thaw"
     * @const
     */
    externalTradeThaw: "external_trade_thaw",

    /**
     * value: "factory_slot_rental_fee"
     * @const
     */
    factorySlotRentalFee: "factory_slot_rental_fee",

    /**
     * value: "flux_payout"
     * @const
     */
    fluxPayout: "flux_payout",

    /**
     * value: "flux_tax"
     * @const
     */
    fluxTax: "flux_tax",

    /**
     * value: "flux_ticket_repayment"
     * @const
     */
    fluxTicketRepayment: "flux_ticket_repayment",

    /**
     * value: "flux_ticket_sale"
     * @const
     */
    fluxTicketSale: "flux_ticket_sale",

    /**
     * value: "gm_cash_transfer"
     * @const
     */
    gmCashTransfer: "gm_cash_transfer",

    /**
     * value: "industry_job_tax"
     * @const
     */
    industryJobTax: "industry_job_tax",

    /**
     * value: "infrastructure_hub_maintenance"
     * @const
     */
    infrastructureHubMaintenance: "infrastructure_hub_maintenance",

    /**
     * value: "inheritance"
     * @const
     */
    inheritance: "inheritance",

    /**
     * value: "insurance"
     * @const
     */
    insurance: "insurance",

    /**
     * value: "item_trader_payment"
     * @const
     */
    itemTraderPayment: "item_trader_payment",

    /**
     * value: "jump_clone_activation_fee"
     * @const
     */
    jumpCloneActivationFee: "jump_clone_activation_fee",

    /**
     * value: "jump_clone_installation_fee"
     * @const
     */
    jumpCloneInstallationFee: "jump_clone_installation_fee",

    /**
     * value: "kill_right_fee"
     * @const
     */
    killRightFee: "kill_right_fee",

    /**
     * value: "lp_store"
     * @const
     */
    lpStore: "lp_store",

    /**
     * value: "manufacturing"
     * @const
     */
    manufacturing: "manufacturing",

    /**
     * value: "market_escrow"
     * @const
     */
    marketEscrow: "market_escrow",

    /**
     * value: "market_fine_paid"
     * @const
     */
    marketFinePaid: "market_fine_paid",

    /**
     * value: "market_provider_tax"
     * @const
     */
    marketProviderTax: "market_provider_tax",

    /**
     * value: "market_transaction"
     * @const
     */
    marketTransaction: "market_transaction",

    /**
     * value: "medal_creation"
     * @const
     */
    medalCreation: "medal_creation",

    /**
     * value: "medal_issued"
     * @const
     */
    medalIssued: "medal_issued",

    /**
     * value: "milestone_reward_payment"
     * @const
     */
    milestoneRewardPayment: "milestone_reward_payment",

    /**
     * value: "mission_completion"
     * @const
     */
    missionCompletion: "mission_completion",

    /**
     * value: "mission_cost"
     * @const
     */
    missionCost: "mission_cost",

    /**
     * value: "mission_expiration"
     * @const
     */
    missionExpiration: "mission_expiration",

    /**
     * value: "mission_reward"
     * @const
     */
    missionReward: "mission_reward",

    /**
     * value: "office_rental_fee"
     * @const
     */
    officeRentalFee: "office_rental_fee",

    /**
     * value: "operation_bonus"
     * @const
     */
    operationBonus: "operation_bonus",

    /**
     * value: "opportunity_reward"
     * @const
     */
    opportunityReward: "opportunity_reward",

    /**
     * value: "planetary_construction"
     * @const
     */
    planetaryConstruction: "planetary_construction",

    /**
     * value: "planetary_export_tax"
     * @const
     */
    planetaryExportTax: "planetary_export_tax",

    /**
     * value: "planetary_import_tax"
     * @const
     */
    planetaryImportTax: "planetary_import_tax",

    /**
     * value: "player_donation"
     * @const
     */
    playerDonation: "player_donation",

    /**
     * value: "player_trading"
     * @const
     */
    playerTrading: "player_trading",

    /**
     * value: "project_discovery_reward"
     * @const
     */
    projectDiscoveryReward: "project_discovery_reward",

    /**
     * value: "project_discovery_tax"
     * @const
     */
    projectDiscoveryTax: "project_discovery_tax",

    /**
     * value: "reaction"
     * @const
     */
    reaction: "reaction",

    /**
     * value: "redeemed_isk_token"
     * @const
     */
    redeemedIskToken: "redeemed_isk_token",

    /**
     * value: "release_of_impounded_property"
     * @const
     */
    releaseOfImpoundedProperty: "release_of_impounded_property",

    /**
     * value: "repair_bill"
     * @const
     */
    repairBill: "repair_bill",

    /**
     * value: "reprocessing_tax"
     * @const
     */
    reprocessingTax: "reprocessing_tax",

    /**
     * value: "researching_material_productivity"
     * @const
     */
    researchingMaterialProductivity: "researching_material_productivity",

    /**
     * value: "researching_technology"
     * @const
     */
    researchingTechnology: "researching_technology",

    /**
     * value: "researching_time_productivity"
     * @const
     */
    researchingTimeProductivity: "researching_time_productivity",

    /**
     * value: "resource_wars_reward"
     * @const
     */
    resourceWarsReward: "resource_wars_reward",

    /**
     * value: "reverse_engineering"
     * @const
     */
    reverseEngineering: "reverse_engineering",

    /**
     * value: "season_challenge_reward"
     * @const
     */
    seasonChallengeReward: "season_challenge_reward",

    /**
     * value: "security_processing_fee"
     * @const
     */
    securityProcessingFee: "security_processing_fee",

    /**
     * value: "shares"
     * @const
     */
    shares: "shares",

    /**
     * value: "skill_purchase"
     * @const
     */
    skillPurchase: "skill_purchase",

    /**
     * value: "sovereignity_bill"
     * @const
     */
    sovereignityBill: "sovereignity_bill",

    /**
     * value: "store_purchase"
     * @const
     */
    storePurchase: "store_purchase",

    /**
     * value: "store_purchase_refund"
     * @const
     */
    storePurchaseRefund: "store_purchase_refund",

    /**
     * value: "structure_gate_jump"
     * @const
     */
    structureGateJump: "structure_gate_jump",

    /**
     * value: "transaction_tax"
     * @const
     */
    transactionTax: "transaction_tax",

    /**
     * value: "upkeep_adjustment_fee"
     * @const
     */
    upkeepAdjustmentFee: "upkeep_adjustment_fee",

    /**
     * value: "war_ally_contract"
     * @const
     */
    warAllyContract: "war_ally_contract",

    /**
     * value: "war_fee"
     * @const
     */
    warFee: "war_fee",

    /**
     * value: "war_fee_surrender"
     * @const
     */
    warFeeSurrender: "war_fee_surrender"
  };

  return exports;

}));
