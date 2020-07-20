"use strict";

exports.__esModule = true;
var reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

var object_type = {
  null: 0,
  base: 1,
  account: 2,
  asset: 3,
  force_settlement: 4,
  committee_member: 5,
  witness: 6,
  limit_order: 7,
  call_order: 8,
  custom: 9,
  proposal: 10,
  operation_history: 11,
  withdraw_permission: 12,
  vesting_balance: 13,
  worker: 14,
  balance: 15,
  tournament: 16,
  tournament_details: 17,
  match: 18,
  game: 19,
  sport: 20,
  event_group: 21,
  event: 22,
  betting_market_rules: 23,
  betting_market_group: 24,
  betting_market: 25,
  bet: 26,
  offer: 27,
  nft_metadata: 28,
  nft: 29
};

var impl_object_type = {
  global_property: 0,
  dynamic_global_property: 1,
  reserved0: 2,
  asset_dynamic_data: 3,
  asset_bitasset_data: 4,
  account_balance: 5,
  account_statistics: 6,
  transaction: 7,
  block_summary: 8,
  account_transaction_history: 9,
  blinded_balance: 10,
  chain_property: 11,
  witness_schedule: 12,
  budget_record: 13,
  special_authority: 14,
  buyback: 15,
  fba_accumulator: 16,
  asset_dividend_data: 17,
  pending_dividend_payout_balance_for_holder: 18,
  distributed_dividend_balance_data: 19,
  betting_market_position: 20,
  global_betting_statistics: 21,
  lottery_balance: 22,
  sweeps_vesting_balance: 23,
  offer_history: 24
};

var vote_type = {
  committee: 0,
  witness: 1,
  worker: 2
};

var operations = {
  transfer: 0,
  limit_order_create: 1,
  limit_order_cancel: 2,
  call_order_update: 3,
  fill_order: 4,
  account_create: 5,
  account_update: 6,
  account_whitelist: 7,
  account_upgrade: 8,
  account_transfer: 9,
  asset_create: 10,
  asset_update: 11,
  asset_update_bitasset: 12,
  asset_update_feed_producers: 13,
  asset_issue: 14,
  asset_reserve: 15,
  asset_fund_fee_pool: 16,
  asset_settle: 17,
  asset_global_settle: 18,
  asset_publish_feed: 19,
  witness_create: 20,
  witness_update: 21,
  proposal_create: 22,
  proposal_update: 23,
  proposal_delete: 24,
  withdraw_permission_create: 25,
  withdraw_permission_update: 26,
  withdraw_permission_claim: 27,
  withdraw_permission_delete: 28,
  committee_member_create: 29,
  committee_member_update: 30,
  committee_member_update_global_parameters: 31,
  vesting_balance_create: 32,
  vesting_balance_withdraw: 33,
  worker_create: 34,
  custom: 35,
  assert: 36,
  balance_claim: 37,
  override_transfer: 38,
  transfer_to_blind: 39,
  blind_transfer: 40,
  transfer_from_blind: 41,
  asset_settle_cancel: 42,
  asset_claim_fees: 43,
  fba_distribute_operation: 44,
  tournament_create: 45,
  tournament_join: 46,
  game_move: 47,
  asset_update_dividend: 48,
  asset_dividend_distribution: 49,
  tournament_payout: 50,
  tournament_leave: 51,
  sport_create: 52,
  sport_update: 53,
  event_group_create: 54,
  event_group_update: 55,
  event_create: 56,
  event_update: 57,
  betting_market_rules_create: 58,
  betting_market_rules_update: 59,
  betting_market_group_create: 60,
  betting_market_create: 61,
  bet_place: 62,
  betting_market_group_resolve: 63,
  betting_market_group_resolved: 64,
  bet_adjusted: 65,
  betting_market_group_cancel: 66,
  bet_matched: 67,
  bet_cancel: 68,
  bet_canceled: 69,
  betting_market_group_update: 70,
  betting_market_update: 71,
  event_update_status: 72,
  sport_delete: 73,
  event_group_delete: 74,
  affiliate_payout: 75,
  affiliate_referral_payout: 76,
  lottery_asset_create: 77,
  ticket_purchase: 78,
  lottery_reward: 79,
  lottery_end: 80,
  sweeps_vesting_claim: 81,
  offer: 82,
  bid: 83,
  finalize_offer: 84,
  nft_metadata_create: 85,
  nft_metadata_update: 86,
  nft_mint: 87,
  nft_safe_transfer_from: 88,
  nft_approve: 89,
  nft_set_approval_for_all: 90
};

var ChainTypes = {
  reserved_spaces: reserved_spaces,
  object_type: object_type,
  impl_object_type: impl_object_type,
  vote_type: vote_type,
  operations: operations
};

exports.default = ChainTypes;
module.exports = exports.default;