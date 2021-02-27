declare type CallbackFunction<P> = (state: P, callback?: (newState: P) => void) => void;

declare function useStateCallback<T>(initialState: T): [T, CallbackFunction<T>];

export default useStateCallback;

