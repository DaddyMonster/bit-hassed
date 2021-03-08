import produce from "immer";
import { pipe } from "ramda";
import create, { State, StateCreator } from "zustand";

const immer = <T extends State>(
  config: StateCreator<T, (fn: (state: T) => void) => void>
): StateCreator<T> => (set, get, api) =>
  config((fn) => set(produce(fn as any) as (state: T) => T), get, api);

export const createStore = pipe(immer, create);
