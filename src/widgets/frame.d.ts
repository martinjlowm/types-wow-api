/// <reference path="./texture.d.ts" />
/// <reference path="./fontstring.d.ts" />

declare namespace WoWAPI {
  export type FrameStrata =
    'TOOLTIP' |
    'FULLSCREEN_DIALOG' |
    'FULLSCREEN' |
    'DIALOG' |
    'HIGH' |
    'MEDIUM' |
    'LOW' |
    'BACKGROUND';

  class Frame extends Region {
    CreateFontString(name?: string, layer?: string, inheritsFrom?: Region): FontString;
    CreateTexture(name?: string, layer?: string, inheritsFrom?: Region): Texture;
    CreateTitleRegion(): void;
    DisableDrawLayer(layer: string): void;
    EnableDrawLayer(layer: string): void;
    EnableKeyboard(enableFlag: boolean): void;
    EnableMouse(enableFlag: boolean): void;
    EnableMouseWheel(enableFlag: boolean): void;
    GetAttribute(prefix: string, name: string, suffix: string): string | number | null;
    GetAttribute(name: string): string | number | null;
    SetAttribute(attribute: string, value: string | number | null): void;
    GetBackdrop(): any;
    GetBackdropBorderColor(): [Color, Color, Color, Alpha];
    GetBackdropColor(): [Color, Color, Color, Alpha];
    GetChildren(): Frame[];
    GetClampRectInsets(): [number, number];
    GetDepth(): number;
    GetEffectiveAlpha(): number;
    GetEffectiveDepth(): number;
    GetEffectiveScale(): number;
    GetFrameLevel(): number;
    GetFrameStrata(): number;
    GetFrameType(): string;
    GetHitRectInsets(): [number, number];
    GetID(): string;
    GetMaxResize(): [number, number];
    GetMinResize(): [number, number];
    GetNumChildren(): number;
    GetNumRegions(): number;
    GetRegions(): Region[];
    GetScale(): number;
    GetScript(handler: FrameWidgetHandler): HandlerFunction;
    GetTitleRegion(): Region;
    HasScript(handler: FrameWidgetHandler): boolean;
    HookScript(handler: FrameWidgetHandler, func: HandlerFunction): HandlerFunction;
    IgnoreDepth(ignoreFlag: boolean): void;
    IsClampedToScreen(): boolean;
    IsEventRegistered(event: string): boolean;
    IsFrameType(type: UIObjectFrame): boolean;
    IsIgnoringDepth(): boolean;
    IsKeyboardEnabled(): boolean;
    IsMouseEnabled(): boolean;
    IsMouseWheelEnabled(): boolean;
    IsMovable(): boolean;
    IsResizable(): boolean;
    IsToplevel(): boolean;
    IsUserPlaced(): boolean;
    Lower(): void;
    Raise(): void;
    RegisterAllEvents(): void;
    RegisterEvent(event: string): void;
    RegisterForDrag(buttonType: MouseButton, ...buttonTypes: MouseButton[]): void;
    SetBackdrop(backdropTable?: any): void;
    SetBackdropBorderColor(r: Color, g: Color, b: Color, a?: Alpha): void;
    SetBackdropColor(r: Color, g: Color, b: Color, a?: Alpha): void;
    SetClampedToScreen(clamped: boolean): void;
    SetClampRectInsets(left: number, right: number, top: number, bottom: number): void;
    SetDepth(depth: number): void;
    SetFrameLevel(level: number): void;
    SetFrameStrata(strata: FrameStrata): void;
    SetHitRectInsets(left: number, right: number, top: number, bottom: number): void;
    SetID(id: string): void;
    SetMaxResize(maxWidth: number, maxHeight: number): void;
    SetMinResize(minWidth: number, minHeight: number): void;
    SetMovable(isMovable: boolean): void;
    SetResizable(isResizable: boolean): void;
    SetScale(scale: number): void;
    SetScript(handler: FrameWidgetHandler, func: HandlerFunction): void;
    SetToplevel(isTopLevel: boolean): void;
    SetUserPlaced(isUserPlaced: boolean): void;
    StartMoving(): void;
    StartSizing(point: string): void;
    StopMovingOrSizing(): void;
    UnregisterAllEvents(): void;
    UnregisterEvent(event: string): void;
  }

