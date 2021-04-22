import { InputRoles } from "./inputRoles.interface";

export default function checkRolesMatching({
  userRoles,
  appRoles
}: InputRoles) {
  return userRoles.reduce((accum, nextValue) => {
    if (appRoles.includes(nextValue)) accum++;
    return accum;
  }, 0);
}
