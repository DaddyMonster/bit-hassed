import styled from "styled-components";
import { ColorOptionUnion } from "../../../styles/theme/palette.override";

export interface IconWrapProps {
  sz?: string | number;
  colUni?: ColorOptionUnion;
  col?: string;
}

export const IconWrap = styled.span<IconWrapProps>(
  ({ theme, sz = "1.5rem", colUni, col }) => ({
    fontSize: sz,
    color: col ? col : theme.palette[colUni ?? "primary"].main,
  })
);
