interface String {
  gsub(pattern: string, replacement: string): string;
  format(...replacements: Array<string | number>): string;
  trim(): string;
}
