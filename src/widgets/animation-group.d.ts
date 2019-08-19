/// <reference path="./animation.d.ts" />

declare namespace WoWAPI {

  type AnimationGroupWidgetHandlerEvent = 'OnLoop' | AnimationWidgetHandlerEvent;

  type LoopType = 'NONE' | 'REPEAT' | 'BOUNCE';
  type LoopState = 'NONE' | 'FORWARD' | 'REVERSE';

  class AnimationGroup {
    // Start playing the animations in this group.
    Play(): void;

    // Pause the animations in this group.
    Pause(): void;

    // Stop all animations in this group.
    Stop(): void;

    // Notify this group to stop playing once the current loop cycle is done.
    Finish(): void;

    // Returns the progress of this animation as a unit value [0,1].
    GetProgress(): number;

    // Returns true if the group has finished playing.
    IsDone(): boolean;

    // Returns true if the group is playing.
    IsPlaying(): boolean;

    // Returns true if the group is paused.
    IsPaused(): boolean;

    // Gets the total duration for one loop cycle of all child Animations.
    GetDuration(): number;

    // Sets the group loop type [NONE, REPEAT, BOUNCE]
    SetLooping(loopType: LoopType): void;

    // Gets the group loop type.
    GetLooping(): LoopType;

    // Gets the current group loop state [NONE, FORWARD, REVERSE]
    GetLoopState(): LoopState;

    // Create and return an Animation as a child of this group.
    CreateAnimation(animationType: any, name?: string, inheritsFrom?: string): Animation;
  }

  interface AnimationGroup extends UIObject, ScriptObject<AnimationGroup, AnimationGroupWidgetHandlerEvent> {}

}
