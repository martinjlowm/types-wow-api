declare namespace WoWAPI {
  interface UIParentManagedFramePosition {
    baseY: number;
    watchBar: number;
    maxLevel: number;
    anchorTo: string;
    point: Anchor;
    rpoint: Anchor;
    xOffset: number;
    yOffset: number;
    petBattleFrame: number;
    bonusActionBar: number;
    tutorialAlert: number;
    pet: number;
  }

  export interface UIParentManagedFramePositionTable {
    [frameName: string]: UIParentManagedFramePosition;
  }
}

declare let UIPARENT_MANAGED_FRAME_POSITIONS: WoWAPI.UIParentManagedFramePositionTable;
declare let UIParent: WoWAPI.Frame;
