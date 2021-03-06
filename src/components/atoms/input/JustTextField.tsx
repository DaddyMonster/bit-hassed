import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const JustTextField = styled(TextField)(({ theme }) => ({
  fontFamily: theme.typography.fontFam.guide,
  width: "100%",
  "& .MuiInputBase-root": {
    height: 50,
  },
  "& .MuiOutlinedInput-input .MuiInputBase-input": {
    padding: theme.spacing(0, 2),
  },

  "& .MuiFormHelperText-root": {
    position: "absolute",
    bottom: -20,
  },
}));
