/** @noSelfInFile */

/// <reference path="./script-object.d.ts" />
/// <reference path="./texture.d.ts" />
/// <reference path="./font-string.d.ts" />
/// <reference path="./frame.d.ts" />

declare namespace WoWAPI {

  type SliderWidgetHandlerEvent = 'OnValueChanged';

  /* type CheckButtonWidgetHandler = 'OnDisable' | ButtonWidgetHandler | FrameWidgetHandler;
   * type ColorSelectWidgetHandler = 'OnColorSelect' | ButtonWidgetHandler | FrameWidgetHandler;
   * type ModelWidgetHandler = 'OnAnimFinished' | 'OnUpdateModel' | ButtonWidgetHandler | FrameWidgetHandler;
   * type DressUpModelWidgetHandler = ModelWidgetHandler | FrameWidgetHandler;
   * type EditBoxWidgetHandler = 'OnArrowPressed' | 'OnCursorChanged' | 'OnEditFocusGained' | 'OnEditFocusLost' | 'OnEnterPressed' | 'OnEscapePressed' | 'OnHyperlinkClick' | 'OnHyperlinkEnter' | 'OnHyperlinkLeave' | 'OnInputLanguageChanged' | 'OnSpacePressed' | 'OnTabPressed' | 'OnTextChanged' | 'OnTextSet' | FrameWidgetHandler;
   * type GameTooltipWidgetHandler = 'OnTooltipAddMoney' | 'OnTooltipCleared' | 'OnTooltipSetAchievement' | 'OnTooltipSetDefaultAnchor' | 'OnTooltipSetItem' | 'OnTooltipSetSpell' | 'OnTooltipSetUnit' | FrameWidgetHandler;
   * type LootButtonWidgetHandler = ButtonWidgetHandler;
   * type MessageFrameWidgetHandler = FrameWidgetHandler;
   * type MinimapWidgetHandler = FrameWidgetHandler;
   * type PlayerModelWidgetHandler = ModelWidgetHandler;
   * type QuestPOIWidgetHandler = 'OnAttributeChanged' | 'OnDisable' | 'OnEnable' | FrameWidgetHandler;
   * type ScrollFrameWidgetHandler = 'OnHorizontalScroll' | 'OnScrollRangeChanged' | 'OnVerticalScroll' | FrameWidgetHandler;
   * type ScrollingMessageFrameWidgetHandler = 'OnHyperlinkClick' | 'OnHyperlinkEnter' | 'OnHyperlinkLeave' | 'OnMessageScrollChanged' | FrameWidgetHandler;
   * type SimpleHTMLWidgetHandler = 'OnHyperlinkClick' | 'OnHyperlinkEnter' | 'OnHyperlinkLeave' | FrameWidgetHandler;

   * type StatusBarWidgetHandler = SliderWidgetHandler;
   * type TabardModelWidgetHandler = ModelWidgetHandler;
   * type BrowserWidgetHandler = 'OnButtonUpdate' | 'OnError' | 'OnExternalLink' | FrameWidgetHandler; */

  class Slider {
    Disable(): void;
    Enable(): void;

    /** @tupleReturn */
    GetMinMaxValues(): [number, number];
    GetObeyStepOnDrag(): void;
    GetOrientation(): void;
    GetStepsPerPage(): void;
    GetThumbTexture(): Texture;
    GetValue(): void;
    GetValueStep(): void;
    IsDraggingThumb(): void;
    IsEnabled(): void;
    SetEnabled(): void;
    SetMinMaxValues(): void;
    SetObeyStepOnDrag(): void;
    SetOrientation(): void;
    SetStepsPerPage(steps: number): void;
    SetThumbTexture(texture: string): void;
    SetValue(): void;
    SetValueStep(): void;
  }

  interface Slider extends Frame<SliderWidgetHandlerEvent> {}

}

declare function CreateFrame(frameType: 'Slider'): WoWAPI.Slider;
declare function CreateFrame(frameType: 'Slider', frameName: string | null): WoWAPI.Slider;
declare function CreateFrame(frameType: 'Slider', frameName: string | null, parentObject?: WoWAPI.Object | string, inheritsFrom?: WoWAPI.Object | string): WoWAPI.Slider;
