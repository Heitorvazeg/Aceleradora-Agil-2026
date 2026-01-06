export function isValidNumber(value: number): boolean {
  return !isNaN(value) && value >= 0;
}

export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}
