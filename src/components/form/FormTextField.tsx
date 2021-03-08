import { TextFieldProps } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { useField } from "formik";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { JustTypo } from "../atoms";
import { JustTextField } from "../atoms/input";

interface Props {
  name: string;
  textFieldProps?: TextFieldProps;
  label: string;
  placeholder?: string;
  removeErrorIf?: string;
}

export const FormTextField = ({
  name,
  textFieldProps,
  label,
  placeholder,
  removeErrorIf,
}: Props) => {
  const [{ onChange, ...props }, meta, { setError }] = useField(name);

  const removeErrRef = useRef(false);
  useEffect(() => {
    if (meta.error === removeErrorIf) {
      removeErrRef.current = true;
    }
  }, [props.value, removeErrorIf, meta.error]);

  const handleChange = (e: React.ChangeEvent) => {
    if (removeErrRef.current) {
      setError(undefined);
    }
    onChange(e);
  };

  return (
    <Root>
      <JustTextField
        {...textFieldProps}
        {...props}
        onChange={handleChange}
        error={Boolean(meta.error)}
        label={label}
        placeholder={placeholder}
      />
      <ErrorWrap>
        {meta.touched && meta.error && (
          <JustTypo sz="xs" ff="pretty" col={red[400]}>
            {meta.error}
          </JustTypo>
        )}
      </ErrorWrap>
    </Root>
  );
};

const Root = styled.div(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(0, 1.5),
  marginBottom: theme.spacing(2.2),
  position: "relative",
}));

const ErrorWrap = styled.div(({ theme }) => ({
  position: "absolute",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  bottom: -15,
  left: 0,
}));
