"use client";

import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Direction = "Up" | "Down" | "Left" | "Right" | "Neutral";

type ScrollState = {
  deltaX: number;
  deltaY: number;
  direction: Direction;
};

type Reference = MutableRefObject<HTMLElement | null>;

/**
 * useMouseScroll is a hook that returns a scroll state consisting of the
 * DeltaX, DeltaY, and the Direction of the scroll as well as a reference
 * that can be used by the caller.
 *
 * @returns
 */
export const useMouseScroll = (): [ScrollState, Reference] => {
  const ref = useRef<HTMLElement | null>(null);
  const [scrollState, setScrollState] = useState<ScrollState>({
    deltaX: 0,
    deltaY: 0,
    direction: "Neutral",
  });

  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();

    // Extract the scroll deltas
    const { deltaX, deltaY } = event;

    // Determine the scroll direction
    let direction: Direction = "Neutral";
    if (deltaX > 0) direction = "Right";
    else if (deltaX < 0) direction = "Left";
    else if (deltaY > 0) direction = "Down";
    else if (deltaY < 0) direction = "Up";

    // Update the state with the new deltas and direction
    setScrollState((prevState) => ({
      deltaX: prevState.deltaX + deltaX,
      deltaY: prevState.deltaY + deltaY,
      direction,
    }));
  }, []);

  // Add scroll listeners
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleUnmount = () => {
      element.removeEventListener("wheel", handleWheel);
    };

    element.addEventListener("wheel", handleWheel, { passive: false });

    return handleUnmount;
  }, [handleWheel]);

  return [scrollState, ref];
};
