
/** @noSelf */
declare function SetBinding(key: string, command?: string, mode?: number): void;
/** @noSelf */
declare function SetBindingClick(key: string, buttonName: string, button?: string): void;

interface String {
  gsub(pattern: string, replacement: string): string;
  format(...replacements: Array<string | number>): string;
  trim(): string;
}
