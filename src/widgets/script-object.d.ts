declare namespace WoWAPI {

  type BaseWidgetHandlerEvent = 'OnLoad' | 'OnUpdate';
  type Event = string;

  type MouseWheelDelta = 1 | -1;

  class ScriptObject<HandlerObject, HandlerEvent> {

    GetScript(event: HandlerEvent | BaseWidgetHandlerEvent, handler: (this: HandlerObject, ...args: any[]) => void): void;
    GetScript(event: 'OnClick'): (this: HandlerObject, button: MouseButton, down: boolean) => void;
    GetScript(event: 'OnEnter'): (this: HandlerObject, motion: any) => void;
    GetScript(event: 'OnEvent'): (this: HandlerObject, eventName: Event, ...args: any[]) => void;
    GetScript(event: 'OnLeave'): (this: HandlerObject, motion: any) => void;
    GetScript(event: 'OnMouseDown'): (this: HandlerObject, button: MouseButton) => void;
    GetScript(event: 'OnMouseUp'): (this: HandlerObject, button: MouseButton) => void;
    GetScript(event: 'OnMouseWheel'): (this: HandlerObject, delta: MouseWheelDelta) => void;
    GetScript(event: 'OnUpdate'): (this: HandlerObject, elapsed: number) => void;
    GetScript(event: 'OnValueChanged'): (this: HandlerObject, changed: any) => void;
    GetScript(event: 'OnTextChanged'): (this: HandlerObject, isUserInput: boolean) => void;
    GetScript(event: 'OnHide' | 'OnShow' | 'OnLoad', handler: (this: HandlerObject) => void): void;

    HasScript(event: HandlerEvent | BaseWidgetHandlerEvent): boolean;

    HookScript(event: 'OnClick', handler: (this: HandlerObject, button: MouseButton, down: boolean) => void): void
    HookScript(event: 'OnEnter', handler: (this: HandlerObject, motion: any) => void): void
    HookScript(event: 'OnEvent', handler: (this: HandlerObject, eventName: Event, ...args: any[]) => void): void
    HookScript(event: 'OnHide' | "OnShow" | "OnLoad", handler: (this: HandlerObject) => void): void
    HookScript(event: 'OnLeave', handler: (this: HandlerObject, motion: any) => void): void
    HookScript(event: 'OnMouseDown', handler: (this: HandlerObject, button: MouseButton) => void): void;
    HookScript(event: 'OnMouseUp', handler: (this: HandlerObject, button: MouseButton) => void): void;
    HookScript(event: 'OnMouseWheel', handler: (this: HandlerObject, delta: MouseWheelDelta) => void): void;
    HookScript(event: 'OnUpdate', handler: (this: HandlerObject, elapsed: number) => void): void;
    HookScript(event: 'OnValueChanged', handler: (this: HandlerObject, changed: any) => void): void;
    HookScript(event: 'OnTextChanged', handler: (this: HandlerObject, isUserInput: boolean) => void): void;
    HookScript(event: HandlerEvent | BaseWidgetHandlerEvent, handler: (this: HandlerObject, ...args: any[]) => void): void;

    SetScript(event: 'OnClick', handler: (this: HandlerObject, button: MouseButton, down: boolean) => void): void
    SetScript(event: 'OnEnter', handler: (this: HandlerObject, motion: any) => void): void
    SetScript(event: 'OnEvent', handler: (this: HandlerObject, eventName: Event, ...args: any[]) => void): void
    SetScript(event: 'OnHide' | 'OnShow' | 'OnLoad', handler: (this: HandlerObject) => void): void
    SetScript(event: 'OnLeave', handler: (this: HandlerObject, motion: any) => void): void
    SetScript(event: 'OnMouseDown', handler: (this: HandlerObject, button: MouseButton) => void): void;
    SetScript(event: 'OnMouseUp', handler: (this: HandlerObject, button: MouseButton) => void): void;
    SetScript(event: 'OnMouseWheel', handler: (this: HandlerObject, delta: MouseWheelDelta) => void): void;
    SetScript(event: 'OnUpdate', handler: (this: HandlerObject, elapsed: number) => void): void;
    SetScript(event: 'OnValueChanged', handler: (this: HandlerObject, changed: any) => void): void;
    SetScript(event: 'OnTextChanged', handler: (this: HandlerObject, isUserInput: boolean) => void): void;
    SetScript(event: HandlerEvent | BaseWidgetHandlerEvent, handler: (this: HandlerObject, ...args: any[]) => void): void;
  }

}
