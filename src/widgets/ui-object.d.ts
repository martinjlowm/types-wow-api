/// <reference path="object.d.ts" />
declare namespace WoWAPI {

  export type UIObjectFrame = 'Frame' | 'Button' | 'Cooldown' | 'ColorSelect' | 'EditBox' | 'GameTooltip' | 'MessageFrame' | 'Minimap' | 'Model' | 'ScrollFrame' | 'ScrollingMessageFrame' | 'SimpleHTML' | 'Slider' | 'StatusBar';

  export type ObjectType =
    'Alpha' |
    'Animation' |
    'AnimationGroup' |
    'Button' |
    'CheckButton' |
    'ColorSelect' |
    'Cooldown' |
    'DressUpModel' |
    'EditBox' |
    'Font' |
    'FontInstance' |
    'FontString' |
    'Frame' |
    'GameTooltip' |
    'LayeredRegion' |
    'LootButton' |
    'MessageFrame' |
    'Minimap' |
    'Model' |
    'Object' |
    'Path' |
    'PlayerModel' |
    'Region' |
    'Rotation' |
    'Scale' |
    'ScrollFrame' |
    'ScrollingMessageFrame' |
    'SimpleHTML' |
    'Slider' |
    'StatusBar' |
    'TabardModel' |
    'Texture' |
    'Translation' |
    'UIObject' |
    'WorldFrame';

  class UIObject extends Object {
    GetAlpha(): number;
    GetName(): string;
    GetObjectType(): string;
    GetParent(): UIObject;
    IsForbidden(): boolean;
    IsObjectType(type: ObjectType): boolean;
    SetAlpha(alpha: number): void;
  }
}
