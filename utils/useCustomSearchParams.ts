import { useIsAppDir } from "./isAppDir";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export const useCustomSearchParams = () => {
  if (useIsAppDir()) {
    return useSearchParams();
  }

  const router = useRouter();
  return new URLSearchParams(JSON.parse(JSON.stringify(router.query)));
};