  type BaseWidgetHandler = 'OnLoad' | 'OnUpdate';
  type FrameWidgetHandler = 'OnChar' | 'OnDragStart' | 'OnDragStop' | 'OnEnter' | 'OnEvent' | 'OnHide' | 'OnKeyDown' | 'OnKeyUp' | 'OnLeave' | 'OnMouseDown' | 'OnMouseUp' | 'OnMouseWheel' | 'OnReceiveDrag' | 'OnShow' | 'OnSizeChanged' | BaseWidgetHandler;
  type ButtonWidgetHandler = 'OnClick' | 'OnDoubleClick' | 'PostClick' | 'PreClick' | FrameWidgetHandler;
  type CheckButtonWidgetHandler = 'OnDisable' | ButtonWidgetHandler | FrameWidgetHandler;
  type ColorSelectWidgetHandler = 'OnColorSelect' | ButtonWidgetHandler | FrameWidgetHandler;
  type ModelWidgetHandler = 'OnAnimFinished' | 'OnUpdateModel' | ButtonWidgetHandler | FrameWidgetHandler;
  type DressUpModelWidgetHandler = ModelWidgetHandler | FrameWidgetHandler;
  type EditBoxWidgetHandler = 'OnArrowPressed' | 'OnCursorChanged' | 'OnEditFocusGained' | 'OnEditFocusLost' | 'OnEnterPressed' | 'OnEscapePressed' | 'OnHyperlinkClick' | 'OnHyperlinkEnter' | 'OnHyperlinkLeave' | 'OnInputLanguageChanged' | 'OnSpacePressed' | 'OnTabPressed' | 'OnTextChanged' | 'OnTextSet' | FrameWidgetHandler;
  type GameTooltipWidgetHandler = 'OnTooltipAddMoney' | 'OnTooltipCleared' | 'OnTooltipSetAchievement' | 'OnTooltipSetDefaultAnchor' | 'OnTooltipSetItem' | 'OnTooltipSetSpell' | 'OnTooltipSetUnit' | FrameWidgetHandler;
  type LootButtonWidgetHandler = ButtonWidgetHandler;
  type MessageFrameWidgetHandler = FrameWidgetHandler;
  type MinimapWidgetHandler = FrameWidgetHandler;
  type PlayerModelWidgetHandler = ModelWidgetHandler;
  type QuestPOIWidgetHandler = 'OnAttributeChanged' | 'OnDisable' | 'OnEnable' | FrameWidgetHandler;
  type ScrollFrameWidgetHandler = 'OnHorizontalScroll' | 'OnScrollRangeChanged' | 'OnVerticalScroll' | FrameWidgetHandler;
  type ScrollingMessageFrameWidgetHandler = 'OnHyperlinkClick' | 'OnHyperlinkEnter' | 'OnHyperlinkLeave' | 'OnMessageScrollChanged' | FrameWidgetHandler;
  type SimpleHTMLWidgetHandler = 'OnHyperlinkClick' | 'OnHyperlinkEnter' | 'OnHyperlinkLeave' | FrameWidgetHandler;
  type SliderWidgetHandler = 'OnValueChanged' | FrameWidgetHandler;
  type StatusBarWidgetHandler = SliderWidgetHandler;
  type TabardModelWidgetHandler = ModelWidgetHandler;
  type BrowserWidgetHandler = 'OnButtonUpdate' | 'OnError' | 'OnExternalLink' | FrameWidgetHandler;

  type MouseButton =
    'LeftButtonUp' |
    'RightButtonUp' |
    'MiddleButtonUp' |
    'Button4Up' |
    'Button5Up' |
    'LeftButtonDown' |
    'RightButtonDown' |
    'MiddleButtonDown' |
    'Button4Down' |
    'Button5Down' |
    'AnyUp' |
    'AnyDown';

  export type HandlerFunction = any;
}

declare function CreateFrame(this: void, frameType: WoWAPI.UIObjectFrame): WoWAPI.Frame;
declare function CreateFrame(this: void, frameType: WoWAPI.UIObjectFrame, frameName: string | null): WoWAPI.Frame;
declare function CreateFrame(this: void, frameType: WoWAPI.UIObjectFrame, frameName: string | null, parentObject?: WoWAPI.Object | string, inheritsFrom?: WoWAPI.Object | string): WoWAPI.Frame;
