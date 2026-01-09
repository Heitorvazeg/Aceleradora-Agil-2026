export function normalizeString(str: string): string {
    if (!str) return str;
    return str.trim().toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}