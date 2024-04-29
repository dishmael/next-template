"use client";

import { Dispatch, SetStateAction, useState } from "react";

export type ToggleState = Dispatch<SetStateAction<boolean>>;

/**
 * useState is a simple hook to manage a boolean state. By default, the state
 * is 'false' but you can pass in 'true' as the initial state.
 * 
 * @param state the iniital state, default 'false'
 * @returns
 */
export const useToggle = (state?: boolean): [boolean, ToggleState] => {
  return useState<boolean>(state || false);
};
