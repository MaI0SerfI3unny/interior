export function isValidEmail(email) {
  const atIndex = email.indexOf("@");
  if (atIndex === -1) return false;
  if (atIndex === 0 || atIndex === email.length - 1) return false;

  const domainPart = email.slice(atIndex + 1);
  if (domainPart.indexOf(".") === -1) return false;

  return true;
}
