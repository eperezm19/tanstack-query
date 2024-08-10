import { useQuery } from "@tanstack/react-query";
import { getCryptoNumber } from "../actions/cryto.actions";

export const useRandomNumber = () => {
  const randomQuery = useQuery({
    queryKey: ["crypto-random"],
    queryFn: async () => getCryptoNumber(),
  });
  return {
    randomQuery,
  };
};
