/** @noSelfInFile */

declare namespace string {

  /** @tupleReturn */
  function split(separator: string, str: string, pieces?: number): [string, string, string, string, string];

  function join(separator: string, ...args: string[]): string;
}

interface String {
  gsub(pattern: string, replacement: string): string;
  format(...replacements: Array<string | number>): string;
  trim(): string;
  upper(): string;
  lower(): string;
}
