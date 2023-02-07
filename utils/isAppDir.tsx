import { createContext, useContext } from "react";

export const IsAppDirContext = createContext(true);
export const useIsAppDir = () => useContext(IsAppDirContext);
