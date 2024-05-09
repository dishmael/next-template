import { FC, ReactNode } from "react";

type RepeaterProps = {
  count: number;
  children: ReactNode;
};

export const Repeater: FC<RepeaterProps> = ({ count, children }) => {
  return (
    <div>
      {Array.from({ length: count }, (_, i) => {
        return <div key={i}>{ children }</div>;
      })}
    </div>
  );
};
