import React from "react";
import clsx from "clsx";

export const Card = React.forwardRef(function CardV2(props: any, ref: any) {
  return (
    <div
      ref={ref}
      className={clsx(
        props.className,
        "flex flex-auto rounded-lg py-2 shadow bg-white"
      )}
    >
      {props.children}
    </div>
  );
});
