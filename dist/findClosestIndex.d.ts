export declare type FilterMapFn<T, R extends boolean = boolean> = (value: T, context: {

    index: number;

    target: number;

    collection: readonly T[];

}) => number | R;

interface Args<T> {

    collection: T[];

    target: number;

    filterMapFn?: FilterMapFn<T>;

}

export declare function findClosestIndex<T>({ collection, target, filterMapFn, }: Args<T>): number;

export {};

