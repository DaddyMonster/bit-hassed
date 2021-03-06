import styled from "styled-components";
import { LEFT_SIDE_FOOTER_HEIGHT } from "../../../constants/layout-constants";

export const SideFooter = styled.div(({ theme }) => ({
  width: "100%",
  height: LEFT_SIDE_FOOTER_HEIGHT,
  padding: theme.spacing(0.5, 1),
}));
