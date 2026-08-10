/**
 * Returns a date formatted as YYYY-MM-DD using the user's local timezone.
 * Avoids UTC offset shifts (e.g. at 21:00 BRT when ISO string advances to tomorrow).
 */
export function getLocalDateString(d: Date = new Date()): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
