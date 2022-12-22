import React from "react";
import { PolyRefFunction } from "react-polymorphed";

export const polyRef = React.forwardRef as PolyRefFunction;

export type Action<P = never, R = void> = [P] extends [never]
  ? () => R
  : (payload: P) => R;