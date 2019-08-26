/** @noSelfInFile */

/// <reference path="./script-object.d.ts" />
/// <reference path="./texture.d.ts" />
/// <reference path="./font-string.d.ts" />
/// <reference path="./frame.d.ts" />

declare namespace WoWAPI {

  type GameTooltipWidgetHandlerEvent =
    | 'OnTooltipAddMoney'
    | 'OnTooltipCleared'
    | 'OnTooltipSetAchievement'
    | 'OnTooltipSetDefaultAnchor'
    | 'OnTooltipSetEquipmentSet'
    | 'OnTooltipSetFramestack'
    | 'OnTooltipSetItem'
    | 'OnTooltipSetQuest'
    | 'OnTooltipSetSpell'
    | 'OnTooltipSetUnit';

  class GameTooltip {
    AddDoubleLine(): void;
    AddFontStrings(): void;
    AddLine(): void;
    AddSpellByID(): void;
    AddTexture(): void;
    AdvanceSecondaryCompareItem(): void;
    AppendText(): void;
    ClearLines(): void;
    CopyTooltip(): void;
    FadeOut(): void;
    GetAnchorType(): void;

    /** @tupleReturn */
    GetItem(): [string, string];
    GetMinimumWidth(): void;
    GetOwner(): void;
    GetPadding(): void;
    GetSpell(): void;
    GetUnit(): void;
    IsEquippedItem(): void;
    IsOwned(): void;
    IsUnit(): void;
    NumLines(): void;
    ResetSecondaryCompareItem(): void;
    SetAction(): void;
    SetAnchorType(): void;
    SetAuctionItem(): void;
    SetAuctionSellItem(): void;
    SetBagItem(): void;
    SetBagItemChild(): void;
    SetBuybackItem(): void;
    SetCompareItem(): void;
    SetCraftItem(): void;
    SetCraftSpell(): void;
    SetFrameStack(): void;
    SetHyperlink(): void;
    SetInboxItem(): void;
    SetInstanceLockEncountersComplete(): void;
    SetInventoryItem(): void;
    SetInventoryItemByID(): void;
    SetItemByID(): void;
    SetLootItem(): void;
    SetLootRollItem(): void;
    SetMerchantCostItem(): void;
    SetMerchantItem(): void;
    SetMinimumWidth(): void;
    SetOwner(): void;
    SetPadding(): void;
    SetPetAction(): void;
    SetPossession(): void;
    SetQuestItem(): void;
    SetQuestLogItem(): void;
    SetQuestLogRewardSpell(): void;
    SetQuestRewardSpell(): void;
    SetSendMailItem(): void;
    SetShapeshift(): void;
    SetSpellBookItem(): void;
    SetSpellByID(): void;
    SetTalent(): void;
    SetText(): void;
    SetTrackingSpell(): void;
    SetTradePlayerItem(): void;
    SetTradeSkillItem(): void;
    SetTradeTargetItem(): void;
    SetTrainerService(): void;
    SetUnit(): void;
    SetUnitAura(): void;
    SetUnitBuff(): void;
    SetUnitDebuff(): void;
  }

  interface GameTooltip<Inheritor = {}, T = {}> extends Frame<Inheritor extends {} ? Inheritor : Button, T extends {} ? GameTooltipWidgetHandlerEvent : GameTooltipWidgetHandlerEvent | T> {}

}

/* declare function CreateFrame(frameType: 'Button'): WoWAPI.Button;
 * declare function CreateFrame(frameType: 'Button', frameName: string | null): WoWAPI.Button;
 * declare function CreateFrame(frameType: 'Button', frameName: string | null, parentObject?: WoWAPI.Object | string, inheritsFrom?: WoWAPI.Object | string): WoWAPI.Button; */
