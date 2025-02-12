import { createThirdwebClient } from "thirdweb";
import "dotenv/config";

const clientId = "6101f9c54e3c0f93ccc06c6f6e3ead10";
// const clientId = process.env.THIRDWEB_CLIENT_ID || "";

const secretKey = process.env.THIRDWEB_SECRET_KEY || "";

export const client = createThirdwebClient({
  clientId: clientId,
  secretKey: secretKey,
});
