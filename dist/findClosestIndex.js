"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

exports.findClosestIndex = void 0;

function findClosestIndex(_a) {

    var collection = _a.collection, target = _a.target, filterMapFn = _a.filterMapFn;

    var closest = {

        index: -1,

        distance: Number.POSITIVE_INFINITY,

        value: 0,

    };

    for (var index = 0; index < collection.length; index++) {

        var rawValue = collection[index];

        var value = void 0;

        if (filterMapFn) {

            var mappedValue = filterMapFn(rawValue, {

                index: index,

                target: target,

                collection: collection,

            });

            switch (mappedValue) {

                case false:

                    continue;

                case true:

                    if (typeof rawValue !== "number") {

                        throw new TypeError("`filterMapFn` returned `true` for non-number value `" + rawValue + "`.");

                    }

                    value = rawValue;

                    break;

                default:

                    value = mappedValue;

            }

        }

        else {

            if (typeof rawValue !== "number") {

                throw new TypeError("Array contains non-number value `" + rawValue + "` without a `filterMapFn` to map it to a number.");

            }

            value = rawValue;

        }

        var distance = Math.abs(value - target);

        if (distance === 0) {

            return index;

        }

        if (distance < closest.distance) {

            closest = { index: index, distance: distance, value: value };

        }

    }

    return closest.index;

}

exports.findClosestIndex = findClosestIndex;

