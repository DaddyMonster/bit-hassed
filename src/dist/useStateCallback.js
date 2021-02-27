import { useState, useEffect, useRef } from "react";

function useStateCallback(initialState) {

    const [state, setstate] = useState(initialState);

    const callbackRef = useRef(null);

    const setStateCallback = (state, callback) => {

        if (callback) {

            callbackRef.current = callback;

        }

        else {

            callbackRef.current = null;

        }

        setstate(state);

    };

    useEffect(() => {

        if (callbackRef.current) {

            callbackRef.current(state);

            callbackRef.current = null;

        }

    }, [state]);

    return [state, setStateCallback];

}

export default useStateCallback;

