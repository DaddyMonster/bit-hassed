import styled from "styled-components";
import { Tab } from "@material-ui/core";
export const TopNavTabItems = styled(Tab).attrs({
  classes: {
    selected: "selected",
  },
})(({ theme }) => ({
  fontFamily: theme.typography.fontFam.menu,
  fontSize: "1rem",
  height: "100%",
  [theme.breakpoints.up("md")]: {
    width: 90,
  },
  color: theme.palette.secondary.main,
  "& .selected": {
    color: theme.palette.primary.main,
    transform: "scale(1.1)",
    transition: "200ms ease",
  },
}));
