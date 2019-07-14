/// <reference path="./ui-object.d.ts" />

declare namespace WoWAPI {
  type AnimationWidgetHandler = 'OnPlay' | 'OnPause' | 'OnStop' | 'OnFinished' | BaseWidgetHandler;
  type AlphaWidgetHandler = AnimationWidgetHandler;
  type PathWidgetHandler = AnimationWidgetHandler;
  type RotationWidgetHandler = AnimationWidgetHandler;
  type ScaleWidgetHandler = AnimationWidgetHandler;
  type TranslationWidgetHandler = AnimationWidgetHandler;

  type SmoothType =
    'IN' |
    'OUT' |
    'IN_OUT' |
    'OUT_IN';

  class Animation extends UIObject {
    // Play the animation.
    Play(): void;

    // Pause the animation.
    Pause(): void;

    // Stop the animation.
    Stop(): void;

    // Returns true if the animation has finished playing.
    IsDone(): boolean;

    // Returns true if the animation is playing.
    IsPlaying(): boolean;

    // Returns true if the animation is paused.
    IsPaused(): boolean;

    // Returns true if the animation is stopped.
    IsStopped(): boolean;

    // Returns true if the animation is in the middle of a start or end delay.
    IsDelaying(): boolean;

    // Gets the amount of time in seconds that the animation has been playing for.
    GetElapsed(): number;

    // Set the seconds that the animation delays before it starts to progress.
    SetStartDelay(delaySec: number): void;

    // Get the seconds that the animation delays before it starts to progress.
    GetStartDelay(): number;

    // Set the number of seconds the animation delays after finishing.
    SetEndDelay(delaySec: number): void;

    // Get the number of seconds the animation delays after finishing.
    GetEndDelay(): number;

    // Set the seconds it takes for the animation to progress from start to finish.
    SetDuration(durationSec: number): void;

    // Get the seconds it takes for the animation to progress from start to finish.
    GetDuration(): number;

    // Returns the progress of the animation as a unit value [0,1]. Ignores start and end delay.
    GetProgress(): number;

    // Returns a smoothed, [0,1] progress value for the animation.
    GetSmoothProgress(): number;

    // Returns the progress of the animation combined with its start and end delay.
    GetProgressWithDelay(): number;

    // Sets the maximum fps that the animation will update its progress.
    SetMaxFramerate(framerate: number): void;

    // Gets the maximum fps that the animation will update its progress.
    GetMaxFramerate(): number;

    // Sets the order that the animation plays within its parent group. Range is [1,100].
    SetOrder(order: number): void;

    // Gets the order of the animation within its parent group.
    GetOrder(): number;

    // Sets the smoothing type for the animation [IN,OUT,IN_OUT,OUT_IN]
    SetSmoothing(smoothType: SmoothType): void;

    // Gets the smoothing type for the animation.
    GetSmoothing(): SmoothType;

    // Sets the parent for the animation. If the animation was not already a child of the parent, the parent will insert the animation into the proper order amongst its children.
    SetParent(animGroup: AnimationGroup | string): void;

    // Gets the Region object that the animation operates on. The region object is this Animation's parent's parent (the AnimationGroup's parent).
    GetRegionParent(): Region;

    // Same as Frame:HasScript [OnLoad, OnPlay, OnPaused, OnStop, OnFinished, OnUpdate]
    HasScript(handler: AnimationWidgetHandler): boolean;

    // Same as Frame:GetScript [OnLoad, OnPlay, OnPaused, OnStop, OnFinished, OnUpdate]
    GetScript(handler: AnimationWidgetHandler): HandlerFunction | null;

    // Same as Frame:SetScript [OnLoad, OnPlay, OnPaused, OnStop, OnFinished, OnUpdate]
    SetScript(handler: AnimationWidgetHandler, func: HandlerFunction | null): void;
  }
}
