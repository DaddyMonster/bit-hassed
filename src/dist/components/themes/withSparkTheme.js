import { jsx as _jsx } from "react/jsx-runtime";

import SparkTheme from "./SparkTheme";

export function withSparkTheme(Component) {

    return function (props) {

        return (_jsx(SparkTheme, { children: _jsx(Component, Object.assign({}, props), void 0) }, void 0));

    };

}

