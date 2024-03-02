import { Reducer } from "react";

export interface IGlobalReducer {
  [K: string]: Reducer<any, any>;
}
