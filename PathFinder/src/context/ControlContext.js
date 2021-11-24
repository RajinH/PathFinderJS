import { createContext } from "react";

export const ControlContext = createContext({
  isStartToggled: false,
  isEndToggled: false,
  isWallToggled: false,
});
