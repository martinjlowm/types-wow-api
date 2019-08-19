/** @noSelfInFile */

declare function AcceptQuest(): void;
/* title, level, suggestedGroup, isHeader, isCollapsed, isComplete, frequency, questID, startEvent, displayQuestID, isOnMap, hasLocalPOI, isTask, isBounty, isStory, isHidden, isScaling */
/** @tupleReturn */
declare function GetQuestLogTitle(entryIndex: number): [string, number, string, boolean, boolean, boolean, number, number, string, number, boolean, boolean, boolean, boolean, boolean, boolean];
declare function GetTitleText(): string;
declare function GetNumQuestLogEntries(): number;
declare function GetQuestReward(choice: number): void;

/** @tupleReturn */
declare function GetQuestLogLeaderBoard(questObjectiveIndex: number, questIndex?: number): [string, string, boolean];

declare function GetNumQuestLeaderBoards(questIndex: number): number;

/** @tupleReturn */
declare function GetGossipActiveQuests(): [string, string, string, string, string, string];
/** @tupleReturn */
declare function GetGossipAvailableQuests(): [string, string, string, string, string, string];

declare function GetNumAvailableQuests(): number;
declare function GetNumActiveQuests(): number;
declare function GetAvailableTitle(questIndex: number): string;

/** @tupleReturn */
declare function GetActiveTitle(questIndex: number): [string, boolean];
declare function SelectGossipAvailableQuest(questIndex: number): void;


declare function SelectAvailableQuest(questIndex: number): void;
declare function SelectActiveQuest(questIndex: number): void;
declare function SelectGossipActiveQuest(questIndex: number): void;

declare function GetNumQuestChoices(): number;
declare function CompleteQuest(): void;
/** @tupleReturn */
declare function GetQuestItemInfo(type: string, index: number): [string, string, string, string, string];

/** @tupleReturn */
declare function GetItemInfo(itemId: number | string): [string, string, string, string, string];
declare function GetItemLink(itemId: number): string;

/** @tupleReturn */
declare function GetQuestLogLeaderBoard(objectiveIndex: number, questIndex: number): [string, string, boolean];

declare function RemoveQuestWatch(questIndex: number): void;
declare function AddQuestWatch(questIndex: number): void;



/* Move this elsewhere - they are frame-specific functions */
declare function QuestLog_Update(): void;
declare function QuestWatch_Update(): void;

declare function SelectQuestLogEntry(index: number): void;
