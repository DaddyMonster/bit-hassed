import { ComponentType } from "react";
import {SparkTheme} from "./SparkTheme";

export function withSparkTheme<T>(Component: ComponentType<T>) {
  return function (props: T) {
    return (
      <SparkTheme>
        <Component {...props} />
      </SparkTheme>
    );
  };
}

