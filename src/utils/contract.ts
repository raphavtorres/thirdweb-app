import { chain } from "@/utils/chain";
import { client } from "@/utils/client";

import { getContract } from "thirdweb";
import { contractABI } from "./contractABI";

const contractAddress = "0x3Ec8b1528Cd53Ca7455963093ae49F032E9CF516";

export const contract = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: contractABI,
});
