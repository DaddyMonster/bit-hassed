"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var react_1 = require("react");

function useStateCallback(initialState) {

    var _a = react_1.useState(initialState), state = _a[0], setstate = _a[1];

    var callbackRef = react_1.useRef(null);

    var setStateCallback = function (state, callback) {

        if (callback) {

            callbackRef.current = callback;

        }

        else {

            callbackRef.current = null;

        }

        setstate(state);

    };

    react_1.useEffect(function () {

        if (callbackRef.current) {

            callbackRef.current(state);

            callbackRef.current = null;

        }

    }, [state]);

    return [state, setStateCallback];

}

exports.default = useStateCallback;

