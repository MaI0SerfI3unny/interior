export function isActivePlan(dateString) {
  if (!dateString) return true;
  const now = new Date();
  const inputDate = new Date(dateString);
  return now < inputDate;
}
