"use client";

import { useIsAppDir } from "../../utils/isAppDir";
import { useCustomSearchParams } from "../../utils/useCustomSearchParams";

export default function () {
  const params = useCustomSearchParams();

  return (
    <div>
      isApp dir: {String(useIsAppDir())}, params on app: {params.toString()}
    </div>
  );
}
