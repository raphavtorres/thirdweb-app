export const ADMIN_ADDRESS = "0x167d3ce63fB5aD5862F0EF8A9B8102CE30D15971";

export function isAdmin(address: string | undefined): boolean {
  if (!address) return false;
  return address.toLowerCase() === ADMIN_ADDRESS.toLowerCase();
}
